import Html exposing (..)
import Html.App exposing (program)
import Platform.Cmd exposing (Cmd)
import Platform.Sub exposing (Sub)
import String

import Random.Pcg exposing (step, initialSeed2)
import Markov exposing (walk)

import DeathGripsum exposing (lyricMarkov)


-- MODEL

type alias Model = {}


-- UPDATE

type Msg = Reset


updateModel : Msg -> Model -> Model
updateModel msg model =
    case msg of
      Reset ->
          model


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    Reset ->
        ( updateModel msg model
        , Platform.Cmd.none
        )


-- VIEW

view : Model -> Html Msg
view model =
    let
        (newLyric, newSeed) = step (walk lyricMarkov 15) (initialSeed2 585 2362)
    in
        div [ ] [ text <| String.join " " newLyric ]


-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Platform.Sub.none


-- INIT


init : (Model, Cmd Msg)
init =
    ( {}
    , Platform.Cmd.none
    )


-- MAIN

main =
  program
      { init = init
      , view = view
      , subscriptions = subscriptions
      , update = update }
