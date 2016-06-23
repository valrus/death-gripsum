port module Main exposing (main)

import Html exposing (..)
import Html.Attributes exposing (class, style)
import Html.App exposing (programWithFlags)
import Html.Events exposing (onClick)
import Maybe
import Platform.Cmd exposing (Cmd)
import Platform.Sub exposing (Sub)
import String

import Random.Pcg exposing (Seed, step, initialSeed2)
import Markov exposing (StateMachine, walk, firstState, nextState)

import DeathGripsum exposing (lyricMarkov)


-- MODEL

type alias Model =
    { seed : Seed
    , markov : StateMachine String
    , lyric : List String
    }


-- UPDATE

type Msg = Generate Int


generateLine : List String -> Seed -> StateMachine String -> (Seed, List String)
generateLine past seed markov =
    let
        (nextWord, nextSeed) =
            case (List.head past) of
                Nothing ->
                    step (firstState markov) seed

                Just lastWord ->
                    step (nextState markov lastWord) seed
    in
        case nextWord of
            Nothing ->
                (nextSeed, List.reverse past)

            -- Break at comma if we already have 12 words
            Just newWord ->
                if (newWord == ",") then
                    if (List.length past) > 12 then
                        (nextSeed, List.reverse past)
                    else
                        if (List.length past) == 0 then
                            -- skip leading comma
                            generateLine past nextSeed markov
                        else
                            generateLine (newWord :: past) nextSeed markov
                else
                    generateLine (newWord :: past) nextSeed markov


addAppropriateSpace : String -> String
addAppropriateSpace s =
    case s of
        "," ->
            ","

        "?" ->
            "?"

        _ ->
            String.cons ' ' s


joinTokens : List String -> String
joinTokens =
    String.trim << String.join "" << List.map addAppropriateSpace


generate : Int -> Seed -> StateMachine String -> (Seed, List String)
generate n seed markov =
    case n of
        0 ->
            (seed, [])

        num ->
            let
                (newSeed, nextLine) = generateLine [] seed markov
                (finalSeed, restOfLines) = generate (n - 1) newSeed markov
            in
                ( finalSeed
                , List.reverse <| (joinTokens nextLine) :: restOfLines
                )


updateModel : Msg -> Model -> Model
updateModel msg model =
    case msg of
      Generate num ->
          let
              (newSeed, newLyric) = generate num model.seed model.markov
          in
              { model
              | lyric = newLyric
              , seed = newSeed
              }


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    ( updateModel msg model
    , Platform.Cmd.none
    )


-- VIEW


(=>) : String -> String -> (String, String)
(=>) =
    (,)


lyricLine : String -> Html Msg
lyricLine line =
    p
      [ ]
      [ text line ]


view : Model -> Html Msg
view model =
    div
        [ class "main"
        , style
              [ "background-color" => "black"
              , "color" => "white"
              , "width" => "100%"
              , "height" => "100%"
              , "margin" => "0"
              , "padding" => "2em"
              , "font-family" => "Courier New, monospace"
              , "text-align" => "center"
              ]
        ]
        ( [ h1
            [ ]
            [ text "DEATH GRIPSUM" ]
          , button [ onClick <| Generate 20 ] [ text "Generate" ] ]
          ++ List.map lyricLine model.lyric
        )


-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Platform.Sub.none


-- INIT


init : StateMachine String -> Flags -> (Model, Cmd Msg)
init sm flags =
    let
        (seed, initialLyric) = generate 20 ((uncurry initialSeed2) flags.randomSeed) sm
    in
        ( { seed = seed
          , markov = sm
          , lyric = initialLyric
          }
        , Platform.Cmd.none
        )


-- PORTS


port randomSeed : ((Int, Int) -> msg) -> Sub msg


-- MAIN


type alias Flags =
  { randomSeed : (Int, Int) }


main =
  programWithFlags
      { init = init lyricMarkov
      , view = view
      , subscriptions = subscriptions
      , update = update }
