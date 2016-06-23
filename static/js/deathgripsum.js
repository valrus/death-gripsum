
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(rootX, rootY)
{
	var stack = [{ x: rootX, y: rootY }];
	while (stack.length > 0)
	{
		var front = stack.pop();
		var x = front.x;
		var y = front.y;
		if (x === y)
		{
			continue;
		}
		if (typeof x === 'object')
		{
			var c = 0;
			for (var key in x)
			{
				++c;
				if (!(key in y))
				{
					return false;
				}
				if (key === 'ctor')
				{
					continue;
				}
				stack.push({ x: x[key], y: y[key] });
			}
			if ('ctor' in x)
			{
				stack.push({ x: x.ctor, y: y.ctor});
			}
			if (c !== Object.keys(y).length)
			{
				return false;
			}
		}
		else if (typeof x === 'function')
		{
			throw new Error('Equality error: general function equality is ' +
							'undecidable, and therefore, unsupported');
		}
		else
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	var ord;
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}
	else if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b
			? EQ
			: a < b
				? LT
				: GT;
	}
	else if (x.ctor === '::' || x.ctor === '[]')
	{
		while (true)
		{
			if (x.ctor === '[]' && y.ctor === '[]')
			{
				return EQ;
			}
			if (x.ctor !== y.ctor)
			{
				return x.ctor === '[]' ? LT : GT;
			}
			ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
	}
	else if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}
	else
	{
		throw new Error('Comparison error: comparison is only defined on ints, ' +
						'floats, times, chars, strings, lists of comparable values, ' +
						'and tuples of comparable values.');
	}
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};
	for (var key in oldRecord)
	{
		var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
		newRecord[key] = value;
	}
	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		var name = v.func ? v.func.name : v.name;
		return '<function' + (name === '' ? '' : ':') + name + '>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin')
		{
			var name, list;
			if (v.ctor === 'Set_elm_builtin')
			{
				name = 'Set';
				list = A2(
					_elm_lang$core$List$map,
					function(x) {return x._0; },
					_elm_lang$core$Dict$toList(v._0)
				);
			}
			else
			{
				name = 'Dict';
				list = _elm_lang$core$Dict$toList(v);
			}
			return name + '.fromList ' + toString(list);
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A2(f, _p1._0, _p1._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$snd = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _elm_lang$core$Basics$fst = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _elm_lang$core$Basics$always = F2(
	function (a, _p6) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$Never = function (a) {
	return {ctor: 'Never', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p1 = maybes;
		if (_p1.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p3 = _p1._0;
			var _p2 = _p3;
			if (_p2.ctor === 'Nothing') {
				var _v3 = _p1._1;
				maybes = _v3;
				continue oneOf;
			} else {
				return _p3;
			}
		}
	}
};
var _elm_lang$core$Maybe$andThen = F2(
	function (maybeValue, callback) {
		var _p4 = maybeValue;
		if (_p4.ctor === 'Just') {
			return callback(_p4._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p5 = maybe;
		if (_p5.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p5._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p6 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p6.ctor === '_Tuple2') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p6._0._0, _p6._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p7 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p7.ctor === '_Tuple3') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === 'Just')) && (_p7._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p7._0._0, _p7._1._0, _p7._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p8 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p8.ctor === '_Tuple4') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) && (_p8._2.ctor === 'Just')) && (_p8._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p8._0._0, _p8._1._0, _p8._2._0, _p8._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p9 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p9.ctor === '_Tuple5') && (_p9._0.ctor === 'Just')) && (_p9._1.ctor === 'Just')) && (_p9._2.ctor === 'Just')) && (_p9._3.ctor === 'Just')) && (_p9._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p9._0._0, _p9._1._0, _p9._2._0, _p9._3._0, _p9._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}


function range(lo, hi)
{
	var list = Nil;
	if (lo <= hi)
	{
		do
		{
			list = Cons(hi, list);
		}
		while (hi-- > lo);
	}
	return list;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,
	range: range,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return _elm_lang$core$Basics$not(
			A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return _elm_lang$core$Basics$not(
						isOkay(_p2));
				},
				list));
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			_elm_lang$core$Native_List.range(
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						_elm_lang$core$List_ops['::'],
						f(x),
						acc);
				}),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (x, xs$) {
				return pred(x) ? A2(_elm_lang$core$List_ops['::'], x, xs$) : xs$;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return A2(_elm_lang$core$List_ops['::'], _p10._0, xs);
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			_elm_lang$core$Native_List.fromArray(
				[]),
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$List_ops['::'], x, y);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, x, _p11._0),
						accAcc);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				_elm_lang$core$Native_List.fromArray(
					[b]),
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		_elm_lang$core$Native_List.fromArray(
			[]),
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: A2(_elm_lang$core$List_ops['::'], x, _p16),
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: A2(_elm_lang$core$List_ops['::'], x, _p15)
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], _p19._0, _p20._0),
				_1: A2(_elm_lang$core$List_ops['::'], _p19._1, _p20._1)
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Native_List.fromArray(
				[]),
			_1: _elm_lang$core$Native_List.fromArray(
				[])
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var step = F2(
				function (x, rest) {
					return A2(
						_elm_lang$core$List_ops['::'],
						sep,
						A2(_elm_lang$core$List_ops['::'], x, rest));
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_p21._1);
			return A2(_elm_lang$core$List_ops['::'], _p21._0, spersed);
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p22 = list;
			if (_p22.ctor === '[]') {
				return list;
			} else {
				return A2(
					_elm_lang$core$List_ops['::'],
					_p22._0,
					A2(_elm_lang$core$List$take, n - 1, _p22._1));
			}
		}
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v23 = A2(_elm_lang$core$List_ops['::'], value, result),
					_v24 = n - 1,
					_v25 = value;
				result = _v23;
				n = _v24;
				value = _v25;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			_elm_lang$core$Native_List.fromArray(
				[]),
			n,
			value);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (result, callback) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$formatError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function addPublicModule(object, name, main)
{
	var init = main ? makeEmbed(name, main) : mainIsUndefined(name);

	object['worker'] = function worker(flags)
	{
		return init(undefined, flags, false);
	}

	object['embed'] = function embed(domNode, flags)
	{
		return init(domNode, flags, true);
	}

	object['fullscreen'] = function fullscreen(flags)
	{
		return init(document.body, flags, true);
	};
}


// PROGRAM FAIL

function mainIsUndefined(name)
{
	return function(domNode)
	{
		var message = 'Cannot initialize module `' + name +
			'` because it has no `main` value!\nWhat should I show on screen?';
		domNode.innerHTML = errorHtml(message);
		throw new Error(message);
	};
}

function errorHtml(message)
{
	return '<div style="padding-left:1em;">'
		+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
		+ '<pre style="padding-left:1em;">' + message + '</pre>'
		+ '</div>';
}


// PROGRAM SUCCESS

function makeEmbed(moduleName, main)
{
	return function embed(rootDomNode, flags, withRenderer)
	{
		try
		{
			var program = mainToProgram(moduleName, main);
			if (!withRenderer)
			{
				program.renderer = dummyRenderer;
			}
			return makeEmbedHelp(moduleName, program, rootDomNode, flags);
		}
		catch (e)
		{
			rootDomNode.innerHTML = errorHtml(e.message);
			throw e;
		}
	};
}

function dummyRenderer()
{
	return { update: function() {} };
}


// MAIN TO PROGRAM

function mainToProgram(moduleName, wrappedMain)
{
	var main = wrappedMain.main;

	if (typeof main.init === 'undefined')
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
			init: function() { return noChange; },
			view: function() { return main; },
			update: F2(function() { return noChange; }),
			subscriptions: function () { return emptyBag; }
		});
	}

	var flags = wrappedMain.flags;
	var init = flags
		? initWithFlags(moduleName, main.init, flags)
		: initWithoutFlags(moduleName, main.init);

	return _elm_lang$virtual_dom$VirtualDom$programWithFlags({
		init: init,
		view: main.view,
		update: main.update,
		subscriptions: main.subscriptions,
	});
}

function initWithoutFlags(moduleName, realInit)
{
	return function init(flags)
	{
		if (typeof flags !== 'undefined')
		{
			throw new Error(
				'You are giving module `' + moduleName + '` an argument in JavaScript.\n'
				+ 'This module does not take arguments though! You probably need to change the\n'
				+ 'initialization code to something like `Elm.' + moduleName + '.fullscreen()`'
			);
		}
		return realInit();
	};
}

function initWithFlags(moduleName, realInit, flagDecoder)
{
	return function init(flags)
	{
		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Err')
		{
			throw new Error(
				'You are trying to initialize module `' + moduleName + '` with an unexpected argument.\n'
				+ 'When trying to convert it to a usable Elm value, I run into this problem:\n\n'
				+ result._0
			);
		}
		return realInit(result._0);
	};
}


// SETUP RUNTIME SYSTEM

function makeEmbedHelp(moduleName, program, rootDomNode, flags)
{
	var init = program.init;
	var update = program.update;
	var subscriptions = program.subscriptions;
	var view = program.view;
	var makeRenderer = program.renderer;

	// ambient state
	var managers = {};
	var renderer;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var results = init(flags);
		var model = results._0;
		renderer = makeRenderer(rootDomNode, enqueue, view(model));
		var cmds = results._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			renderer.update(view(model));
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, handleMsg, loop);
	}

	var task = A2(andThen, init, loop);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		while (taggers)
		{
			x = taggers.tagger(x);
			taggers = taggers.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			var value = converter(cmdList._0);
			for (var i = 0; i < subs.length; i++)
			{
				subs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function send(value)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, value);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		var value = result._0;
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	mainToProgram: mainToProgram,
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,
	addPublicModule: addPublicModule,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(task, callback)
{
	return {
		ctor: '_Task_andThen',
		task: task,
		callback: callback
	};
}

function onError(task, callback)
{
	return {
		ctor: '_Task_onError',
		task: task,
		callback: callback
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		numSteps = step(numSteps, process);
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	_elm_lang$core$Native_List.fromArray(
		[]));
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;
	var i = 0;
	var is = [];
	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}
	return _elm_lang$core$Native_List.fromArray(is);
}

function toInt(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
		start = 1;
	}
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int" );
		}
	}
	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function toFloat(s)
{
	var len = s.length;
	if (len === 0)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	var start = 0;
	if (s[0] === '-')
	{
		if (len === 1)
		{
			return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
		}
		start = 1;
	}
	var dotCount = 0;
	for (var i = start; i < len; ++i)
	{
		var c = s[i];
		if ('0' <= c && c <= '9')
		{
			continue;
		}
		if (c === '.')
		{
			dotCount += 1;
			if (dotCount <= 1)
			{
				continue;
			}
		}
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float" );
	}
	return _elm_lang$core$Result$Ok(parseFloat(s));
}

function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(_elm_lang$core$List_ops['::'], key, keyList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(_elm_lang$core$List_ops['::'], value, valueList);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					_elm_lang$core$List_ops['::'],
					{ctor: '_Tuple2', _0: key, _1: value},
					list);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]),
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				var _p3 = _p2;
				var _p9 = _p3._1;
				var _p8 = _p3._0;
				var _p4 = _p8;
				if (_p4.ctor === '[]') {
					return {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					};
				} else {
					var _p7 = _p4._1;
					var _p6 = _p4._0._1;
					var _p5 = _p4._0._0;
					return (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) ? {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A3(leftStep, _p5, _p6, _p9)
					} : ((_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) ? {
						ctor: '_Tuple2',
						_0: _p8,
						_1: A3(rightStep, rKey, rValue, _p9)
					} : {
						ctor: '_Tuple2',
						_0: _p7,
						_1: A4(bothStep, _p5, _p6, rValue, _p9)
					});
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				_elm_lang$core$Native_List.fromArray(
					[
						'Internal red-black tree invariant violated, expected ',
						msg,
						' and got ',
						_elm_lang$core$Basics$toString(c),
						'/',
						lgot,
						'/',
						rgot,
						'\nPlease report this bug to <https://github.com/elm-lang/core/issues>'
					])));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v11_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v11_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v11_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v13 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v14 = _p14._3;
				n = _v13;
				dict = _v14;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v17 = targetKey,
							_v18 = _p15._3;
						targetKey = _v17;
						dict = _v18;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v19 = targetKey,
							_v20 = _p15._4;
						targetKey = _v19;
						dict = _v20;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v23 = _p18._1,
					_v24 = _p18._2,
					_v25 = _p18._4;
				k = _v23;
				v = _v24;
				r = _v25;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v33_6:
	do {
		_v33_5:
		do {
			_v33_4:
			do {
				_v33_3:
				do {
					_v33_2:
					do {
						_v33_1:
						do {
							_v33_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v33_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v33_3;
																		} else {
																			break _v33_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v33_4;
																	} else {
																		break _v33_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v33_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v33_1;
																} else {
																	break _v33_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v33_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v33_5;
																	} else {
																		break _v33_6;
																	}
																}
															} else {
																break _v33_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v33_5;
															} else {
																break _v33_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v33_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v33_3;
																} else {
																	break _v33_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v33_4;
															} else {
																break _v33_6;
															}
														default:
															break _v33_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v33_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v33_1;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v33_5;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v33_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v33_3;
														} else {
															break _v33_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v33_4;
													} else {
														break _v33_6;
													}
												default:
													break _v33_6;
											}
										} else {
											break _v33_6;
										}
									}
								} else {
									break _v33_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (c, l, r) {
		var _p29 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = c;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: c, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: c, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var l$ = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, c, k, v, l$, r);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$elm_list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$elm_list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$elm_list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$elm_list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$elm_list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs$ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? A2(
			_elm_lang$core$List_ops['::'],
			group,
			A3(_elm_community$elm_list_extra$List_Extra$groupsOfWithStep, size, step, xs$)) : _elm_lang$core$Native_List.fromArray(
			[]);
	});
var _elm_community$elm_list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$elm_list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$elm_list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$elm_list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$elm_list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$elm_list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$elm_list_extra$List_Extra$isPrefixOf = function (prefix) {
	return function (_p0) {
		return A2(
			_elm_lang$core$List$all,
			_elm_lang$core$Basics$identity,
			A3(
				_elm_lang$core$List$map2,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					}),
				prefix,
				_p0));
	};
};
var _elm_community$elm_list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$elm_list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{
				ctor: '_Tuple3',
				_0: _elm_lang$core$Native_List.fromArray(
					[]),
				_1: _p4,
				_2: _p5
			},
			A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: A2(_elm_lang$core$List_ops['::'], _p4, _p3._0),
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$elm_list_extra$List_Extra$selectSplit(_p5)));
	}
};
var _elm_community$elm_list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return A2(
			_elm_lang$core$List_ops['::'],
			{ctor: '_Tuple2', _0: _p9, _1: _p10},
			A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: A2(_elm_lang$core$List_ops['::'], _p9, _p8._1)
					};
				},
				_elm_community$elm_list_extra$List_Extra$select(_p10)));
	}
};
var _elm_community$elm_list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], e, _p12),
				A2(_elm_lang$core$List_ops['::'], _p12, _p11._1));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$elm_list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$elm_list_extra$List_Extra$tailsHelp,
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$elm_list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$elm_list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$elm_list_extra$List_Extra$tails(xs));
	});
var _elm_community$elm_list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return A2(
				_elm_lang$core$List_ops['::'],
				_elm_lang$core$Native_List.fromArray(
					[]),
				A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(e),
					acc));
		}),
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			[])
		]));
var _elm_community$elm_list_extra$List_Extra$groupByTransitive = F2(
	function (cmp, xs$) {
		var _p13 = xs$;
		if (_p13.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p13._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[
						_elm_lang$core$Native_List.fromArray(
						[_p13._0])
					]);
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$elm_list_extra$List_Extra$groupByTransitive, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p15, _p14._0),
						_p14._1) : A2(
						_elm_lang$core$List_ops['::'],
						_elm_lang$core$Native_List.fromArray(
							[_p15]),
						_p14);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$elm_list_extra$List_Extra$dropWhileEnd = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? _elm_lang$core$Native_List.fromArray(
					[]) : A2(_elm_lang$core$List_ops['::'], x, xs);
			}),
		_elm_lang$core$Native_List.fromArray(
			[]));
};
var _elm_community$elm_list_extra$List_Extra$takeWhileEnd = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$List_ops['::'], x, _p19),
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Basics$fst(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_List.fromArray(
						[]),
					_1: true
				},
				_p20));
	};
};
var _elm_community$elm_list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$elm_list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p21 = f(seed);
		if (_p21.ctor === 'Nothing') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A2(
				_elm_lang$core$List_ops['::'],
				_p21._0._0,
				A2(_elm_community$elm_list_extra$List_Extra$unfoldr, f, _p21._0._1));
		}
	});
var _elm_community$elm_list_extra$List_Extra$scanr1 = F2(
	function (f, xs$) {
		var _p22 = xs$;
		if (_p22.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p22._1.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[_p22._0]);
			} else {
				var _p23 = A2(_elm_community$elm_list_extra$List_Extra$scanr1, f, _p22._1);
				if (_p23.ctor === '::') {
					return A2(
						_elm_lang$core$List_ops['::'],
						A2(f, _p22._0, _p23._0),
						_p23);
				} else {
					return _elm_lang$core$Native_List.fromArray(
						[]);
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$scanr = F3(
	function (f, acc, xs$) {
		var _p24 = xs$;
		if (_p24.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[acc]);
		} else {
			var _p25 = A3(_elm_community$elm_list_extra$List_Extra$scanr, f, acc, _p24._1);
			if (_p25.ctor === '::') {
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(f, _p24._0, _p25._0),
					_p25);
			} else {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$scanl1 = F2(
	function (f, xs$) {
		var _p26 = xs$;
		if (_p26.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p26._0, _p26._1);
		}
	});
var _elm_community$elm_list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p27 = m;
						if (_p27.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p27._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$elm_list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p28 = m;
						if (_p28.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p28._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$elm_list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p29 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v17_1:
			do {
				if (_p29._0.ctor === '::') {
					if (_p29._1.ctor === '::') {
						var _v18 = _p29._0._1,
							_v19 = _p29._1._1,
							_v20 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							_elm_lang$core$Native_List.fromArray(
								[_p29._0._0, _p29._1._0]));
						l1 = _v18;
						l2 = _v19;
						acc = _v20;
						continue interweaveHelp;
					} else {
						break _v17_1;
					}
				} else {
					if (_p29._1.ctor === '[]') {
						break _v17_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p29._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p29._0);
		}
	});
var _elm_community$elm_list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$elm_list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			_elm_lang$core$Native_List.fromArray(
				[]));
	});
var _elm_community$elm_list_extra$List_Extra$permutations = function (xs$) {
	var _p30 = xs$;
	if (_p30.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$core$Native_List.fromArray(
				[])
			]);
	} else {
		var f = function (_p31) {
			var _p32 = _p31;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$List_ops['::'], x, y);
					})(_p32._0),
				_elm_community$elm_list_extra$List_Extra$permutations(_p32._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$elm_list_extra$List_Extra$select(_p30));
	}
};
var _elm_community$elm_list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$elm_list_extra$List_Extra$permutations(xs));
	});
var _elm_community$elm_list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p33 = xs;
	if (_p33.ctor === '[]') {
		return _elm_lang$core$Native_List.fromArray(
			[]);
	} else {
		var _p34 = _p33._0;
		var f = F2(
			function (ys, r) {
				return A2(
					_elm_lang$core$List_ops['::'],
					ys,
					A2(
						_elm_lang$core$List_ops['::'],
						A2(_elm_lang$core$List_ops['::'], _p34, ys),
						r));
			});
		return A2(
			_elm_lang$core$List_ops['::'],
			_elm_lang$core$Native_List.fromArray(
				[_p34]),
			A3(
				_elm_lang$core$List$foldr,
				f,
				_elm_lang$core$Native_List.fromArray(
					[]),
				_elm_community$elm_list_extra$List_Extra$subsequencesNonEmpty(_p33._1)));
	}
};
var _elm_community$elm_list_extra$List_Extra$subsequences = function (xs) {
	return A2(
		_elm_lang$core$List_ops['::'],
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_community$elm_list_extra$List_Extra$subsequencesNonEmpty(xs));
};
var _elm_community$elm_list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$elm_list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$elm_list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p35 = ll;
		if (_p35.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			if (_p35._0.ctor === '[]') {
				var _v25 = _p35._1;
				ll = _v25;
				continue transpose;
			} else {
				var _p36 = _p35._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p36);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p36);
				return A2(
					_elm_lang$core$List_ops['::'],
					A2(_elm_lang$core$List_ops['::'], _p35._0._0, heads),
					_elm_community$elm_list_extra$List_Extra$transpose(
						A2(_elm_lang$core$List_ops['::'], _p35._0._1, tails)));
			}
		}
	}
};
var _elm_community$elm_list_extra$List_Extra$intercalate = function (xs) {
	return function (_p37) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p37));
	};
};
var _elm_community$elm_list_extra$List_Extra$removeWhen = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p38) {
				return _elm_lang$core$Basics$not(
					pred(_p38));
			},
			list);
	});
var _elm_community$elm_list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p39 = tail;
			if (_p39.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p39._0);
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$singleton = function (x) {
	return _elm_lang$core$Native_List.fromArray(
		[x]);
};
var _elm_community$elm_list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p40 = tail;
			if (_p40.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						A2(_elm_lang$core$List_ops['::'], value, _p40._0)));
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$deleteIf = F2(
	function (predicate, items) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p41) {
				return _elm_lang$core$Basics$not(
					predicate(_p41));
			},
			items);
	});
var _elm_community$elm_list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$elm_list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$elm_list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$elm_list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$elm_list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$elm_list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$elm_list_extra$List_Extra$findIndices = function (p) {
	return function (_p42) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$fst,
			A2(
				_elm_lang$core$List$filter,
				function (_p43) {
					var _p44 = _p43;
					return p(_p44._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p42)));
	};
};
var _elm_community$elm_list_extra$List_Extra$findIndex = function (p) {
	return function (_p45) {
		return _elm_lang$core$List$head(
			A2(_elm_community$elm_list_extra$List_Extra$findIndices, p, _p45));
	};
};
var _elm_community$elm_list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$elm_list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$elm_list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$elm_list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$elm_list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p46 = list;
			if (_p46.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p47 = _p46._0;
				if (predicate(_p47)) {
					return _elm_lang$core$Maybe$Just(_p47);
				} else {
					var _v30 = predicate,
						_v31 = _p46._1;
					predicate = _v30;
					list = _v31;
					continue find;
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$notMember = function (x) {
	return function (_p48) {
		return _elm_lang$core$Basics$not(
			A2(_elm_lang$core$List$member, x, _p48));
	};
};
var _elm_community$elm_list_extra$List_Extra$andThen = _elm_lang$core$Basics$flip(_elm_lang$core$List$concatMap);
var _elm_community$elm_list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$elm_list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return _elm_lang$core$Native_List.fromArray(
							[
								A2(f, a, b)
							]);
					});
			});
	});
var _elm_community$elm_list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$elm_list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$elm_list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return _elm_lang$core$Native_List.fromArray(
									[
										A3(f, a, b, c)
									]);
							});
					});
			});
	});
var _elm_community$elm_list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$elm_list_extra$List_Extra$andThen,
			la,
			function (a) {
				return A2(
					_elm_community$elm_list_extra$List_Extra$andThen,
					lb,
					function (b) {
						return A2(
							_elm_community$elm_list_extra$List_Extra$andThen,
							lc,
							function (c) {
								return A2(
									_elm_community$elm_list_extra$List_Extra$andThen,
									ld,
									function (d) {
										return _elm_lang$core$Native_List.fromArray(
											[
												A4(f, a, b, c, d)
											]);
									});
							});
					});
			});
	});
var _elm_community$elm_list_extra$List_Extra$andMap = F2(
	function (fl, l) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$elm_list_extra$List_Extra$dropDuplicatesHelp = F2(
	function (existing, remaining) {
		dropDuplicatesHelp:
		while (true) {
			var _p49 = remaining;
			if (_p49.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				var _p51 = _p49._1;
				var _p50 = _p49._0;
				if (A2(_elm_lang$core$Set$member, _p50, existing)) {
					var _v33 = existing,
						_v34 = _p51;
					existing = _v33;
					remaining = _v34;
					continue dropDuplicatesHelp;
				} else {
					return A2(
						_elm_lang$core$List_ops['::'],
						_p50,
						A2(
							_elm_community$elm_list_extra$List_Extra$dropDuplicatesHelp,
							A2(_elm_lang$core$Set$insert, _p50, existing),
							_p51));
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$dropDuplicates = function (list) {
	return A2(_elm_community$elm_list_extra$List_Extra$dropDuplicatesHelp, _elm_lang$core$Set$empty, list);
};
var _elm_community$elm_list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p52 = list;
			if (_p52.ctor === '[]') {
				return _elm_lang$core$Native_List.fromArray(
					[]);
			} else {
				if (predicate(_p52._0)) {
					var _v36 = predicate,
						_v37 = _p52._1;
					predicate = _v36;
					list = _v37;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$elm_list_extra$List_Extra$takeWhile = F2(
	function (predicate, list) {
		var _p53 = list;
		if (_p53.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p54 = _p53._0;
			return predicate(_p54) ? A2(
				_elm_lang$core$List_ops['::'],
				_p54,
				A2(_elm_community$elm_list_extra$List_Extra$takeWhile, predicate, _p53._1)) : _elm_lang$core$Native_List.fromArray(
				[]);
		}
	});
var _elm_community$elm_list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$elm_list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$elm_list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$elm_list_extra$List_Extra$break = function (p) {
	return _elm_community$elm_list_extra$List_Extra$span(
		function (_p55) {
			return _elm_lang$core$Basics$not(
				p(_p55));
		});
};
var _elm_community$elm_list_extra$List_Extra$groupBy = F2(
	function (eq, xs$) {
		var _p56 = xs$;
		if (_p56.ctor === '[]') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			var _p58 = _p56._0;
			var _p57 = A2(
				_elm_community$elm_list_extra$List_Extra$span,
				eq(_p58),
				_p56._1);
			var ys = _p57._0;
			var zs = _p57._1;
			return A2(
				_elm_lang$core$List_ops['::'],
				A2(_elm_lang$core$List_ops['::'], _p58, ys),
				A2(_elm_community$elm_list_extra$List_Extra$groupBy, eq, zs));
		}
	});
var _elm_community$elm_list_extra$List_Extra$group = _elm_community$elm_list_extra$List_Extra$groupBy(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$elm_list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p59) {
				var _p60 = _p59;
				var _p61 = _p60._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p61) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p60._0, _1: _p61};
			});
		var _p62 = ls;
		if (_p62.ctor === '::') {
			if (_p62._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p62._0);
			} else {
				var _p63 = _p62._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p63,
								_1: f(_p63)
							},
							_p62._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$elm_list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p64) {
				var _p65 = _p64;
				var _p66 = _p65._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p66) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p65._0, _1: _p66};
			});
		var _p67 = ls;
		if (_p67.ctor === '::') {
			if (_p67._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p67._0);
			} else {
				var _p68 = _p67._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$fst(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p68,
								_1: f(_p68)
							},
							_p67._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$elm_list_extra$List_Extra$uncons = function (xs) {
	var _p69 = xs;
	if (_p69.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p69._0, _1: _p69._1});
	}
};
var _elm_community$elm_list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p70 = f(x);
		if (_p70.ctor === 'Just') {
			return A2(
				_elm_lang$core$List_ops['::'],
				x,
				A2(_elm_community$elm_list_extra$List_Extra$iterate, f, _p70._0));
		} else {
			return _elm_lang$core$Native_List.fromArray(
				[x]);
		}
	});
var _elm_community$elm_list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$elm_list_extra$List_Extra_ops = _elm_community$elm_list_extra$List_Extra_ops || {};
_elm_community$elm_list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$elm_list_extra$List_Extra$getAt);
var _elm_community$elm_list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p71) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p71));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (_p72) {
			return A2(
				F2(
					function (x, y) {
						return function (_p73) {
							return x(
								y(_p73));
						};
					}),
				_elm_lang$core$Maybe$Just,
				A2(
					maybe,
					_elm_lang$core$Native_List.fromArray(
						[]),
					F2(
						function (x, y) {
							return A2(_elm_lang$core$List_ops['::'], x, y);
						})(_p72)));
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$elm_list_extra$List_Extra$last = _elm_community$elm_list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_elm_lang$core$Native_List.range(
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeft: F2(function sll(a, offset) { return a << offset; }),
	shiftRightArithmatic: F2(function sra(a, offset) { return a >> offset; }),
	shiftRightLogical: F2(function srl(a, offset) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightLogical = _elm_lang$core$Native_Bitwise.shiftRightLogical;
var _elm_lang$core$Bitwise$shiftRight = _elm_lang$core$Native_Bitwise.shiftRightArithmatic;
var _elm_lang$core$Bitwise$shiftLeft = _elm_lang$core$Native_Bitwise.shiftLeft;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function decodeObject(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function decodeTuple(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'tuple',
		func: f,
		decoders: decoders
	};
}

function andThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function customAndThen(decoder, callback)
{
	return {
		ctor: '<decoder>',
		tag: 'customAndThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function decodeObject1(f, d1)
{
	return decodeObject(f, [d1]);
}

function decodeObject2(f, d1, d2)
{
	return decodeObject(f, [d1, d2]);
}

function decodeObject3(f, d1, d2, d3)
{
	return decodeObject(f, [d1, d2, d3]);
}

function decodeObject4(f, d1, d2, d3, d4)
{
	return decodeObject(f, [d1, d2, d3, d4]);
}

function decodeObject5(f, d1, d2, d3, d4, d5)
{
	return decodeObject(f, [d1, d2, d3, d4, d5]);
}

function decodeObject6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeObject(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODING TUPLES

function decodeTuple1(f, d1)
{
	return decodeTuple(f, [d1]);
}

function decodeTuple2(f, d1, d2)
{
	return decodeTuple(f, [d1, d2]);
}

function decodeTuple3(f, d1, d2, d3)
{
	return decodeTuple(f, [d1, d2, d3]);
}

function decodeTuple4(f, d1, d2, d3, d4)
{
	return decodeTuple(f, [d1, d2, d3, d4]);
}

function decodeTuple5(f, d1, d2, d3, d4, d5)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5]);
}

function decodeTuple6(f, d1, d2, d3, d4, d5, d6)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6]);
}

function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return decodeTuple(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

var bad = { tag: 'fail' };

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context);
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			var isNotInt =
				typeof value !== 'number'
				|| !(-2147483647 < value && value < 2147483647 && (value | 0) === value)
				|| !(isFinite(value) && !(value % 1));

			return isNotInt
				? badPrimitive('an Int', value)
				: ok(value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok')
				? result
				: badField(field, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return err('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'tuple':
			var decoders = decoder.decoders;
			var len = decoders.length;

			if ( !(value instanceof Array) || value.length !== len )
			{
				return badPrimitive('a Tuple with ' + len + ' entries', value);
			}

			var answer = decoder.func;
			for (var i = 0; i < len; i++)
			{
				var result = runHelp(decoders[i], value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'customAndThen':
			var result = runHelp(decoder.decoder, value);
			if (result.tag !== 'ok')
			{
				return result;
			}
			var realResult = decoder.callback(result.value);
			if (realResult.ctor === 'Err')
			{
				return badPrimitive('something custom', value);
			}
			return ok(realResult._0);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad;

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'map-many':
		case 'tuple':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
		case 'customAndThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),

	decodeObject1: F2(decodeObject1),
	decodeObject2: F3(decodeObject2),
	decodeObject3: F4(decodeObject3),
	decodeObject4: F5(decodeObject4),
	decodeObject5: F6(decodeObject5),
	decodeObject6: F7(decodeObject6),
	decodeObject7: F8(decodeObject7),
	decodeObject8: F9(decodeObject8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	decodeTuple1: F2(decodeTuple1),
	decodeTuple2: F3(decodeTuple2),
	decodeTuple3: F4(decodeTuple3),
	decodeTuple4: F5(decodeTuple4),
	decodeTuple5: F6(decodeTuple5),
	decodeTuple6: F7(decodeTuple6),
	decodeTuple7: F8(decodeTuple7),
	decodeTuple8: F9(decodeTuple8),

	andThen: F2(andThen),
	customAndThen: F2(customAndThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$tuple8 = _elm_lang$core$Native_Json.decodeTuple8;
var _elm_lang$core$Json_Decode$tuple7 = _elm_lang$core$Native_Json.decodeTuple7;
var _elm_lang$core$Json_Decode$tuple6 = _elm_lang$core$Native_Json.decodeTuple6;
var _elm_lang$core$Json_Decode$tuple5 = _elm_lang$core$Native_Json.decodeTuple5;
var _elm_lang$core$Json_Decode$tuple4 = _elm_lang$core$Native_Json.decodeTuple4;
var _elm_lang$core$Json_Decode$tuple3 = _elm_lang$core$Native_Json.decodeTuple3;
var _elm_lang$core$Json_Decode$tuple2 = _elm_lang$core$Native_Json.decodeTuple2;
var _elm_lang$core$Json_Decode$tuple1 = _elm_lang$core$Native_Json.decodeTuple1;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$customDecoder = _elm_lang$core$Native_Json.customAndThen;
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$object8 = _elm_lang$core$Native_Json.decodeObject8;
var _elm_lang$core$Json_Decode$object7 = _elm_lang$core$Native_Json.decodeObject7;
var _elm_lang$core$Json_Decode$object6 = _elm_lang$core$Native_Json.decodeObject6;
var _elm_lang$core$Json_Decode$object5 = _elm_lang$core$Native_Json.decodeObject5;
var _elm_lang$core$Json_Decode$object4 = _elm_lang$core$Native_Json.decodeObject4;
var _elm_lang$core$Json_Decode$object3 = _elm_lang$core$Native_Json.decodeObject3;
var _elm_lang$core$Json_Decode$object2 = _elm_lang$core$Native_Json.decodeObject2;
var _elm_lang$core$Json_Decode$object1 = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode_ops = _elm_lang$core$Json_Decode_ops || {};
_elm_lang$core$Json_Decode_ops[':='] = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, y) {
					return A2(_elm_lang$core$Json_Decode_ops[':='], x, y);
				}),
			decoder,
			fields);
	});
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.decodeObject1;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Native.Json //

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';



////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: null
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (!a.options === b.options)
	{
		if (a.stopPropagation !== b.stopPropagation || a.preventDefault !== b.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}



////////////  RENDERER  ////////////


function renderer(parent, tagger, initialVirtualNode)
{
	var eventNode = { tagger: tagger, parent: null };

	var domNode = render(initialVirtualNode, eventNode);
	parent.appendChild(domNode);

	var state = 'NO_REQUEST';
	var currentVirtualNode = initialVirtualNode;
	var nextVirtualNode = initialVirtualNode;

	function registerVirtualNode(vNode)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextVirtualNode = vNode;
	}

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/core/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var patches = diff(currentVirtualNode, nextVirtualNode);
				domNode = applyPatches(domNode, currentVirtualNode, patches, eventNode);
				currentVirtualNode = nextVirtualNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return { update: registerVirtualNode };
}


var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(cb) { setTimeout(cb, 1000 / 60); };



////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;
		
			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}
            
			var subEventRoot = {
				tagger: tagger,
				parent: eventNode
			};
			
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return document.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? document.createElementNS(vNode.namespace, vNode.tag)
				: document.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: null,
		eventNode: null
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-insert', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;
            
			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}
            
			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return redraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			domNode.elm_event_node_ref.tagger = patch.data;
			return domNode;

		case 'p-remove':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-insert':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function redraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}



////////////  PROGRAMS  ////////////


function programWithFlags(details)
{
	return {
		init: details.init,
		update: details.update,
		subscriptions: details.subscriptions,
		view: details.view,
		renderer: renderer
	};
}


return {
	node: node,
	text: text,

	custom: custom,

	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),

	programWithFlags: programWithFlags
};

}();
var _elm_lang$virtual_dom$VirtualDom$programWithFlags = _elm_lang$virtual_dom$Native_VirtualDom.programWithFlags;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main$ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$svg = _elm_lang$html$Html$node('svg');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_App$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html_App$program = function (app) {
	return _elm_lang$html$Html_App$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			app,
			{
				init: function (_p0) {
					return app.init;
				}
			}));
};
var _elm_lang$html$Html_App$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _elm_lang$html$Html_App$programWithFlags(
		{
			init: function (_p3) {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p2.model,
					_elm_lang$core$Native_List.fromArray(
						[]));
			},
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						_elm_lang$core$Native_List.fromArray(
							[]));
				}),
			view: _p2.view,
			subscriptions: function (_p4) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html_App$map = _elm_lang$virtual_dom$VirtualDom$map;

var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'charset', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type$ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$autosave = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'autosave', value);
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'maxLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'form', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'media', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'colSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'rowSpan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$fst,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Basics$snd, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode_ops[':='], 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'checked']),
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	_elm_lang$core$Native_List.fromArray(
		['target', 'value']),
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _mgold$elm_random_pcg$Random_Pcg$toJson = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$core$Json_Encode$list(
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Json_Encode$int,
			_elm_lang$core$Native_List.fromArray(
				[_p1._0._0, _p1._0._1, _p1._1._0, _p1._1._1])));
};
var _mgold$elm_random_pcg$Random_Pcg$listHelp = F4(
	function (list, n, generate, seed) {
		listHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 1) < 0) {
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$reverse(list),
					_1: seed
				};
			} else {
				var _p2 = generate(seed);
				var value = _p2._0;
				var newSeed = _p2._1;
				var _v1 = A2(_elm_lang$core$List_ops['::'], value, list),
					_v2 = n - 1,
					_v3 = generate,
					_v4 = newSeed;
				list = _v1;
				n = _v2;
				generate = _v3;
				seed = _v4;
				continue listHelp;
			}
		}
	});
var _mgold$elm_random_pcg$Random_Pcg$minInt = -2147483648;
var _mgold$elm_random_pcg$Random_Pcg$maxInt = 2147483647;
var _mgold$elm_random_pcg$Random_Pcg$bit27 = 1.34217728e8;
var _mgold$elm_random_pcg$Random_Pcg$bit53 = 9.007199254740992e15;
var _mgold$elm_random_pcg$Random_Pcg$step = F2(
	function (_p3, seed) {
		var _p4 = _p3;
		return _p4._0(seed);
	});
var _mgold$elm_random_pcg$Random_Pcg_ops = _mgold$elm_random_pcg$Random_Pcg_ops || {};
_mgold$elm_random_pcg$Random_Pcg_ops['>>>'] = _elm_lang$core$Bitwise$shiftRightLogical;
var _mgold$elm_random_pcg$Random_Pcg_ops = _mgold$elm_random_pcg$Random_Pcg_ops || {};
_mgold$elm_random_pcg$Random_Pcg_ops['<<'] = _elm_lang$core$Bitwise$shiftLeft;
var _mgold$elm_random_pcg$Random_Pcg_ops = _mgold$elm_random_pcg$Random_Pcg_ops || {};
_mgold$elm_random_pcg$Random_Pcg_ops['&'] = _elm_lang$core$Bitwise$and;
var _mgold$elm_random_pcg$Random_Pcg$peel = function (_p5) {
	var _p6 = _p5;
	var _p8 = _p6._0._1;
	var _p7 = _p6._0._0;
	var rot = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p7, 27);
	var rot2 = A2(
		_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
		A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['&'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], 0 - rot, 0),
			31),
		0);
	var xsLo = A2(
		_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
		A2(
			_elm_lang$core$Bitwise$or,
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p8, 18),
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['<<'], _p7, 14)),
		0);
	var xsLo$ = A2(
		_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
		A2(_elm_lang$core$Bitwise$xor, xsLo, _p8),
		0);
	var xsHi = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p7, 18);
	var xsHi$ = A2(
		_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
		A2(_elm_lang$core$Bitwise$xor, xsHi, _p7),
		0);
	var xorshifted = A2(
		_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
		A2(
			_elm_lang$core$Bitwise$or,
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], xsLo$, 27),
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['<<'], xsHi$, 5)),
		0);
	return A2(
		_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
		A2(
			_elm_lang$core$Bitwise$or,
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], xorshifted, rot),
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['<<'], xorshifted, rot2)),
		0);
};
var _mgold$elm_random_pcg$Random_Pcg$mul32 = F2(
	function (a, b) {
		var bl = A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], b, 65535);
		var bh = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['&'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], b, 16),
			65535);
		var al = A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], a, 65535);
		var ah = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['&'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], a, 16),
			65535);
		return A2(
			_elm_lang$core$Bitwise$or,
			0,
			(al * bl) + A2(
				_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
				A2(_mgold$elm_random_pcg$Random_Pcg_ops['<<'], (ah * bl) + (al * bh), 16),
				0));
	});
var _mgold$elm_random_pcg$Random_Pcg$Int64 = F2(
	function (a, b) {
		return {ctor: 'Int64', _0: a, _1: b};
	});
var _mgold$elm_random_pcg$Random_Pcg$magicFactor = A2(_mgold$elm_random_pcg$Random_Pcg$Int64, 1481765933, 1284865837);
var _mgold$elm_random_pcg$Random_Pcg$mul64 = F2(
	function (_p10, _p9) {
		var _p11 = _p10;
		var _p14 = _p11._1;
		var _p12 = _p9;
		var _p13 = _p12._1;
		var lo = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], _p14, 65535) * A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], _p13, 65535),
			0);
		var c0 = A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], _p14, 65535) * A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p13, 16),
			0);
		var c0$ = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['<<'], c0, 16),
			0);
		var lo$ = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], lo + c0$, 0);
		var c1 = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p14, 16) * A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], _p13, 65535),
			0);
		var hi = (A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p14, 16) * A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p13, 16)) + A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], c0, 16) + A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], c1, 16),
			0);
		var hi$ = (_elm_lang$core$Native_Utils.cmp(
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], lo$, 0),
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], c0$, 0)) < 0) ? A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], hi + 1, 0) : hi;
		var c1$ = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['<<'], c1, 16),
			0);
		var lo$$ = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], lo$ + c1$, 0);
		var hi$$ = (_elm_lang$core$Native_Utils.cmp(
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], lo$$, 0),
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], c1$, 0)) < 0) ? A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], hi$ + 1, 0) : hi$;
		var hi$$$ = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			hi$$ + A2(_mgold$elm_random_pcg$Random_Pcg$mul32, _p14, _p12._0),
			0);
		var hi$$$$ = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			hi$$$ + A2(_mgold$elm_random_pcg$Random_Pcg$mul32, _p11._0, _p13),
			0);
		return A2(_mgold$elm_random_pcg$Random_Pcg$Int64, hi$$$$, lo$$);
	});
var _mgold$elm_random_pcg$Random_Pcg$add64 = F2(
	function (_p16, _p15) {
		var _p17 = _p16;
		var _p19 = _p17._1;
		var _p18 = _p15;
		var lo = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p19 + _p18._1, 0);
		var hi = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p17._0 + _p18._0, 0);
		var hi$ = (_elm_lang$core$Native_Utils.cmp(
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], lo, 0),
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], _p19, 0)) < 0) ? A2(_elm_lang$core$Bitwise$or, hi + 1, 0) : hi;
		return A2(_mgold$elm_random_pcg$Random_Pcg$Int64, hi$, lo);
	});
var _mgold$elm_random_pcg$Random_Pcg$Generator = function (a) {
	return {ctor: 'Generator', _0: a};
};
var _mgold$elm_random_pcg$Random_Pcg$list = F2(
	function (n, _p20) {
		var _p21 = _p20;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed) {
				return A4(
					_mgold$elm_random_pcg$Random_Pcg$listHelp,
					_elm_lang$core$Native_List.fromArray(
						[]),
					n,
					_p21._0,
					seed);
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$constant = function (value) {
	return _mgold$elm_random_pcg$Random_Pcg$Generator(
		function (seed) {
			return {ctor: '_Tuple2', _0: value, _1: seed};
		});
};
var _mgold$elm_random_pcg$Random_Pcg$map = F2(
	function (func, _p22) {
		var _p23 = _p22;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p24 = _p23._0(seed0);
				var a = _p24._0;
				var seed1 = _p24._1;
				return {
					ctor: '_Tuple2',
					_0: func(a),
					_1: seed1
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$map2 = F3(
	function (func, _p26, _p25) {
		var _p27 = _p26;
		var _p28 = _p25;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p29 = _p27._0(seed0);
				var a = _p29._0;
				var seed1 = _p29._1;
				var _p30 = _p28._0(seed1);
				var b = _p30._0;
				var seed2 = _p30._1;
				return {
					ctor: '_Tuple2',
					_0: A2(func, a, b),
					_1: seed2
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$pair = F2(
	function (genA, genB) {
		return A3(
			_mgold$elm_random_pcg$Random_Pcg$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			genA,
			genB);
	});
var _mgold$elm_random_pcg$Random_Pcg$andMap = _mgold$elm_random_pcg$Random_Pcg$map2(
	F2(
		function (x, y) {
			return x(y);
		}));
var _mgold$elm_random_pcg$Random_Pcg$map3 = F4(
	function (func, _p33, _p32, _p31) {
		var _p34 = _p33;
		var _p35 = _p32;
		var _p36 = _p31;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p37 = _p34._0(seed0);
				var a = _p37._0;
				var seed1 = _p37._1;
				var _p38 = _p35._0(seed1);
				var b = _p38._0;
				var seed2 = _p38._1;
				var _p39 = _p36._0(seed2);
				var c = _p39._0;
				var seed3 = _p39._1;
				return {
					ctor: '_Tuple2',
					_0: A3(func, a, b, c),
					_1: seed3
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$map4 = F5(
	function (func, _p43, _p42, _p41, _p40) {
		var _p44 = _p43;
		var _p45 = _p42;
		var _p46 = _p41;
		var _p47 = _p40;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p48 = _p44._0(seed0);
				var a = _p48._0;
				var seed1 = _p48._1;
				var _p49 = _p45._0(seed1);
				var b = _p49._0;
				var seed2 = _p49._1;
				var _p50 = _p46._0(seed2);
				var c = _p50._0;
				var seed3 = _p50._1;
				var _p51 = _p47._0(seed3);
				var d = _p51._0;
				var seed4 = _p51._1;
				return {
					ctor: '_Tuple2',
					_0: A4(func, a, b, c, d),
					_1: seed4
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$map5 = F6(
	function (func, _p56, _p55, _p54, _p53, _p52) {
		var _p57 = _p56;
		var _p58 = _p55;
		var _p59 = _p54;
		var _p60 = _p53;
		var _p61 = _p52;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var _p62 = _p57._0(seed0);
				var a = _p62._0;
				var seed1 = _p62._1;
				var _p63 = _p58._0(seed1);
				var b = _p63._0;
				var seed2 = _p63._1;
				var _p64 = _p59._0(seed2);
				var c = _p64._0;
				var seed3 = _p64._1;
				var _p65 = _p60._0(seed3);
				var d = _p65._0;
				var seed4 = _p65._1;
				var _p66 = _p61._0(seed4);
				var e = _p66._0;
				var seed5 = _p66._1;
				return {
					ctor: '_Tuple2',
					_0: A5(func, a, b, c, d, e),
					_1: seed5
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$andThen = F2(
	function (_p67, callback) {
		var _p68 = _p67;
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed) {
				var _p69 = _p68._0(seed);
				var result = _p69._0;
				var newSeed = _p69._1;
				var _p70 = callback(result);
				var generateB = _p70._0;
				return generateB(newSeed);
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$filter = F2(
	function (predicate, generator) {
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$andThen,
			generator,
			function (a) {
				return predicate(a) ? _mgold$elm_random_pcg$Random_Pcg$constant(a) : A2(_mgold$elm_random_pcg$Random_Pcg$filter, predicate, generator);
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$maybe = F2(
	function (genBool, genA) {
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$andThen,
			genBool,
			function (b) {
				return b ? A2(_mgold$elm_random_pcg$Random_Pcg$map, _elm_lang$core$Maybe$Just, genA) : _mgold$elm_random_pcg$Random_Pcg$constant(_elm_lang$core$Maybe$Nothing);
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$Seed = F2(
	function (a, b) {
		return {ctor: 'Seed', _0: a, _1: b};
	});
var _mgold$elm_random_pcg$Random_Pcg$next = function (_p71) {
	var _p72 = _p71;
	var _p73 = _p72._1;
	var state1 = A2(_mgold$elm_random_pcg$Random_Pcg$mul64, _p72._0, _mgold$elm_random_pcg$Random_Pcg$magicFactor);
	var state2 = A2(_mgold$elm_random_pcg$Random_Pcg$add64, state1, _p73);
	return A2(_mgold$elm_random_pcg$Random_Pcg$Seed, state2, _p73);
};
var _mgold$elm_random_pcg$Random_Pcg$initialSeed2 = F2(
	function (stateHi, stateLo) {
		var incr = A2(_mgold$elm_random_pcg$Random_Pcg$Int64, 335903614, 4150755663);
		var seed0 = A2(
			_mgold$elm_random_pcg$Random_Pcg$Seed,
			A2(_mgold$elm_random_pcg$Random_Pcg$Int64, 0, 0),
			incr);
		var _p74 = _mgold$elm_random_pcg$Random_Pcg$next(seed0);
		var state1 = _p74._0;
		var state2 = A2(
			_mgold$elm_random_pcg$Random_Pcg$add64,
			state1,
			A2(
				_mgold$elm_random_pcg$Random_Pcg$Int64,
				A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], stateHi, 0),
				A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], stateLo, 0)));
		return _mgold$elm_random_pcg$Random_Pcg$next(
			A2(_mgold$elm_random_pcg$Random_Pcg$Seed, state2, incr));
	});
var _mgold$elm_random_pcg$Random_Pcg$initialSeed = function (i) {
	return A2(_mgold$elm_random_pcg$Random_Pcg$initialSeed2, i, 0);
};
var _mgold$elm_random_pcg$Random_Pcg$integer = F2(
	function (max, seed0) {
		if (_elm_lang$core$Native_Utils.eq(
			A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], max, max - 1),
			0)) {
			return {
				ctor: '_Tuple2',
				_0: A2(
					_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
					A2(
						_mgold$elm_random_pcg$Random_Pcg_ops['&'],
						_mgold$elm_random_pcg$Random_Pcg$peel(seed0),
						max - 1),
					0),
				_1: _mgold$elm_random_pcg$Random_Pcg$next(seed0)
			};
		} else {
			var threshhold = A2(
				_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
				A2(
					_elm_lang$core$Basics_ops['%'],
					A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], 0 - max, 0),
					max),
				0);
			var accountForBias = function (seed) {
				accountForBias:
				while (true) {
					var seedN = _mgold$elm_random_pcg$Random_Pcg$next(seed);
					var x = _mgold$elm_random_pcg$Random_Pcg$peel(seed);
					if (_elm_lang$core$Native_Utils.cmp(x, threshhold) < 0) {
						var _v29 = seedN;
						seed = _v29;
						continue accountForBias;
					} else {
						return {
							ctor: '_Tuple2',
							_0: A2(_elm_lang$core$Basics_ops['%'], x, max),
							_1: seedN
						};
					}
				}
			};
			return accountForBias(seed0);
		}
	});
var _mgold$elm_random_pcg$Random_Pcg$int = F2(
	function (min, max) {
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				if (_elm_lang$core$Native_Utils.eq(min, max)) {
					return {ctor: '_Tuple2', _0: min, _1: seed0};
				} else {
					var range = _elm_lang$core$Basics$abs(max - min) + 1;
					var _p75 = A2(_mgold$elm_random_pcg$Random_Pcg$integer, range, seed0);
					var i = _p75._0;
					var seed1 = _p75._1;
					return {ctor: '_Tuple2', _0: i + min, _1: seed1};
				}
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$bool = A2(
	_mgold$elm_random_pcg$Random_Pcg$map,
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		})(1),
	A2(_mgold$elm_random_pcg$Random_Pcg$int, 0, 1));
var _mgold$elm_random_pcg$Random_Pcg$choice = F2(
	function (x, y) {
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$map,
			function (b) {
				return b ? x : y;
			},
			_mgold$elm_random_pcg$Random_Pcg$bool);
	});
var _mgold$elm_random_pcg$Random_Pcg$oneIn = function (n) {
	return A2(
		_mgold$elm_random_pcg$Random_Pcg$map,
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(1),
		A2(_mgold$elm_random_pcg$Random_Pcg$int, 1, n));
};
var _mgold$elm_random_pcg$Random_Pcg$sample = function () {
	var find = F2(
		function (k, ys) {
			find:
			while (true) {
				var _p76 = ys;
				if (_p76.ctor === '[]') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_elm_lang$core$Native_Utils.eq(k, 0)) {
						return _elm_lang$core$Maybe$Just(_p76._0);
					} else {
						var _v31 = k - 1,
							_v32 = _p76._1;
						k = _v31;
						ys = _v32;
						continue find;
					}
				}
			}
		});
	return function (xs) {
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$map,
			function (i) {
				return A2(find, i, xs);
			},
			A2(
				_mgold$elm_random_pcg$Random_Pcg$int,
				0,
				_elm_lang$core$List$length(xs) - 1));
	};
}();
var _mgold$elm_random_pcg$Random_Pcg$float = F2(
	function (min, max) {
		return _mgold$elm_random_pcg$Random_Pcg$Generator(
			function (seed0) {
				var range = _elm_lang$core$Basics$abs(max - min);
				var n0 = _mgold$elm_random_pcg$Random_Pcg$peel(seed0);
				var hi = _elm_lang$core$Basics$toFloat(
					A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], n0, 67108863)) * 1.0;
				var seed1 = _mgold$elm_random_pcg$Random_Pcg$next(seed0);
				var n1 = _mgold$elm_random_pcg$Random_Pcg$peel(seed1);
				var lo = _elm_lang$core$Basics$toFloat(
					A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], n1, 134217727)) * 1.0;
				var val = ((hi * _mgold$elm_random_pcg$Random_Pcg$bit27) + lo) / _mgold$elm_random_pcg$Random_Pcg$bit53;
				var scaled = (val * range) + min;
				return {
					ctor: '_Tuple2',
					_0: scaled,
					_1: _mgold$elm_random_pcg$Random_Pcg$next(seed1)
				};
			});
	});
var _mgold$elm_random_pcg$Random_Pcg$frequency = function (pairs) {
	var pick = F2(
		function (choices, n) {
			pick:
			while (true) {
				var _p77 = choices;
				if ((_p77.ctor === '::') && (_p77._0.ctor === '_Tuple2')) {
					var _p78 = _p77._0._0;
					if (_elm_lang$core$Native_Utils.cmp(n, _p78) < 1) {
						return _p77._0._1;
					} else {
						var _v34 = _p77._1,
							_v35 = n - _p78;
						choices = _v34;
						n = _v35;
						continue pick;
					}
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'Random.Pcg',
						{
							start: {line: 835, column: 13},
							end: {line: 843, column: 77}
						},
						_p77)('Empty list passed to Random.Pcg.frequency!');
				}
			}
		});
	var total = _elm_lang$core$List$sum(
		A2(
			_elm_lang$core$List$map,
			function (_p80) {
				return _elm_lang$core$Basics$abs(
					_elm_lang$core$Basics$fst(_p80));
			},
			pairs));
	return A2(
		_mgold$elm_random_pcg$Random_Pcg$andThen,
		A2(_mgold$elm_random_pcg$Random_Pcg$float, 0, total),
		pick(pairs));
};
var _mgold$elm_random_pcg$Random_Pcg$choices = function (gens) {
	return _mgold$elm_random_pcg$Random_Pcg$frequency(
		A2(
			_elm_lang$core$List$map,
			function (g) {
				return {ctor: '_Tuple2', _0: 1, _1: g};
			},
			gens));
};
var _mgold$elm_random_pcg$Random_Pcg$independentSeed = _mgold$elm_random_pcg$Random_Pcg$Generator(
	function (seed0) {
		var gen1 = A2(_mgold$elm_random_pcg$Random_Pcg$int, 0, 4294967295);
		var gen4 = A5(
			_mgold$elm_random_pcg$Random_Pcg$map4,
			F4(
				function (v0, v1, v2, v3) {
					return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
				}),
			gen1,
			gen1,
			gen1,
			gen1);
		var _p81 = A2(_mgold$elm_random_pcg$Random_Pcg$step, gen4, seed0);
		var a = _p81._0._0;
		var b = _p81._0._1;
		var c = _p81._0._2;
		var d = _p81._0._3;
		var seed1 = _p81._1;
		var dOdd = A2(
			_mgold$elm_random_pcg$Random_Pcg_ops['>>>'],
			A2(_elm_lang$core$Bitwise$or, d, 1),
			0);
		var seed2 = A2(
			_mgold$elm_random_pcg$Random_Pcg$Seed,
			A2(_mgold$elm_random_pcg$Random_Pcg$Int64, a, b),
			A2(_mgold$elm_random_pcg$Random_Pcg$Int64, c, dOdd));
		return {
			ctor: '_Tuple2',
			_0: _mgold$elm_random_pcg$Random_Pcg$next(seed2),
			_1: _mgold$elm_random_pcg$Random_Pcg$next(seed1)
		};
	});
var _mgold$elm_random_pcg$Random_Pcg$fastForward = F2(
	function (delta0, _p82) {
		var _p83 = _p82;
		var _p85 = _p83._1;
		var zero = A2(_mgold$elm_random_pcg$Random_Pcg$Int64, 0, 0);
		var one = A2(_mgold$elm_random_pcg$Random_Pcg$Int64, 0, 1);
		var helper = F6(
			function (accMult, accPlus, curMult, curPlus, delta, repeat) {
				helper:
				while (true) {
					var newDelta = A2(_mgold$elm_random_pcg$Random_Pcg_ops['>>>'], delta, 1);
					var curMult$ = A2(_mgold$elm_random_pcg$Random_Pcg$mul64, curMult, curMult);
					var curPlus$ = A2(
						_mgold$elm_random_pcg$Random_Pcg$mul64,
						A2(_mgold$elm_random_pcg$Random_Pcg$add64, curMult, one),
						curPlus);
					var deltaOdd = _elm_lang$core$Native_Utils.eq(
						A2(_mgold$elm_random_pcg$Random_Pcg_ops['&'], delta, 1),
						1);
					var accMult$ = deltaOdd ? A2(_mgold$elm_random_pcg$Random_Pcg$mul64, accMult, curMult) : accMult;
					var accPlus$ = deltaOdd ? A2(
						_mgold$elm_random_pcg$Random_Pcg$add64,
						A2(_mgold$elm_random_pcg$Random_Pcg$mul64, accPlus, curMult),
						curPlus) : accPlus;
					if (_elm_lang$core$Native_Utils.eq(newDelta, 0)) {
						if ((_elm_lang$core$Native_Utils.cmp(delta0, 0) < 0) && repeat) {
							var _v37 = accMult$,
								_v38 = accPlus$,
								_v39 = curMult$,
								_v40 = curPlus$,
								_v41 = -1,
								_v42 = false;
							accMult = _v37;
							accPlus = _v38;
							curMult = _v39;
							curPlus = _v40;
							delta = _v41;
							repeat = _v42;
							continue helper;
						} else {
							return {ctor: '_Tuple2', _0: accMult$, _1: accPlus$};
						}
					} else {
						var _v43 = accMult$,
							_v44 = accPlus$,
							_v45 = curMult$,
							_v46 = curPlus$,
							_v47 = newDelta,
							_v48 = repeat;
						accMult = _v43;
						accPlus = _v44;
						curMult = _v45;
						curPlus = _v46;
						delta = _v47;
						repeat = _v48;
						continue helper;
					}
				}
			});
		var _p84 = A6(helper, one, zero, _mgold$elm_random_pcg$Random_Pcg$magicFactor, _p85, delta0, true);
		var accMultFinal = _p84._0;
		var accPlusFinal = _p84._1;
		var state1 = A2(
			_mgold$elm_random_pcg$Random_Pcg$add64,
			accPlusFinal,
			A2(_mgold$elm_random_pcg$Random_Pcg$mul64, accMultFinal, _p83._0));
		return A2(_mgold$elm_random_pcg$Random_Pcg$Seed, state1, _p85);
	});
var _mgold$elm_random_pcg$Random_Pcg$fromJson = _elm_lang$core$Json_Decode$oneOf(
	_elm_lang$core$Native_List.fromArray(
		[
			A5(
			_elm_lang$core$Json_Decode$tuple4,
			F4(
				function (a, b, c, d) {
					return A2(
						_mgold$elm_random_pcg$Random_Pcg$Seed,
						A2(_mgold$elm_random_pcg$Random_Pcg$Int64, a, b),
						A2(_mgold$elm_random_pcg$Random_Pcg$Int64, c, d));
				}),
			_elm_lang$core$Json_Decode$int,
			_elm_lang$core$Json_Decode$int,
			_elm_lang$core$Json_Decode$int,
			_elm_lang$core$Json_Decode$int),
			A3(_elm_lang$core$Json_Decode$tuple2, _mgold$elm_random_pcg$Random_Pcg$initialSeed2, _elm_lang$core$Json_Decode$int, _elm_lang$core$Json_Decode$int),
			A2(_elm_lang$core$Json_Decode$tuple1, _mgold$elm_random_pcg$Random_Pcg$initialSeed, _elm_lang$core$Json_Decode$int),
			A2(_elm_lang$core$Json_Decode$map, _mgold$elm_random_pcg$Random_Pcg$initialSeed, _elm_lang$core$Json_Decode$int)
		]));

var _janiczek$elm_markov$Markov$firstState = function (stateMachine) {
	return _mgold$elm_random_pcg$Random_Pcg$sample(
		_elm_lang$core$List$concat(stateMachine.inputs));
};
var _janiczek$elm_markov$Markov$probabilities = F2(
	function (transitions, startState) {
		var transitionsForThisState = A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$core$Dict$empty,
			A2(_elm_lang$core$Dict$get, startState, transitions));
		var totalTransitionCount = _elm_lang$core$Dict$size(transitionsForThisState);
		var calcProbability = function (transitionCount) {
			return _elm_lang$core$Basics$toFloat(transitionCount) / _elm_lang$core$Basics$toFloat(totalTransitionCount);
		};
		var transitionToProbability = function (_p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: calcProbability(_p1._1),
				_1: _p1._0
			};
		};
		return A2(
			_elm_lang$core$List$map,
			transitionToProbability,
			_elm_lang$core$Dict$toList(transitionsForThisState));
	});
var _janiczek$elm_markov$Markov$intervals = F2(
	function (transitions, startState) {
		var probabilities$ = A2(_janiczek$elm_markov$Markov$probabilities, transitions, startState);
		var _p2 = _elm_lang$core$List$unzip(probabilities$);
		var onlyProbabilities = _p2._0;
		var onlyEndStates = _p2._1;
		var summedProbabilitiesWithZero = A3(
			_elm_lang$core$List$scanl,
			F2(
				function (x, y) {
					return x + y;
				}),
			0,
			onlyProbabilities);
		var maybeSummedProbabilities = _elm_lang$core$List$tail(summedProbabilitiesWithZero);
		var summedProbabilities = A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$core$Native_List.fromArray(
				[]),
			maybeSummedProbabilities);
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			summedProbabilities,
			onlyEndStates);
	});
var _janiczek$elm_markov$Markov$nextState = F2(
	function (stateMachine, startState) {
		var randomNumberGenerator = A2(_mgold$elm_random_pcg$Random_Pcg$float, 0, 1);
		var intervals$ = A2(_janiczek$elm_markov$Markov$intervals, stateMachine.transitions, startState);
		var getEndState = function (randomNumber) {
			return A2(
				_elm_lang$core$Maybe$map,
				_elm_lang$core$Basics$snd,
				_elm_lang$core$List$head(
					A2(
						_elm_community$elm_list_extra$List_Extra$dropWhile,
						function (_p3) {
							var _p4 = _p3;
							return _elm_lang$core$Native_Utils.cmp(_p4._0, randomNumber) < 1;
						},
						intervals$)));
		};
		var endStateGenerator = A2(_mgold$elm_random_pcg$Random_Pcg$map, getEndState, randomNumberGenerator);
		return endStateGenerator;
	});
var _janiczek$elm_markov$Markov$walk = F2(
	function (stateMachine, maxLength) {
		var generateUpToN = F2(
			function (remaining, last) {
				if (_elm_lang$core$Native_Utils.eq(remaining, 0)) {
					return _mgold$elm_random_pcg$Random_Pcg$constant(
						_elm_lang$core$Native_List.fromArray(
							[]));
				} else {
					var _p5 = last;
					if (_p5.ctor === 'Nothing') {
						return _mgold$elm_random_pcg$Random_Pcg$constant(
							_elm_lang$core$Native_List.fromArray(
								[]));
					} else {
						var _p6 = _p5._0;
						var next = A2(
							_mgold$elm_random_pcg$Random_Pcg$andThen,
							A2(_janiczek$elm_markov$Markov$nextState, stateMachine, _p6),
							generateUpToN(remaining - 1));
						return A2(
							_mgold$elm_random_pcg$Random_Pcg$andThen,
							next,
							function (list) {
								return _mgold$elm_random_pcg$Random_Pcg$constant(
									A2(_elm_lang$core$List_ops['::'], _p6, list));
							});
					}
				}
			});
		return A2(
			_mgold$elm_random_pcg$Random_Pcg$andThen,
			_janiczek$elm_markov$Markov$firstState(stateMachine),
			generateUpToN(maxLength));
	});
var _janiczek$elm_markov$Markov$addToTransitions = F2(
	function (_p7, transitions) {
		var _p8 = _p7;
		var incrementEndStateCounter = function (count) {
			return _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$Maybe$withDefault, 0, count) + 1);
		};
		var incrementTransitionCount = function (maybeCounter) {
			var counter = A2(_elm_lang$core$Maybe$withDefault, _elm_lang$core$Dict$empty, maybeCounter);
			var updatedCounter = A3(_elm_lang$core$Dict$update, _p8._1, incrementEndStateCounter, counter);
			return _elm_lang$core$Maybe$Just(updatedCounter);
		};
		return A3(_elm_lang$core$Dict$update, _p8._0, incrementTransitionCount, transitions);
	});
var _janiczek$elm_markov$Markov$transitions = function (inputs) {
	var restOfInput = function (input) {
		return _elm_lang$core$List$tail(input);
	};
	var pairs = function (input) {
		var _p9 = restOfInput(input);
		if (_p9.ctor === 'Nothing') {
			return _elm_lang$core$Native_List.fromArray(
				[]);
		} else {
			return A3(
				_elm_lang$core$List$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				input,
				_p9._0);
		}
	};
	var pairs$ = A2(_elm_lang$core$List$concatMap, pairs, inputs);
	return A3(_elm_lang$core$List$foldl, _janiczek$elm_markov$Markov$addToTransitions, _elm_lang$core$Dict$empty, pairs$);
};
var _janiczek$elm_markov$Markov$fromInputs = function (inputs) {
	var transitions$ = _janiczek$elm_markov$Markov$transitions(inputs);
	var intervals$ = _janiczek$elm_markov$Markov$intervals(transitions$);
	return {inputs: inputs, transitions: transitions$, intervals: intervals$};
};
var _janiczek$elm_markov$Markov$fromInput = function (input) {
	return _janiczek$elm_markov$Markov$fromInputs(
		_elm_lang$core$Native_List.fromArray(
			[input]));
};
var _janiczek$elm_markov$Markov$addInput = F2(
	function (input, _p10) {
		var _p11 = _p10;
		return _janiczek$elm_markov$Markov$fromInputs(
			A2(_elm_lang$core$List_ops['::'], input, _p11.inputs));
	});
var _janiczek$elm_markov$Markov$StateMachine = F3(
	function (a, b, c) {
		return {inputs: a, transitions: b, intervals: c};
	});

var _user$project$DeathGripsum$lyricMarkov = _janiczek$elm_markov$Markov$fromInputs(
	_elm_lang$core$Native_List.fromArray(
		[
			_elm_lang$core$Native_List.fromArray(
			['Air', 'raid', ',', 'I', 'slang', 'the', 'math', 'raider', 'nation', ',', 'black', 'cab']),
			_elm_lang$core$Native_List.fromArray(
			['Psychic', 'radio', 'also', 'known', 'as']),
			_elm_lang$core$Native_List.fromArray(
			['Only', 'channel', 'in', 'our', 'mobile', 'lab']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'priceless', 'touch', ',', 'won’t', 'cost', 'you', 'a', 'fucking', 'thing']),
			_elm_lang$core$Native_List.fromArray(
			['Biter', 'appear', 'instantly', ',', 'got', 'pigs', 'to', 'feed']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'see', 'my', 'pimp', ',', 'she’s', 'pissed', 'at', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Acquire', 'this', 'link', ',', 'it’s', 'a', 'ringer']),
			_elm_lang$core$Native_List.fromArray(
			['Cop', 'my', 'steeze', ',', 'make', 'yours', 'much', 'fresher', 'or', 'whatever']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Flock', 'of', 'pigeons', 'come']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'crumbs', ',', 'biters', ',', 'bob', ',', 'and', 'slum']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Feeds', 'the', 'gank', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Biters', 'eat', 'the', 'gank', 'move', ',', 'fuck', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Feeds', 'the', 'gank', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Biters', 'eat', 'the', 'gank', 'move', ',', 'fuck', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'my', 'street', 'the', 'same']),
			_elm_lang$core$Native_List.fromArray(
			['Pave', 'these', 'potholes', 'see', 'no', 'rain']),
			_elm_lang$core$Native_List.fromArray(
			['Lately', 'I', 'seen', 'rain', 'fall', 'close', 'range']),
			_elm_lang$core$Native_List.fromArray(
			['Ain’t', 'no', 'thing', 'too', 'clean', 'don’t', 'bang', ',', 'besides']),
			_elm_lang$core$Native_List.fromArray(
			['Can’t', 'trust', 'a', 'man', 'with', 'cream', 'as', 'white']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'hundred', 'clean', 'cocaine']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'custom', 'like', 'you', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Biters', 'in', 'my', 'sights']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'priceless', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'priceless', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'priceless', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Feeds', 'the', 'gank', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Biters', 'eat', 'the', 'gank', 'move', ',', 'fuck', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Feeds', 'the', 'gank', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Biters', 'eat', 'the', 'gank', 'move', ',', 'fuck', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hardly', 'notice', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'toss', 'all', 'bums', 'generous', 'portion', 'of', 'my', 'goat']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'keep', 'the', 'bones']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Mastered', 'by', 'me', 'magnified']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'laughter', 'fed', 'back', 'through', 'your', 'swine']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'forehead', 'tat', 'my', 'hazmat', 'tag']),
			_elm_lang$core$Native_List.fromArray(
			['Serpent', 'coil', 'egg', 'and', 'flag']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Twins', 'sat', 'rows', 'all', 'identical']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'seen', 'as', 'a', 'threat', 'or', 'so', 'we’ve', 'been', 'told']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hold', 'the', 'key', ',', 'I', 'blame', 'the', 'key']),
			_elm_lang$core$Native_List.fromArray(
			['Made', 'me', 'defame', 'the', 'mold']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'priceless', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'priceless', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Feeds', 'the', 'gank', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Biters', 'eat', 'the', 'gank', 'move', ',', 'fuck', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', 'doe', ',', 'aye', 'doe', ',', 'aye', 'doe', ',', 'bite', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Feeds', 'the', 'gank', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Biters', 'eat', 'the', 'gank', 'move', ',', 'fuck', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Pirate']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'called', 'your', 'dude', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'called', 'your', 'dude', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'called', 'your', 'dude', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'you', 'have', 'me', 'do', 'this', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'done', 'made', 'a', 'fuckin\'', 'mess']),
			_elm_lang$core$Native_List.fromArray(
			['Lick', 'it', 'up', 'you', 'stupid', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Play', 'some', 'fuckin\'', 'music', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'scabs', 'under', 'my', 'fingernails']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'help', 'myself', ',', 'don\'t', 'wanna', 'feel', 'myself']),
			_elm_lang$core$Native_List.fromArray(
			['Road', 'kill', 'slung', 'over', 'wicker', 'wheelchair']),
			_elm_lang$core$Native_List.fromArray(
			['X', 'amount', 'take', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Twenty', 'minutes']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'almost', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Enter', 'high', 'tide', 'blank', 'stare', 'ripples', 'rise']),
			_elm_lang$core$Native_List.fromArray(
			['Count', '\'em', 'frame', 'by', 'frame']),
			_elm_lang$core$Native_List.fromArray(
			['Edge', 'of', 'shore', 'hog', 'tied']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'wait', 'to', 'fuck', 'my', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'need', 'to', 'forget', 'is', 'today']),
			_elm_lang$core$Native_List.fromArray(
			['Rip', 'current', 'pulls', 'me', 'down', 'by', 'open', 'wounds', 'on', 'my', 'lower', 'legs']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'called', 'your', 'dude', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'called', 'your', 'dude', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'called', 'your', 'dude', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'called', 'your', 'dude', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Look', 'like', 'all', 'he', 'wanna', 'do', 'is', 'switch']),
			_elm_lang$core$Native_List.fromArray(
			['Ghost', 'ship', 'ritual']),
			_elm_lang$core$Native_List.fromArray(
			['double', 'exposed']),
			_elm_lang$core$Native_List.fromArray(
			['Delusional', 'tendencies', ',', 'I\'m', 'belly', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it', 'though', ',', 'I', 'indulge', 'in', 'supremacy']),
			_elm_lang$core$Native_List.fromArray(
			['Sixty', 'beggars', 'behind', 'my', 'casket', 'coma']),
			_elm_lang$core$Native_List.fromArray(
			['Sub', 'under', 'gaze', 'of', 'sadistic', 'dom']),
			_elm_lang$core$Native_List.fromArray(
			['Suck', 'the', 'skin', 'off', 'my', 'teeth']),
			_elm_lang$core$Native_List.fromArray(
			['Automaton', 'embalmed']),
			_elm_lang$core$Native_List.fromArray(
			['Under', 'breath', 'whisper', 'never', 'go', 'too', 'far']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', 'I\'m', 'gone', ',', 'bitch', 'I\'m', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'that', 'v', ',', 'on', 'that', 'yellow', 'pill', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'deal', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'kill', 'steal', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'real']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'close', 'my', 'eyes', 'and', 'seize', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'clench', 'my', 'fists', 'and', 'beat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'light', 'my', 'torch', 'and', 'burn', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'close', 'my', 'eyes', 'and', 'seize', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'clench', 'my', 'fists', 'and', 'beat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'light', 'my', 'torch', 'and', 'burn', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'I', 'know', 'soon', 'come', 'my', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'in', 'mine', 'void', 'a', 'pale', 'horse', 'burns']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'fear', 'not', 'the', 'time', 'I\'m', 'taken']),
			_elm_lang$core$Native_List.fromArray(
			['Past', 'the', 'point', 'of', 'no', 'return']),
			_elm_lang$core$Native_List.fromArray(
			['Wage', 'war', 'like', 'no', 'tomorrow']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'no', 'hell', ',', 'there', 'won\'t', 'be', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'all', 'who', 'deny', 'the', 'struggle']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'triumphant', 'overcome']),
			_elm_lang$core$Native_List.fromArray(
			['Trips', 'to', 'where', 'few', 'have', 'been']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'of', 'thin', 'air', ',', 'upon', 'high', 'winds']),
			_elm_lang$core$Native_List.fromArray(
			['Rites', 'begin', 'when', 'the', 'sun', 'descends']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'felt', 'what', 'few', 'will', 'ever', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'seen', 'the', 'truth', 'beneath', 'the', 'glow']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'the', 'ebb', 'and', 'flow', ',', 'where', 'the', 'roots', 'of', 'all', 'mysteries', 'grow']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'below', ',', 'so', 'far', 'below']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'bottom', 'line']),
			_elm_lang$core$Native_List.fromArray(
			['Transmitting', 'live', ',', 'transmissions', 'rise']),
			_elm_lang$core$Native_List.fromArray(
			['From', 'the', 'depths', 'out', 'of', 'controlled', 'by']),
			_elm_lang$core$Native_List.fromArray(
			['Suspended', 'glance', 'of', 'an', 'unblinking', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Imminent', 'gaze', 'cast', '\'pon', 'the', 'path', 'that', 'winds']),
			_elm_lang$core$Native_List.fromArray(
			['\'Pon', 'the', 'path', 'I', 'find', ',', 'and', 'claim', 'as', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'ride', 'the', 'waves']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'unrest']),
			_elm_lang$core$Native_List.fromArray(
			['Made', 'to', 'make', 'me', 'shine', 'as', 'a', 'testament']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'why', 'the', 'ways', 'of', 'the', 'blind', 'will', 'never', 'get']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', 'but', 'shanked', 'by', 'my', 'disrespect']),
			_elm_lang$core$Native_List.fromArray(
			['Dismiss', 'this', 'life', ',', 'worship', 'death']),
			_elm_lang$core$Native_List.fromArray(
			['Cold', 'blood', 'night', 'of', 'serpent\'s', 'breath']),
			_elm_lang$core$Native_List.fromArray(
			['Exhaled', 'like', 'spells', 'from', 'the', 'endlessness']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'bottomless', 'wells', 'of', 'emptiness']),
			_elm_lang$core$Native_List.fromArray(
			['Channeled', 'to', 'invoke', 'what', 'we', 'represent']),
			_elm_lang$core$Native_List.fromArray(
			['Secret', 'order']),
			_elm_lang$core$Native_List.fromArray(
			['Elitist', 'horde', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Creeping', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['Seizing', 'power']),
			_elm_lang$core$Native_List.fromArray(
			['Riders', 'of', 'the', 'lupus', 'hour']),
			_elm_lang$core$Native_List.fromArray(
			['Eye', 'on', 'palm']),
			_elm_lang$core$Native_List.fromArray(
			['Time', 'is', 'gone']),
			_elm_lang$core$Native_List.fromArray(
			['Moonlight', 'drawn']),
			_elm_lang$core$Native_List.fromArray(
			['Fly', 'till', 'dawn']),
			_elm_lang$core$Native_List.fromArray(
			['Sacrifice', 'to', 'rise', 'beyond']),
			_elm_lang$core$Native_List.fromArray(
			['Deep', 'inside', 'the', 'violent', 'calm']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'the', 'coming', 'storm']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'blood', 'sworn']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'glorify', 'and', 'for', 'life', 'adorn']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'all', 'that', 'dies', 'to', 'become', 'unborn']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'close', 'my', 'eyes', 'and', 'seize', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'clench', 'my', 'fists', 'and', 'beat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'light', 'my', 'torch', 'and', 'burn', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'close', 'my', 'eyes', 'and', 'seize', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'clench', 'my', 'fists', 'and', 'beat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'light', 'my', 'torch', 'and', 'burn', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'time', 'before', 'time', 'eyes', '\'bove', 'which', 'horns']),
			_elm_lang$core$Native_List.fromArray(
			['Curve', 'like', 'psychotropic', 'scythes']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'smell', 'of', 'torn', 'flesh', 'bled', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'hell', 'swarms', 'of', 'pestis', 'flies']),
			_elm_lang$core$Native_List.fromArray(
			['Vomiting', 'forth', 'flames', 'lit', 'by']),
			_elm_lang$core$Native_List.fromArray(
			['An', 'older', 'than', 'ancient', 'force']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'slays', 'this', 'life', 'with', 'no', 'remorse']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'spiral', 'storm']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'flames', 'inside']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'torch', 'I', 'raise']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'force', 'I', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'my', 'vessel', 'go', 'up', 'in', 'flames']),
			_elm_lang$core$Native_List.fromArray(
			['Flesh', 'torch', 'lit', 'by', 'thee', 'unnamed']),
			_elm_lang$core$Native_List.fromArray(
			['Direct', 'connection', 'to', 'the', 'source']),
			_elm_lang$core$Native_List.fromArray(
			['Vestment', 'of', 'unnatural', 'force']),
			_elm_lang$core$Native_List.fromArray(
			['Forever', 'burning', 'black', 'torch']),
			_elm_lang$core$Native_List.fromArray(
			['Wisdom', 'of', 'the', 'old', 'and', 'true']),
			_elm_lang$core$Native_List.fromArray(
			['Possessed', 'by', 'the', 'chosen', 'few']),
			_elm_lang$core$Native_List.fromArray(
			['Shining', 'to', 'reveal', 'the', 'ways']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'a', 'darkness', 'that', 'pervades']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'that', 'is', 'and', 'ever', 'was']),
			_elm_lang$core$Native_List.fromArray(
			['Inferno', 'of', 'witches\'', 'blood']),
			_elm_lang$core$Native_List.fromArray(
			['Worship', 'is', 'not', 'on', 'bended', 'knee']),
			_elm_lang$core$Native_List.fromArray(
			['Nature', 'knows', 'not', 'of', 'mercy']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'pray', 'is', 'to', 'accept', 'defeat']),
			_elm_lang$core$Native_List.fromArray(
			['Power', 'pisses', 'on', 'the', 'weak']),
			_elm_lang$core$Native_List.fromArray(
			['Bow', 'and', 'beheaded', 'by', 'the', 'beast']),
			_elm_lang$core$Native_List.fromArray(
			['Beggar', 'on', 'a', 'bitch\'s', 'leash']),
			_elm_lang$core$Native_List.fromArray(
			['Scum', 'is', 'desperate', 'for', 'relief']),
			_elm_lang$core$Native_List.fromArray(
			['Worship', 'is', 'the', 'way', 'I', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['Witching', 'currents', 'through', 'the', 'eye']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'storms', 'that', 'force', 'the', 'false', 'to', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Worship', 'the', 'flames', 'with', 'which', 'I', 'rise']),
			_elm_lang$core$Native_List.fromArray(
			['Into', 'apocalyptic', 'skies']),
			_elm_lang$core$Native_List.fromArray(
			['Harsh', 'winds', 'flay', 'mine', 'flesh', 'to', 'bone']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'splintered', 'skeleton', 'I', 'roam']),
			_elm_lang$core$Native_List.fromArray(
			['Wastelands', 'with', 'naught', 'to', 'call', 'my', 'own']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'the', 'path', 'I', 'walk', 'alone']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'hunger', 'burns', ',', 'within', 'my', 'gut']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'my', 'bones', 'turn', 'into', 'dust']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'I', 'know', 'soon', 'come', 'my', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'in', 'mine', 'void', 'a', 'pale', 'horse', 'burns']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'fear', 'not', 'the', 'time', 'I\'m', 'taken']),
			_elm_lang$core$Native_List.fromArray(
			['Past', 'the', 'point', 'of', 'no', 'return']),
			_elm_lang$core$Native_List.fromArray(
			['Wage', 'war', 'like', 'no', 'tomorrow']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'no', 'hell', ',', 'there', 'won\'t', 'be', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'all', 'who', 'deny', 'the', 'struggle']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'triumphant', 'overcome']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'close', 'my', 'eyes', 'and', 'seize', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'clench', 'my', 'fists', 'and', 'beat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'light', 'my', 'torch', 'and', 'burn', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'close', 'my', 'eyes', 'and', 'seize', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'clench', 'my', 'fists', 'and', 'beat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'light', 'my', 'torch', 'and', 'burn', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'beast', 'I', 'worship']),
			_elm_lang$core$Native_List.fromArray(
			['Man', ',', 'uh', ',', 'seein\'', 'what\'s', 'goin\'', 'on', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'case', 'you', 'guys', 'got', 'to', 'see', ',', 'uh']),
			_elm_lang$core$Native_List.fromArray(
			['Thinkin\'', 'about', 'headin\'', 'out', ',', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'sneak', 'up', 'on', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'shed', 'my', 'shh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shock', ',', 'my', 'body', 'clear']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', ',', 'obey', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'sneak', 'up', 'on', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'shed', 'my', 'shh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shock', ',', 'my', 'body', 'clear']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', ',', 'obey', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'s', 'your', 'heat', 'at', '?', 'It', 'won\'t', 'lit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'surprised', ',', 'check', 'your', 'thermostat', ',', 'no', 'digits']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'drop', 'a', 'dime', ',', 'you', 'can', 'have', 'that', ',', 'collect', 'your', 'tip']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'buy', 'a', 'rhyme', 'and', 'bring', 'my', 'cash', 'back', ',', 'you', 'broke', 'ass', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'sneak', 'up', 'on', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'shed', 'my', 'shh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shock', ',', 'my', 'body', 'clear']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'betray', 'me', ',', 'oh', 'and', 'while', 'you\'re', 'at', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Double', 'my', 'inhibitor', ',', 'I', 'can\'t', 'hack', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Be', 'my', 'buffer', ',', 'my', 'habit', 'hunger', 'havoc']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'digress', ',', 'I', 'can\'t', 'live', 'in', 'this', 'contagion']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'spread', 'into', 'incisions', 'on', 'occasion']),
			_elm_lang$core$Native_List.fromArray(
			['Heavily', 'stricken', 'witness', 'visions']),
			_elm_lang$core$Native_List.fromArray(
			['Omens', 'wall', 'to', 'wall', 'followed', 'by', 'a', 'loss', 'of', 'any', 'and', 'all', 'symptoms']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'won\'t', 'lit']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'like', ',', 'Hold', 'on.', 'Fuck', ',', 'it', 'won\'t', 'lit.']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'put', ',', 'you\'re', 'the', 'wrong', 'one', ',', 'bitch', 'don\'t', 'fit']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'shook', ',', 'you\'re', 'flows', 'off', 'blood', ',', 'this', 'won\'t', 'hit']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'no', 'hook', ',', 'true', 'or', 'false', ',', 'though', 'you', 'can\'t', 'spit']),
			_elm_lang$core$Native_List.fromArray(
			['Bitter', 'face', ',', 'Frida', 'Kahlo', 'the', 'Costco', 'remix', ',', 'you\'re', 'a', 'case']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'you', 'got', 'though', 'free', 'shit', ',', 'what', 'a', 'waste']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'can', 'you', 'not', 'know', '?', 'So', 'which', 'is', 'it:', 'love', 'or', 'hate', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You\'d', 'rather', 'not', 'know', 'why', 'shit', 'won\'t', 'lit', ',', 'fucks', 'hesitate']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'sneak', 'up', 'on', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'shed', 'my', 'shh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shock', ',', 'my', 'body', 'clear']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', ',', 'obey', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'sneak', 'up', 'on', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'shed', 'my', 'shh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shock', ',', 'my', 'body', 'clear']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', 'poison']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'me', ',', 'obey', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Didn\'t', 'mean', 'to', ',', 'I', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'assumed', 'it\'d', 'be', 'you', ',', 'I', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'knew', 'no', 'idea', ',', 'I', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'confused', ',', 'excuses']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'won\'t', 'lit\'s', 'a', 'Rubik\'s', 'cubicle']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'the', 'new', 'cog', 'to', 'chew', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'sulk', 'with', 'and', 'flask', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'the', 'sick', 'with', 'it', 'put', 'my', 'mask', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Zach', 'hit', 'them', 'off', 'like', ',', 'It', 'won\'t', 'lit', ',', 'they', 'shit', 'bricks']),
			_elm_lang$core$Native_List.fromArray(
			['Bbpoltergiest', 'don\'t', 'touch', 'this', ',', 'don\'t', 'insist']),
			_elm_lang$core$Native_List.fromArray(
			['Favorite', 'the', 'copyright', 'then', 'go', 'home', ',', 'bitch', ',', 'no', 'homeless']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in', 'your', 'house', 'like', ',', 'Oh', 'shit', ',', 'I', 'own', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'kick', 'your', 'ass', 'out', ',', 'don\'t', 'bitch', ',', 'bitch', ',', 'it\'s', 'winter', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Take', 'my', 'trash', 'out', 'real', 'quick', 'or', 'live', 'in', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'s', 'my', 'cash', 'out', 'promo', 'slip', '?', 'I\'m', 'skipping', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'I\'m', 'tacked', 'out', ',', 'my', 'it', 'won\'t', 'lit\'s', 'it', 'won\'t', 'lit']),
			_elm_lang$core$Native_List.fromArray(
			['Artificial', 'death', 'in', 'the', 'west', ',']),
			_elm_lang$core$Native_List.fromArray(
			['east']),
			_elm_lang$core$Native_List.fromArray(
			['Pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['There', 'was', 'a', 'artificial', 'death', 'in', 'the', 'west', ',', 'east']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['G-O-D', 'She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'barely', 'there', ',', 'I\'m', 'everywhere']),
			_elm_lang$core$Native_List.fromArray(
			['Heavy', 'thin', 'air', ',', 'Sahara', 'mascara', 'smeared', ',', 'end', 'of', 'an', 'era']),
			_elm_lang$core$Native_List.fromArray(
			['Tracks', 'on', 'Hera\'s', 'peacock', 'thighs', ',']),
			_elm_lang$core$Native_List.fromArray(
			['china', 'white', 'skies', ',']),
			_elm_lang$core$Native_List.fromArray(
			['ivory', 'of', 'my', 'leper', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Tone', 'of', 'sighs', 'off', 'nylon', 'lips']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'fishnet', 'wet', 'guise', 'of', 'gimp', 'horizon', ',', 'slit', 'bled', 'like', 'my', 'wrist', ',', 'I', 'suck', 'it', 'dry', 'like', 'from', 'the', 'tit']),
			_elm_lang$core$Native_List.fromArray(
			['Which', 'nipple\'s', 'mine', '?', 'Read', 'the', 'signs', ',', 'still', 'can\'t', 'decide']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'your', 'own', 'risk', 'At', 'your', 'own', 'risk']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'touch', 'me', 'bitch!', 'Don\'t', 'touch', 'me', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Accustomed', 'to', 'these', 'satin', 'glitches', ',']),
			_elm_lang$core$Native_List.fromArray(
			['drippin\'', 'from', 'my', 'casket\'s', 'innards']),
			_elm_lang$core$Native_List.fromArray(
			['Charmer', 'play', 'me', 'out', 'the', 'basket', ',', 'last', 'image', 'I', 'saw', 'was', 'splintered']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'reflection', ',', 'I', 'wasn\'t', 'in', 'it', ',', 'in', 'slow', 'motion', ',', 'I', 'give', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Hopeless', 'premonitions']),
			_elm_lang$core$Native_List.fromArray(
			['Tomorrow', 'didn\'t', 'come', ',', 'some', 'say', 'it\'s', 'hiding', ',', 'but', 'they\'re', 'the', 'ones', 'who\'ve', 'hidden']),
			_elm_lang$core$Native_List.fromArray(
			['Euphoria', 'followed', 'by', 'visions', 'of', 'peasants', 'eating', 'pigeons']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['There', 'was', 'a', 'artificial', 'death', 'in', 'the', 'west', ',', 'east']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['G-O-D', 'She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['There', 'was', 'a', 'artificial', 'death', 'in', 'the', 'west', ',', 'east']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['G-O-D', 'She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Hole', 'in', 'this', 'platinum', 'ship', 'of', 'fools', ',', 'nomadic', 'rule', ',', 'concept', ',', 'no', 'rules']),
			_elm_lang$core$Native_List.fromArray(
			['Mobile', 'shrine', 'of', 'this', 'destitute', 'wasteland', 'mute']),
			_elm_lang$core$Native_List.fromArray(
			['Screamin\'', 'at', 'me', ',', 'winkin\'', 'at', 'me', ',', 'like', 'I', 'love', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Fucking', 'with', 'me...', 'Fuck', 'it!']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'star', 'gate', 'in', 'a', 'vacuum', ',', 'monitor\'s', 'eye', 'view']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'valley', 'is', 'an', 'urn', ',', 'this', 'valley', 'I\'m', 'wadin\'', 'through']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'like', 'I\'m', 'chasing', 'after', 'me', ',']),
			_elm_lang$core$Native_List.fromArray(
			['feel', 'like', 'dead', 'weight', 'in', 'a', 'sea', 'of', 'vaseline']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'that', 'can\'t', 'be', 'seen', 'watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'not', 'to', 'dwell', 'on', 'my', 'cell', ',', 'my', 'empty', 'shell', 'shedding', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Artificial', 'death', 'in', 'the', 'west-east']),
			_elm_lang$core$Native_List.fromArray(
			['Pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'matter', 'where', 'I', 'turn', 'Shut', 'down!', 'Shut', 'down!']),
			_elm_lang$core$Native_List.fromArray(
			['Everyone\'s', 'a', 'runaway', 'Where', 'you', 'runnin\'', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['There', 'was', 'a', 'artificial', 'death', 'in', 'the', 'west', ',', 'east']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['G-O-D', 'She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['There', 'was', 'a', 'artificial', 'death', 'in', 'the', 'west', ',', 'east']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['G-O-D', 'She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watching', 'me', 'watching', 'me', 'watch', 'them', 'watch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Artificial', 'death', 'in', 'the', 'west', ',', 'east']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['G-O-D', 'She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Artificial', 'death', 'in', 'the', 'west', ',', 'east']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'pyramids', 'on', 'deck', 'shine']),
			_elm_lang$core$Native_List.fromArray(
			['Wet', 'hair', 'on', 'her', 'neck', ',', 'breathe']),
			_elm_lang$core$Native_List.fromArray(
			['G-O-D', 'She', 'shoot', 'pussy', 'through', 'your', 'chest', ',', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Canopy', 'of', 'corpse', 'tree', ',', 'branches', 'loom', 'above', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Vacuum', 'of', 'crushing', ',', 'doom', 'lies', 'before', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'future', 'dies', 'behind', 'me', ',', 'my', 'entry', 'aborts', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'lean', 'back', 'and', 'drill', 'me', ',', 'like', 'on', 'me', 'I\'m', 'feeding']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'starving', ',', 'I', 'hardly', 'ever', 'feel', 'like', 'being']),
			_elm_lang$core$Native_List.fromArray(
			['Frightened', 'people', ',', 'you', 'know', 'who', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Cowards', ',', 'we', 'know', 'what', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Play', 'your', 'fucking', 'part', ',', 'I\'ll', 'bleed', 'my', 'fucking', 'heart', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'feel', 'so', 'alive', ',', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Frightened', 'people', ',', 'you', 'know', 'who', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Cowards', ',', 'we', 'know', 'what', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Play', 'your', 'fucking', 'part', ',', 'I\'ll', 'bleed', 'my', 'fucking', 'heart', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'feel', 'so', 'alive', ',', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'I', 'have\'s', ',', 'all', 'I', 'need']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'I', 'can\'s', ',', 'all', 'I', 'bleed']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'I', 'am', ',', 'ever', 'will', 'be']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'rise', ',', 'I', 'fall', ',', 'I', 'roll', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'have', 'no', 'age', ',', 'I', 'don\'t', 'pretend', 'I\'m', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'absence', 'stains', 'me', 'sketch', 'gets', 'weird']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'thrive', 'on', 'empty']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'predict', 'me', 'with', 'them', 'petty', ',', 'such', 'a', 'pity']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'peak', 'keeps', 'rising', ',', 'they', 'keep', 'sinking']),
			_elm_lang$core$Native_List.fromArray(
			['Into', 'lakes', 'they\'re', 'crying', ',', 'I', 'keep', 'spitting']),
			_elm_lang$core$Native_List.fromArray(
			['Wish', 'I', 'could', 'see', 'them', 'dying', ',', 'but', 'my', 'peaks', 'too', 'fucking', 'misty']),
			_elm_lang$core$Native_List.fromArray(
			['Tilt', 'your', 'lump', ',', 'till', 'back', 'of', 'your', 'brains', '\'tween', 'your', 'weak', 'slumped', 'shoulder', 'blades']),
			_elm_lang$core$Native_List.fromArray(
			['Still', 'can\'t', 'scope', 'peak', 'I', 'pave', 'into', 'one-way', 'street', 'to', 'space']),
			_elm_lang$core$Native_List.fromArray(
			['Grovel', 'in', 'gravel', 'at', 'my', 'base', ',', 'while', 'saddle', 'control', 'you', 'seek']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'world', 'of', 'cattle', 'at', 'my', 'feet', ',', 'born', 'to', 'get', 'put', 'back', 'to', 'sleep']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'my', 'feet', ',', 'born', 'to', 'get', 'put', 'back', 'to', 'sleep']),
			_elm_lang$core$Native_List.fromArray(
			['Frightened', 'people', ',', 'you', 'know', 'who', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Cowards', ',', 'we', 'know', 'what', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Play', 'your', 'fucking', 'part', ',', 'I\'ll', 'bleed', 'my', 'fucking', 'heart', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'feel', 'so', 'alive', ',', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Frightened', 'people', ',', 'you', 'know', 'who', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Cowards', ',', 'we', 'know', 'what', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Play', 'your', 'fucking', 'part', ',', 'I\'ll', 'bleed', 'my', 'fucking', 'heart', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'feel', 'so', 'alive', ',', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'roll', 'like', 'I', 'don\'t', 'know', 'no', 'better']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'roll', 'like', 'bitch', 'you', 'know', 'better']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'have', 'my', 'utmost', 'disrespect']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'high', 'as', 'fucked', 'up', 'get']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'crash', 'on', 'bed', 'of', 'nails', ',', 'in', 'my', 'frail', 'suit', 'of', 'scabs', 'I', 'relax']),
			_elm_lang$core$Native_List.fromArray(
			['While', 'having', 'seizures', 'in', 'my', 'shack']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'take', 'no', 'breather', ',', 'I', 'took', 'the', 'pact']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'grind', 'this', 'stone', 'into', 'my', 'path']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'wait', 'for', 'you', 'in', 'this', 'disguise']),
			_elm_lang$core$Native_List.fromArray(
			['Remorselessly', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Frightened', 'people', ',', 'you', 'know', 'who', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Cowards', ',', 'we', 'know', 'what', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Play', 'your', 'fucking', 'part', ',', 'I\'ll', 'bleed', 'my', 'fucking', 'heart', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'feel', 'so', 'alive', ',', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Frightened', 'people', ',', 'you', 'know', 'who', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Cowards', ',', 'we', 'know', 'what', 'you', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Play', 'your', 'fucking', 'part', ',', 'I\'ll', 'bleed', 'my', 'fucking', 'heart', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'feel', 'so', 'alive', ',', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'life', 'as', 'a', 'face', 'without', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Look', 'away', ',', 'look', 'away', ',', 'look', 'away', ',', 'look', 'away']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'reply', ',', 'I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'life', 'as', 'a', 'face', 'without', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Look', 'away', ',', 'look', 'away', ',', 'look', 'away', ',', 'look', 'away']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'reply', ',', 'I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'life', 'as', 'a', 'face', 'without', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Look', 'away', ',', 'look', 'away', ',', 'look', 'away', ',', 'look', 'away']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'reply', ',', 'I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'life', 'as', 'a', 'face', 'without', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Look', 'away', ',', 'look', 'away', ',', 'look', 'away', ',', 'look', 'away']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'reply', ',', 'I\'m', 'beyond', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'anybody', 'anybody', 'everybody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'ain\'t', 'nobody', 'anybody', 'ain\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'anybody', 'anybody', 'everybody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'ain\'t', 'nobody', 'anybody', 'ain\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Bury', 'two', 'thumbs', 'disappear', 'three', 'eye', 'run', 'among', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Bass', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Bury', 'two', 'thumbs', 'disappear', 'three', 'eye', 'run', 'among', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Bass', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'not', 'at', 'war', 'torn', 'mystic', ',', 'sheddin\'', 'bands', 'form', 'of', 'linguistic']),
			_elm_lang$core$Native_List.fromArray(
			['Subliminal', 'exit', 'lurk', 'in', 'cryptic', ',', 'black', 'google', 'search', 'it', 'won\'t', 'find', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fifth', 'attitude', 'bury', 'all', 'my', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Bury', 'two', 'thumbs', 'disappear', 'three', 'eye', 'run', 'among', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Bass', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Bury', 'two', 'thumbs', 'disappear', 'three', 'eye', 'run', 'among', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Bass', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Chemical', 'leak', 'melts', 'your', 'reef', ',', 'dry', 'heave', 'crease', 'your', 'knees']),
			_elm_lang$core$Native_List.fromArray(
			['Python', 'in', 'your', 'belly', ',', 'nauseous', 'got', 'the', 'chills']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'I', 'take', 'anymore', 'hard', 'beats', ',', 'split', 'my', 'gills']),
			_elm_lang$core$Native_List.fromArray(
			['Draw', 'the', 'blinds', ',', 'it\'s', 'time', 'to', 'get']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'explain', 'it\'s', 'a', 'feeling', ',', 'inhale', 'the', 'moment', 'till', 'I', 'scorch', 'your', 'lips', ',', 'don\'t', 'hurt', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'gypsy', 'gallop', 'does', 'you', 'dirty']),
			_elm_lang$core$Native_List.fromArray(
			['Peak', 'at', 'three', 'thirty', 'in', 'the', 'morning', 'with', 'your', 'voice', 'in', 'my', 'headquarters', 'and', 'I\'ll', 'take', 'you', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'anybody', 'anybody', 'everybody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'ain\'t', 'nobody', 'anybody', 'ain\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Bury', 'two', 'thumbs', 'disappear', 'three', 'eye', 'run', 'among', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Bass', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Sudden', 'death', 'in', 'the', 'west', ',', 'London', 'connect', 'live', 'and', 'direct']),
			_elm_lang$core$Native_List.fromArray(
			['Mad', 'cow', 'on', 'the', 'beat', 'break', ',', 'me', 'speed', 'lace', 'your', 'senses']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'think', 'straight', ',', 'I', 'can\'t', 'relate', ',', 'it\'s', 'all', 'a', 'dream', 'mate', ',', 'leave', 'a', 'message']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'slangin\'', 'pain', 'in', 'the', 'paint', ',', 'can\'t', 'make', 'it', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['Said', 'knock', 'that', 'off', ',', 'I', 'rep', 'that', 'gutter', 'fly']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'from', 'where', 'you', 'run', 'from', 'hide', ',', 'ain\'t', 'no', 'level', '\'bove', 'this', 'high']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'I', 'rep', 'that', 'gutter', 'fly', ',', 'off', 'I', 'rep', 'that', 'gutter', 'fly']),
			_elm_lang$core$Native_List.fromArray(
			['Base', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'anybody', 'anybody', 'everybody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'ain\'t', 'nobody', 'anybody', 'ain\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Bury', 'two', 'thumbs', 'disappear', 'three', 'eye', 'run', 'among', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Base', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Bury', 'two', 'thumbs', 'disappear', 'three', 'eye', 'run', 'among', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Base', 'rattle', 'stars', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'me', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'forefinger', 'flippin\'', 'pentagrams']),
			_elm_lang$core$Native_List.fromArray(
			['Left', 'hand', 'catch', 'them', 'pix', 'by', 'them', 'peak', 'facin\'', 'south']),
			_elm_lang$core$Native_List.fromArray(
			['Pinhole', 'pic', 'of', 'my', 'wingspan', 'jail', 'breakin\'', 'doubt']),
			_elm_lang$core$Native_List.fromArray(
			['Highest', 'vibration', 'ninth', 'ring', 'of', 'fire', 'crowned']),
			_elm_lang$core$Native_List.fromArray(
			['War', 'cry', 'feel', 'my', 'call', 'hear', 'my', 'chamber', 'revolve']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'your', 'brain', 'like', 'the', 'halls', 'of', 'Amenti']),
			_elm_lang$core$Native_List.fromArray(
			['Treat', 'a', 'bitch', 'like', 'a', 'whore']),
			_elm_lang$core$Native_List.fromArray(
			['Leave', 'your', 'pink', 'sock', 'at', 'the', 'door']),
			_elm_lang$core$Native_List.fromArray(
			['Saturn', 'level', 'flexed']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'these', 'fractals', 'I', 'coalesce']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'takin\'', 'this', 'shit', 'anymore']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'way', 'in', ',', 'come', 'again', ',', 'one', 'way', 'in', ',', 'no', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Cheek', 'in', 'tongue', 'when', 'in', 'doubt', ',', 'feel', 'me', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Violators', 'feed', '\'em', 'vapors', ',', 'don\'t', 'do', 'me', 'no', 'favors']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'me', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Drop', 'top', 'changaa', 'flow', 'go', 'boom', 'boom', 'off', 'my', 'rockers']),
			_elm_lang$core$Native_List.fromArray(
			['Rollin\'', 'doom', 'bumbata', 'choppers']),
			_elm_lang$core$Native_List.fromArray(
			['See', 'me', 'through', 'spot', 'light', 'cherry']),
			_elm_lang$core$Native_List.fromArray(
			['Fog', 'like', 'Nunhead', ',', 'no', 'teeth', 'mary']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'carry', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'where', 'are', 'we', 'how', 'far', 'along']),
			_elm_lang$core$Native_List.fromArray(
			['Me', 'care', 'not', 'dare', 'not', 'key', 'my', 'brom']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'life', 'on', 'a', 'limb', 'about', 'to', 'break']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'tower', '\'pon', 'tectonic', 'plate']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'me', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'me', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'you', 'think', 'I\'m', 'havin', 'everything', 'you\'re', 'rimmin\'', 'ass', 'for', 'ask', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['Whose', 'ass', 'they\'re', 'rimmin\'', 'when', 'I\'m', 'flaggin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Load', 'your', 'cannon', ',', 'shutter', 'flash', 'heavy', 'damage']),
			_elm_lang$core$Native_List.fromArray(
			['Steady', 'hand', 'shit', ',', 'forget', 'me', 'you', 'can\'t', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Slappin', 'click', 'clack', 'tricks', 'stretch', 'please']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'sleeves', 'plastic', ',', 'can\'t', 'breath', 'in', 'this', 'atmos']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'atlas', ',', 'my', 'ego', 'palms', 'planets']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'you', ',', 'yeah', ',', 'yeah', ',', 'it\'s', 'that', 'fuck', 'you', 'can\'t', 'stand', 'slip']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'you', 'cause', 'I', 'can', 'dip']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'me', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'man', 'who', 'press', 'that', 'button']),
			_elm_lang$core$Native_List.fromArray(
			['Sweaty', 'palm', 'get', 'caught', 'bluffin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Fold', 'a', 'man', 'into', 'nothin\'', 'for', 'nothin\'']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'oxidized', 'gold', 'shaft', 'floods', 'your', 'jugular', 'with', 'lucifer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'shoot', 'it', 'word', ',', 'feel', 'like', 'you', 'swallowed', 'Jupiter']),
			_elm_lang$core$Native_List.fromArray(
			['Today', 'your', 'city', ',', 'tomorrow', 'lifting', 'the', 'universe']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'way', 'in', ',', 'come', 'again', ',', 'one', 'way', 'in', ',', 'no', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Cheek', 'in', 'tongue', 'when', 'in', 'doubt']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'me', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'way', 'ticket', 'to', 'big', 'island']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'off', 'eyelid', 'still', 'I', 'can\'t', 'see']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'realize', 'before', 'dead', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['\'Bout', 'out', 'of', 'time', 'speed', 'checkmate']),
			_elm_lang$core$Native_List.fromArray(
			['Internal', 'fall', 'out', 'can\'t', 'escape']),
			_elm_lang$core$Native_List.fromArray(
			['Jungle', 'call', 'fuck', 'back', 'indoors']),
			_elm_lang$core$Native_List.fromArray(
			['Nothing', '\'round', 'here', 'I', 'must', 'see', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'harsh', 'in', 'here', 'think', 'I\'ve', 'gone', 'mad']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'tell', 'if', 'I', 'went', 'too', 'far']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'my', 'phone', 'man', 'shit\'s', 'all', 'bad']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'landline', 'no', 'mac', 'no', 'car']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'map', 'show', 'where', 'skullfuck', 'I', 'am']),
			_elm_lang$core$Native_List.fromArray(
			['Alone', 'can\'t', 'cut', 'off', 'both', 'my', 'hands']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in', 'the', 'fuckin\'', 'big', 'house']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'creepin\'', 'under', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'wanna', 'catch', 'this', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'wanna', 'catch', 'this', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', 'please', ',', 'you', 'must', 'be', 'smokin\'', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'for', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it', 'just', 'don\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Fucker', 'please', ',', 'you', 'must', 'be', 'smokin\'', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'for', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it', 'just', 'don\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Drop', 'it', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'yeah', ',', 'that\'s', 'so', 'trashy']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'low', 'can', 'you', 'go', '?']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'dirty', 'can', 'you', 'get', '?', 'Nasty', ',', 'fucker']),
			_elm_lang$core$Native_List.fromArray(
			['Drug', 'through', 'the', 'dirt']),
			_elm_lang$core$Native_List.fromArray(
			['Razor', 'cut', 'that', 'eight', 'millimeter', 'make', 'it', 'hurt']),
			_elm_lang$core$Native_List.fromArray(
			['Chain', 'sleaze', 'leather', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Fucker', 'please', ',', 'you', 'must', 'be', 'smokin\'', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', ',', 'kill', 'it', ',', 'kill', 'it', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'it', ',', 'fuck', 'it', ',', 'feel', 'it', ',', 'whip', 'it', ',', 'burn', 'it', ',', 'turn', 'it', 'out', 'and', 'kick', 'it', 'to', 'da', 'curb']),
			_elm_lang$core$Native_List.fromArray(
			['Shut', 'it', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Forged', 'in', 'the', 'flames', ',', 'said', 'it', 'before', 'and', 'I\'ll', 'say', 'it', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['Quazar', 'game', 'maximum', 'vacuum', 'rotation', 'spin', 's-s-s']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', 'please', ',', 'you', 'must', 'be', 'smokin\'', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'for', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it', 'just', 'don\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Fucker', 'please', ',', 'you', 'must', 'be', 'smokin\'', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'for', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it', 'just', 'don\'t']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'shit', 'goes', 'down', 'I\'ll', 'be', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'my', 'hand', 'on', 'my', 'gun', ',', 'and', 'my', 'eyes', 'on', 'the', 'road']),
			_elm_lang$core$Native_List.fromArray(
			['Ghost', 'ridin\'', 'to', 'hell', ',', 'fuck', 'if', 'I', 'care']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'wanna', 'catch', 'my', 'droze', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'a', 'fuck', ',', 'blood', ',', 'I', 'ain\'t', 'goin\'', 'nowhere']),
			_elm_lang$core$Native_List.fromArray(
			['Templar', 'night', 'and', 'day', ',', 'live', 'an', 'die', 'by', 'the', 'code']),
			_elm_lang$core$Native_List.fromArray(
			['Code', 'of', 'the', 'street', ',', 'how', 'to', 'stay', 'in', 'the', 'zone']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I', 'own', 'it', 'and', 'freak', 'it', 'to', 'the', 'base', 'of', 'the', 'bone']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'the', 'darkness', 'creeping', 'through', 'your', 'system']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'lash', 'of', 'da', 'whip', 'cracking', 'every', 'bitch', 'into', 'position']),
			_elm_lang$core$Native_List.fromArray(
			['Workin\'', 'you', 'over', 'crashing', 'and', 'burning', 'in', 'a', 'blackhole', 'blasting', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'subwoofers', 'are', 'melting']),
			_elm_lang$core$Native_List.fromArray(
			['Hear', 'a', 'bitch', 'say', ',', 'Why\'s', 'he', 'yelling', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'wanna', 'catch', 'this', 'gun', 'clap', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Shrapnel', 'off', 'me', 'lip', 'cause', 'blood', 'bath']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', 'please', ',', 'you', 'must', 'be', 'smokin\'', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'for', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it', 'just', 'don\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Fucker', 'please', ',', 'you', 'must', 'be', 'smokin', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'for', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it', 'just', 'don\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'run', 'this', 'lik']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'dogtown', 'ripped']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'raw', 'shit', 'like', 'none', 'other']),
			_elm_lang$core$Native_List.fromArray(
			['Low', 'down', 'dirty', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Shot', 'off', 'this', 'hip']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'Grips', ',', 'mothafucka']),
			_elm_lang$core$Native_List.fromArray(
			['Please', ',', 'you', 'must', 'be']),
			_elm_lang$core$Native_List.fromArray(
			['Smokin\'', 'rocks']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'for', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it', 'just', 'don\'t', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'please']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', ',', 'got', ',', 'I', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', ',', 'got', ',', 'I', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming', 'in', 'birds', ', ', 'fuck', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'got', 'a', 'bluebird']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'might', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'got', 'wetted']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stayed', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'trying', 'to', 'use', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'attitude', 'at', 'all', 'times']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'got', 'this', 'attitude', 'at', 'all', 'times']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'a', 'black', 'hat']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'might', 'live']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'got', 'a', 'black', 'hat']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', 'big']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'had', 'a', 'bluebird', ',', 'now', 'it\'s', 'did']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'bird', ',', 'two', 'birds', ',', 'three', 'birds', ',', 'four', 'two']),
			_elm_lang$core$Native_List.fromArray(
			['Five', 'birds', ',']),
			_elm_lang$core$Native_List.fromArray(
			['six', 'times', ',', 'life', 'is', 'war']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'bird', ',', 'two', 'birds', ',', 'three', 'birds', ',', 'four', 'two']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'you', 'think', 'I', 'fuck', 'this', 'for', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', ',', 'got', ',', 'I', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', ',', 'got', ',', 'I', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming', 'in', 'birds', ', ', 'fuck', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', ',', 'you', 'not', ',', 'in', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'right', 'now', 'between', 'my', 'legs']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'put', 'right', 'now', 'between', 'your', 'legs']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'today', 'shoveling', 'graves']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'turning', 'in', 'your', 'grave']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'Jesus', ',', 'he', 'got', 'saved']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'power', ',', 'it\'s', 'so', 'cheap']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'this', 'bird', ',', 'bitch', ',']),
			_elm_lang$core$Native_List.fromArray(
			['drink', 'this', 'bleach']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'bird', ',', 'two', 'birds', ',', 'three', 'birds', ',', 'four', 'two']),
			_elm_lang$core$Native_List.fromArray(
			['Five', 'birds', ',']),
			_elm_lang$core$Native_List.fromArray(
			['six', 'times', ',', 'life', 'is', 'war']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'bird', ',', 'two', 'birds', ',', 'three', 'birds', ',', 'four', 'two']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'you', 'think', 'I', 'fuck', 'this', 'for', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'fake']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'fake']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'higher', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'fake']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'higher', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'birds', ',', 'Birds']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', ',', 'got', ',', 'I', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', ',', 'got', ',', 'I', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'tomorrow', 'coming', 'in', 'birds', ',', 'fuck', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Martyr', 'for', 'dollars', ',', 'pull', 'the', 'slot', ',', 'strip', 'mall', 'hollers', ',', 'buy', 'a', 'yacht']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'for', 'all', ',', 'all', 'for', 'not', ',', 'denial', 'pays', 'placebo', 'bot']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'Kzap', 'slap', 'aristoclot', ',', 'traffickers', 'of', 'permastock']),
			_elm_lang$core$Native_List.fromArray(
			['Then', 'catwalk', 'backwards', 'out', 'of', 'the', 'box']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'holes', 'in', 'my', 'dirty', 'socks']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'Scarecrow', 'dialect', 'dispatch', 'on', 'that', 'shit', 'kommando', 'mix']),
			_elm_lang$core$Native_List.fromArray(
			['Matte', 'moxy', 'subwooferish']),
			_elm_lang$core$Native_List.fromArray(
			['junkie', 'maxi', 'mumbai', 'lit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'Feng', 'shui', 'like', ',', 'Fuck\'s', 'in', 'that', 'spliff', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Impurified', 'conduct']),
			_elm_lang$core$Native_List.fromArray(
			['Ionosphere', 'R.', 'Mutt']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'product', 'deluxe']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bullshitter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'shitty', 'stripper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'silhouette', 'lifter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'struck', 'stuck', 'off', 'kilter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bent', 'bewildered']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'fucking', 'downer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'binge', 'thinner']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bullshitter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'shitty', 'stripper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'silhouette', 'lifter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'struck', 'stuck', 'off', 'kilter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bent', 'bewildered']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'fucking', 'downer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'binge', 'thinner']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Humanizer', ',', 'conscience', 'wiper']),
			_elm_lang$core$Native_List.fromArray(
			['Hypnotaser', ',', 'real', 'tired']),
			_elm_lang$core$Native_List.fromArray(
			['Ursa', 'Major', ',', 'significance', 'minor']),
			_elm_lang$core$Native_List.fromArray(
			['Me', 'no', 'filter', ',', 'sorta', 'on', 'icer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'Godzilla\'s', 'epoxy', 'primered']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'feel', 'your', 'ego', 'shiner']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Vile', 'of', 'sickle', 'shh', 'shh', 'shivers']),
			_elm_lang$core$Native_List.fromArray(
			['Hypocritic', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bullshitter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'shitty', 'stripper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'silhouette', 'lifter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'struck', 'stuck', 'off', 'kilter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bent', 'bewildered']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'fucking', 'downer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'binge', 'thinner']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'Dipper', ',', 'Big', 'Dipper', ',', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bullshitter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'shitty', 'stripper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'silhouette', 'lifter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'struck', 'stuck', 'off', 'kilter']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'bent', 'bewildered']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'fucking', 'downer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'binge', 'thinner']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'Big', 'Dipper']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'my', 'pyre', ',', 'agoraphobe', 'if', 'I', 'want', 'to', ',', 'afford', 'to', 'be']),
			_elm_lang$core$Native_List.fromArray(
			['Consumed']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'pyre\'s', 'my', 'costume;', 'get', 'too', 'close', ',', 'it\'ll', 'lick', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'it', 'likes', 'you', ',', 'cause', 'it', 'loathes', 'you', 'even', 'more', 'than', 'I', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['Always', 'keep', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Always', 'keep', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Always', 'keep', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Always', 'keep', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I', 'ride', ',', 'why', 'I', 'ride', ',', 'never', 'really', 'had', 'to', 'try']),
			_elm_lang$core$Native_List.fromArray(
			['I', ',', 'I', ',', 'I', '...', 'eeuuhh']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'mind', 'that', 'Black', 'jack']),
			_elm_lang$core$Native_List.fromArray(
			['Needle', 'to', 'the', 'mainline', 'junk', 'prepared', 'in', 'a', 'head', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'came', 'up', 'for', 'air']),
			_elm_lang$core$Native_List.fromArray(
			['Fallin\'', 'apart', ',', 'can\'t', 'get', 'a', 'grip']),
			_elm_lang$core$Native_List.fromArray(
			['Dont', 'give', 'a', 'fuck', 'if', 'I', 'did']),
			_elm_lang$core$Native_List.fromArray(
			['Way', 'shit', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['It\'ll', 'be', 'just', 'fine']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'oh', ',', 'oh']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'rob', 'men', 'blind']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', 'but', 'fold']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'watch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', 'but', 'fold']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'watch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', 'but', 'fold']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'watch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', '...', 'Black', 'jack']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'from', 'that', 'hit', 'me', 'until']),
			_elm_lang$core$Native_List.fromArray(
			['Twenty', 'one', 'makes']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'chips', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'jack', 'don\'t', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'the', 'bill']),
			_elm_lang$core$Native_List.fromArray(
			['Twenty', 'one', 'shots', 'to', 'your', 'grill']),
			_elm_lang$core$Native_List.fromArray(
			['Bow', 'down', 'or', 'die', 'everytime']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'slap', 'them', 'things']),
			_elm_lang$core$Native_List.fromArray(
			['Flat', 'black', 'chains', 'rattlin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Shawshank', 'the', 'box']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'be', 'contained']),
			_elm_lang$core$Native_List.fromArray(
			['Man', 'came', 'to', 'pick', 'the', 'lock']),
			_elm_lang$core$Native_List.fromArray(
			['Empty', 'the', 'vault']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'leave', 'no', 'trace']),
			_elm_lang$core$Native_List.fromArray(
			['Sleep', 'don\'t', 'wake']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', '\'em', 'low', 'and', 'keep', 'rollin\'', 'to', 'the', 'beat', 'no', 'breaks']),
			_elm_lang$core$Native_List.fromArray(
			['Slow', 'it', 'down', 'then', 'accelerate']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'hell', 'it\'s', 'cake']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'sellin\'', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'middle', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Made', 'bitch', 'mistakes']),
			_elm_lang$core$Native_List.fromArray(
			['Blackjack']),
			_elm_lang$core$Native_List.fromArray(
			['High', 'king', ',', 'ace', ',', 'to', 'knees', 'the', 'place', 'put', 'down', 'by', 'G\'s', 'raisin\'', 'the', 'stakes']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'what\'s', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Straight']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'the', 'fuck', 'is', 'that', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Blackjack']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'what\'s', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Straight']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'don\'t', 'forget', 'to', 'watch', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Tongue', 'push', 'bankroll', 'off', 'my', 'lips']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'the', 'hell', 'are', 'you', 'legit', '?']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'the', 'fuck', 'you', 'think', ',', 'man', '?', 'Shit']),
			_elm_lang$core$Native_List.fromArray(
			['Blackjack']),
			_elm_lang$core$Native_List.fromArray(
			['Always', 'keep', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'need', 'to', 'count', 'the', 'deck']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'own', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Drop', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Lead', 'chin', 'check']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'your', 'dome', 'it\'s', 'on', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['Respect', 'me', 'zone', 'or', 'get', 'caught', 'back-handed', 'leather', 'strap', 'hit', 'you', 'so', 'hard', 'knocked', 'flat', 'broke', 'by', 'a', 'bloke', 'with', 'that', 'golden', 'contact', 'glove', 'hold', 'the', 'smoke']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'most', 'high', 'fire', 'bon', 'tap', 'tap']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', 'but', 'fold']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'watch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', 'but', 'fold']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'watch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', 'but', 'fold']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'watch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', 'but', 'fold']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'watch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'do', 'a', 'thing', '...', 'blackjack']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'don\'t', 'forget', 'to', 'watch', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Tongue', 'push', 'bankroll', 'off', 'my', 'lips']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'the', 'hell', 'are', 'you', 'legit', '?']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'the', 'fuck', 'you', 'think', ',', 'man', '?', 'Shit']),
			_elm_lang$core$Native_List.fromArray(
			['Blackjack']),
			_elm_lang$core$Native_List.fromArray(
			['Always', 'keep', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'whats', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Straight']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'the', 'fuck', 'is', 'that...']),
			_elm_lang$core$Native_List.fromArray(
			['Blackjack']),
			_elm_lang$core$Native_List.fromArray(
			['Blackjack', ',', 'don\'t', 'trip', 'you', 'got', 'the', 'bill']),
			_elm_lang$core$Native_List.fromArray(
			['Twenty', 'one', 'shots', 'to', 'your', 'grill']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'why', 'me', ',', 'why', 'me', ',', 'oh', ',', 'I', 'mean', ',', 'oh', ',', 'why', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'see', 'why', 'I', 'need', 'all', 'these', 'hands', ',', 'can\'t', 'stand', 'by', 'these']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'why', 'me', ',', 'why', 'me', ',', 'oh', ',', 'I', 'mean', ',', 'oh', 'why', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'see', 'why', 'I', 'need', 'all', 'these', 'hands', ',', 'can\'t', 'stand', 'by', 'these']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'my', 'palm', 'lines', 'running', ',', 'stretching']),
			_elm_lang$core$Native_List.fromArray(
			['\'Cross', 'my', 'palm', 'like', 'blind', 'cross', 'etching']),
			_elm_lang$core$Native_List.fromArray(
			['Palm', 'mummified', 'chimera', 'filming']),
			_elm_lang$core$Native_List.fromArray(
			['Bronze', 'my', 'palm', 'now', ',', 'all', 'brown', 'palm', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Visits', 'some', 'medium', ',', 'won\'t', 'come', 'near', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Treats', 'me', 'like', 'a', 'meteor']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'scares', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'bony']),
			_elm_lang$core$Native_List.fromArray(
			['Now', ',', 'now', ',', 'Billy', ',', 'not', 'really']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'bony']),
			_elm_lang$core$Native_List.fromArray(
			['Now', ',', 'now', ',', 'Billy', ',', 'not', 'really']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'oi', ',', 'yo', ',', 'ouh', ',', 'aww', ',', 'Billy', ',', 'Billy', ',', 'not', 'really', ',', 'yo', ',', 'raw']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'oi', ',', 'yo', ',', 'ouh', ',', 'aww', ',', 'Billy', ',', 'Billy', ',', 'not', 'really', ',', 'yo', ',', 'oi', ',', 'yo', ',', 'amnesia']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'oi', ',', 'yo', ',', 'ouh', ',', 'aww', ',', 'Billy', ',', 'Billy', ',', 'not', 'really', ',', 'yo', ',', 'raw']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'oi', ',', 'yo', ',', 'ouh', ',', 'aww', ',', 'Billy', ',', 'Billy', ',', 'not', 'really', ',', 'yo', ',', 'oi', ',', 'yo', ',', 'amnesia']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'why', 'me', ',', 'why', 'me', ',', 'oh', ',', 'I', 'mean', ',', 'oh', ',', 'why', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'see', 'why', 'I', 'need', 'all', 'these', 'hands', ',', 'can\'t', 'stand', 'by', 'these']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'why', 'me', ',', 'why', 'me', ',', 'oh', ',', 'I', 'mean', ',', 'oh', ',', 'why', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'see', 'why', 'I', 'need', 'all', 'these', 'hands', ',', 'can\'t', 'stand', 'by', 'these']),
			_elm_lang$core$Native_List.fromArray(
			['Every', 'movement', 'after', 'sudden', 'movement', ',', 'déjà', 'vu', 'abductee']),
			_elm_lang$core$Native_List.fromArray(
			['Sucky', 'sucky']),
			_elm_lang$core$Native_List.fromArray(
			['Sticky', 'psyche', 'touching', 'so', 'many']),
			_elm_lang$core$Native_List.fromArray(
			['Sensory', 'dripping', ',', 'dripping', ',', 'dripping', ',', 'splashing', ',', 'splashing', 'happening']),
			_elm_lang$core$Native_List.fromArray(
			['Already']),
			_elm_lang$core$Native_List.fromArray(
			['Now', ',', 'now', ',', 'Billy', ',', 'not', 'really']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'why', 'me', ',', 'why', 'me', ',', 'oh', ',', 'I', 'mean', ',', 'oh', ',', 'why', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'see', 'why', 'I', 'need', 'all', 'these', 'hands', ',', 'can\'t', 'stand', 'by', 'these']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'bony']),
			_elm_lang$core$Native_List.fromArray(
			['Now', ',', 'now', ',', 'Billy', ',', 'not', 'really']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'bony']),
			_elm_lang$core$Native_List.fromArray(
			['Now', ',', 'now', ',', 'Billy', ',', 'not', 'really']),
			_elm_lang$core$Native_List.fromArray(
			['Amnesia']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'oi', ',', 'yo', ',', 'ouh', ',', 'aww', ',', 'Billy', ',', 'Billy', ',', 'not', 'really', ',', 'yo', ',', 'raw']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'oi', ',', 'yo', ',', 'ouh', ',', 'aww', ',', 'Billy', ',', 'Billy', ',', 'not', 'really', ',', 'yo', ',', 'oi', ',', 'yo', ',', 'amnesia']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'man', 'tsunami', 'feral', ',', 'get', 'barreled', 'in', 'other', 'worlds']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'hand', 'in', 'sea', 'of', 'pearls', ',', 'buried', 'in', 'frozen', 'Jheri', 'curls']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'man', 'Herzog', 'shooting', 'solitaire']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'hands', ',']),
			_elm_lang$core$Native_List.fromArray(
			['savoir', 'nova', 'shaka', 'glare']),
			_elm_lang$core$Native_List.fromArray(
			['Zulu', 'somnambulist', 'lair']),
			_elm_lang$core$Native_List.fromArray(
			['Flick', 'of', 'my', 'wrist', 'ouh', ',', 'shit', ',', 'ouh', ',', 'awhoo', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Phantom', 'lix', 'crude', 'lix', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'man', 'island', 'exclusive']),
			_elm_lang$core$Native_List.fromArray(
			['Flick', 'of', 'my', 'wrist', 'ouh', ',', 'shit', ',', 'ouh', ',', 'awhoo', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Flick', 'of', 'my', 'wrist']),
			_elm_lang$core$Native_List.fromArray(
			['awe', 'shit', ',', 'aww', ',', 'I\'m', 'not', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'tune', 'in', 'telly', 'through', 'your', 'shriveled', 'button', 'pressed', 'jaundice', 'yellow']),
			_elm_lang$core$Native_List.fromArray(
			['She\'s', 'your', 'experience', ',', 'you\'re', 'her', 'experiment']),
			_elm_lang$core$Native_List.fromArray(
			['Her', 'vox', 'limbo', 'fine', 'print', 'in', 'obese', 'sharpie', 'so', 'sorry', 'falsetto']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'her', 'experiment', ',', 'she\'s', 'your', 'experience']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'black', 'quarterback', ',']),
			_elm_lang$core$Native_List.fromArray(
			['throw', 'off', 'this', 'app', 'by', 'his', 'badge']),
			_elm_lang$core$Native_List.fromArray(
			['Blare', 'my', 'organ', 'for', 'juice', ',']),
			_elm_lang$core$Native_List.fromArray(
			['pipes', 'spike', 'blonde', 'kinks', 'on', 'my', 'boots']),
			_elm_lang$core$Native_List.fromArray(
			['Approach', 'me', 'licking', 'his', 'fur', ',', 'whining', ',', 'I', 'demand', 'a', 'word']),
			_elm_lang$core$Native_List.fromArray(
			['Swine', 'must', 'be', 'the', 'all', 'the', 'way', 'hatched', ',', 'hella', 'yolk', 'raining', 'down', 'his', 'chest']),
			_elm_lang$core$Native_List.fromArray(
			['Clucking', 'so', 'fucking', 'hard', ',', 'glance', 'heartbeat', 'through', 'his', 'vest']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'I\'m', 'like', ',', 'Go', 'ahead', ',', 'blood', ',']),
			_elm_lang$core$Native_List.fromArray(
			['but', 'my', 'mind\'s', 'on', 'my', 'wrist']),
			_elm_lang$core$Native_List.fromArray(
			['Five', 'minutes', 'pass', ',', 'I\'m-a', 'have', 'to', 'make', 'you', 'my', 'piss']),
			_elm_lang$core$Native_List.fromArray(
			['Gimp', 'just', 'kept', 'shaking', 'so', 'I', 'had', 'to', 'braid', 'him', 'like', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Comfort', 'over', 'freedom', ',', 'pave', 'a', 'path', 'of', 'leisure', ',', 'have', 'it', 'all']),
			_elm_lang$core$Native_List.fromArray(
			['Freedom', 'over', 'comfort', ',', 'give', 'you', 'back', 'so', 'much', 'leisure', ',', 'feel', 'small']),
			_elm_lang$core$Native_List.fromArray(
			['Xeroxed', 'man', 'dressed', 'in', 'gauze', ',', 'spider', 'silk', ',', 'and', 'menopause']),
			_elm_lang$core$Native_List.fromArray(
			['Mustache', 'showered', 'with', 'applause', ',', 'squished', 'out', 'packets', 'like', 'taco', 'sauce']),
			_elm_lang$core$Native_List.fromArray(
			['Gather', 'crowd', ',', 'laugh', 'it', 'off', ',', 'Mr.', 'Zogged', 'by', 'your', 'boss']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'black', 'quarterback', ',']),
			_elm_lang$core$Native_List.fromArray(
			['air', 'it', 'out', ',', 'albino']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback', 'in', 'all', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['He\'s', 'so', 'white', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'black', 'quarterback', 'in', 'all', 'black', ',', 'albino']),
			_elm_lang$core$Native_List.fromArray(
			['Heady', 'baby', ',', 'Eddie\'s', 'crazy']),
			_elm_lang$core$Native_List.fromArray(
			['Cadabra', ',', 'abrogate', 'need']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'blut', ',', 'bank', 'on', 'absolutely']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'blut', ',', 'bank', 'on', 'absolutely']),
			_elm_lang$core$Native_List.fromArray(
			['Bad', 'ass', 'Betty', 'maiden', 'bb']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'over', 'our', 'heads', 'and', 'sinking']),
			_elm_lang$core$Native_List.fromArray(
			['Autobahning', 'Wonder', 'Stevie']),
			_elm_lang$core$Native_List.fromArray(
			['Faster', 'comrade', 'winking']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback', 'in', 'all', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['Dangling', 'out', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Waning', 'in', 'the', 'Black', 'quarterback']),
			_elm_lang$core$Native_List.fromArray(
			['Kicked', 'under', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Vague', 'it', 'on', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Me', 'versus', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Losing', 'to', 'the', 'Black', 'quarterback', 'in', 'all', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['Cackling', 'like', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Crackling', 'through', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Cool', 'despite', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Abusing', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Lunar', 'as', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Space', 'between', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Fucked', 'beyond', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Eddie', 'as', 'the', 'head', 'that', 'wears', 'us', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'black', 'quarterback', ',', 'air', 'it', 'out', ',', 'albino']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback', 'in', 'all', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['He\'s', 'so', 'white', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'black', 'quarterback', 'in', 'all', 'black', ',', 'albino']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback', 'in', 'all', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['He\'s', 'so', 'white', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'black', 'quarterback']),
			_elm_lang$core$Native_List.fromArray(
			['Heady', 'baby', ',', 'Eddie\'s', 'crazy']),
			_elm_lang$core$Native_List.fromArray(
			['Cadabra', ',', 'abrogate', 'need']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'blut', ',', 'bank', 'on', 'absolutely']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'blut', ',', 'bank', 'on', 'absolutely']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'call', 'this', 'speeding']),
			_elm_lang$core$Native_List.fromArray(
			['Turn', 'the', 'door', 'off', ',', 'we\'re', 'leaving']),
			_elm_lang$core$Native_List.fromArray(
			['Meet', 'you', 'in', 'our', 'next', 'fetus']),
			_elm_lang$core$Native_List.fromArray(
			['Romulus', 'and', 'Remus']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback', 'in', 'all', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'quarterback', 'in', 'all', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'a', 'fucking', 'jug', ',', 'close', 'your', 'circle', 'with', 'my', 'hooves']),
			_elm_lang$core$Native_List.fromArray(
			['I’ll', 'snub', 'you', 'faster', ',', 'I’ll', 'fuck', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'gauge', 'go', 'true', 'vulture']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hate', 'you', ',', 'I', 'hate', 'you', 'colder']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'hate', 'crush', 'your', 'shoulders', ',', 'but', 'you', 'feel', 'me', 'in', 'your', 'liver']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'funeral’s', 'all', 'the', 'blister', ',', 'all', 'corrosive', 'and', 'rupture']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'lingo', 'roaches', 'fucker', ',', 'I', 'feast', 'on', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gagballs', 'drooling', 'pools', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gag', '‘til', 'I’m', 'all', 'drenched']),
			_elm_lang$core$Native_List.fromArray(
			['Gagballs', 'drooling', 'pools', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cum', 'hatch', 'in', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Struck', 'books', 'of', 'match', 'in', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Subwoofer', 'I’m', 'dry', 'humping']),
			_elm_lang$core$Native_List.fromArray(
			['‘Lectrify', 'me', ',', 'I’m', 'fucking']),
			_elm_lang$core$Native_List.fromArray(
			['Apparitions', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'desire', 'agony', 'exposure']),
			_elm_lang$core$Native_List.fromArray(
			['Ground', 'flesh', 'in', 'heat']),
			_elm_lang$core$Native_List.fromArray(
			['Human', 'flesh', 'wreath', 'can’t', 'go', 'nowhere']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'iron', 'to', 'rant', ',', 'I', 'lift', 'my', 'hammer']),
			_elm_lang$core$Native_List.fromArray(
			['Drives', 'us', 'red', ',', 'bottomless', 'pit', 'rising']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'and', 'through', 'my', 'hammer', ',', 'like', 'the', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gagballs', 'drooling', 'pools', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gag', '‘til', 'I’m', 'all', 'drenched']),
			_elm_lang$core$Native_List.fromArray(
			['Gagballs', 'drooling', 'pools', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'hooves’ll', 'snub', 'you', 'faster']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'hooves’ll', 'snub', 'you', 'faster']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'hooves’ll', 'snub', 'you', 'faster']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'hooves’ll', 'snub', 'you', 'faster']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gag', '\'til', 'I’m', 'all', 'drenched']),
			_elm_lang$core$Native_List.fromArray(
			['Gagballs', 'drooling', 'pools']),
			_elm_lang$core$Native_List.fromArray(
			['‘Cause', 'this', 'pit’s', 'bottomless']),
			_elm_lang$core$Native_List.fromArray(
			['I’ll', 'bleed', 'you', 'through', 'this', 'tase', ',', 'don’t', 'get', 'depressed', ',', 'you', 'won’t', 'survive']),
			_elm_lang$core$Native_List.fromArray(
			['I’ll', 'reap', 'you', 'through', 'this', 'maze', 'of', 'masochists', 'bulging', 'with', 'hives']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'this', 'craving', 'slave', 'you', 'bad', 'appoint', 'your', 'fix']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'chemicals', 'molest', 'your', 'sanity', 'anoint', 'at', 'risk']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'classic', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Gag', 'on', 'it', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gag', '\'til', 'I’m', 'all', 'drenched']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gagballs', 'drooling', 'pools', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'you', 'fiending', 'marvelous']),
			_elm_lang$core$Native_List.fromArray(
			['Gag', '‘til', 'I’m', 'all', 'drenched']),
			_elm_lang$core$Native_List.fromArray(
			['Gagballs', 'drooling', 'pools', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fucked', 'you', 'in', 'half']),
			_elm_lang$core$Native_List.fromArray(
			['Pass', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Hold', 'on', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Park', 'the', 'car']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'have', 'no', 'idea', 'where', 'we', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Think', 'we', 'may', 'have', 'drove', 'too', 'far']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'I', 'can', 'see', 'they\'re', 'right', 'behind', 'us']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'there\'s', 'nothing', 'we', 'can', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'can\'t', 'get', 'caught', 'slipping', ',', 'get', 'off', 'that', 'shit', 'and', 'just', 'be', 'cool']),
			_elm_lang$core$Native_List.fromArray(
			['They\'re', 'on', 'to', 'us']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'don\'t', 'look', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['They', 'think', 'they\'re', '\'bout', 'to', 'take', 'us', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', ',', 'I\'m', 'not', 'going', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pass', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'the', 'next', 'corner', ',', 'turn', 'left']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'time', 'to', 'handle', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Nowhere', 'to', 'go', 'don\'t', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'no', 'time', 'for', 'that', 'pussy', 'sh--', 'AGH']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'a', 'minute', 'it\'ll', 'all', 'be', 'finished']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'you', 'don\'t', 'think', 'I', 'speak', 'the', 'truth']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'think', 'I', 'could', 'just', 'be', 'sittin\'', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['Listenin\'', 'to', 'Sonic', 'Youth']),
			_elm_lang$core$Native_List.fromArray(
			['Anywhere', 'when', 'they', 'try', 'to', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'you', 'thinking', 'I\'m', 'gone']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'creep', 'up', 'on', '\'em', 'from', 'behind']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'break', '\'em', 'off', 'one', 'by', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'time', 'it', 'takes', 'you', 'to', 'blink', 'your', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Shit\'ll', 'already', 'be', 'done']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'just', 'in', 'case', 'anything', 'goes', 'wrong']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', 'your', 'right', 'hand', 'on', 'your']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'when', 'they', 'step', 'up', 'out', 'the', 'car']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'know', 'this', 'sounds', 'bizarre']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'now', 'I', 'remember', 'where', 'we', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Do', 'what', 'I', 'say', 'and', 'you\'ll', 'be', 'fine']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'left', 'of', 'the', 'off', 'ramp', ',', 'in', 'the', 'shade']),
			_elm_lang$core$Native_List.fromArray(
			['Under', 'the', 'highway', ',', 'digging', 'graves']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin\'', 'while', 'you\'re', 'sleepin\'', ',', 'steady', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'the', 'bottle', 'what\'s', 'it', 'hold']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'many', 'have', 'I', 'already', 'sold']),
			_elm_lang$core$Native_List.fromArray(
			['Hope', 'not', 'too', 'much', 'cause', 'I', 'feel', 'insane']),
			_elm_lang$core$Native_List.fromArray(
			['Need', 'more', 'than', 'one', 'to', 'numb', 'the', 'pain']),
			_elm_lang$core$Native_List.fromArray(
			['Slithering', 'through', 'my', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Thoughts', 'stuck', 'on', 'that', 'train']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'the', 'track', 'and', 'up', 'in', 'flames']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it', ',', 'I\'ll', 'swallow', 'these', 'blue', 'ones']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'and', 'maybe', 'this', 'big', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'I', 'might', 'as', 'well', 'take', 'a', 'few', 'more', 'with', 'me', 'just', 'in', 'case', 'I', 'get', 'some']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'know', 'you', 'want', '\'em', ',', 'yeah', ',', 'no', 'problem']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'that', 'covered', ',', 'tramp', ',', 'I', 'brought', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'it', 'creeps', 'up', 'on', 'me', 'so', 'slowly']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don\'t', 'notice', 'my', 'eyes', 'rolling']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'back', 'of', 'my', 'head', 'and', 'falling']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', ',', 'somebody\'s', 'calling']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'answer', 'the', 'phone']),
			_elm_lang$core$Native_List.fromArray(
			['Call', '\'em', 'back', 'when', 'I\'m', '\'bout', 'to', 'leave']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'think', 'straight', ',', 'man', ',', 'I\'m', 'so', 'fucking', 'blown']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'when', 'they', 'step', 'up', 'out', 'the', 'car']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'know', 'this', 'sounds', 'bizarre']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'now', 'I', 'remember', 'where', 'we', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Do', 'what', 'I', 'say', 'and', 'you\'ll', 'be', 'fine']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'left', 'of', 'the', 'off', 'ramp', ',', 'in', 'the', 'shade']),
			_elm_lang$core$Native_List.fromArray(
			['Under', 'the', 'highway', ',', 'digging', 'graves']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin\'', 'while', 'you\'re', 'sleepin\'', ',', 'steady', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Down', 'the', 'alleys', 'in', 'the', 'middle', 'of', 'the', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'trashed', ',', 'so', 'high', 'it\'s', 'hard', 'to', 'ride', 'my', 'bike']),
			_elm_lang$core$Native_List.fromArray(
			['Might', 'crash', 'whenever', 'I\'m', 'this', 'fucked', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Drunken', 'monkey', 'through', 'the', 'cuts']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'gives', 'a', 'fuck', '?']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'left', 'of', 'the', 'off', 'ramp', ',', 'in', 'the', 'shade']),
			_elm_lang$core$Native_List.fromArray(
			['Under', 'the', 'highway', ',', 'digging', 'graves']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin\'', 'while', 'you\'re', 'sleepin\'', ',', 'steady', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'left', 'of', 'the', 'off', 'ramp', ',', 'in', 'the', 'shade']),
			_elm_lang$core$Native_List.fromArray(
			['Under', 'the', 'highway', ',', 'digging', 'graves']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin\'', 'while', 'you\'re', 'sleepin\'', ',', 'steady', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Bootleg']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'I', 'don\'t', 'need', 'your', 'help']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick']),
			_elm_lang$core$Native_List.fromArray(
			['cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'bitch', 'try', 'to', 'creep', 'like', 'ivy']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'now', 'ivy', 'don’t', 'like', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Candle', 'gone', 'out', ',', 'ignite', 'my', 'horns', 'aglow']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'a', 'vet', 'rap', 'a', 'bullet', 'through', 'your', 'buttonhole']),
			_elm_lang$core$Native_List.fromArray(
			['You’re', 'making', 'me', 'uncomfortable']),
			_elm_lang$core$Native_List.fromArray(
			['Slumber', 'terror', 'my', 'cavalry']),
			_elm_lang$core$Native_List.fromArray(
			['Sandman', 'point', 'you', 'down', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Hesh', 'made', 'make', 'the', 'rest', 'stiff', 'atrophy']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Act', 'accordingly', ',', 'I', 'got', 'a', 'quota']),
			_elm_lang$core$Native_List.fromArray(
			['High', 'noon', 'smoke', 'rings', ',', 'no', 'high', 'rollers']),
			_elm_lang$core$Native_List.fromArray(
			['Brought', 'your', 'forecast', 'and', 'a', 'shovel']),
			_elm_lang$core$Native_List.fromArray(
			['Bubbles', 'buried', 'in', 'this', 'jungle']),
			_elm_lang$core$Native_List.fromArray(
			['Bubbles', 'buried', 'in', 'this', 'jungle']),
			_elm_lang$core$Native_List.fromArray(
			['Bubbles', 'buried', 'in', 'this', 'jungle']),
			_elm_lang$core$Native_List.fromArray(
			['Polar', 'jungle', 'frozen', 'punters']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'my', 'sculptures', 'look', 'so', 'flustered']),
			_elm_lang$core$Native_List.fromArray(
			['Dress', 'code', 'swallow', 'dick', ',', 'go', 'get', 'your', 'boss']),
			_elm_lang$core$Native_List.fromArray(
			['Security', 'turn', 'green', '‘cause', 'I', 'never', 'floss']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'everything', 'or', 'I', 'up', 'the', 'cost']),
			_elm_lang$core$Native_List.fromArray(
			['Lack', 'pedigree', ',', 'my', 'index', 'push', 'pause']),
			_elm_lang$core$Native_List.fromArray(
			['Notch', 'can’t', 'talk', ',', 'I’m', 'smearing', 'mute']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'have', 'shit', 'locked', ',', 'I', 'hear', 'the', 'proof']),
			_elm_lang$core$Native_List.fromArray(
			['Petty', 'formula', 'never', 'amuses', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'if', 'I', 'ever', 'let', 'a', 'bitch', 'get', 'used', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'weak', ',', 'no', 'respect', ',', 'no', 'chance']),
			_elm_lang$core$Native_List.fromArray(
			['Wick', 'wick', 'cease', 'and', 'desist', 'when', 'I', 'chant']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'sun', ',', 'fuck', 'its', 'kind']),
			_elm_lang$core$Native_List.fromArray(
			['Daylight', 'sucks', ',', 'waste', 'of', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'my', 'mind', ',', 'narrow', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'bide', 'my', 'time', 'like', 'fuck', 'in', 'place']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'day', ',', 'I\'ll', 'wave', 'sun', 'to', 'ice']),
			_elm_lang$core$Native_List.fromArray(
			['Watch', 'its', 'kind', 'get', 'thrown', 'like', 'rice']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cackle', 'stretch', 'out', 'like', 'thunder']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'fucking', 'loud', ',', 'it\'s', 'vulgar']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pull', 'my', 'face', 'out', 'the', 'dirt', 'slow']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'only', 'wake', 'up', 'third', 'of', 'the', 'way', ',', 'narco']),
			_elm_lang$core$Native_List.fromArray(
			['Held', 'to', 'deep', 'rapid', 'eye', 'move', ',', 'hold']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'recede', ',', 'rapid', 'I', 'reload']),
			_elm_lang$core$Native_List.fromArray(
			['Gun', 'my', 'chances', ',', 'closed', 'road', ',', 'no', 'road', 'left', 'to', 'travel']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'know', 'what', 'this', 'calls', 'for']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'s', 'my', 'scalpel', '?', 'Operation', 'cut']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'I\'m', 'bored', ',', 'sew', 'my', 'inner', 'war', 'up', 'like', 'corn', 'rows']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'internal', 'war', 'blows', ',', 'like', 'freezing', 'fog', 'in', 'Oslo']),
			_elm_lang$core$Native_List.fromArray(
			['Frozen', ',', 'I', 'can\'t', 'get', 'soft', ',', 'baptized', 'in', 'hoarfrost']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'carbon', 'monoxide', 'garage']),
			_elm_lang$core$Native_List.fromArray(
			['Freeze', 'your', 'blink', 'like', 'sandman\'s', 'flush']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hate', 'you', 'so', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hate', 'your', 'laws']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hate', 'your', 'need', 'a', 'cause']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hate', 'your', 'faux', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hate', 'every', 'last', 'one', 'of', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'ponder', 'digesting', 'razors', ',', 'just', 'to', 'be', 'done', 'with', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'love', 'you', 'so', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'triple', 'the', 'motherfucker']),
			_elm_lang$core$Native_List.fromArray(
			['Mondo-fisted', ',', 'full', 'of', 'backwards']),
			_elm_lang$core$Native_List.fromArray(
			['From', 'banana', 'town', 'manor']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'slang', 'step', 'like', 'legless', 'lizard']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'around', ',', 'fashion', 'a', 'rocket']),
			_elm_lang$core$Native_List.fromArray(
			['Shoot', 'to', 'Mercury', ',', 'for', 'the', 'winter']),
			_elm_lang$core$Native_List.fromArray(
			['Extended', 'vacation', 'till', 'I', 'decompose', 'on', 'my', 'splinters']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pull', 'my', 'face', 'out', 'the', 'dirt', 'slow']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'only', 'wake', 'up', 'third', 'of', 'the', 'way', ',', 'narco']),
			_elm_lang$core$Native_List.fromArray(
			['Held', 'to', 'deep', 'rapid', 'eye', 'move', ',', 'hold']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'recede', ',', 'rapid', 'I', 'reload']),
			_elm_lang$core$Native_List.fromArray(
			['Gun', 'my', 'chances', ',', 'closed', 'road', ',', 'no', 'road', 'left']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'centuries', 'of', 'damn']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'never', 'been', 'so', 'yawn']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'believe', 'I\'m', 'still', 'standing']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'believe', 'life', 'take', 'this', 'long']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stagger', 'off', 'to', 'find', 'my', 'lighter']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don\'t', 'return', 'until', 'the', 'day', 'Sag', 'A*', 'validates']),
			_elm_lang$core$Native_List.fromArray(
			['Mankind\'s', 'destiny', 'in', 'a', 'worm']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'the', 'way', ',', 'I', 'don\'t', 'pet', 'bleachers']),
			_elm_lang$core$Native_List.fromArray(
			['Court', 'side', 'to', 'nose', 'bleeders']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'I', 'shoot', 'shit', 'with', 'gimps']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'response', ',', 'lose', '\'em', 'once']),
			_elm_lang$core$Native_List.fromArray(
			['Incoming', 'second', 'attempt']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'be', 'real', ',', 'I', 'just', 'shoot', '\'em', 'up', 'just', 'shoot', '\'em', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'clueless', 'strut', 'nailed', 'to', 'crucifix', 'Lilith', 'shoved', 'up', 'her', 'cunt', 'shoved', 'up', 'her', 'cunt']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pull', 'my', 'face', 'out', 'the', 'dirt', 'slow']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'only', 'wake', 'up', 'third', 'of', 'the', 'way', ',', 'narco']),
			_elm_lang$core$Native_List.fromArray(
			['Held', 'to', 'deep', 'rapid', 'eye', 'move', ',', 'hold']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'recede', ',', 'rapid', 'I', 'reload']),
			_elm_lang$core$Native_List.fromArray(
			['Gun', 'my', 'chances', ',', 'closed', 'road', ',', 'no', 'road', 'left']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pull', 'my', 'face', 'out', 'the', 'dirt', 'slow']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'only', 'wake', 'up', 'third', 'of', 'the', 'way', ',', 'narco']),
			_elm_lang$core$Native_List.fromArray(
			['Held', 'to', 'deep', 'rapid', 'eye', 'move', ',', 'hold']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'days', 'I', 'recede', ',', 'rapid', 'I', 'reload']),
			_elm_lang$core$Native_List.fromArray(
			['Gun', 'my', 'chances', ',', 'closed', 'road', ',', 'no', 'road', 'left']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'stone', 'wall', 'it\'s', 'on', ',', 'dog', 'gaze', 'duct', 'taped', 'to', 'the', 'ceiling']),
			_elm_lang$core$Native_List.fromArray(
			['Stucco', 'cave', 'make', 'me', 'illi', ',', 'okay', ',', 'okay', ',', 'feel', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in', 'an', 'eight', 'high', 'abandoned', 'building']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'daylight', ',', 'one', 'midnight', 'lamp', 'lit', 'twenty-four', 'seven']),
			_elm_lang$core$Native_List.fromArray(
			['Murdered', 'out', 'windows', ',', 'two', 'exits']),
			_elm_lang$core$Native_List.fromArray(
			['Street', 'or', 'nosedive', 'to', 'the', 'next', 'life', 'in', 'seconds']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'suicide', 'ain\'t', 'my', 'stallion']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'I\'m', 'surrounded']),
			_elm_lang$core$Native_List.fromArray(
			['Geiger', 'count', 'it', ',', 'not', 'goin\'', 'out', ',', 'shit\'s', '\'bout', 'to', 'get', 'kamikaze']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'nazi']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'the', 'world', 'comes', 'knocking']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'world', ',', 'fuck', 'this', 'body']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'it', 'won\'t', 'be', 'long', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'my', 'nerves', 'wet', 'my', 'brow']),
			_elm_lang$core$Native_List.fromArray(
			['Mood', 'in', 'my', 'tomb', ',', 'red', 'moon', 'heavy']),
			_elm_lang$core$Native_List.fromArray(
			['Sling', 'jaw', 'shot', ',', 'out', 'the', 'window', 'and', 'yell']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'up', 'and', 'get', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'epiphanic', 'amnesia']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in', 'Jimmy', 'Page\'s', 'castle']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'off', 'the', 'planet']),
			_elm_lang$core$Native_List.fromArray(
			['Echo', 'astral']),
			_elm_lang$core$Native_List.fromArray(
			['Vinyl', 'lasso']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'Sacto', 'asshole']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'down', 'for', 'anything']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'around', 'and', 'say', 'anything']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'stone', 'wall', 'it\'s', 'on', ',', 'dog', 'gaze', 'duct', 'taped', 'to', 'the', 'ceiling']),
			_elm_lang$core$Native_List.fromArray(
			['Stucco', 'cave', 'make', 'me', 'illi', ',', 'okay', ',', 'okay', ',', 'feel', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in', 'an', 'eight', 'high', 'abandoned', 'building']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'daylight', ',', 'one', 'midnight', 'lamp', 'lit', 'twenty-four', 'seven']),
			_elm_lang$core$Native_List.fromArray(
			['Murdered', 'out', 'windows', ',', 'two', 'exits']),
			_elm_lang$core$Native_List.fromArray(
			['Street', 'or', 'nosedive', 'to', 'the', 'next', 'life', 'in', 'seconds']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'suicide', 'ain\'t', 'my', 'stallion']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'I\'m', 'surrounded']),
			_elm_lang$core$Native_List.fromArray(
			['Geiger', 'count', 'it', ',', 'not', 'goin\'', 'out', ',', 'shit\'s', '\'bout', 'to', 'get', 'kamikaze']),
			_elm_lang$core$Native_List.fromArray(
			['Aaaaaah!']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'nazi']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'up', 'and', 'get', 'me!']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'life', 'as', 'a', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'one', 'thing', 'I', 'don\'t', 'hate']),
			_elm_lang$core$Native_List.fromArray(
			['Tell', 'me', 'my', 'times', 'almost', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'will', 'say', ',', 'I', 'can\'t', 'wait']),
			_elm_lang$core$Native_List.fromArray(
			['Put', 'your', 'gun', 'to', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'blow', 'smoke', 'in', 'your', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Think', 'you', 'got', 'what', 'it', 'takes', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'up', 'and', 'get', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'tell', ',', 'hell', 'in', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Thirteenth', 'bell;', 'am', 'I', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Or', 'in', 'asylum', '?', 'Pill', 'force-fed']),
			_elm_lang$core$Native_List.fromArray(
			['Lyin\'', 'to', 'myself', ',', 'all', 'by', 'myself']),
			_elm_lang$core$Native_List.fromArray(
			['Strapped', 'down', 'to', 'my', 'bed']),
			_elm_lang$core$Native_List.fromArray(
			['Tongue', 'cut', 'out', 'the', 'mouth', 'of', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'chucked', 'off', 'the', 'river\'s', 'edge']),
			_elm_lang$core$Native_List.fromArray(
			['Think', 'fast:', 'Is', 'it', 'tear', 'gas', 'or', 'fear', 'masked']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'figments', 'of', 'my', 'fragmented', 'mind', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Who\'s', 'my', 'enemy', ',', 'them', 'or', 'me', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Step', 'to', 'me', 'and', 'you\'ll', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Grand', 'delusions', 'magnified']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'truth', ',', 'wastes', 'my', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'good', ',', 'bet;', 'what\'s', 'that', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Footsteps', 'on', 'the', 'stairs', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'could', 'rest;', 'they\'re', 'always', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'are', 'they', '?', 'I', 'don\'t', 'care']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'just', 'know', 'they\'re', 'tryin\'', 'to', 'ex', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'a', 'fuck', ',', 'come', 'up', 'and', 'get', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'softly', 'the', 'supergod', 'dies']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',']),
			_elm_lang$core$Native_List.fromArray(
			['future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Useless', 'information', 'occupies', 'every', 'open', 'space', 'inside', 'your', 'skull']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'what\'s', 'going', 'on', 'every', 'day', ',', 'every', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['Everywhere', ',', 'swear', 'you\'re', 'so', 'international']),
			_elm_lang$core$Native_List.fromArray(
			['Upside', 'down', 'cross', 'on', 'the', 'Jumbotron']),
			_elm_lang$core$Native_List.fromArray(
			['Wait', 'up', ',', 'hold', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Blowing', 'anthrax', 'off', 'my', 'palms']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'what', ',', 'you\'re', 'wrong']),
			_elm_lang$core$Native_List.fromArray(
			['Switch', 'stance', ',', 'face', 'plant']),
			_elm_lang$core$Native_List.fromArray(
			['Napalm', 'fire', 'starters']),
			_elm_lang$core$Native_List.fromArray(
			['Flatlander', ',', 'plug', 'puller']),
			_elm_lang$core$Native_List.fromArray(
			['Nose', 'dive', 'turbulence', 'chartered']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'speak', 'in', 'abbreviations', 'because', 'real', 'life', 'conversation', 'moves', 'too', 'slow']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'the', 'media\'s', 'creation', ',', 'yeah', ',', 'your', 'free', 'will', 'has', 'been', 'taken', 'and', 'you', 'don\'t', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu-qu-qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu-qu-qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'need', 'to', 'vibrate', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'need', 'to', 'vibrate', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'seen', 'without', 'one', 'hundred']),
			_elm_lang$core$Native_List.fromArray(
			['She\'s', 'a', 'satanic', 'priestess']),
			_elm_lang$core$Native_List.fromArray(
			['Anarchy', 'on', 'ice', 'freak', 'flag', 'flying', 'faceless', 'elitist']),
			_elm_lang$core$Native_List.fromArray(
			['Crow', 'on', 'the', 'down', 'low', 'end']),
			_elm_lang$core$Native_List.fromArray(
			['Reppin\'', 'Orion\'s', 'belt']),
			_elm_lang$core$Native_List.fromArray(
			['Atlantis', 'ancient', 'vagina']),
			_elm_lang$core$Native_List.fromArray(
			['Getting', 'dusty', 'on', 'the', 'shelf']),
			_elm_lang$core$Native_List.fromArray(
			['Enter', 'the', 'pigs', 'don\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'hands', 'I\'m', 'shattering', 'jaws']),
			_elm_lang$core$Native_List.fromArray(
			['Double', 'nickles', 'on', 'the', 'dime']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'glam', 'can', 'lick', 'my', 'balls']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Whatchya', 'gonna', 'be', 'when', 'you\'re', 'grown', ',', 'young', 'blood', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Gonna', 'be', 'a', 'helpless', 'drone']),
			_elm_lang$core$Native_List.fromArray(
			['Won\'t', 'ever', 'have', 'to', 'think']),
			_elm_lang$core$Native_List.fromArray(
			['No', ',', 'your', 'head\'ll', 'be', 'linked', 'directly', 'to', 'your', 'cell', 'phone']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'virus', 'is', 'alive', ',', 'I', 'can', 'see', 'it', 'in', 'your', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'infection', 'is', 'full', 'blown']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu-qu-qu-qu-qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Career', 'killer', ',', 'double', 'decker', 'packed', 'with', 'suicidal', 'brides']),
			_elm_lang$core$Native_List.fromArray(
			['Four-armed', 'fury', 'in', 'a', 'filthy', 'dream', 'about', 'splitting', 'your', 'bitches\'', 'thighs']),
			_elm_lang$core$Native_List.fromArray(
			['Enters', 'through', 'unknowing', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Touch', 'the', 'keys;', 'it\'s', 'in', 'your', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'delete', 'it', 'and', 'soon', 'you\'ll', 'find']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'bad', 'you', 'need', 'it', 'all', 'the', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'need', 'to', 'vibrate', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'need', 'to', 'vibrate', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['Shiva', 'slashin\'', 'through', 'your', 'flat', 'screen']),
			_elm_lang$core$Native_List.fromArray(
			['Is', 'nowhere', 'for', 'you', 'to', 'hide']),
			_elm_lang$core$Native_List.fromArray(
			['Strangled', 'by', 'anaconda', 'thumbs', 'to', 'the', 'soundtrack', 'of', 'world', 'genocide']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'thoughts', 'tie', 'knots', 'in', 'silver', 'spoons']),
			_elm_lang$core$Native_List.fromArray(
			['Vampire', 'on', 'the', 'rise']),
			_elm_lang$core$Native_List.fromArray(
			['Punk', 'a', 'chump', 'with', 'a', 'cunt', 'for', 'brains', 'platoon']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'zone', 'and', 'on', 'the', 'grind']),
			_elm_lang$core$Native_List.fromArray(
			['Dead', 'matter', 'disposer', 'from', 'the', 'mountains', 'without', 'peaks']),
			_elm_lang$core$Native_List.fromArray(
			['Catch', 'and', 'release']),
			_elm_lang$core$Native_List.fromArray(
			['Time', 'released', 'horse', 'capsule', 'swallowed', 'to', 'wake', 'the', 'savage', 'beast']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu-qu-qu-qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', 'up', 'or', 'get', 'left', 'behind']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu-qu-qu-qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Gotta', 'get', 'them', 'outta', 'here', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Infected', ',', 'act', 'so', 'weird', ',', 'how\'d', 'you', 'get', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'pathetic']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu-qu-qu-qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Quarantine', 'the', 'virus']),
			_elm_lang$core$Native_List.fromArray(
			['God', 'law']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'need', 'to', 'vibrate', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['Qu-qu-qu']),
			_elm_lang$core$Native_List.fromArray(
			['Culture', 'shock', ',', 'future', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'yourself', ',', 'choke', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'need', 'to', 'vibrate', 'higher', 'so', 'you', 'can', 'capture', 'the', 'opening', 'of', 'the', 'portal', 'that', 'connects', 'this', 'earth', 'of', '3D', 'to', 'one', 'earth', 'of', '4D', 'or', '5D.', 'Going', 'to', 'the-']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'you', 'think', 'you', 'are', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'like', ',', 'Do', 'you', 'know', 'who', 'I', 'am', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'fail', 'to', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'you', 'think', 'you', 'are', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'like', ',', 'Do', 'you', 'know', 'who', 'I', 'am', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'fail', 'to', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Two', 'letter', 'text', ',', 'translation', ':', 'next']),
			_elm_lang$core$Native_List.fromArray(
			['Skip', 'that', 'rerun', 'like', 'ya', 'see', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['Seen', '‘em', 'all', 'get', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'you', 'the', 'slightest', 'I.D.', 'why', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You’re', 'so', 'trifling']),
			_elm_lang$core$Native_List.fromArray(
			['Second', 'I', 'see', 'you', 'coming', 'I’m', 'teeth', 'sucking', 'like', ',', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'voice', ',', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['See', 'my', 'reflection', ',', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['Invited', ',', 'excited', ',', 'eh', ',', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'you', 'think', 'you', 'are', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'like', ',', 'Do', 'you', 'know', 'who', 'I', 'am', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'fail', 'to', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'you', 'think', 'you', 'are', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'like', ',', 'Do', 'you', 'know', 'who', 'I', 'am', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'fail', 'to', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'must', 'confess', ',', 'I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'one’s', 'ever', 'seen', 'me', 'feel', 'shit', 'but', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['Lil’', 'bits', 'of', 'eh', 'gleaming', 'like', 'Piss', 'Christ']),
			_elm_lang$core$Native_List.fromArray(
			['Cover', 'me', 'like', 'skintight']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'my', 'rep', 'is', 'like', 'why', 'they', 'might', 'be', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'kinda', 'sketch']),
			_elm_lang$core$Native_List.fromArray(
			[',', 'I', 'might']),
			_elm_lang$core$Native_List.fromArray(
			['Shoot', 'a', 'glance', 'at', 'the', 'desperate', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Then', 'I', 'forget', 'shit', 'like', 'Death', 'Grips', ',', 'like', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'wave', 'them', 'off', ',', 'I', 'wave', 'them', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['Gotta', 'flake', ',', 'I', 'fuck', '‘em', 'off', '‘cause', 'I', 'ain’t', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'you', 'think', 'you', 'are', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'like', ',', 'Do', 'you', 'know', 'who', 'I', 'am', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'fail', 'to', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'you', 'think', 'you', 'are', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'like', ',', 'Do', 'you', 'know', 'who', 'I', 'am', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'fail', 'to', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'approach', 'like', 'I’m', 'ghost-like']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'out', 'of', 'focus', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'coated', 'with', 'the', 'most', 'stripes']),
			_elm_lang$core$Native_List.fromArray(
			['Late', 'movement', 'on', 'my', 'trajectory']),
			_elm_lang$core$Native_List.fromArray(
			['Anomalous', 'like', 'entropy']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'all', 'things', 'perforated']),
			_elm_lang$core$Native_List.fromArray(
			['They', 'apply', 'iodine', 'to', 'trace', 'this', ',', 'I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Posse', 'up', 'steadily', 'feel', 'your', 'void', 'split', ',', 'I’m', 'like', '...']),
			_elm_lang$core$Native_List.fromArray(
			['Posse', 'up', 'steadily', 'feel', 'your', 'void', 'split', ',', 'I’m', 'like', '...', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'you', 'think', 'you', 'are', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'like', ',', 'Do', 'you', 'know', 'who', 'I', 'am', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'fail', 'to', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'like', ',', 'Eh']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'put', 'your', 'obese', 'flex', 'on', 'ice', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Whose', 'effortless', 'corrupts', 'your', 'dice', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'does', 'you', 'just', 'like', 'I', 'told', 'you', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Tell', 'me', ',', 'what’s', 'it', 'like', ',', 'I\'m', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'be', 'a', ',', 'don’t', 'be', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['‘Bout', 'mummified', 'worm', 'in', 'the', 'sun']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'shit’s', 'up', 'to', 'me', '‘cause']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'figure', 'I’ll', 'watch', 'you', 'urn', ',', 'I’m', 'not', 'concerned']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'on', 'leisure', 'like', ',', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'just', 'on', 'leisure']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'fuss', 'don’t', 'be', 'a', 'medical', 'procedure']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'stamp', 'my', 'fucking', 'visa']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'way', 'too', 'loose', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Catch', 'me', 'hanging', 'from', 'my', 'noose', 'like', ',', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I', 'vandalize', 'full', 'moon', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['You’re', 'so', 'serious', 'ease', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don’t', 'feed', 'animals', ',', 'you', 'seem', 'lost']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'offended', 'like', ',', 'but', 'in', 'the', 'end', 'I’m', 'like', ',', 'eh']),
			_elm_lang$core$Native_List.fromArray(
			['People', 'are', 'tryin\'', 'to', 'hear', 'what', 'I\'m', 'sayin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Both', 'ends', 'of', 'my', 'candle', 'countin\'', 'paces']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'stop', 'chasing', 'each', 'other\'s', 'faces']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'mask', 'that', 'separates', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Bridge', 'their', 'sole', 'desire\'s', 'cravin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'make', 'me', 'take', 'my', 'face', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Show', 'you', 'why', 'I', 'hate', 'soft']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'flock', 'of', 'sheep', 'get', 'shaved', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Lynched', 'by', 'their', 'halos']),
			_elm_lang$core$Native_List.fromArray(
			['Call', 'me', 'crazy', ',', 'but', 'I', 'swear', 'my', 'line\'s', 'been', 'tapped']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'my', 'glass', 'house', 'prepared', 'for', 'surprise', 'attack']),
			_elm_lang$core$Native_List.fromArray(
			['Realized', 'I', 'held', 'the', 'blade', 'inside', 'my', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Omega', 'megalomaniac']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'my', 'glass', 'house', 'prepared', 'for', 'surprise', 'attack']),
			_elm_lang$core$Native_List.fromArray(
			['Realized', 'I', 'held', 'the', 'blade', 'inside', 'my', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['coat', 'hanger']),
			_elm_lang$core$Native_List.fromArray(
			['in', 'your', 'man\'s', 'vagina']),
			_elm_lang$core$Native_List.fromArray(
			['Manic', 'downstroke', 'on', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'it', ',', 'bitch', ',', 'all', 'black', ',', 'can\'t', 'fade', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'it', ',', 'bitch', ',', 'I', 'came', 'to', 'brang', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'bourgeois', ',', 'ODB', 'raw']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'pearl', 'white', 'teeth', ',', 'my', 'Yellowman', 'jaw']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'only', 'what', 'you', 'think', 'I', 'know', 'you', 'should']),
			_elm_lang$core$Native_List.fromArray(
			['Hate', 'myself', 'more', 'than', 'you', 'ever', 'could']),
			_elm_lang$core$Native_List.fromArray(
			['Call', 'me', 'crazy', ',', 'but', 'I', 'swear', 'my', 'line\'s', 'been', 'tapped']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'my', 'glass', 'house', 'prepared', 'for', 'surprise', 'attack']),
			_elm_lang$core$Native_List.fromArray(
			['Realized', 'I', 'held', 'the', 'blade', 'inside', 'my', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Omega', 'megalomaniac']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'my', 'glass', 'house', 'prepared', 'for', 'surprise', 'attack']),
			_elm_lang$core$Native_List.fromArray(
			['Realized', 'I', 'held', 'the', 'blade', 'inside', 'my', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'told', 'you', 'that', 'I\'m', 'Lightning']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'you', 'keep', 'hanging', 'around']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'Lightning', 'ever', 'catches', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['He\'s', 'got', 'to', 'put', 'you', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['About', 'six', 'feet']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'bring', 'this', 'for', 'the', 'ones', 'who', 'fiend', 'to', 'see', 'the', 'truth', 'taken', 'back', 'in', 'pain']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'weakness', 'of', 'this', 'scene', 'of', 'fucks', 'who', 'lack', 'the', 'nuts', 'to', 'claim']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'streets', 'from', 'which', 'that', 'real', 'shit', 'comes', 'to', 'put', 'you', 'up', 'on', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'your', 'name', '?', 'Check', 'it', ',', 'bitch', ',', 'it\'s', 'Death', 'Grips']),
			_elm_lang$core$Native_List.fromArray(
			['Gutter', 'rappin\'', ',', 'anti-sleepin\'', ',', 'no', 'half-steppin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Low', 'life', 'creepin\'', ',', 'high-def', 'freakin\'']),
			_elm_lang$core$Native_List.fromArray(
			['detonation']),
			_elm_lang$core$Native_List.fromArray(
			['Set', 'it', 'off', ',', 'no', 'hesitation', ',', 'audio', 'invasion']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'fuck', 'that', ',', 'can\'t', 'thrust', 'that', 'to', 'a', 'beam', ',', 'that', 'shit', 'had', 'to', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['Machine', 'that', 'lick', 'and', 'let', '\'em', 'blow', 'like', 'cream', ',', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'the', 'magic', 'host', 'self-ream', 'tactic']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'the', 'fuck', '?', 'I', 'mean', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['Ride', 'through', 'your', 'sk-sk-sk-']),
			_elm_lang$core$Native_List.fromArray(
			['Executors', 'of', 'that', 'next', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Nest', 'eye', 'to', 'the', 'left', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'melt', 'your', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Till', 'your', 'bloody', 'neck', 'gets', 'ripped', 'headless']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'Grips!']),
			_elm_lang$core$Native_List.fromArray(
			['Bow', 'down', 'and', 'take', 'this', 'what', 'you', 'get', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Rest', 'in', 'bits', 'as', 'I', 'pace', 'up', 'and', 'down', 'the', 'low', 'end', 'of', 'the', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Stomping', 'rounds', ',', 'automatic', 'fire', 'sounds', 'in', 'your', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Rip', 'them', 'fakes', 'out', 'their', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'test', 'this', ',', 'get', 'this', 'straight', ',', 'no', 'escape']),
			_elm_lang$core$Native_List.fromArray(
			['Rigor', 'mortis', ',', 'dead', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['Strung', 'up', 'and', 'hung', 'by', 'hell-tensity', 'drum']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', 'slap', 'negative', 'space']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'thought', 'that', 'it', 'makes', 'through', 'a', 'cut']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'bit', 'only', 'info', 'can', 'create']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'properly', 'uno', ',', 'dos', ',', 'trés']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'Grips']),
			_elm_lang$core$Native_List.fromArray(
			['Ride', 'through', 'your', 'sk-sk-sk-skull']),
			_elm_lang$core$Native_List.fromArray(
			['Took', 'hit', 'to', 'the', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Dead', 'weight', 'off', 'the', 'hook', ',', 'don\'t', 'hate']),
			_elm_lang$core$Native_List.fromArray(
			['Shook', 'out', 'your', 'footsteps', 'and', 'put', 'back', 'in', 'your', 'place']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['Triple', 'X', 'heat', 'the', 'rain', 'in', 'which', 'we', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['While', 'they', 'choose', 'to', 'get', 'used', 'everyday']),
			_elm_lang$core$Native_List.fromArray(
			['Running', 'highs', 'you', 'might', 'break', 'if', 'their', 'own', 'reek', 'of', 'fear']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'you', 'wish', 'we', 'were', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['While', 'I', 'say', ',', 'Get', 'the', 'fuck', 'out', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Fit', 'to', 'get', 'cut', 'by', 'fist', 'gut', 'if', 'you', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['Thought', 'you', 'was', 'on', 'top', ',', 'but', 'not', 'no', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'right', ',', 'whore', ',', 'we\'re', 'fucking', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['Fucking', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Thought', 'you', 'knew', 'we', 'had', 'shit', 'locked', 'to', 'the', 'beat', 'street', 'don\'t', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['Licking', 'shots', 'for', 'the', 'old', 'school', 'freaks', 'doing', 'the', 'robot']),
			_elm_lang$core$Native_List.fromArray(
			['Hear', 'this', 'devil', 'spit', 'next', 'lower', 'heat', 'blowin\'', 'up', 'yo\'', 'spot']),
			_elm_lang$core$Native_List.fromArray(
			['Fear', 'high', 'drop', 'to', 'your', 'knees', ',', 'trick', ',', 'you', 'know', 'what', 'we', 'want']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'right', ',', 'bitch', ',', 'best', 'believe', 'this', 'that', 'shit', 'you', 'forgot']),
			_elm_lang$core$Native_List.fromArray(
			['Ever', 'was', ',', 'but', 'it', 'is', 'through', 'my', 'blood', ',', 'need', 'that', 'fix']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['Gotta', 'catch', 'that', 'but', 'lead', 'off', 'that', 'high', 'head', 'row']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'me', 'the', 'mic', 'and', 'step', 'back', ',', 'cuz']),
			_elm_lang$core$Native_List.fromArray(
			['Need', 'to', 'rip', 'that', ',', 'watch', 'me', 'bust']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'going', '?', 'Not', 'knowing', 'till', 'we', 'get', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Jack', '\'em', 'off', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'sword', 'what', 'you\'re', 'holding', 'till', 'you', 'get', 'well']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'to', 'hit', '\'em', 'off', 'with', 'all', 'you', 'know', 'and', 'got', 'that', 'gold', 'that', 'make', 'it', 'cracked', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['Control', 'this', 'while', 'I', 'hold', 'this', 'enema', 'death', 'they', 'set', 'my', 'casket', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['Growing', 'like', 'oceans', ',', 'epileptic', 'sex', ',', 'can\'t', 'get', 'past', 'this', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Spiraling', 'too', 'much', ',', 'on', 'like', 'king', 'of', 'the', 'cleaners', 'liquid', 'acid', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'up', 'with', 'that', 'next', 'shit', '?']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'Death', 'Grips']),
			_elm_lang$core$Native_List.fromArray(
			['Illegal', 'spit', 'fire', 'bum', 'rushing', 'you\'re', 'tired', 'as', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'it', 'up', ',', 'I\'m', 'here', ',', 'look', ',', 'don\'t', 'touch', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['We\'re', 'done', 'and', 'whip', 'that', ',', 'fuck', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'cut', 'you', ',', 'don\'t', 'try', 'it', ',', 'can\'t', 'deny', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Cracks', 'off', 'every', 'time', 'that', 'you', 'bite', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'fuck', 'when', 'I', 'don\'t', 'buy', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'up', 'with', 'that', 'next', 'shit', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah!', 'It\'s', 'Death', 'Grips']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'board', 'this', 'train', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'your', 'name', '?', 'Check', 'it', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Jack', 'the', 'rip', 'in', 'a', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'just', 'shrunken', 'head', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'your', 'name', '?', 'Tic-tacking']),
			_elm_lang$core$Native_List.fromArray(
			['J-just', 'status']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'Grips']),
			_elm_lang$core$Native_List.fromArray(
			['Nuclear', 'fallout', 'flesh', 'and', 'fire', 'in', 'the', 'hole']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'Grips', 'is', 'some', 'thrash', ',', 'it', 'goes', 'right', 'through', 'your', 'sk-sk-sk-skull']),
			_elm_lang$core$Native_List.fromArray(
			['Told', 'you', 'that', 'I\'m', 'lightning']),
			_elm_lang$core$Native_List.fromArray(
			['Told', 'you', 'that', 'I\'m', 'lightning']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['Nah', ',', 'n-nah', ',', 'n-nah', ',', 'wh-what', 'it', 'do', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Humiliation', ',', 'I', 'refuse']),
			_elm_lang$core$Native_List.fromArray(
			['Inside', 'shaking', ',', 'nah', ',', 'I\'m', 'cool', ',', 'got', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'not', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Bow', 'down', ',', 'give', 'it-give', 'it', 'to', 'me', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'gotta', 'do', 'my', 'girl', ',', 'she\'s', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['B-B-Been', 'only', 'since', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'truck']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'me', 'some', 'more', ',', 'I', 'said', 'it\'s', 'calm']),
			_elm_lang$core$Native_List.fromArray(
			['Callers', 'at', 'the', 'door']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Jump', 'on', '\'em', ',', 'my', 'bumps', 'in', 'the', 'whip']),
			_elm_lang$core$Native_List.fromArray(
			['Crazy', 'from', 'the', 'heat', ',', 'talk', 'to', 'the-', 'erghh']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Perversion', 'mastiff', ',', 'seven', 'fingers', 'left']),
			_elm_lang$core$Native_List.fromArray(
			['Still', 'curtain', 'pumping', ',']),
			_elm_lang$core$Native_List.fromArray(
			['n\'oh', ',', 'I', 'lay', 'Jesus', 'fresh', 'to', 'death']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'God', 'is', 'panic', ',', 'they', 'gon\'', 'tremble']),
			_elm_lang$core$Native_List.fromArray(
			['Here', 'me', 'swear', 'you', 'seen', 'the', 'devil']),
			_elm_lang$core$Native_List.fromArray(
			['Hear', 'me', 'step-to', 'with', 'it', ',', 'fatal']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'faces', 'roundtable']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'break', 'this', 'cycle', ',', 'broke', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Told', 'me', ',', 'You\'ll', 'see', ',', 'you', 'don\'t', 'know', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Kinda', 'freaky', ',', 'she\'s', 'bony']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'sh-she', 'on', 'me', 'on', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Listen', 'closely']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'don\'t', 'we', ',', 'one', 'night', 'only', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['-ck', 'around', 'and', 'lose', 'my', 'mind', ',', 'I\'m', 'on', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'runnin\'', 'out', 'of', 'tricks']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['Jungling', 'out', 'of', 'my', 'shoulders']),
			_elm_lang$core$Native_List.fromArray(
			['Light', 'at', 'the', 'end', 'of', 'the', 'tunnel\'s']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'lie', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'look', 'forward', 'to', 'runnin\'', '\'em', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Eye', 'of', 'the', 'storm', 'of', 'the', 'dolo']),
			_elm_lang$core$Native_List.fromArray(
			['There', 'you', 'go', ',', 'there', 'you', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['Down', 'that', 'road', ',', 'down', 'that', 'road']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'in', 'exhaust', 'with', 'the', 'windows', 'closed']),
			_elm_lang$core$Native_List.fromArray(
			['Shut', 'the', 'door', ',', 'nothing', 'more', 'I', 'can', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'see', 'why', 'it', 'would', 'be', 'like', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Tell', 'her', 'roam', 'like', 'palindrome', ',', 'back', 'and', 'forth']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'all', 'that', 'be', ',', 'I', 'can', 'see', 'from', 'my', 'back', 'porch']),
			_elm_lang$core$Native_List.fromArray(
			['Do', 'it', 'that', ',', 'do', 'it', ',', 'I', 'can\'t', 'try', 'no', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['Difficult', 'to', 'live', 'it', 'slow', ',', 'I\'m', 'so', 'bored']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'I\'m', 'not', 'ever', 'squattin\'', 'on', 'my', 'bike']),
			_elm_lang$core$Native_List.fromArray(
			['Ridin\'', '\'round', 'like', ',', 'Kid', ',', 'well', ',', 'now', 'I', 'have', 'no', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['Cha-ching', 'slot', ',', 'micro', 'dot']),
			_elm_lang$core$Native_List.fromArray(
			['Bet', 'and', 'lost', 'my', 'spleen', 'in', 'Reno']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'them', 'dimes', 'for', 'your', 'casino']),
			_elm_lang$core$Native_List.fromArray(
			['Jungle', 'bars', ',', 'we', 'mescalina']),
			_elm_lang$core$Native_List.fromArray(
			['Thin', 'walls', ',', 'heaving']),
			_elm_lang$core$Native_List.fromArray(
			['Linoleum', 'splitting']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'in', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Space', 'emitting', 'a', 'metallic', 'smell', ',', 'can\'t', 'take', 'its', 'sickness']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'it', ',', 'runnin\'', 'him', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'it', ',', 'runnin\'', 'him', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'it', ',', 'runnin\'', 'him', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['-ck', 'around', 'and', 'lose', 'my', 'mind', ',', 'I\'m', 'on', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'out', 'of', ',', 'runnin\'', 'out', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'runnin\'', 'out', 'of', 'tricks']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['666', ',', 'I\'m', 'at', 'the', 'gates']),
			_elm_lang$core$Native_List.fromArray(
			['9', ',', 'the', 'gate\'s', 'coming', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['8', ',', 'I', 'escape']),
			_elm_lang$core$Native_List.fromArray(
			['11', ',', 'I\'ll', 'never', 'be', 'found']),
			_elm_lang$core$Native_List.fromArray(
			['7', ',', 'I', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['13', ',', 'swallow', 'my', 'tail']),
			_elm_lang$core$Native_List.fromArray(
			['15', ',', 'I\'m', 'on', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['51', ',', 'I\'m', 'off', 'the', 'scale']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'it', ',', 'runnin\'', 'him', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'it', ',', 'runnin\'', 'him', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Down']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', ',', 'Mya']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Runnin\'', 'it', ',', 'runnin\'', 'him', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Down']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that\'s', 'all', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'I', 'break', 'it', ',', 'can', 'I', 'break', 'it', 'down', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'melter']),
			_elm_lang$core$Native_List.fromArray(
			['Cock', 'the', 'barrel', ',', 'trigger', 'range']),
			_elm_lang$core$Native_List.fromArray(
			['Swerving', 'donuts', '\'gainst', 'the', 'grain']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'blame', 'ghost', 'rider', ',', 'whips', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Kaleidoscopic', 'bullet', 'train']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'gave', 'up', ',', 'just', 'a', 'clutch', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Burn', 'a', 'bitch', 'and', 'burn', 'that', 'strip', 'to', 'dust']),
			_elm_lang$core$Native_List.fromArray(
			['Dust', 'to', 'ashes', ',', 'ash', 'to', 'mush']),
			_elm_lang$core$Native_List.fromArray(
			['Mashed', 'off', 'the', 'madness', 'man', ',', 'combust']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'magic', 'flames', 'race', 'out', 'because', 'they', 'forgot', 'they', 'can\'t', 'get', 'down', 'enough']),
			_elm_lang$core$Native_List.fromArray(
			['Low', 'to', 'the', 'ground', 'limbo', ',', 'don\'t', 'touch', 'this', 'merchandise', ',', 'it\'s', 'way', 'too', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['Ride', 'the', 'currents', 'like', 'a', 'snake', ',', 'wicked', 'rhymes']),
			_elm_lang$core$Native_List.fromArray(
			['Whirlpools', 'I\'ll', 'wade', 'through', 'haters', ',', 'posers', ',', 'fools', ',', 'and', 'flakes']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'this', 'breaks', 'the', 'rules', 'it', 'takes']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'not', 'just', 'bump', 'what', 'you', 'waste', 'your', 'time', 'and', 'money', 'tryin\'', 'to', 'chase']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'know', 'why', 'you\'re', 'wasting', 'time', ',', 'just', 'know', 'what', 'I', 'do', 'with', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'do', 'impossible', 'things']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'do', 'impossible', 'things']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'does', 'happiness', 'really', 'mean', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'to', 'go', 'when', 'abrupt', 'woken', 'up', 'from', 'the', 'dream']),
			_elm_lang$core$Native_List.fromArray(
			['Madness']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'trip', 'man', ',', 'just', 'know', 'we', 'come']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'won\'t', 'even', 'be', 'close', 'to', 'done']),
			_elm_lang$core$Native_List.fromArray(
			['Till', 'shit', 'hit', 'the', 'fan', 'and', 'make', 'that', 'flesh', 'melt', 'off', 'your', 'plastic', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'till', 'it', 'dies', ',', 'don\'t', 'stop', 'it', 'until', 'you', 'feel', 'that', 'flatline', 'drop']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'hell', 'and', 'back', ',', 'fuck', 'yeah', ',', 'why', 'not', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'not', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Smash', 'till', 'I', 'break', 'out', ',', 'can\'t', 'stop', ',', 'won\'t', 'stop', ',', 'don\'t', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['Ghosts', 'can\'t', 'get', 'caught', ',', 'run', 'it', 'back', ',', 'get', 'cracked', 'to', 'the', 'beat', 'one', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['Get-get-get', 'back', ',', 'keep', 'in', 'sync', 'rhymes']),
			_elm_lang$core$Native_List.fromArray(
			['Endorphins', 'cashed', 'by', 'your', 'own', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'coughing', ',', 'the', 'track', 'freeze', 'and', 'unwind']),
			_elm_lang$core$Native_List.fromArray(
			['Weed', 'is', 'of', 'kind', 'vaporize', ',', 'freak', 'man', 'down', 'from', 'way', 'this', 'rides', ',', 'how', 'this', 'rides']),
			_elm_lang$core$Native_List.fromArray(
			['Feet', 'don\'t', 'touch', 'the', 'ground', 'inside', ',', 'I', 'twist', 'the', 'rhythm', 'pounds', '\'em', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'measurements', 'of', 'sound', 'rewind']),
			_elm_lang$core$Native_List.fromArray(
			['Forever', 'and', 'a', 'day', 'forgot']),
			_elm_lang$core$Native_List.fromArray(
			['Forget', 'to', 'let', 'it', 'bang', 'and', 'walk', 'the', 'plank', 'that', 'hang', 'from', 'slang', 'concocted', 'to', 'destroy', 'the', 'frame', 'got', 'bent', 'by', 'globe']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'takes', 'the', 'pain', 'in', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['Ahh!']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'know', 'why', 'you\'re', 'wasting', 'time', ',', 'just', 'know', 'what', 'I', 'do', 'with', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'do', 'impossible', 'things']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'do', 'impossible', 'things']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'does', 'happiness', 'really', 'mean', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'to', 'go', 'when', 'abrupt', 'woken', 'up', 'from', 'the', 'dream']),
			_elm_lang$core$Native_List.fromArray(
			['Execution', 'makes', 'it', 'hot', ',', 'electrocute', 'the', 'wave', ',', 'the', 'shock']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'brains', 'of', 'heads', 'that', 'came', 'to', 'watch', 'us', 'claim', 'the', 'game', 'haters', 'can\'t', 'knock', 'us']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'ones', 'bring', 'that', 'bloody', 'bass', ',', 'we', 'came', 'to', 'melt', 'your', 'fucking', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can', 'keep', 'it', ',', 'I', 'don’t', 'want', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Back', ',', 'my', 'only', 'inside', 'pocket']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'up', 'on', 'it', ',', 'man', 'get', 'off', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Can’t', 'you', 'see', 'me', '?', 'Best', 'to', 'drop', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'it', ',', 'quit', 'it', ',', 'quick', ',', 'next', 'topic']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'we', 'fuck', 'it', 'off', 'and', 'rock', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Paradox', 'knot', ',', 'disco', 'sock', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'unplug', 'it', 'with', 'your', 'logic']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it', ',', 'fuck', 'it', ',', 'fuck', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'unplug', 'it', 'with', 'your']),
			_elm_lang$core$Native_List.fromArray(
			['Take', 'out', 'your', 'eyes', 'and', 'watch', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'you', 'cry', ',', 'feel', 'like', 'I', 'lost', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Didn’t', 'lose', 'it', ',', 'never', 'had', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'another', 'clueless', 'faggot']),
			_elm_lang$core$Native_List.fromArray(
			['Bound', 'and', 'gagged', 'by', 'fear']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'pathetic', 'to', 'be', 'tragic']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'that', 'shit', 'outta', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'know', 'why', 'you', 'waste', 'your', 'time', ',', 'just', 'know', 'what', 'I', 'do', 'with', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'do', 'impossible', 'things']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'do', 'impossible', 'things']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'does', 'happiness', 'really', 'mean', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'to', 'go', 'when', 'abrupt', 'woken', 'up', 'from', 'the', 'dream']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can’t', 'deny', 'I’ve', 'not', 'the', 'slightest', 'idea', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['Even', 'attempt', 'to', 'try']),
			_elm_lang$core$Native_List.fromArray(
			['See', 'them', 'sigh']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'settle', 'with', 'knowing', 'barely', 'enough', 'to', 'get', 'by']),
			_elm_lang$core$Native_List.fromArray(
			['Automatic', 'supernova', ',', 'so', 'what', '?', 'Automatic', ',', 'automatic', ',', 'automatic', ',', 'automatic', ',', 'automatic', ',', 'automatic', ',', 'automatic']),
			_elm_lang$core$Native_List.fromArray(
			['We’ll', 'storm', 'in', 'the', 'gates', ',', 'subatomic']),
			_elm_lang$core$Native_List.fromArray(
			['Flame', 'drippin\'', 'onto', 'this', 'coal', ',', 'setting', 'hellfire', 'to', 'your', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Helter', 'Skelter', ',', 'face', 'melter']),
			_elm_lang$core$Native_List.fromArray(
			['Helter', 'Skelter', ',', 'face', 'melter']),
			_elm_lang$core$Native_List.fromArray(
			['Helter', 'Skelter', ',', 'face', 'melter']),
			_elm_lang$core$Native_List.fromArray(
			['Helter', 'Skelter', ',', 'face', 'melter']),
			_elm_lang$core$Native_List.fromArray(
			['Helter', 'Skelter']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'how', 'I', 'freak', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'how', 'I', 'freak', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Double']),
			_elm_lang$core$Native_List.fromArray(
			['Bangin\'', 'bones', 'on', 'Roland']),
			_elm_lang$core$Native_List.fromArray(
			['Jungle', 'rottin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Chicken', 'skeletal', 'system', 'bombin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Unidentified', 'genre', 'abductor']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'it', 'from', 'the', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Formula', 'fucker']),
			_elm_lang$core$Native_List.fromArray(
			['Hooded', 'executor', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Cookie', 'cutter']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'wait', 'to', 'pull', 'that', 'trigger', ',', 'shut', 'gunner']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'so', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Cock', 'the', 'hammer']),
			_elm_lang$core$Native_List.fromArray(
			['Droppin\'', 'thunder']),
			_elm_lang$core$Native_List.fromArray(
			['Double', 'helix', 'stopper', 'under']),
			_elm_lang$core$Native_List.fromArray(
			['Influence', 'of', 'thatat']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'knock', ',', 'what', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'fuckin\'', 'G', ',', 'what', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'fuckin\'', 'G', ',', 'fuck', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'you', 'don\'t', 'know', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Run', 'it', ',', 'blood', ',', 'ride', 'reel', 'to', 'reel', 'low', 'key']),
			_elm_lang$core$Native_List.fromArray(
			['How\'s', 'it', 'feel', ',', 'feel', ',', 'feel', ',', 'easy']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'it', 'bloody', ',', 'make', 'it', 'bloody']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'really', 'nothin\'', 'else']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'see', 'any', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['Gone', 'in', 'the', 'cause']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bleeding', 'for']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know', 'I', 'freak', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', 'helix']),
			_elm_lang$core$Native_List.fromArray(
			['Live', 'in', 'a', 'trance', ',', 'can\'t', 'see', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'want', 'to', 'anyway', ',', 'anywhere']),
			_elm_lang$core$Native_List.fromArray(
			['What\'d', 'you', 'say', '?', 'Forgot', 'you', 'were', 'even', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'float', 'astray']),
			_elm_lang$core$Native_List.fromArray(
			['Clear', 'the', 'air']),
			_elm_lang$core$Native_List.fromArray(
			['Be', 'back', 'when', 'you', 'think', 'I\'m', 'gone']),
			_elm_lang$core$Native_List.fromArray(
			['Blue', 'jay', 'way', ',', 'don\'t', 'belong']),
			_elm_lang$core$Native_List.fromArray(
			['Double', 'helix', 'phoenix', 'from', 'beyond']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'so', 'you', 'really', 'wanna', 'know', 'how', 'I', 'freak', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Rorschach', 'ink', 'blot']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'street']),
			_elm_lang$core$Native_List.fromArray(
			['Skid', 'row', 'mark']),
			_elm_lang$core$Native_List.fromArray(
			['Show', 'me', 'the', 'beast']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'lust', ',', 'you', 'can\'t', 'hide']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'balled', 'up', ',', 'fist', 'gut', 'inside']),
			_elm_lang$core$Native_List.fromArray(
			['Strapped', 'to', ',', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['Missions', 'set', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'so', 'much', 'pride']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can', 'see', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'a', 'dead', 'man\'s', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'maps', 'with', 'directions']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'answers', ',', 'just', 'questions']),
			_elm_lang$core$Native_List.fromArray(
			['Second', 'guessing', 'everything', 'you', 'swore', 'was', 'so', ',', 'can\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Tell', 'you', 'what', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I\'ll', 'tell', 'you', 'why', 'I', 'threw']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'rules', 'out', 'the', 'window']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'took', 'an', 'oath', 'to', 'be', 'true']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'the', 'one', 'and', 'only', 'view']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'man', 'can', 'ever', 'truly', 'know', ',', 'know', ',', 'know', ',', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'how']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know', 'I', 'freak', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', 'helix']),
			_elm_lang$core$Native_List.fromArray(
			['Been', 'there', 'and', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['\'Nough', 'tracks', 'I', 'am']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'rail', 'to', 'the', 'road']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'run', 'like', 'scam']),
			_elm_lang$core$Native_List.fromArray(
			['Drop', 'it', 'on', 'the', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'it\'s', 'on', 'like', 'damn']),
			_elm_lang$core$Native_List.fromArray(
			['Well', 'I', 'never', 'thought']),
			_elm_lang$core$Native_List.fromArray(
			['Uh', 'huh', ',', 'oh', 'yeah']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'I', 'didn\'t', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Wake', 'up', ',', 'young', 'blood']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'nobody', 'sleepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'they', 'never', 'was']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'the', 'cliff', 'in', 'a', 'blur', 'of', 'black', 'blood', 'and', 'hoodoo', 'hexin\'', 'guts']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'thought', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['heard', 'them', 'ghetto', 'birds', 'hollering', 'every', 'time', 'I', 'bust']),
			_elm_lang$core$Native_List.fromArray(
			['Swallow', 'it', 'down', 'and', 'lap', 'it', 'up', ',', 'can\'t', 'do', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m-a', 'have', 'to', 'cut']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', ',', 'double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know', 'I', 'freak', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Double']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'you', 'really', 'wanna', 'know', 'how', 'I', 'freak', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Double', ',', 'double', 'helix']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'me', 'live', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Feels', 'like', 'a', 'wheel']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'that', 'call']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'hold', 'shit', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it', 'all']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'going', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'use', 'me', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'worth', 'shit', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Truth', 'be', 'sold']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'fucked', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Death', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Let\'s', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'don\'t', 'touch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'fuck-fuck', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'don\'t', 'you', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'ain\'t', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'know', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'ain\'t', 'shit', 'either']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me', ',', 'deceiver']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'believe', 'you', 'Every', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'one', 'believes', 'me', ',', 'But', 'that\'s', 'alright']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'prove', 'them', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'these', 'fucks']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'these', 'fucks']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'at', 'me', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'hold', 'shit', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it', 'all']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'going', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'use', 'me', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'worth', 'shit', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Truth', 'be', 'sold']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'fucked', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Death', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Let\'s', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'don\'t', 'touch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'fuck-fuck', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'don\'t', 'you', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Well', ',', 'I\'ll', 'be']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', ',', 'fuck', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'take', 'you', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'leave', 'you', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', ',', 'luck', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'need', 'it', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'matter', 'where']),
			_elm_lang$core$Native_List.fromArray(
			['We\'re', 'there', 'first']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'what', 'you', 'worth']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'what', 'you', 'bought']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'like', 'I', 'thought']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'ain\'t', 'got', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'trip', ',', 'I', 'got', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'I', 'got', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', ',', 'fuck', ',', 'riff']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'a', 'complex']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'for', 'you', 'to']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'and', 'hold']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'deuce', 'deuce']),
			_elm_lang$core$Native_List.fromArray(
			['Catch', 'no', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Yes', ',', 'yes', ',', 'yes']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'should', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Yes', ',', 'yes', ',', 'yes']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'should', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Yes', ',', 'yes', ',', 'yes']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'should', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', ',', 'fuck', ',', 'fuck', ',', 'fuck', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', ',', 'fuck', ',', 'fuck', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'that', 'call']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'hold', 'shit', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it', 'all']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'going', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'use', 'me', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'worth', 'shit', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Truth', 'be', 'sold']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'fucked', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Death', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Let\'s', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'don\'t', 'touch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'fuck-fuck', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'don\'t', 'you', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck-fuck', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'bloom', 'bam', ',', 'fuck', 'bam', 'blew', ',', 'fuck', 'boom', 'blam']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'new', 'glam']),
			_elm_lang$core$Native_List.fromArray(
			[',', 'fuck', 'glam', 'new', ',', 'fuck', 'goon', 'gland']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'fluke', 'flam', ',', 'fuck', 'flam', 'fluke', ',', 'fuck', 'half', 'shoe']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'glim', 'sham', ',', 'fuck', 'gam', 'through', ',', 'we', 'statue']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'well-well', ',', 'fuck', 'our', 'will', ',', 'we\'re', 'idiot']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'well-well', ',', 'fuck', 'our', 'will', ',', 'we\'re', 'idiot']),
			_elm_lang$core$Native_List.fromArray(
			['Fucks', 'buy', 'us', ',', 'fuck', 'bind', 'spell', ',', 'we', 'cakewalk']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'suspect', ',', 'we', 'foretell', ',', 'we', 'séance']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'he', 'she', 'they', 'we', 'make', 'me', 'feel']),
			_elm_lang$core$Native_List.fromArray(
			['Ugh', ',', 'ugh', ',', 'ugh']),
			_elm_lang$core$Native_List.fromArray(
			['Woe', 'is', 'why', 'us', 'he', 'she', 'they', 'fuss']),
			_elm_lang$core$Native_List.fromArray(
			['Wah', ',', 'wah', ',', 'wah', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Blah', ',', 'blah', ',', 'blah', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Woe', 'is', 'why', 'them', ',', 'why', 'can\'t', 'reach', 'us']),
			_elm_lang$core$Native_List.fromArray(
			['Blah', ',', 'blah', ',', 'blah', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Wah', ',', 'wah', ',', 'wah', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'have', 'never', 'been', 'our', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'don\'t', 'you', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'me', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Third', 'rail']),
			_elm_lang$core$Native_List.fromArray(
			['over', 'one', 'nine', 'breaker']),
			_elm_lang$core$Native_List.fromArray(
			['Slit', 'throat', ',', 'cut', 'creator']),
			_elm_lang$core$Native_List.fromArray(
			['Hung', 'from', 'dem', 'nail', ',']),
			_elm_lang$core$Native_List.fromArray(
			['hang', '\'em', 'high', ',']),
			_elm_lang$core$Native_List.fromArray(
			['savior', 'faire']),
			_elm_lang$core$Native_List.fromArray(
			['Trans-siberian', 'epic', ',', 'trek', 'through', 'dat']),
			_elm_lang$core$Native_List.fromArray(
			['Next', 'switch', ',']),
			_elm_lang$core$Native_List.fromArray(
			['set', 'it', 'off', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Jackal-headed', 'dawn', 'of', 'the', 'under']),
			_elm_lang$core$Native_List.fromArray(
			['Check', 'it', ',', 'check', 'one', 'check']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can', 'suck', 'it', '\'til', 'I', 'get', 'disgusted']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', ',', 'naw', 'fuck', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'me', 'wit', 'that', 'weak', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', 'slapped', 'across', 'the', 'street', 'and', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'crack', ',']),
			_elm_lang$core$Native_List.fromArray(
			['wanna', 'know', 'where', 'I\'ll', 'be', 'at', ',', 'whatever']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'off', 'mine', 'I', 'got', 'that', 'juice', ',', 'noo', 'style']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'your', 'brain', 'stem', 'as']),
			_elm_lang$core$Native_List.fromArray(
			['my', 'combat', 'boots', 'grind', 'your', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'cadence', 'of', 'this', 'dreath', 'stompin\'', 'mu']),
			_elm_lang$core$Native_List.fromArray(
			['Sick', 'as', 'fuck', 'contagion', 'wagin\'', 'war', 'with', 'all', 'you', 'knew', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Mossberg', 'ballistic', 'flux', 'massive']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shure', 'beta', '58a', 'hazmatted']),
			_elm_lang$core$Native_List.fromArray(
			['Pump', 'pump', 'slugster', 'radioactive']),
			_elm_lang$core$Native_List.fromArray(
			['Ride', 'through', 'a', 'mine', 'field', 'laced', 'wit', 'black', 'magic']),
			_elm_lang$core$Native_List.fromArray(
			['Straight', 'from', 'the', 'mayday', ',', 'naw', 'fuck', 'that', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['Broke', 'off', 'its', 'axis', ',', 'polar', 'shifted', 'granite']),
			_elm_lang$core$Native_List.fromArray(
			['Knock', 'made', 'ta', 'off', 'every', 'last', 'bitch', 'on', 'this', 'planet']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', ',', 'naw', ',', 'fuck', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Came', 'ta', 'bad', 'dem', 'brains', '\'til', 'dem', 'neck', 'bones', 'crack']),
			_elm_lang$core$Native_List.fromArray(
			['Arrested', 'cardiac', ',']),
			_elm_lang$core$Native_List.fromArray(
			['black', 'mass', 'murder', 'rap']),
			_elm_lang$core$Native_List.fromArray(
			['Dealer', 'push', 'your', 'wig', 'all', 'the', 'way', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'wear', 'your', 'face', 'like', 'a', 'yamakulapse']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'can', 'tell', 'where', 'you\'re', 'at']),
			_elm_lang$core$Native_List.fromArray(
			['Eyes', 'stuck', 'on', 'the', 'sky', 'always', 'gettin\'', 'jacked']),
			_elm_lang$core$Native_List.fromArray(
			['Tryin', 'ta', 'lookin', 'the', 'mirror', 'like', 'fuck', 'that', ',', 'naw']),
			_elm_lang$core$Native_List.fromArray(
			['Blalala-lack...', 'mist']),
			_elm_lang$core$Native_List.fromArray(
			['Mister', 'who', 'you', 'rise', 'to', 'picket', 'pick', 'it', 'big', 'dick']),
			_elm_lang$core$Native_List.fromArray(
			['Rise', 'the', 'gutter', 'to', 'the', 'surface', ',', 'never', 'did', ',', 'never', 'did']),
			_elm_lang$core$Native_List.fromArray(
			['Liked', 'to', 'wonder', 'why', 'the', 'shoot', 'end', 'of', 'the', 'ache']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'lost', 'in', 'the', 'shutter', 'of', 'the', 'view']),
			_elm_lang$core$Native_List.fromArray(
			['Click', 'click', ',', 'freeze', 'frame', 'in', 'the', 'floor']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'the', 'ceiling', 'like', 'a', 'brick', ',']),
			_elm_lang$core$Native_List.fromArray(
			['fired', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Every', 'day', ',', 'every', 'day', ',', 'every', 'night', ',', 'every', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['Every', 'day', 'giving', 'less', 'of', 'a', 'shit', 'from', 'the', 'side']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'the', 'eye', 'of', 'a', 'shadow']),
			_elm_lang$core$Native_List.fromArray(
			['That\'s', 'what\'s', 'this', ',']),
			_elm_lang$core$Native_List.fromArray(
			['fired', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'high', ',', 'told', 'rigor', 'mortis', 'grips', ',']),
			_elm_lang$core$Native_List.fromArray(
			['fired', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'sky', 'and', 'out', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'is', 'it', ',', 'where', 'the', 'fuck', 'is', 'it', 'and', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['Did', 'it', 'happen', 'like', 'this', ',']),
			_elm_lang$core$Native_List.fromArray(
			['fired', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Told', 'ride', 'through', 'the', 'sky', 'of', 'black', 'mist']),
			_elm_lang$core$Native_List.fromArray(
			['Two', ',', 'three', ',', 'four', ',', 'five']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'must', 'die', ',', 'this', 'is', 'it', ',', 'fired', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Zero', 'the', 'sleazy']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'forget', 'that', 'you', 'control', 'how', 'that', 'go', 'drink', 'gallon']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'the', 'speed', 'of', 'wrist', 'to', 'read', 'through', 'chose', 'me', 'push', 'to', 'turn']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'his', 'soul', 'to', 'wear', 'yellow', 'to', 'funerals', ',', 'fired', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Magic', 'coffin', 'all', 'his', 'end', 'of', 'the', 'way', 'let', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'a', 'high', 'that', 'keeps', 'me', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'yeah', 'yeah', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['Are', 'you', 'sure', 'that', 'it\'s', 'tonight']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'if', 'it\'s', 'not', 'I', 'might', 'get', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'complication', 'of', 'your', 'system']),
			_elm_lang$core$Native_List.fromArray(
			['Unexpected', ',', 'don\'t', 'wanna', 'be', 'the', 'victim']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'are', 'preaching', 'our', 'own', 'funerals', 'as', 'we', 'go', 'through', 'this', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'forget', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'it', ',', 'split', 'it', ',', 'make', 'it', 'cum', ',', 'get', 'wetted']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'again', ',', 'come', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Seen', 'it', 'happening', 'before', 'it', 'even', 'happened']),
			_elm_lang$core$Native_List.fromArray(
			['Swing', 'the', 'door', 'open', 'and', 'buck', '\'em', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Course', 'I\'m', 'just', 'fuckin\'', 'around']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'nevermind', 'the', 'way', 'it', 'sound']),
			_elm_lang$core$Native_List.fromArray(
			['Everytime', 'we', 'make', 'it', 'pound']),
			_elm_lang$core$Native_List.fromArray(
			['Straight', 'into', 'the', 'pavement', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Whip', 'it', ',', 'bleed', 'it', ',', 'cause', 'it', 'pain']),
			_elm_lang$core$Native_List.fromArray(
			['Eat', 'it', ',', 'shit', 'it', 'out', 'and', 'change']),
			_elm_lang$core$Native_List.fromArray(
			['Lanes', 'at', 'speeds', 'that', 'seem', 'insane']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'them', 'petty', 'pussy', 'brains']),
			_elm_lang$core$Native_List.fromArray(
			['Push', 'me', 'and', 'they', 'will', 'be', 'slain']),
			_elm_lang$core$Native_List.fromArray(
			['Drag', 'this', 'past', 'the', 'point', 'and', 'claim']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'shit', 'as', 'if', 'it', 'was', 'your', 'name']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'it\'s', 'attached', 'to', 'yours', 'with', 'chains']),
			_elm_lang$core$Native_List.fromArray(
			['Own', 'it', 'till', 'shit', 'goes', 'up', 'in', 'flames']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'there', 'really', 'ain\'t', 'no', 'one', 'to', 'blame']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'one', 'to', 'blame', ',', 'its', 'all', 'the', 'same']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'blurred', 'faces', 'on', 'subway', 'trains']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'take', 'it', 'man', ',', 'can\'t', 'take', 'the', 'pain']),
			_elm_lang$core$Native_List.fromArray(
			['Pain', 'of', 'the', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'me', 'insane']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'me', 'fuck', 'up', 'my', 'whole', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['Pain', 'of', 'the', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'me', 'insane']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'me', 'fuck', 'up', 'my', 'whole', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['What\'d', 'you', 'bring', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'d', 'you', 'get', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'it', 'here', ',', 'I', 'said', 'don\'t', 'sweat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'gonna', 'take', 'it', 'around', 'for', 'a', 'bit']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'I', 'don\'t', 'care', 'if', 'you', 'give', 'a', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Punk!']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'gonna', 'take', 'it', 'around', 'for', 'a', 'bit']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'I', 'don\'t', 'care', 'if', 'you', 'give', 'a', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Punk!', 'Bitch!']),
			_elm_lang$core$Native_List.fromArray(
			['Goin\'', 'through', 'the', 'motions']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'to', 'make', 'shit', 'happen', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'knowin', 'where', 'we\'re', 'goin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'rollin\'', 'like', 'waves', 'at', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'it', 'or', 'break', 'it', ',', 'just', 'dont', 'sleep', 'on', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Sleepers', 'get', 'shot', 'down', ',', 'you', 'lost', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Trying', 'to', 'act', 'like', 'you', 'got', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Nevermind', 'the', 'way', 'it', 'sound']),
			_elm_lang$core$Native_List.fromArray(
			['Every', 'time', 'we', 'make', 'it', 'pound']),
			_elm_lang$core$Native_List.fromArray(
			['Straight', 'into', 'the', ',', 'sirens', ',', 'ground']),
			_elm_lang$core$Native_List.fromArray(
			['Shot', 'it', 'up', ',', 'get', 'it', 'hot', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'know', 'you', 'know', 'you', 'said', 'too', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['Did', 'too', 'much', ',', 'way', 'too', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', 'shit', ',', 'man', ',', 'that', 'shit', 'sucks']),
			_elm_lang$core$Native_List.fromArray(
			['Volume', 'turned', 'all', 'the', 'way', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'already', 'know', 'it\'s', 'going', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'tell', 'you', 'when', 'I\'ve', 'had', 'enough']),
			_elm_lang$core$Native_List.fromArray(
			['Shut', 'up', 'right', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'it', 'in', 'my', 'gut', 'right', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Throw', 'it', 'up', ',', 'give', 'it', 'up', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Buck', ',', 'buck', ',', 'buck', ',', 'buck', ',', 'buck', ',', 'blow!']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'over', 'the', 'place', ',', 'all', 'in', 'your', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'up', 'in', 'it', ',', 'talkin\'', '\'bout', 'can\'t', 'wait']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'bring', 'it', 'even', 'harder', 'the', 'next']),
			_elm_lang$core$Native_List.fromArray(
			['Time', 'I', 'creep', 'through', 'the', 'beat', 'possessed']),
			_elm_lang$core$Native_List.fromArray(
			['Howling', 'on', 'that', 'mountain', 'peak']),
			_elm_lang$core$Native_List.fromArray(
			['Feeling', 'like', 'hell\'s', 'up', 'in', 'my', 'chest']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'the', 'fire', 'rise', ',', 'rise', 'so', 'high', ',', 'so', 'high', 'I', 'rise']),
			_elm_lang$core$Native_List.fromArray(
			['Eye', 'to', 'eye', 'with', 'death']),
			_elm_lang$core$Native_List.fromArray(
			['Gazing', 'through', 'me', 'like', 'an', 'uzi']),
			_elm_lang$core$Native_List.fromArray(
			['Spraying', 'through', 'me', ',', 'bag', 'of', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Body', 'bag', 'of', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'nothing', 'left']),
			_elm_lang$core$Native_List.fromArray(
			['Toe', 'tag', 'me', ',', 'zip', 'the', 'bag', 'and', 'check', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no', ',', 'he\'s', 'been', 'resurrected']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no', ',', 'he\'s', 'been', 'resurrected']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up', ',', 'get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Zombie', 'holocaust', 'in', 'seconds']),
			_elm_lang$core$Native_List.fromArray(
			['Nowhere', 'to', 'go', ',', 'nowhere', 'to', 'hide']),
			_elm_lang$core$Native_List.fromArray(
			['From', 'what', 'we', 'know', ',', 'down', 'deep', 'inside']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'if', 'I', 'know', ',', 'just', 'wanna', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['Until', 'the', 'wheels', 'fall', 'off', 'and', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Run', 'off', 'the', 'road', ',', 'no', 'telling', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['Hear', 'them', 'cry', ':']),
			_elm_lang$core$Native_List.fromArray(
			['Man', ',', 'I', 'just', 'don\'t', 'wanna', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'don\'t', 'wanna', ',', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['Is', 'everything', 'always', 'happening']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'blink', 'of', 'eye', '?']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'better', 'be', 'the', 'last', 'time', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Ever', 'see', 'you', 'in', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Steadily', 'to', 'the', 'death', 'passing']),
			_elm_lang$core$Native_List.fromArray(
			['Everything', 'that', 'don\'t', 'seem', 'tight']),
			_elm_lang$core$Native_List.fromArray(
			['Goin\'', 'through', 'the', 'motions']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'to', 'make', 'shit', 'happen', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'knowin\'', 'where', 'we\'re', 'goin']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'rollin\'', 'like', 'waves', 'at', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', ',', 'I', 'keep']),
			_elm_lang$core$Native_List.fromArray(
			['Good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', ',', 'I', 'keep', 'giving', 'bad']),
			_elm_lang$core$Native_List.fromArray(
			['Giving', 'bad', 'people', '...']),
			_elm_lang$core$Native_List.fromArray(
			['Giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['Those', 'who', 'can’t', 'adjust']),
			_elm_lang$core$Native_List.fromArray(
			['Ten', 'fold', 'dismantled', 'pus']),
			_elm_lang$core$Native_List.fromArray(
			['Operandi', 'minus', 'modus']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'phlegm', 'you', 'to', 'dust']),
			_elm_lang$core$Native_List.fromArray(
			['Dragon', 'chaser', ',', 'I’ll', 'quit', 'later']),
			_elm_lang$core$Native_List.fromArray(
			['Asteroid', 'to', 'midnight', 'powder']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'like', 'genocide', 'just', 'louder']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who', 'we', 'going', 'after']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'them', ',', 'I’m', 'a', 'have', 'to', 'fuck', 'them', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'the', 'closer', ',', 'shows', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Bet', 'bitch', 'much', ',', 'you', 'wanna', 'bet', ',', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', 'that', 'o', 'and', 'x', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Feed', 'a', 'narc', 'my', 'driveway']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'trip', '‘cause', 'I', 'may']),
			_elm_lang$core$Native_List.fromArray(
			['Giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'cough', 'up', 'locks', ',', 'catatonic', 'jingle']),
			_elm_lang$core$Native_List.fromArray(
			['Mausoleum', 'treatment', ',', 'strands', 'of', 'chemo']),
			_elm_lang$core$Native_List.fromArray(
			['Unwell', 'out', 'my', 'slit', 'gashes', 'tempo']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'crawling', 'with', 'swarming', 'crescendo']),
			_elm_lang$core$Native_List.fromArray(
			['Execution', ',', 'my', 'nerves', 'I’m', 'slurring']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'deserve', 'this', ',', 'your', 'worthless', 'disturbs', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'you', 'to', 'next', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'doesn’t', 'sound', 'so', 'bad', 'when', 'I', 'say', 'it', 'in', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'you', 'to', 'next', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'doesn’t', 'sound', 'so', 'bad', 'when', 'I', 'say', 'it', 'in', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['Mutter', ',', 'stagger', ',', 'I’m', 'in', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'you', 'covered', ',', 'scatter', ',', 'you’re', 'meant', 'to']),
			_elm_lang$core$Native_List.fromArray(
			['Pull', 'a', 'lick', 'real', 'quick']),
			_elm_lang$core$Native_List.fromArray(
			['Made', 'off', 'I', 'fling']),
			_elm_lang$core$Native_List.fromArray(
			['Shallow', 'plots', 'for', 'senile', 'kings']),
			_elm_lang$core$Native_List.fromArray(
			['Cruelty', 'keeps', 'me', 'even']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'moan', 'like', 'flukes']),
			_elm_lang$core$Native_List.fromArray(
			['Euphoria', 'follows', 'puke']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'won’t', 'pull', 'my', 'chute']),
			_elm_lang$core$Native_List.fromArray(
			['Giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['Giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['Lead', 'heavy', 'lead', 'us', ',', 'remedy', 'us']),
			_elm_lang$core$Native_List.fromArray(
			['Hem', 'me', ',', 'I', 'suffer', 'to', 'catch', 'reflux']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'ingest', 'reflux']),
			_elm_lang$core$Native_List.fromArray(
			['Bile', 'threshold', ',', 'cortex', 'deluxe']),
			_elm_lang$core$Native_List.fromArray(
			['Torture', 'me', 'lust']),
			_elm_lang$core$Native_List.fromArray(
			['Holding', 'horses', 'with', 'bacteria', ',', 'uhh']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'downing', 'this', 'vial', 'of', 'old', 'Siberia']),
			_elm_lang$core$Native_List.fromArray(
			['Overtoning', 'mysteria']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'you', 'to', 'next', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'doesn’t', 'sound', 'so', 'bad', 'when', 'I', 'say', 'it', 'in', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'you', 'to', 'next', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'doesn’t', 'sound', 'so', 'bad', 'when', 'I', 'say', 'it', 'in', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['Giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'giving', 'bad', 'people', 'good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['Good', 'ideas']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'your', 'feet']),
			_elm_lang$core$Native_List.fromArray(
			['Overlord']),
			_elm_lang$core$Native_List.fromArray(
			['Government', 'plates']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'location']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'corporation']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'location']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'get', 'get', 'get', 'got', 'got', 'got', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'rush', 'to', 'my', 'head', 'bit', 'hot', 'lock']),
			_elm_lang$core$Native_List.fromArray(
			['Poppin\'', 'off', 'the', 'fuckin\'', 'block', 'knot']),
			_elm_lang$core$Native_List.fromArray(
			['Clockin\'', 'wrist', 'slit', 'watch', 'bent', 'thought', 'bot']),
			_elm_lang$core$Native_List.fromArray(
			['Tailpipe', 'draggin’', ',', 'volume', 'blastin’', ',', 'bailin’', 'out', 'my', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Red', 'light', 'flash']),
			_elm_lang$core$Native_List.fromArray(
			['Dem', 'stop', 'I', 'smash']),
			_elm_lang$core$Native_List.fromArray(
			['Abraxas', ',', 'hydroplane', ',', 'massive']),
			_elm_lang$core$Native_List.fromArray(
			['Catch', 'this', 'flight', 'flow', 'rainin’', 'madness']),
			_elm_lang$core$Native_List.fromArray(
			['Mastered', 'mine', 'and', 'laced']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'ave', 'with', 'black', 'cat', 'fish', 'tailin’', 'waves', 'of', 'stratus']),
			_elm_lang$core$Native_List.fromArray(
			['Curb', 'right', 'to', 'far', 'left', 'lane']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'wait', 'for', 'me', ',', 'if', 'I', 'care']),
			_elm_lang$core$Native_List.fromArray(
			['\'Bout', 'anything', ',', 'anywhere']),
			_elm_lang$core$Native_List.fromArray(
			['Losin’', 'myself', ',', 'I', 'get', 'the', 'stares']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'I’m', 'lookin’', 'at', ',', 'wasn’t', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Wasn’t', 'there', ',', 'wasn’t', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Wasn’t', 'there', ',', 'wasn’t', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Nothin’', 'out', 'there', ',', 'can’t', 'stay', 'inside']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'the', 'bar', ',', 'sleep', 'deprived']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'drove', 'the', 'car', '?', 'I’m', 'still', 'alive']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'in', 'smoke', ',', 'moon', 'was', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['How’d', 'you', 'know', ',', 'didn’t', 'say', 'I', 'did']),
			_elm_lang$core$Native_List.fromArray(
			['Whose', 'is', 'this', '?', 'You', 'know', 'what', 'this', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'do', 'you', 'know', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'get', 'get', 'get', 'got', 'got', 'got', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'rush', 'to', 'my', 'head', 'bit', 'hot', 'lock']),
			_elm_lang$core$Native_List.fromArray(
			['Poppin\'', 'off', 'the', 'fuckin\'', 'block', 'knot']),
			_elm_lang$core$Native_List.fromArray(
			['Clockin\'', 'wrist', 'slit', 'watch', 'bent', 'thought', 'bot']),
			_elm_lang$core$Native_List.fromArray(
			['Fly', 'inside', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Rot', 'dem', 'big', 'shot', 'simp', 'slot', 'shit', 'but', 'a', 'one', 'hit', 'quick', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'many', 'ways', 'to', 'skin', 'the', 'frame']),
			_elm_lang$core$Native_List.fromArray(
			['Remember', 'when', 'first', 'got', 'strange']),
			_elm_lang$core$Native_List.fromArray(
			['Now', 'I', 'just', 'think', 'it', 'life', 'obey']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'what', 'comes', 'next', 'right', 'away']),
			_elm_lang$core$Native_List.fromArray(
			['Right', 'away', ',', 'right', 'away']),
			_elm_lang$core$Native_List.fromArray(
			['Right', 'away', ',', 'right', 'away']),
			_elm_lang$core$Native_List.fromArray(
			['Raise', 'the', 'cup', ',', 'tilt', 'it', 'dry']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'black', 'cloud', ',', 'cover', 'the', 'sky']),
			_elm_lang$core$Native_List.fromArray(
			['Tongue', 'through', 'pupil', 'of', 'your', 'eye']),
			_elm_lang$core$Native_List.fromArray(
			['Sickness', 'moves', 'you', 'can’t', 'deny']),
			_elm_lang$core$Native_List.fromArray(
			['Lickin\'', 'through', 'you', ',', 'mastermind']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'mercy', 'man', 'cry']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'I’m', 'knowin\'', 'and', 'you', 'know', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['Nail', 'through', 'mental', 'ever', 'dem', 'try']),
			_elm_lang$core$Native_List.fromArray(
			['Pigeon', 'hole', 'me', 'get', 'crucified']),
			_elm_lang$core$Native_List.fromArray(
			['Can’t', 'clone', 'this', 'edge']),
			_elm_lang$core$Native_List.fromArray(
			['What’s', 'it', 'cost', 'to', 'lose', 'your', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Wit', 'out', 'end', 'up', 'lost']),
			_elm_lang$core$Native_List.fromArray(
			['Should', 'be', 'askin\'', 'where’s', 'the', 'safe']),
			_elm_lang$core$Native_List.fromArray(
			['Born', 'with', 'a', 'ski', 'mask', 'on', 'my', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'get', 'get', 'get', 'got', 'got', 'got', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'rush', 'to', 'my', 'head', 'bit', 'hot', 'lock']),
			_elm_lang$core$Native_List.fromArray(
			['Poppin\'', 'off', 'the', 'fuckin\'', 'block', 'knot']),
			_elm_lang$core$Native_List.fromArray(
			['Clockin\'', 'wrist', 'slit', 'watch', 'bent', 'thought', 'bot']),
			_elm_lang$core$Native_List.fromArray(
			['Lycanthropic', 'manic', 'cycles']),
			_elm_lang$core$Native_List.fromArray(
			['Fire', 'water', ',', 'burnin\'', 'bibles']),
			_elm_lang$core$Native_List.fromArray(
			['Wake', 'up', 'ragin\'', ',', 'call', 'a', 'taxi']),
			_elm_lang$core$Native_List.fromArray(
			['Take', 'me', 'to', 'the', 'nearest', 'city']),
			_elm_lang$core$Native_List.fromArray(
			['Cell', 'light', 'up', ',', 'yeah', 'get', 'at', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'it', 'quick', 'though', ',', 'blood', ',', 'I\'m', 'busy']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'busy', ',', 'get', 'busy', ',', 'get', 'busy']),
			_elm_lang$core$Native_List.fromArray(
			['Drilled', 'a', 'hole', 'into', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Pierced', 'the', 'bone', 'and', 'felt', 'the', 'breeze']),
			_elm_lang$core$Native_List.fromArray(
			['Lift', 'my', 'thoughts', 'out', 'dem', 'sick', 'bed']),
			_elm_lang$core$Native_List.fromArray(
			['Wit', 'a', 'pair', 'of', 'crow', 'skeleton', 'wings']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'nothin’', 'since', 'then', 'it', 'seems']),
			_elm_lang$core$Native_List.fromArray(
			['Been', 'floatin’', 'through', 'the', 'nexus', 'threadin’', 'dreams']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'did', 'you', 'know', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Yo']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'get', 'get', 'get', 'got', 'got', 'got', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'rush', 'to', 'my', 'head', 'bit', 'hot', 'lock']),
			_elm_lang$core$Native_List.fromArray(
			['Poppin\'', 'off', 'the', 'fuckin\'', 'block', 'knot']),
			_elm_lang$core$Native_List.fromArray(
			['Clockin\'', 'wrist', 'slit', 'watch', 'bent', 'thought', 'bot']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'get', 'get', 'get', 'got', 'got', 'got', 'got']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'rush', 'to', 'my', 'head', 'bit', 'hot', 'lock']),
			_elm_lang$core$Native_List.fromArray(
			['Poppin\'', 'off', 'the', 'fuckin\'', 'block', 'knot']),
			_elm_lang$core$Native_List.fromArray(
			['Clockin\'', 'wrist', 'slit', 'watch', 'bent', 'thought', 'bot']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['Guillotine', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Sit', 'in', 'the', 'dark', 'and', 'ponder', 'how']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'fit', 'to', 'make', 'the', 'bottom', 'fall', 'through', 'the', 'floor']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'they', 'all', 'fall', 'down', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'of', 'the', 'shadows', 'barrage', 'of', 'witch', 'tongue']),
			_elm_lang$core$Native_List.fromArray(
			['Cobra', 'spit', 'over', 'apocalyptic', 'cult', 'killer', 'cauldron', 'smoke']),
			_elm_lang$core$Native_List.fromArray(
			['Stomp', 'music', 'seriously', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'stop', 'the', 'groove', 'licks', 'jaws', 'clear', 'off', 'them', 'locks', 'relentless', 'raw', 'movement']),
			_elm_lang$core$Native_List.fromArray(
			['Fit', 'to', 'knock', 'you', 'from', 'here', 'to', 'that', 'g-spot', 'body', 'rock', 'connected']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'everything', 'you', 'want', ',', 'ever', 'did', 'want', ',', 'we', 'got', 'it', 'why', 'not', 'come', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Stick', 'your', 'head', 'in', 'that', 'hole', 'and', 'watch', 'me', 'drop', 'this', 'cold', 'guillotine', 'death', 'sentence', ',', 'yah!', 'Yah!']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['Guillotine', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Hidden', 'art', ',']),
			_elm_lang$core$Native_List.fromArray(
			['between', 'and', 'beneath']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['every', 'fragmented', ',', 'figure', 'of', 'speech']),
			_elm_lang$core$Native_List.fromArray(
			['Tongue', 'in', 'reverse', ',', 'whenever', 'the', 'beat']),
			_elm_lang$core$Native_List.fromArray(
			['Causes', 'my', 'jaws', 'to', 'call', 'out', ',', 'out', ',', 'out', ',', 'out', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'screens', 'flashing', 'red', ',', 'can\'t', 'see', 'shit', 'but', 'heads']),
			_elm_lang$core$Native_List.fromArray(
			['Spinning', 'exorcist', 'like', 'planets', 'out', 'of', 'orbit', 'off', 'the', 'edge']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'mine', 'axis']),
			_elm_lang$core$Native_List.fromArray(
			['whipping', 'through', 'doors', 'to', 'far', 'more', 'than', 'all', 'that’s', 'ever', 'been', 'said', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Tie', 'the', 'chord', ',', 'kick', 'the', 'chair', 'and', 'you\'re', 'dead', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['Guillotine', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Guillotine', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'of', 'a', 'trick', 'in', 'a', 'bucket', ',', 'body', 'of', 'a', 'trick', 'in', 'a', 'bag']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'thrown', 'in', 'the', 'fire', 'like', 'fuck', 'it', ',', 'gotta', 'burn', 'it', 'before', 'it', 'goes', 'bad']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'too', 'many', 'times', 'been', 'disgusted', 'by', 'the', 'stench', 'of', 'rot', 'is', 'such', 'a', 'drag', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'broke', 'by', 'the', 'street', 'like', 'blood', 'stained', 'glass', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Choke', 'on', 'these', 'nuts', 'till', 'the', 'very', 'last', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['Serial', 'number', ',', 'killing', 'machine', ',', 'the', 'illest', 'of', 'means']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'an', 'end', 'built', 'on', 'the', 'filthy', 'sound', 'you\'re', 'experiencing', ',', 'yah!', 'Yah!']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'goes', ',', 'it', 'goes', ',', 'it', 'goes', ',', 'it', 'goes']),
			_elm_lang$core$Native_List.fromArray(
			['Guillotine', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Guillotine', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Tinted', 'windows', ',', 'bulletproof']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'slip', 'knot', 'fixing', 'rope', 'to', 'noose']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'grave', 'stone', 'grinder', 'of', 'cold', 'steel']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'passion', 'that', 'blinds', 'me', 'so', 'I', 'feel', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'let', 'go', ',', 'no', 'it', 'flows', 'through', 'our', 'veins']),
			_elm_lang$core$Native_List.fromArray(
			['Blows', 'through', 'our', 'tunnels', 'and', 'rattles', 'our', 'chains']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'they', 'all', 'fall', 'down', ',', 'yah!']),
			_elm_lang$core$Native_List.fromArray(
			['I', ',', 'I', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['666']),
			_elm_lang$core$Native_List.fromArray(
			['Blood']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'a', 'sad', 'cum', ',', 'bb']),
			_elm_lang$core$Native_List.fromArray(
			['Wasting', 'time', 'feels', 'god']),
			_elm_lang$core$Native_List.fromArray(
			['Wasting', 'time', 'feels', 'good']),
			_elm_lang$core$Native_List.fromArray(
			['Ah']),
			_elm_lang$core$Native_List.fromArray(
			['Feels']),
			_elm_lang$core$Native_List.fromArray(
			['Put']),
			_elm_lang$core$Native_List.fromArray(
			['Shoot', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'busy', ',', 'ooo']),
			_elm_lang$core$Native_List.fromArray(
			['My']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'shoot', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'busy', ',', 'ooo']),
			_elm_lang$core$Native_List.fromArray(
			['Black', ',', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['Birds']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'busy']),
			_elm_lang$core$Native_List.fromArray(
			['I', ',', 'I', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['666']),
			_elm_lang$core$Native_List.fromArray(
			['Blood']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'a', 'sad', 'cum', ',', 'bb']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'instant', 'has', 'an', 'awful', 'end']),
			_elm_lang$core$Native_List.fromArray(
			['No']),
			_elm_lang$core$Native_List.fromArray(
			['You']),
			_elm_lang$core$Native_List.fromArray(
			['Feel']),
			_elm_lang$core$Native_List.fromArray(
			['Shoot', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'busy', ',', 'ooo']),
			_elm_lang$core$Native_List.fromArray(
			['Black', ',', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['Birds']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'busy', ',', 'ooo']),
			_elm_lang$core$Native_List.fromArray(
			['Black', ',', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['You']),
			_elm_lang$core$Native_List.fromArray(
			['Birds']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'busy']),
			_elm_lang$core$Native_List.fromArray(
			['Wasting', 'time', 'feels', 'god']),
			_elm_lang$core$Native_List.fromArray(
			['Wasting', 'time', 'feels', 'good']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'a', 'sad', 'cum', ',', 'bb']),
			_elm_lang$core$Native_List.fromArray(
			['I', ',', 'I', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['666']),
			_elm_lang$core$Native_List.fromArray(
			['Blood']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'a', 'sad', 'cum', ',', 'bb']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Hot', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no', ',', 'that', 'pedagogue', 'grab', 'the', 'microphone', ',', 'ease', 'back', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Hot', 'head', ',', 'oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Pedagogue', 'grab', 'the', 'microphone', ',', 'ease', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Hot', 'head', ',', 'oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Pedagogue', 'grab', 'the', 'microphone', ',', 'ease', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Hot', 'head', ',', 'oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Pedagogue', 'grab', 'the', 'microphone', ',', 'ease', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Blo', ',', 'blo', ',', 'blo']),
			_elm_lang$core$Native_List.fromArray(
			['Hot', 'head', ',', 'oh', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Pedagogue', 'grab', 'the', 'microphone', ',', 'ease', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'no', ',', 'hot', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Raw', ',', 'no', 'fuckin\'', 'filter', ',', 'crooked', 'needle', ',', 'hot', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Raw', ',', 'no', 'fuckin\'', 'filter', ',', 'crooked', 'needle', ',', 'hot', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Self-inflicted']),
			_elm_lang$core$Native_List.fromArray(
			['What\'d', 'you', 'tell', 'them', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'just', 'told', '\'em', 'hell\'s', 'existence']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'you', 'know', 'me', ',', 'don\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'my', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'presence', 'flog', 'your', 'confidence']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'want', 'a', 'brand', 'new', 'complex', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Now', 'on', ',', 'I\'ll', 'call', 'you', ',', 'go', 'fetch']),
			_elm_lang$core$Native_List.fromArray(
			['Self-inflicted']),
			_elm_lang$core$Native_List.fromArray(
			['What\'d', 'you', 'tell', 'them', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'just', 'told', '\'em', 'hell\'s', 'existence']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'you', 'know', 'me', ',', 'don\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'my', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'used', 'to', 'fetch', ',', 'I\'ll', 'shoot', ',', 'you', 'catch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'snap', ',', 'you', 'come', ',', 'I', 'don\'t', 'call', 'you', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Act', 'natural', ',', 'my', 'style', 'attack']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'it', 'out', ',', 'give', 'it', 'out', ',', 'give', 'it', 'out', ',', 'give', 'it', 'out', ',', 'give', 'it', 'out', ',', 'give', 'it', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Dive', 'bomber', ',', 'dive', 'bomber']),
			_elm_lang$core$Native_List.fromArray(
			['Clip', 'a', 'hundred', 'doves', 'like', 'a', 'bald-headed', 'rasta']),
			_elm_lang$core$Native_List.fromArray(
			['Clot', 'of', 'the', 'dot', ',', 'got', 'a', 'head', 'a', 'piranha']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'it', 'up', ',', 'give', 'it', 'up', ',', 'give', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['My...']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'mota']),
			_elm_lang$core$Native_List.fromArray(
			['Hooded', 'regime', 'like', 'ebola']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'mota']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'mota']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'mota']),
			_elm_lang$core$Native_List.fromArray(
			['Hooded', 'regime', 'like', 'ebola']),
			_elm_lang$core$Native_List.fromArray(
			['Blink', 'and', 'you\'re', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Wouldn\'t', 'shut', 'the', 'fuck', 'up', ',', 'answered', 'for', 'their', 'behavior']),
			_elm_lang$core$Native_List.fromArray(
			['Cleft', 'palate', 'creator']),
			_elm_lang$core$Native_List.fromArray(
			['Morgue', 'head', 'forsaker']),
			_elm_lang$core$Native_List.fromArray(
			['Phallus', 'cloud', ',', 'call', 'me', 'vapor']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'ebola']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'mota']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'mota']),
			_elm_lang$core$Native_List.fromArray(
			['Hooded', 'regime', 'like', 'ebola']),
			_elm_lang$core$Native_List.fromArray(
			['Blink', 'and', 'you\'re', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Wouldn\'t', 'shut', 'the', 'fuck', 'up', ',', 'answered', 'for', 'their', 'behavior']),
			_elm_lang$core$Native_List.fromArray(
			['Cleft', 'palate', 'creator']),
			_elm_lang$core$Native_List.fromArray(
			['Morgue', 'head', 'forsaker']),
			_elm_lang$core$Native_List.fromArray(
			['Phallus', 'cloud', ',', 'crown', 'me', 'vapor']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'cobra', 'head', 'draped', 'in', 'mota']),
			_elm_lang$core$Native_List.fromArray(
			['Hooded', 'regime', 'like', 'ebola']),
			_elm_lang$core$Native_List.fromArray(
			['Blink', 'and', 'you\'re', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Wouldn\'t', 'shut', 'the', 'fuck', 'up', ',', 'answered', 'for', 'their', 'behavior']),
			_elm_lang$core$Native_List.fromArray(
			['Cleft', 'palate', 'creator']),
			_elm_lang$core$Native_List.fromArray(
			['Morgue', 'head', 'forsaker']),
			_elm_lang$core$Native_List.fromArray(
			['Phallus', 'cloud', ',', 'crown', 'me', 'vapor']),
			_elm_lang$core$Native_List.fromArray(
			['Raw', ',', 'no', 'fuckin\'', 'filter', ',', 'crooked', 'needle', ',', 'hot', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Raw', ',', 'no', 'fuckin\'', 'filter', ',', 'crooked', 'needle', ',', 'hot', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Self-inflicted']),
			_elm_lang$core$Native_List.fromArray(
			['What\'d', 'you', 'tell', 'them', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'just', 'told', '\'em', 'hell\'s', 'existence']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'you', 'know', 'me', ',', 'don\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'my', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'presence', 'flog', 'your', 'confidence']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'want', 'a', 'brand', 'new', 'complex', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Now', 'on', ',', 'I\'ll', 'call', 'you', ',', 'go', 'fetch']),
			_elm_lang$core$Native_List.fromArray(
			['Self-inflicted']),
			_elm_lang$core$Native_List.fromArray(
			['What\'d', 'you', 'tell', 'them', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'just', 'told', '\'em', 'hell\'s', 'existence']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'you', 'know', 'me', ',', 'don\'t', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'my', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Best', 'get', 'used', 'to', 'fetch', ',', 'I\'ll', 'shoot', 'you', ',', 'catch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'snap', ',', 'you', 'come', ',', 'I', 'don\'t', 'call', 'you', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Act', 'natural', ',', 'my', 'style', 'attack']),
			_elm_lang$core$Native_List.fromArray(
			['Goin\'', 'back', 'to', 'Tangier']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'some', 'Jordans', 'and', 'a', 'spear']),
			_elm_lang$core$Native_List.fromArray(
			['Post-Christian', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Post-chicken-or-the-egg-addiction', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Pass', 'the', 'sherm', 'stick']),
			_elm_lang$core$Native_List.fromArray(
			['Neo-reality']),
			_elm_lang$core$Native_List.fromArray(
			['Be', 'the', 'freak', 'you', 'wanna', 'see']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'don\'t', 'follow', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'a', 'journey', 'to', 'the', 'center', 'of', 'three']),
			_elm_lang$core$Native_List.fromArray(
			['Grab', 'your', 'fucking', 'chain', 'and', 'drag', 'you', 'through', 'the', 'bike', 'lane']),
			_elm_lang$core$Native_List.fromArray(
			['While', 'everybody\'s', 'like', 'Nooooo!']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'this', 'pregnant', 'snake;']),
			_elm_lang$core$Native_List.fromArray(
			['stay', 'surrounded', 'by', 'long', 'hairs']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'plethora', 'of', 'maniacs']),
			_elm_lang$core$Native_List.fromArray(
			['and', 'spiral', 'stairs']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'your', 'water', 'break']),
			_elm_lang$core$Native_List.fromArray(
			['in', 'the', 'Apple', 'Store']),
			_elm_lang$core$Native_List.fromArray(
			['Sink', 'or', 'swim', ',', 'who', 'fucking', 'cares']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'the', 'birth', 'cords']),
			_elm_lang$core$Native_List.fromArray(
			['Press', 'send']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'thick']),
			_elm_lang$core$Native_List.fromArray(
			['Gaga', 'can\'t', 'handle', 'this', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Headed', 'for', 'the', 'Sammy', 'Davis', 'wing']),
			_elm_lang$core$Native_List.fromArray(
			['Throw', 'up', 'a', 'black', 'hole', 'at', 'the', 'entrance', 'of', 'Linens-n-Things']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'the', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'call', 'it', 'a', 'day']),
			_elm_lang$core$Native_List.fromArray(
			['Visit', 'Tesla\'s', 'grave', 'for', 'the', 'ninth', 'time', 'today']),
			_elm_lang$core$Native_List.fromArray(
			['Still', 'on', 'the', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Bigger', 'wigs']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in', 'your', 'area']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'know', 'the', 'first', 'three', 'numbers']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'you', 'come', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'shit', 'is', 'gone']),
			_elm_lang$core$Native_List.fromArray(
			['You\'ll', 'catch', 'a', 'jpeg', 'to', 'the', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['über', 'reach']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'an', 'intern']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'Wikileaks']),
			_elm_lang$core$Native_List.fromArray(
			['Most', 'loved', ',', 'therefore', 'most', 'hated']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'and', 'knock', 'on', 'the', 'door', ',', 'we\'ve', 'been', 'waiting', 'for', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Game', 'changer']),
			_elm_lang$core$Native_List.fromArray(
			['Reclusive-aggressive']),
			_elm_lang$core$Native_List.fromArray(
			['Ying-ing', 'and', 'yang-ing', ',']),
			_elm_lang$core$Native_List.fromArray(
			['noided']),
			_elm_lang$core$Native_List.fromArray(
			['Info', 'warrior', ',']),
			_elm_lang$core$Native_List.fromArray(
			['Jack', 'the', 'Hacker']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'rolling', 'stoner', ',', 'puffin\'', 'on', 'disaster']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'existence', 'is', 'a', 'momentary', 'lapse', 'of', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'the', 'DNA', 'of', 'gothic', 'lemons']),
			_elm_lang$core$Native_List.fromArray(
			['Shred', 'it', 'thirteen', 'times', 'out', 'of', 'eleven']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'bad', 'ideas', 'are', 'the', 'ATM']),
			_elm_lang$core$Native_List.fromArray(
			['Shed', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['Leave', 'it', 'for', 'the', 'homeless', 'to', 'sleep', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['Prodigal', ',', 'fuck', 'that', ',', 'nautical']),
			_elm_lang$core$Native_List.fromArray(
			['Teachin\'', 'bitches', 'how', 'to', 'swim']),
			_elm_lang$core$Native_List.fromArray(
			['Now', 'backstroke']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'your', 'k-hole']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'run', ',', 'you', 'might', 'slip']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'table\'s', 'flipped', ',', 'now', 'we', 'got', 'all', 'the', 'coconuts', ',', 'bitch!']),
			_elm_lang$core$Native_List.fromArray(
			['Burmese', 'babies', 'under', 'each', 'arm']),
			_elm_lang$core$Native_List.fromArray(
			['Screaming', 'beautiful', 'songs']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'cray-cray', 'ultra-contrarian']),
			_elm_lang$core$Native_List.fromArray(
			['Havin\'', 'conversations', 'with', 'your', 'car', 'alarm']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'you', 'come', 'out', ',', 'your', 'shit', 'is', 'gone']),
			_elm_lang$core$Native_List.fromArray(
			['Soon', 'your', 'crew', 'will', 'be', 'serving', 'sandwiches', 'named', 'after', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Vietnamese', 'style', ',', 'fool', ',', 'please']),
			_elm_lang$core$Native_List.fromArray(
			['Front', 'row', 'at', 'the', 'mass', 'games']),
			_elm_lang$core$Native_List.fromArray(
			['Untracable', 'by', 'name']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'speak', 'of', 'us', 'in', 'certain', 'circles', ',', 'you', 'will', 'be', 'dethroned', 'or', 'detained']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'you', 'know', 'about', 'how', 'I', 'fucks', 'with', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'blooded', ',', 'got', 'dat']),
			_elm_lang$core$Native_List.fromArray(
			['Ugh!', 'Sickness!']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'up', 'when', 'I\'m', 'fit', 'to', 'cut', 'you', 'dip', '?']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'shit', ',', 'that', 'shit', ',', 'just', 'can\'t', 'get', 'hit', 'when', 'it', 'comes', 'around']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?', 'Fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'heard', 'what', 'I', 'said']),
			_elm_lang$core$Native_List.fromArray(
			['Murdered', '\'em!', 'Fuck!']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'swerving', ',', 'I', 'can\'t', 'get', 'enough']),
			_elm_lang$core$Native_List.fromArray(
			['Bloody', 'murdered', '\'em!', 'Shoot', '\'em', 'up!']),
			_elm_lang$core$Native_List.fromArray(
			['Smoke', ',', 'gun', 'slinging', ',', 'who', 'gives', 'a', 'fuck', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?', 'Fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Watch', 'it', ',', 'real', 'shit', ',', 'every', 'time', 'I', 'bust']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'a', 'head', 'cracked', 'up', 'that', 'grip', 'back', '9', 'who', 'love', 'it', 'to', 'dust']),
			_elm_lang$core$Native_List.fromArray(
			['That', '\'fuck', 'a', 'bitch\'', 'shit', 'that\'s', 'so', 'metal', ',', 'hit', 'that', 'cold', 'street', ',', 'sweep', 'then', 'slump']),
			_elm_lang$core$Native_List.fromArray(
			['Ugh!']),
			_elm_lang$core$Native_List.fromArray(
			['Ghost', 'Rider']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['heat', 'pusher']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', 'it', 'naughty', 'like', 'the', 'beat', 'I\'m', 'gonna', 'on', ',', 'don\'t', 'front']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody', 'know', 'I', 'suck', 'your', 'pussy', 'in', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Ugh!']),
			_elm_lang$core$Native_List.fromArray(
			['Ugh!']),
			_elm_lang$core$Native_List.fromArray(
			['Pump', 'these', 'to', 'your', 'chest']),
			_elm_lang$core$Native_List.fromArray(
			['You\'ll', 'never', 'forget', 'my', 'name']),
			_elm_lang$core$Native_List.fromArray(
			['Put', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I', 'melt', 'a', 'bitch', ',', 'fuck', 'a', 'bitch', ',', 'fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Wow', 'bitch', 'I', 'came']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'a', 'fuck', ',', 'little', 'bitch', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['I', ',', 'no', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Brought', 'a', 'clip', 'for', 'the', 'splits']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'a', 'zone', 'never', 'lasts', 'as', 'I', 'check', 'to', 'erect', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?', 'Fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'heard', 'what', 'I', 'said']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?', 'Fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'hand\'s', 'on', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'the', 'gas', 'and', 'leave', 'him', 'in', 'a', 'dumpster']),
			_elm_lang$core$Native_List.fromArray(
			['Spontaneous', 'combuster']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'staying', 'in', 'that', ',', 'fucker']),
			_elm_lang$core$Native_List.fromArray(
			['Making', 'a', 'monster']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?', 'Fuck', 'a', ',']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'play', 'penetrator', 'from', 'the', 'Days', 'of', 'Just']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'it', 'down', '\'til', 'it', 'makes', 'the', 'ground', 'break', 'beneath', 'the', 'waves', 'that', 'rush']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'quest', 'for', 'the', 'weak', 'taken', 'under', 'by', 'the', 'way', 'you', 'bust']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'away', 'the', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['Medical', 'cream', 'wings', 'of', 'Angel', 'Dust']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'game', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'of', 'Angel', 'Dust']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'quest', 'for', 'the', 'weak', 'taken', 'under', 'by', 'the', 'way', 'you', 'bust']),
			_elm_lang$core$Native_List.fromArray(
			['Put', 'it', 'down\'til', 'it', 'makes', 'the', 'ground', 'break', 'beneath', 'the', 'waves', 'that', 'rush']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'play', 'penetrator', 'from', 'the', 'Days', 'of', 'Just']),
			_elm_lang$core$Native_List.fromArray(
			['Automatic', 'fire', ',', 'anti-fighter']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'dick-sucking', 'slave']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?', 'Fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'heard', 'what', 'I', 'said']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch!', 'Yea', ',', 'fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Til', 'the', 'beat', 'turns', 'it', 'blood', 'red']),
			_elm_lang$core$Native_List.fromArray(
			['Cut-throat', 'killer', ',', 'these', 'sluts', 'feel', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'it', 'double', 'helix', 'haaa']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'the', 'deal', 'is', ',', 'can\'t', 'look', 'real', 'there\'s', 'so', 'much', 'fucking', 'noise']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch', ',', 'what', '?', 'Fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'heard', 'what', 'I', 'said']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'bitch!', 'Yea', ',', 'fuck', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['\'Til', 'the', 'beat\'s', 'blood', 'red']),
			_elm_lang$core$Native_List.fromArray(
			['Either', 'you', 'dead', ',', 'or', 'you\'re', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'the', 'blesséd', 'strait', 'from']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Arsenic', 'liquid', 'chrome']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'carcass', 'for', 'my', 'throne']),
			_elm_lang$core$Native_List.fromArray(
			['VCR', 'saliva']),
			_elm_lang$core$Native_List.fromArray(
			['Smog', 'China']),
			_elm_lang$core$Native_List.fromArray(
			['Swiped', ',', 'alright', ',', 'alright']),
			_elm_lang$core$Native_List.fromArray(
			['Alright', ',', 'alright', ',', 'invasive', 'clinical']),
			_elm_lang$core$Native_List.fromArray(
			['Wayside', 'at', 'intervals']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'don’t', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'okey', 'doke', 'stroke', 'slid', 'into', 'pine', 'box']),
			_elm_lang$core$Native_List.fromArray(
			['Bloated', 'bullshit', 'I', 'must', 'maim']),
			_elm_lang$core$Native_List.fromArray(
			['Ever', 'met', 'a', 'prick', 'on', 'a', 'metro', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'his', 'hair', 'did', 'like', 'a', 'disco-tech']),
			_elm_lang$core$Native_List.fromArray(
			['Guess', 'at', 'the', 'v', 'make', 'a', 'simp', 'sweat', 'cheese']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'you', 'want', 'to', 'drink', 'can', 'I', 'need', 'you', 'yet']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'is', 'that', ',', 'a', 'hairstyle', '?']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'asshole', 'be', 'at', 'pussy', 'church', ',', 'first']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'is', 'that', ',', 'a', 'hairstyle', '?']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'asshole', 'be', 'at', 'pussy', 'church', ',', 'first']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Three', ',', 'four', ',', 'fuck', 'you', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Wake', 'up', 'or', 'flung', '‘cause', 'I’m', 'detonation']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'your', 'head', 'boom', 'I', 'spray', 'like', 'girl', 'who', 'whip', 'her', 'device']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'warning', ',', 'that', 'bores', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I’d', 'rather', 'get', 'blazed', ',', 'I', 'detest', 'you', 'always']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'test', 'me', ',', 'fucks', 'get', 'sliced']),
			_elm_lang$core$Native_List.fromArray(
			['Caught', 'a', 'tiny', 'cougar', 'even', 'she', 'don’t', 'wet']),
			_elm_lang$core$Native_List.fromArray(
			['Dick', 'get', 'left', 'but', 'he', 'leave', 'real', 'slow']),
			_elm_lang$core$Native_List.fromArray(
			['Typical', 'no', 'clue', 'he', 'don’t', 'grow']),
			_elm_lang$core$Native_List.fromArray(
			['Official', 'fuck', 'no', 'with', 'a', 'capital', 'hoe']),
			_elm_lang$core$Native_List.fromArray(
			['Wack', 'hoes', 'wanna', 'piece', 'so', 'a', 'bitch', 'pose']),
			_elm_lang$core$Native_List.fromArray(
			['Pack', 'of', 'putos', 'got', 'me', 'rollin’', 'up', 'my', 'windows']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'is', 'that', ',', 'a', 'hairstyle', '?']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'asshole', 'be', 'at', 'pussy', 'church', ',', 'first']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'is', 'that', ',', 'a', 'hairstyle', '?']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'asshole', 'be', 'at', 'pussy', 'church', ',', 'first']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'use', 'us', 'fuck', 'who’s', 'this', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'before', 'or', 'does', 'this', 'just']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'fucked', ',', 'kay']),
			_elm_lang$core$Native_List.fromArray(
			['Baby', ',', 'disjointed', 'Houdini', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'moods', 'live', 'on', 'that', 'swing', 'same']),
			_elm_lang$core$Native_List.fromArray(
			['Push', 'me', 'harder', 'push', 'me', 'push', 'me', 'swang', 'into', 'tomorrow']),
			_elm_lang$core$Native_List.fromArray(
			['Gawk', 'as', 'I', 'thread', 'this', 'loch', 'ness', 'slipstream', 'sepsis']),
			_elm_lang$core$Native_List.fromArray(
			['Subconscious', 'up', 'f', 'twitch', 'asterisk', 'see', 'off', 'my', 'meds', 'glitch']),
			_elm_lang$core$Native_List.fromArray(
			['Thoughts', 'squealin', 'through', 'my', 'mildew']),
			_elm_lang$core$Native_List.fromArray(
			['watch', 'my', 'back', 'or', 'I\'ll', 'kill', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Schizo', 'superscript', 'scan', 'the', 'voice', 'imprint', 'only', 'I', 'can', 'hear', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Deserted', 'mansion', 'in', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['half-lidded', 'lanterns', 'returnin']),
			_elm_lang$core$Native_List.fromArray(
			['Sclera', 'scarlet', 'as', 'wall', 'of', 'virgin', 'bombed', 'by', 'flask', 'of', 'bourbon']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'be', 'certain']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'intercom', 'I\'m', 'fingering', 'you', 'don\'t', 'wanna', 'but', 'you', 'buzz', 'me', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'moods', 'live', 'on', 'that', 'swing', 'same']),
			_elm_lang$core$Native_List.fromArray(
			['Push', 'me', 'harder', 'push', 'me', 'push', 'me', 'swang', 'into', 'tomorrow']),
			_elm_lang$core$Native_List.fromArray(
			['Nathan', 'perculatin', 'proper']),
			_elm_lang$core$Native_List.fromArray(
			['Caiman', 'propellers', 'comin', 'off', 'she\'s', 'hella', 'copter']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'neck', 'bone', 'sprayin']),
			_elm_lang$core$Native_List.fromArray(
			['guava']),
			_elm_lang$core$Native_List.fromArray(
			['Shimmy', 'snakin', 'status', 'caved', 'in', 'mental', 'state', 'been', 'shanked', 'and', 'soldered']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'nasty', 'in', 'my', 'taxi', 'you', 'need', 'a', 'lift']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can', 'sit', 'between', 'the', 'backseat', 'and', 'my', 'dick']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'the', 'law', 'catch', 'me', 'in', 'the', 'act', 'and', 'I', 'happen', 'ta', 'die', 'today']),
			_elm_lang$core$Native_List.fromArray(
			['Push', 'one', 'my', 'swing', 'out', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['a', 'glass', 'of', 'purple', 'rain']),
			_elm_lang$core$Native_List.fromArray(
			['Candy', 'painted', 'by', 'the', 'lord', 'of', 'stainless', 'steel', 'liquid', 'your', 'ashy', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'moods', 'live', 'on', 'that', 'swing', 'same']),
			_elm_lang$core$Native_List.fromArray(
			['Push', 'me', 'harder', 'push', 'me', 'push', 'me', 'swang', 'into', 'tomorrow']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'feeling', 'somebody', 'killed', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'feeling', 'zero', 'feeling']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'stop', 'stealing']),
			_elm_lang$core$Native_List.fromArray(
			['zeros', 'killing', 'all', 'your', 'millions']),
			_elm_lang$core$Native_List.fromArray(
			['Somebody', 'kill', 'me', 'somebody', 'killed', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'feeling', 'zero', 'feeling']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'stop', 'stealing', 'zeros', 'killing', 'all', 'your', 'millions']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'a', 'fuck', 'what', 'you', 'heard']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'fuck', 'what', 'you', 'heard']),
			_elm_lang$core$Native_List.fromArray(
			['\'Fore', 'this', 'real', 'shit', 'kicked', 'your', 'whole', 'clique', 'to', 'the', 'curb']),
			_elm_lang$core$Native_List.fromArray(
			['What', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['What', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'you', 'don\'t', 'hear', 'me', 'though']),
			_elm_lang$core$Native_List.fromArray(
			['Run', 'up', 'bitch', 'to', 'the', 'death', 'get', 'gripped', ',', 'my', 'steeze', 'is', 'ballin\'', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'control;', 'what', 'you', 'know', '\'bout', 'bubblin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'hot', 'lic', 'a', 'shot']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'not', 'strapped']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'a', 'Glock', 'tongue', 'cocked']),
			_elm_lang$core$Native_List.fromArray(
			['Run', 'it', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'knock', 'a', 'cop', 'off', 'unconscious', 'molotov', 'cocktailin\'', 'sound', 'bomb', 'a', 'snitch']),
			_elm_lang$core$Native_List.fromArray(
			['Flat', 'line', 'of', 'chalk', 'drawn', '\'round', 'the', 'clock', 'too', 'many', 'marks', 'dropped', 'to', 'count', 'the', 'stiffs']),
			_elm_lang$core$Native_List.fromArray(
			['Stuck', 'on', 'the', 'fence']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'does', 'it', 'feel', '?']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'don\'t', 'make', 'sense']),
			_elm_lang$core$Native_List.fromArray(
			['Nothing', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'rip', 'you', 'a', 'new', 'one', 'trick', ',', 'I\'m', 'the', 'true', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'only', 'never', 'know', 'me', 'never', 'will', ',', 'no', 'son']),
			_elm_lang$core$Native_List.fromArray(
			['Leave', 'you', 'laid', 'out', 'to', 'fade', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Show', 'a', 'cunt', 'the', 'door']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'and', 'run']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'can\'t', 'wait', 'to', 'blast']),
			_elm_lang$core$Native_List.fromArray(
			['Blood-stained', 'knuckle', 'brass', 'gives', 'a', 'fuck', 'sick', 'with', 'it', 'flav', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'ex-con']),
			_elm_lang$core$Native_List.fromArray(
			['Hard', 'to', 'the', 'bone']),
			_elm_lang$core$Native_List.fromArray(
			['Darkness', 'from', 'the', 'zone']),
			_elm_lang$core$Native_List.fromArray(
			['Mastered', 'and', 'pushed', 'far', 'beyond']),
			_elm_lang$core$Native_List.fromArray(
			['Eons', 'beyond', 'the', 'line', 'never', 'crossed']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'them', 'punks', 'livin\'', 'soft', 'while', 'I', 'ride', 'that', 'bomb']),
			_elm_lang$core$Native_List.fromArray(
			['Dr.', 'Strangelove']),
			_elm_lang$core$Native_List.fromArray(
			['Into', 'the', 'sun']),
			_elm_lang$core$Native_List.fromArray(
			['Look', 'no', 'hands', 'megatons']),
			_elm_lang$core$Native_List.fromArray(
			['Rode', 'like', 'man', 'we', 'can\'t', 'lose']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'shit', ',', 'no', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'hit', 'it', 'till', 'it', 'drip', 'with']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'blood', 'of', 'the', 'raw', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'was', '\'fore', 'them', 'forgot']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'doin\'', 'dirt', ',', 'make', 'slang', 'sound', 'tough', 'gong', 'original']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'wrong', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Only', 'one', 'real', 'way', 'to', 'work']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'shit', 'out', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'street', 'spit']),
			_elm_lang$core$Native_List.fromArray(
			['Über', 'freaked', 'heat', 'lit']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'flame', 'to', 'your', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'thirst']),
			_elm_lang$core$Native_List.fromArray(
			['What', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['What', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['What', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['What', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['Run', 'it', 'back', ',', 'run', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Run', 'up', 'bitch', 'to', 'the', 'death', 'get', 'gripped', ',', 'my', 'steeze', 'is', 'ballin\'', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'control;', 'what', 'you', 'know', '\'bout', 'bubblin\'', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Hustle', 'bones', 'comin\'', 'out', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'out', 'my', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Criminal', 'intent', ',', 'anti-legal', 'ill']),
			_elm_lang$core$Native_List.fromArray(
			['Thief', 'in', 'the', 'night', ',', 'peel', 'your', 'life', 'back', 'spin', 'the', 'wheel']),
			_elm_lang$core$Native_List.fromArray(
			['Criminal', 'intent', ',', 'anti-legal', 'ill']),
			_elm_lang$core$Native_List.fromArray(
			['Thief', 'in', 'the', 'night', ',', 'peel', 'your', 'life', 'back', 'spin', 'the', 'wheel']),
			_elm_lang$core$Native_List.fromArray(
			['Criminal', 'intent', ',', 'anti-legal', 'ill']),
			_elm_lang$core$Native_List.fromArray(
			['Thief', 'in', 'the', 'night', ',', 'peel', 'your', 'life', 'back', 'spin', 'the', 'wheel']),
			_elm_lang$core$Native_List.fromArray(
			['Criminal', 'intent', ',', 'anti-legal', 'ill']),
			_elm_lang$core$Native_List.fromArray(
			['Thief', 'in', 'the', 'night', ',', 'peel', 'your', 'life', 'back', 'spin', 'the', 'wheel']),
			_elm_lang$core$Native_List.fromArray(
			['Run', 'it', 'back', ',', 'run', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'overflow', ',', 'undertow', 'shots', 'licked']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'d', 'he', 'go', '?', 'Federal', 'cloaked', 'key', 'and', 'lock', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'am', 'overflow', ',', 'undertow', 'shots', 'licked']),
			_elm_lang$core$Native_List.fromArray(
			['Dopamine', 'hot', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['x9']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['Everything', 'rigged', 'at', 'this', 'place', ',', 'it\'s', 'not', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'break', 'my', 'concentration', 'with', 'those', 'thoughts', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don’t', 'care', 'about', 'real', 'life', ',', 'I', 'don’t', 'care', 'about', 'real', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['Everything', 'rigged', 'at', 'this', 'place', ',', 'it\'s', 'not', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'break', 'my', 'concentration', 'with', 'those', 'thoughts', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don’t', 'care', 'about', 'real', 'life', ',', 'I', 'don’t', 'care', 'about', 'real', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'just', 'like', 'I', 'look', 'to', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Gawk', 'at', 'me', 'all', 'you', 'see', 'is', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Anyday', 'trip', ',', 'mayday', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Can’t', 'break', 'my', 'face', ',', 'I’m', 'in', 'a', 'state', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'just', 'like', 'I', 'look', 'to', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Gawk', 'at', 'me', 'all', 'you', 'see', 'is', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Anyday', 'trip', ',', 'mayday', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Can’t', 'break', 'my', 'face', ',', 'I’m', 'in', 'a', 'state', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Spit', 'on', 'you', ',', 'spit', 'on', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'we', 'know', 'spit', 'must', 'be', 'us']),
			_elm_lang$core$Native_List.fromArray(
			['Spit', 'fits', 'us', ',', 'we', 'spit', 'and', 'sniff']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'sniff', 'and', 'clutch', 'each', 'other’s', 'fate']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don’t', 'care', 'about', 'real', 'life', ',', 'I', 'don’t', 'care', 'about', 'real', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don’t', 'care', 'about', 'real', 'life', ',', 'I', 'don’t', 'care', 'about', 'real', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'many', 'mirrors', 'share', 'my', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Can’t', 'braille', 'which', 'mirrors', 'my', 'mistake']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'many', 'mirrors', 'wear', 'my', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'broken', 'mirrors', 'take', 'my', 'place']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don’t', 'care', 'about', 'real', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'many', 'mirrors', 'share', 'my', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Can’t', 'braille', 'which', 'mirrors', 'my', 'mistake']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'break', 'mirrors', 'with', 'my', 'face', 'in', 'the', 'United', 'States']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'sensation']),
			_elm_lang$core$Native_List.fromArray(
			['Vantage', 'perspective', 'from', 'objective', 'it', 'came', 'from']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'situation']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'relation', 'close', 'liaison']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'conversation', ',', 'no', 'social', 'contagion']),
			_elm_lang$core$Native_List.fromArray(
			['Bother', 'me', ',', 'wanna', 'be', 'comrade', 'intrusive']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'remain']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'aloof', 'skip']),
			_elm_lang$core$Native_List.fromArray(
			['Counterfeit']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'no', 'can', 'do', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'vinyl', 'vibrate', 'higher', 'than', 'you', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'represent', ',', 'ain\'t', 'meant', 'to', 'pursue', 'which']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'of', 'you', ',', 'oh', 'you', 'all', 'wanna', 'ride', ',', 'well', 'I', 'ain\'t', 'got', 'room', 'stress']),
			_elm_lang$core$Native_List.fromArray(
			['While', 'we', 'continue', 'to', 'make', 'shit', 'tight', 'the', 'loosest']),
			_elm_lang$core$Native_List.fromArray(
			['Aaaah']),
			_elm_lang$core$Native_List.fromArray(
			['Blown', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Base']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'a', 'minute']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'in', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'wrong']),
			_elm_lang$core$Native_List.fromArray(
			['Wrong', 'with', 'who']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'what\'s', 'going', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Okay']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'you', 'at', 'right', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'with', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'persuasion']),
			_elm_lang$core$Native_List.fromArray(
			['Strictly', 'still', 'life', 'with', 'all', 'of', 'my', 'occasion']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'surge', 'of', 'inspiration']),
			_elm_lang$core$Native_List.fromArray(
			['Glow', 'like', 'thermonuclear', 'invasion']),
			_elm_lang$core$Native_List.fromArray(
			['Compared', 'to', 'swapping', 'thoughts', 'regurgitation']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'revel', 'in', 'lack', 'of', 'slightest', 'acquaintance']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'rancid', 'level', 'after', 'taste', 'inanimate', 'negate', 'opinion']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'it', 'unravel', 'like', 'enigmatic', 'onion']),
			_elm_lang$core$Native_List.fromArray(
			['Layers', 'of', 'interdimensional', 'dominion']),
			_elm_lang$core$Native_List.fromArray(
			['Blown', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Base']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'smoke', ',', 'my', 'butane']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'boots', ',', 'my', 'headphones', ',']),
			_elm_lang$core$Native_List.fromArray(
			['my', 'medicated', 'noose']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'deadroom']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['my', 'schwartzwald', 'hat']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['my', 'Mac']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'macaque', 'skull', ',']),
			_elm_lang$core$Native_List.fromArray(
			['my', 'lysergic', 'stash']),
			_elm_lang$core$Native_List.fromArray(
			['Empty', 'streets', 'at', 'night', ',', 'my', 'bike']),
			_elm_lang$core$Native_List.fromArray(
			['Apartment', 'sink', 'filled', 'with', 'dry', 'ice']),
			_elm_lang$core$Native_List.fromArray(
			['Condemned', 'tenement', ',', 'brandished', 'rail', 'spike']),
			_elm_lang$core$Native_List.fromArray(
			['Disturb', 'in', 'flat', 'noir', 'and', 'stale', 'white']),
			_elm_lang$core$Native_List.fromArray(
			['Grey', 'cloud', 'curled', 'around', 'my', 'bearded', 'compound', 'like', 'boa']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'of', 'two', 'thunderbolt']),
			_elm_lang$core$Native_List.fromArray(
			['we', 'ain\'t', 'broke', 'on', 'tour']),
			_elm_lang$core$Native_List.fromArray(
			['Concrète']),
			_elm_lang$core$Native_List.fromArray(
			['antique', 'trapdoor', 'twenty-four']),
			_elm_lang$core$Native_List.fromArray(
			['Spots', 'to', 'get', 'that', 'get', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'I', 'gotta', 'get', 'right', 'some', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['Type', 'of', 'get', 'right', 'I', 'can\'t', 'afford']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'covet', 'these', 'things', 'more', 'than', 'any', 'living']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'never', 'been']),
			_elm_lang$core$Native_List.fromArray(
			['Blown', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Base']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'so', 'Northern', 'California', ',', 'I', 'call', 'scratch', 'bammer']),
			_elm_lang$core$Native_List.fromArray(
			['Pure', 'overhander']),
			_elm_lang$core$Native_List.fromArray(
			['Live', 'show', 'on', 'a', 'banner']),
			_elm_lang$core$Native_List.fromArray(
			['Axl', 'Rose', 'in', 'a', 'blender']),
			_elm_lang$core$Native_List.fromArray(
			['Slash', 'on', 'Satan\'s', 'fender']),
			_elm_lang$core$Native_List.fromArray(
			['Rick', 'James', 'on', 'the', 'cover']),
			_elm_lang$core$Native_List.fromArray(
			['Running', 'through', 'your', 'lover']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'mean', 'Mr.', 'Mustard']),
			_elm_lang$core$Native_List.fromArray(
			['Stadium', 'style']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'those', 'who', 'came', 'to', 'jock']),
			_elm_lang$core$Native_List.fromArray(
			['Watch', 'that', 'man', 'salute', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Endless', 'nameless']),
			_elm_lang$core$Native_List.fromArray(
			['Lady', 'Godivas', 'we', 'snoop', 'to']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'eighty-three', 'mermaids', 'in', 'Brooklyn', 'Zoo']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'ghetto', 'box', 'we', 'used', 'to', 'pimp', 'through']),
			_elm_lang$core$Native_List.fromArray(
			['Blown', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Base']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'fixation']),
			_elm_lang$core$Native_List.fromArray(
			['Obsessed', 'with', 'my', 'demo', 'tape', 'collection']),
			_elm_lang$core$Native_List.fromArray(
			['Inanimate', 'riffs', 'I\'m', 'glazin']),
			_elm_lang$core$Native_List.fromArray(
			['Brag', 'you\'re', 'making', 'music', ',', 'naw', ',', 'you\'re', 'makin\'', 'bacon']),
			_elm_lang$core$Native_List.fromArray(
			['Skinhead', ',', 'skinhead', 'inna', 'dublin']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'like', 'my', 'iPod', 'more', 'than', 'fuckin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Blown', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Base']),
			_elm_lang$core$Native_List.fromArray(
			['G-G-G-Good', 'night', 'everybody']),
			_elm_lang$core$Native_List.fromArray(
			['G-G-G-Good', 'night', 'everybody']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'ya', 'gonna', 'do', 'when', 'they', 'come', 'for', 'you', '?']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'gang', 'of', 'hatin\'', 'pigs']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'have', 'they', 'ever', 'really', 'done', 'for', 'you', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Ain’t', 'never', 'done', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Stash', 'what', 'you', 'got', 'cause', 'they\'re', 'comin\'', 'through']),
			_elm_lang$core$Native_List.fromArray(
			['Best', 'get', 'rid', 'of', 'that', 'quick']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'when', 'they', 'get', 'here', 'you', 'know', 'what', 'they\'re', 'gonna', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'they', 'ever', 'do', 'is', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Minding', 'my', 'own', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Minding', 'my', 'own', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Minding', 'my', 'own', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Minding', 'my', 'own', 'business']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'hem', 'me', 'up', 'like', 'for', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Stuck', 'in', 'the', 'klink']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['haters', 'in', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'they', 'set', 'me', 'up', '?', 'Should', 'I', 'test', 'my', 'luck', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Here', 'they', 'come', ',', 'they\'re', 'in', 'pursuit']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'did', 'I', 'do', '?', 'What', 'haven\'t', 'I', 'done', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'want', 'to', 'see', 'my', 'I.D.', '?', 'Umm...']),
			_elm_lang$core$Native_List.fromArray(
			['Well', ',', 'ok', ',', 'where', 'I\'m', 'coming', 'from', '?', 'Just', 'on', 'my', 'way', ',', 'not', 'on', 'the', 'run']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'you', 'want', 'me', 'to', 'say', '?', 'Are', 'you', 'just', '\'bout', 'done', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Power', 'trippin\'', ',', 'asshole', 'lickin\'', 'haters']),
			_elm_lang$core$Native_List.fromArray(
			['Notice', 'how', 'they', 'strut', 'through', 'the', 'spot']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'anybody', 'wants', 'to', 'see', 'a', 'cop']),
			_elm_lang$core$Native_List.fromArray(
			['Man', ',', 'everybody', 'knows', 'they', 'suck']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'to', 'be', 'somewhere', ',', 'man', ',', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'the', 'hell', 'you', 'always', 'stoppin\'', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Round', 'the', 'clockin\'', 'me', ',', 'like', 'what', '?']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'ya', 'gonna', 'do', 'when', 'they', 'come', 'for', 'you', '?']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'gang', 'of', 'hatin\'', 'pigs']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'have', 'they', 'ever', 'really', 'done', 'for', 'you', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Ain’t', 'never', 'done', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Stash', 'what', 'you', 'got', 'cause', 'they\'re', 'comin\'', 'through']),
			_elm_lang$core$Native_List.fromArray(
			['Best', 'get', 'rid', 'of', 'that', 'quick']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'when', 'they', 'get', 'here', 'you', 'know', 'what', 'they\'re', 'gonna', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'they', 'ever', 'do', 'is', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Six', 'feet', 'deep', 'below', 'the', 'street']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'they', 'can\'t', 'never', 'say', 'shit', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'man', 'with', 'a', 'thick', 'broomstick']),
			_elm_lang$core$Native_List.fromArray(
			['And']),
			_elm_lang$core$Native_List.fromArray(
			['put', 'a', 'black', 'flag', 'on', 'the', 'end']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'to', 'watch', 'my', 'back', 'or', 'just', 'like', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'bound', 'to', 'get', 'locked', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'law\'s', 'watching', 'me', 'constantly']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'close', 'and', 'way', 'too', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['Looking', 'over', 'my', 'shoulder']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'checking', 'in', 'the', 'rear', 'view', 'mirror']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I\'m', 'never', 'not', 'but', 'a', 'moment']),
			_elm_lang$core$Native_List.fromArray(
			['From', 'getting', 'taken', 'to', 'jail']),
			_elm_lang$core$Native_List.fromArray(
			['They\'re', 'knocking', 'at', 'my', 'door', ',', 'down', 'my', 'door']),
			_elm_lang$core$Native_List.fromArray(
			['They\'re', 'shining', 'lights', 'in', 'my', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Exactly', 'what', 'do', 'they', 'stand', 'for', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Ever', 'asking', 'more', 'of', 'I', ',', 'man', ',', 'why', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'it', 'matters', 'why', 'I', 'chose', 'to', 'ignore']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'laws', 'I\'ve', 'been', 'told', 'to', 'abide']),
			_elm_lang$core$Native_List.fromArray(
			['Think', 'I’m', 'on', 'parole', ',', 'thinking', 'I', 'just', 'stole']),
			_elm_lang$core$Native_List.fromArray(
			['Some', 'shit', ',', 'you', 'got', 'an', 'A.P.B', 'out', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'no', ',', 'you\'re', 'wrong', 'as', 'usual']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'no', ',', 'it', 'wasn\'t', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'the', 'nerve', 'to', 'ask', 'me', 'if', 'I\'m', 'drunk']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'I’m', 'pissing', 'in', 'the', 'middle', 'of', 'the', 'street']),
			_elm_lang$core$Native_List.fromArray(
			['Looking', 'over', 'my', 'shoulder']),
			_elm_lang$core$Native_List.fromArray(
			['Looking', 'over', 'my', 'shoulder']),
			_elm_lang$core$Native_List.fromArray(
			['Looking', 'over', 'my', 'shoulder']),
			_elm_lang$core$Native_List.fromArray(
			['Looking', 'over', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'the', 'way', 'why', 'they', 'always', 'acting']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'they', 'know', 'how', 'to', 'size', 'me', 'up', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Ignorant', 'bastards', 'coming', 'after', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'time', 'on', 'mine', ',', 'had', 'enough']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'they', 'always', 'wanna', 'hassle', 'me', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Pigs', 'all', 'up', 'on', 'my', 'nuts']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'they', 'have', 'to', 'be', ',', 'like', 'I', 'can\'t', 'see', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['Tryin\'', 'to', 'play', 'shade', 'tree', 'in', 'the', 'cuts']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'robbing', 'me', 'of', 'my', 'dignity']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'in', 'the', 'end', ',', 'I', 'never', 'say', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'ain’t', 'a', 'time', 'pass', 'I', 'don’t', 'wish', 'I', 'could', 'flash']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'Penelope', 'like', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['Shot', 'this', 'for', 'everyone', 'who\'s', 'been', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'my', 'real', 'ones', 'who', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'it', 'feels', 'like', 'to', 'have', 'your', 'rights', 'read', 'to', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Beats', '‘bout', 'waist', 'deep']),
			_elm_lang$core$Native_List.fromArray(
			['Swallowed', 'by', 'beats']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stay', 'niche']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stay—']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Beats', '‘bout', 'waist', 'deep']),
			_elm_lang$core$Native_List.fromArray(
			['Swallowed', 'by', 'beats']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stay', 'niche']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'that', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'tell']),
			_elm_lang$core$Native_List.fromArray(
			['Handheld', 'dream']),
			_elm_lang$core$Native_List.fromArray(
			['Shot', 'in', 'hell']),
			_elm_lang$core$Native_List.fromArray(
			['Deep', 'space', 'ghetto', 'streets']),
			_elm_lang$core$Native_List.fromArray(
			['Show', 'me', 'somethin\'']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'ain\'t', 'seen', 'before']),
			_elm_lang$core$Native_List.fromArray(
			['Mystery', '\'hind', 'that', 'death', 'door']),
			_elm_lang$core$Native_List.fromArray(
			['Juke', 'step', 'electrocute', 'the', 'floor']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'the', 'science', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Flyin\'', 'that', 'high', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'no-no', 'goin\'']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'time!']),
			_elm_lang$core$Native_List.fromArray(
			['Creeps', 'up', 'behind', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Over', 'my', 'shoulder']),
			_elm_lang$core$Native_List.fromArray(
			['Turn', 'around', ',', 'try', 'to', 'see', ',', 'but', 'it\'s']),
			_elm_lang$core$Native_List.fromArray(
			['Nowhere']),
			_elm_lang$core$Native_List.fromArray(
			['Noided', ',', 'noided']),
			_elm_lang$core$Native_List.fromArray(
			['Static', 'on', 'my', 'blindside']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['Everybody\'s', 'knowin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'ya', 'think', 'you\'re', 'goin\'', 'ain\'t', 'goin\'', 'nowhere']),
			_elm_lang$core$Native_List.fromArray(
			['Satellite', ',', 'handle', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'a', 'lead', 'pipe']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'captures', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'takes', 'what\'s', 'left', ',', 'who', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'that', 'next', ',', 'already', 'know', 'my', 'gillicutti', ',', 'like', 'I', 'told', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'touch', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'up', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stay', 'noided', 'Stimulation', 'overload', 'account', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Desensitized', 'by', 'the', 'mass', 'amounts', 'of', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'it', ',', 'I\'ve', 'been', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'delete', 'it', ',', 'feels', 'like', 'jail']),
			_elm_lang$core$Native_List.fromArray(
			['Full', 'moon', 'in', 'the', 'klink']),
			_elm_lang$core$Native_List.fromArray(
			['Shining', ',', 'don\'t', 'sleep']),
			_elm_lang$core$Native_List.fromArray(
			['Surveillance', 'post', 'my', 'bail']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Beats', '‘bout', 'waist', 'deep']),
			_elm_lang$core$Native_List.fromArray(
			['Swallowed', 'by', 'beats']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stay', 'niche']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stay—']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Beats', '‘bout', 'waist', 'deep']),
			_elm_lang$core$Native_List.fromArray(
			['Swallowed', 'by', 'beats']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stay', 'niche']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage']),
			_elm_lang$core$Native_List.fromArray(
			['Armored', 'cop', 'open', 'fire', 'Glock']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'some', 'kid', 'who', 'stepped', 'so']),
			_elm_lang$core$Native_List.fromArray(
			['Fast', 'was', 'hard', 'to', 'grasp', 'what', 'even', 'happened', '\'til', 'you', 'seen', 'that', 'head', 'blow']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'his', 'shoulders', 'in', 'slow-mo']),
			_elm_lang$core$Native_List.fromArray(
			['Rewind', 'that', ',', 'it\'s', 'so', 'cold']),
			_elm_lang$core$Native_List.fromArray(
			['Rewind', 'that', ',', 'it\'s', 'so', 'cold']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided']),
			_elm_lang$core$Native_List.fromArray(
			['Juke', 'step', 'with', 'so', 'much', 'boy-rude', 'looseness', 'seem', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'bones', 'in', 'him', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'jaw', 'hit', 'the', 'floor', ',', 'like', 'This', 'real', 'footage', ',', 'gotta', 'see', 'that', 'one', 'mo\'', '\'gain']),
			_elm_lang$core$Native_List.fromArray(
			['Ambulance', 'hit', 'and', 'run', 'over', 'pedestrian', 'in', 'Brazil']),
			_elm_lang$core$Native_List.fromArray(
			['Little', 'tiger', ',', 'boy', 'soldier']),
			_elm_lang$core$Native_List.fromArray(
			['Twist', 'cap', 'back', 'and', 'kill']),
			_elm_lang$core$Native_List.fromArray(
			['Seen', 'crazy', 'shit', ',', 'man', ',', 'crazy', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Seen', 'crazy', 'shit', ',', 'man', ',', 'crazy', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'seen', 'footage', ',', 'I', 'stay', 'noided', ',', 'I\'ve', 'seen', 'footage', ',', 'I', 'stay']),
			_elm_lang$core$Native_List.fromArray(
			['Burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'takin\'', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'we', 'burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'ain\'t', 'takin\'', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Coughin\'', 'up', 'sirens', ',', 'I\'m', 'firin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Krokodil', 'lips', 'off', 'your', 'smile']),
			_elm_lang$core$Native_List.fromArray(
			['Quit', 'that', 'fidget', 'looks', 'suspicious']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'that', 'screw', 'that', 'ain\'t', 'got', 'my', 'digits', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fear', 'over', 'pride', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Flood', 'you', 'can\'t', 'hide', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'of', 'a', 'woman', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Tears', 'of', 'a', 'child', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'rising', 'sign', 'of', 'sulfur']),
			_elm_lang$core$Native_List.fromArray(
			['Skeletal', 'bell', 'toller']),
			_elm_lang$core$Native_List.fromArray(
			['Handle', 'in', 'each', 'of', 'my', 'tentacles']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'moonshining', 'juice', ',', 'don\'t', 'try', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Live', 'to', 'feel', 'life', 'beat', 'me', ',', 'nothing', 'hurts']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'seething', ',', 'your', 'smoke', 'signals', 'proceed', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'inside', 'my', 'TV', 'where', 'everyone', 'but', 'I', 'can', 'see', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'are', 'you', 'here', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fear', 'over', 'pride', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Flood', 'you', 'can\'t', 'hide', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'of', 'a', 'woman', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Tears', 'of', 'a', 'child', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'takin\'', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'we', 'burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'ain\'t', 'takin\'', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'we', 'burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'takin\'', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['See', 'myself', 'come', 'spin', 'through', 'top', 'of', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'flint', 'lit', 'slit', 'that', 'attitude']),
			_elm_lang$core$Native_List.fromArray(
			['Lil', 'brain', 'got', 'confused']),
			_elm_lang$core$Native_List.fromArray(
			['Choo', 'choo', 'train', 'of', 'thought', 'in', 'my', 'logic', 'loop']),
			_elm_lang$core$Native_List.fromArray(
			['Fear', 'over', 'pride', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Flood', 'you', 'can\'t', 'hide', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'of', 'a', 'woman', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Tears', 'of', 'a', 'child', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Broken', 'hands', 'on', 'all', 'my', 'fingers']),
			_elm_lang$core$Native_List.fromArray(
			['Buckle', 'down', 'my', 'knuckles', 'like', 'screamers']),
			_elm_lang$core$Native_List.fromArray(
			['Stitch', 'up', 'my', 'blown', 'out', 'trench', 'with', 'leather', 'streamers']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'chain-linked', 'fence', 'that', 'splits', 'dream', 'and', 'dreamer']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', '\'em', 'hangin\'', 'from', 'my', 'balcony', ',', 'shrivel', 'in', 'my', 'sun']),
			_elm_lang$core$Native_List.fromArray(
			['Warm', 'piss', 'showin\'', 'through', 'his', 'cheap', 'slacks', ',', 'this', 'bitch', 'is', 'done']),
			_elm_lang$core$Native_List.fromArray(
			['Open', 'my', 'front', ',', 'ragin\'', 'like', 'I\'ve', 'never', 'slept']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'him', 'cry', 'like', 'a', 'baby', 'formula', 'on', 'the', 'breath']),
			_elm_lang$core$Native_List.fromArray(
			['Needle', 'of', 'your', 'eye', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['River', 'Nile', 'wide', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Fear', 'over', 'pride', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Flood', 'you', 'can\'t', 'hide', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'of', 'a', 'woman', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Tears', 'of', 'a', 'child', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'a', 'foreign', 'land', 'Lil', 'boy']),
			_elm_lang$core$Native_List.fromArray(
			['Single', 'file']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'we', 'burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'ain\'t', 'takin', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'we', 'burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'ain\'t', 'takin', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'ain\'t', 'takin', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'we', 'burn', 'through', 'it', ',', 'burn', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'ain\'t', 'takin', 'turns', 'to', 'it', ',', 'turns', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Into', 'the', 'flame', ',', 'into', 'the', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'no', 'regard', 'for', 'a', 'thing', ',', 'fuck', 'that', 'I\'m', 'the', 'lord', 'of', 'the', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'rule', 'this', 'empire', 'I', 'am', 'the', 'God', 'of', 'hell', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['Lord', 'of', 'the', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['Born', 'to', 'reign', 'above', 'all', 'that', 'you', 'claim', 'to', 'know', 'beyond', 'a', 'doubt']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'no', 'one', 'has', 'came', 'even', 'close', 'to', 'the', 'train']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'thought', 'we', 'drop', 'like', 'neutron', 'bombs', 'from', 'the', 'tower']),
			_elm_lang$core$Native_List.fromArray(
			['Control', 'this', 'and', 'bang', 'this', ',', 'then', 'watch', 'it', 'rise', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['Than', 'anything', 'seen', 'in', 'your', 'entire']),
			_elm_lang$core$Native_List.fromArray(
			['Life', 'spent', 'in', 'chains', ',', 'sonic', 'live', 'wire']),
			_elm_lang$core$Native_List.fromArray(
			['Electrified', 'rain', 'from', 'the', 'lips', 'of', 'the', 'driver']),
			_elm_lang$core$Native_List.fromArray(
			['Whippin\'', 'the', 'wheel']),
			_elm_lang$core$Native_List.fromArray(
			['Flippin\'', 'donuts', 'to', 'peel']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'on', 'the', 'face', 'of', 'the', 'base;', 'where\'s', 'my', 'lighter', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Need', 'it', 'to', 'kill', 'one', 'more', 'and', 'chill', 'while', 'I', 'feel']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'so', 'much', 'my', 'gut', 'burns', 'like', 'the', 'tires']),
			_elm_lang$core$Native_List.fromArray(
			['Movin\'', 'this', 'movement', 'of', 'real', 'shit', 'inspired']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'all', 'that', 'has', 'come', 'before', 'this', 'and', 'was', 'done']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'the', 'real', 'ones', 'packin\'', 'real', 'guns', 'loaded', 'with', 'power']),
			_elm_lang$core$Native_List.fromArray(
			['Shower', 'the', 'slums', 'with', 'power', 'from', 'the', 'war', 'marching', 'drums', 'that', 'have', 'come', 'to', 'devour']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'weakness', 'that', 'runs', 'when', 'we', 'come']),
			_elm_lang$core$Native_List.fromArray(
			['Fuckin\'', 'cowards']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['Lord', 'of', 'the', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['Born', 'to', 'reign', 'above', 'all', 'that', 'you', 'claim', 'to', 'know', 'beyond', 'a', 'doubt']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'no', 'one', 'has', 'came', 'even', 'close', 'to', 'the', 'train', 'of', 'thought']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'drop', 'like', 'neutron', 'bombs', 'from', 'the', 'tower']),
			_elm_lang$core$Native_List.fromArray(
			['Which', 'we', 'maintain']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'soldiers', 'of', 'fame']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'fortune', 'denied', 'as', 'to', 'to', 'get', 'by', 'without', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Bullshit', 'coming', 'at', 'me', 'from', 'all', 'sides']),
			_elm_lang$core$Native_List.fromArray(
			['Nowhere', 'to', 'run', ',', 'nowhere', 'to', 'hide']),
			_elm_lang$core$Native_List.fromArray(
			['Told', 'me', 'it', 'was', 'all', 'good', ',', 'but', 'they', 'lied']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'wait', 'to', 'see', 'whites', 'of', 'their', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'to', 'everyone', 'who', 'does', 'not', 'recognize']),
			_elm_lang$core$Native_List.fromArray(
			['War', 'is', 'never', 'done', ',', 'think', 'it', 'is', 'you', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'was', 'I', 'now', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'I', 'said', 'before']),
			_elm_lang$core$Native_List.fromArray(
			['Hear', 'someone', 'knockin\'']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'my', 'front', 'door']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'could', 'it', 'be', '?', 'Should', 'I', 'ignore']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'knockin\'', 'or', 'see', 'what', 'could', 'be', 'in', 'store']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'me', 'if', 'I', 'leave', 'the', 'safety', 'of', 'the', 'shore', '?']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'many', 'options', ',', 'so', 'little', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'do', 'what', 'I', 'want', '\'fore', 'the', 'end', 'of', 'the', 'line']),
			_elm_lang$core$Native_List.fromArray(
			['Places', 'its', 'blade', 'in', 'the', 'small', 'of', 'my', 'spine']),
			_elm_lang$core$Native_List.fromArray(
			['Is', 'it', 'paranoia', '?', 'Is', 'it', 'real', '?']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'long', 'can', 'a', 'man', 'enjoy', 'what', 'he', 'doesn\'t', 'feel', '?']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'ask', 'if', 'you', 'can', 'make', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'don\'t', 'wanna', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['x4']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'they', 'tell', 'you', 'you', 'must', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'you', 'think', 'hell', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'bad', 'feeling', 'and', 'can\'t', 'shake', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['Rather', 'be', 'stuck', 'naked']),
			_elm_lang$core$Native_List.fromArray(
			['Hits', 'so', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['Than', 'waste', 'my', 'time', 'like', 'the', 'last', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'every', 'time', 'before', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'waste', 'my', 'time', 'even', 'one', 'more', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'you', 'know', 'that', 'shit', 'is', 'whack']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'make', 'me', 'remind', 'of', 'you', 'of', 'the', 'last', 'time', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Said', 'you\'d', 'never', 'go', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'where', 'you\'re', 'from']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'where', 'you\'re', 'goin\'']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'about', 'where', 'you\'re', 'at']),
			_elm_lang$core$Native_List.fromArray(
			['Been', 'workin\'', 'way', 'too', 'much', 'need', 'to', 'get', 'out', 'and', 'get', 'fucked', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['What\'s', 'going', 'on', '?', 'Where\'s', 'it', 'at', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'some', 'calls', 'to', 'make', 'it', 'crack', ',', 'let\'s', 'see']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'need', 'money', ',', 'drugs', ',', 'a', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'a', 'spot', 'with', 'hot', 'ones', 'inside']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'mission:']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'get', 'all', 'of', 'the', 'above', 'in', 'a', 'limited', 'amount', 'of', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can', 'do', 'this', 'and', 'it\'s', 'done']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'that', 'we\'re', 'on', 'our', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Be', 'it', 'acid', 'on', 'the', 'tongue']),
			_elm_lang$core$Native_List.fromArray(
			['Cocaine', 'in', 'your', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Or', 'some', 'weed', 'that', 'hits', 'your', 'lungs']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'a', 'runaway', 'train']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'yeah', ',', 'from', 'DMT', 'to', 'MDMA']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'all', 'that', 'shit', 'and', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'till', 'dawn', 'we\'re', 'okay', ',', 'but', 'anyway']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'line', ',', 'every', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'in', ',', 'get', 'a', 'drink', ',', 'and', 'lose', 'our', 'minds']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'eyes', 'on', 'the', 'dime']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'makes', 'your', 'dick', 'want', 'to', 'grind']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'you', 'got', 'a', 'good', 'buzz', 'going']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'everything', 'is', 'glowing']),
			_elm_lang$core$Native_List.fromArray(
			['Skirt', 'so', 'short', 'her', 'ass', 'is', 'showing']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'she\'s', 'looking', 'so', 'you’re', 'knowing']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'could', 'get', 'it', 'tonight']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'there’s', 'so', 'much', 'around']),
			_elm_lang$core$Native_List.fromArray(
			['Best', 'take', 'your', 'time', ',', 'do', 'it', 'right']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'you', 'keep', 'getting', 'higher']),
			_elm_lang$core$Native_List.fromArray(
			['Lights', 'look', 'like', 'they\'re', 'on', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['Soon', 'all', 'that’s', 'left', 'of', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Is', 'your', 'most', 'primal', 'desires']),
			_elm_lang$core$Native_List.fromArray(
			['Ass', 'clappin\'', ',', 'dick', 'suckin\'', ',', 'lock', 'the', 'door', 'to', 'the', 'bathroom', '–', 'quick', 'fuckin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Find', 'a', 'whore', 'and', 'it', 'could', 'happen']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'it\'s', 'nothin\'', ',', 'cause', 'you\'re', 'drunk', 'and', 'you\'ll', 'be', 'blackin\'', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Before', 'you', 'even', 'get', 'a', 'chance', 'to', 'think', '\'bout', 'what', 'you\'re', 'doing']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'bitch', ',', 'bitch', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Getting', 'looser', 'and', 'looser', 'and', 'looser', 'and', 'losing', 'yourself']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'groove', 'that', 'has', 'the', 'whole', 'party', 'movin\'']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'cruisin\'', ',', 'you', 'don\'t', 'know', 'what', 'you\'re', 'doing', 'and', 'you', 'don\'t', 'give', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'you\'re', 'so', 'liquored', 'up', ',', 'you', 'throw', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'keep', 'on', 'riding', 'cause', 'your', 'timing', 'is', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'that', 'fine', 'one', 'is', 'on', 'you', ',', 'it\'s', 'time', 'to', 'get', 'gone']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'far', 'up', 'in', 'it', 'to', 'yawn', ',', 'till', 'it\'s', 'finished', 'come', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'more', 'twisted', 'and', 'bomb', 'the', 'dance', 'floor', 'till', 'it', 'breaks']),
			_elm_lang$core$Native_List.fromArray(
			['Start', 'to', 'pondering', 'rape']),
			_elm_lang$core$Native_List.fromArray(
			['Me', ',', 'I\'m', 'all', 'about', 'the', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'it', 'takes', 'all', 'kinds']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'pay', 'no', 'mind', 'to', 'the', 'taste']),
			_elm_lang$core$Native_List.fromArray(
			['Want', 'to', 'hear', 'that', 'song', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', ',', 'the', 'one', 'with', 'the', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'makes', 'their', 'asses', 'gyrate']),
			_elm_lang$core$Native_List.fromArray(
			['Forget', 'to', 'hydrate']),
			_elm_lang$core$Native_List.fromArray(
			['Till', 'they\'re', 'so', 'fucked', 'up', 'they', 'take']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'all', 'of', 'their', 'clothes', 'and', 'whip']),
			_elm_lang$core$Native_List.fromArray(
			['It', 'on', 'me', 'like', 'my', 'body\'s', 'made', 'to', 'fit', '\'tween', 'their', 'lips']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'the', 'ones', 'on', 'their', 'grill']),
			_elm_lang$core$Native_List.fromArray(
			['Or', 'between', 'their', 'hips']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'either', 'way', ',', 'I', 'must', 'say']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'really', 'don\'t', 'give', 'a', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Long', 'as', 'it\'s', 'done', 'well', ',', 'and', 'they', 'promise', 'not', 'to', 'tell']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'could', 'do', 'this', 'like', 'an', 'orgy']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'bowels', 'of', 'hell']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'every', 'Lucy’s', 'hella', 'horny']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'their', 'pussies', 'don\'t', 'smell']),
			_elm_lang$core$Native_List.fromArray(
			['Argh...']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'s', 'it', 'at', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', 'Bitch', ',', 'bitch', ',', 'bitch', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Responsibility\'s', 'cool', ',', 'but', 'there’s', 'more', 'things', 'in', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'getting', 'your', 'dick']),
			_elm_lang$core$Native_List.fromArray(
			['Rode', 'all', 'fucking', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'the', 'kind', 'of', 'girl', 'that', 'knows', 'how', 'to', 'keep', 'her', 'shit', 'tight']),
			_elm_lang$core$Native_List.fromArray(
			['Legs', 'in', 'the', 'air', ',', 'looking', 'like', 'they', 'feel', 'nice']),
			_elm_lang$core$Native_List.fromArray(
			['Volcano', 'pussy', 'melt', 'your', 'peter', 'like', 'ice']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'the', 'drugs', 'got', 'you', 'going', 'back', 'for', 'more', 'cause', 'you\'re', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'just', 'can\'t', 'get', 'enough', 'of', 'that', 'cum', 'clutch', ',', 'well', 'alright']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'time', 'to', 'find', 'one', 'and', 'take', 'one']),
			_elm_lang$core$Native_List.fromArray(
			['Right', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'time', 'to', 'find', 'one', 'and', 'make', 'one', 'say', 'I\'m', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Think', 'I', 'just', 'found', 'one', ',', '\'bout', 'to', 'break', 'one', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Meanwhile']),
			_elm_lang$core$Native_List.fromArray(
			['Hallucinating', 'crazy', ',', 'getting', 'lost', 'for', 'miles']),
			_elm_lang$core$Native_List.fromArray(
			['May', 'have', 'gotten', 'too', 'fucked', 'up', 'cause', 'I', 'forgot', 'how', 'to', 'smile']),
			_elm_lang$core$Native_List.fromArray(
			['Gonna', 'have', 'to', 'do', 'this', 'shit', 'Jim', 'Morrison', 'style']),
			_elm_lang$core$Native_List.fromArray(
			['Will', 'it', 'work', '?', 'Probably', 'not', ',', 'but', 'it\'s', 'worth', 'a', 'try']),
			_elm_lang$core$Native_List.fromArray(
			['First', 'hot', 'one', 'I', 'see', 'with', 'sex', 'in', 'her', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Will', 'be', 'the', 'hot', 'one', 'I', 'need', 'to', 'take', 'home', 'with', 'me', 'tonight']),
			_elm_lang$core$Native_List.fromArray(
			['Wish', 'me', 'luck', ',', 'give', 'me', 'dap']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'I\'ll', 'talk', 'to', 'you', 'later']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'when', 'I', 'do', ',', 'let\'s', 'hope', 'my', 'story', 'isn’t', 'all', 'about', 'haters']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'s', 'it', 'at', '?', 'Cause', 'I', 'want', 'it', 'like', ',', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'the', 'drugs', 'but', 'need', 'a', 'hot', 'one', 'that\'ll', 'make', 'me', 'go', 'damn']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'the', 'most', 'banging', 'guts', 'that', 'I', 'ever', 'have', 'smashed']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'you', 'got', 'it', 'push', 'it', 'up', 'on', 'me', 'cause', 'I\'m', 'feeling', 'that', 'ass', ',', 'know', 'what', 'I', 'mean', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Where\'s', 'it', 'at', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch', ',', 'bitch', ',', 'bitch', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'it', 'I', ',', 'I', 'need', 'it', ',', 'need', 'it', 'to', 'make', 'me', 'feel', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Shake', 'it', ',', 'can\'t', 'take', 'it', ',', 'must', 'break', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'if', 'off', ',', 'yeah', ',', 'what\'d', 'I', 'say', 'bitch', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it', ',', 'been', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Done', 'everything', 'I', 'can', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Road', 'to', 'it', ',', 'till', 'I', 'broke', 'through', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'was', 'attached', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Took', 'all', 'I', 'had', 'in', 'a', 'flash', 'knew', 'it', 'was', '\'bout', 'to', 'crash']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'I', 'mashed', 'through', 'hit']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Had', 'to', 'do', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Hacked', 'into', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'them', 'eat', 'shit', 'and', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'I', 'creep', 'lit']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'the', 'deep', 'hits', 'with', 'a', 'sick', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'the', 'secrets', 'I', 'rely', '\'pon', 'to', 'freak', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can', 'tell', 'me', 'what', 'you', 'said', ',', 'go', 'ahead']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'no', 'sooner', 'than', 'you', 'said', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can', 'bet', 'it', 'was', 'left', 'for', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'you', 'said', 'in', 'and', 'out', 'of', 'my', 'head', 'in', 'seconds']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', '\'em', 'guessin\'', 'endlessly']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'let', '\'em', 'know', 'where', 'you\'re', 'headed']),
			_elm_lang$core$Native_List.fromArray(
			['King', 'of', 'the', 'unknown', 'cloaked', 'in', 'mystery']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'show', '\'em', 'they', 'don’t', 'mean', 'shit', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Put', '\'em', 'in', 'their', 'place', ',', 'cause', 'they', 'ought', 'to', 'be']),
			_elm_lang$core$Native_List.fromArray(
			['Kept', 'in', 'the', 'dark', ',', 'not', '\'posed', 'to', 'see', 'never', ',', 'but', 'only', 'so', 'much', 'of', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Double', 'O.G.', 'with', 'a', 'skeleton', 'key']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'meant', 'a', 'thing', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Effortlessly', 'dead', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Check', 'the', 'sign', 'no', 'vacancy']),
			_elm_lang$core$Native_List.fromArray(
			['Extremely', 'selective', 'memory']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it', ',', 'gotta', 'stay', 'deep', 'in', 'the', 'zone']),
			_elm_lang$core$Native_List.fromArray(
			['Or', 'it’ll', 'take', 'everything', 'you', 'own', ',', 'floor', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'it', ',', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it', 'since', 'way', 'back', ',', 'all', 'about', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'been', 'without', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'ride', 'it', 'inside', 'out', 'of', 'the', 'clouded']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'the', 'enemy', 'surrounded']),
			_elm_lang$core$Native_List.fromArray(
			['Thoughts', 'that', 'make', 'you', 'feel', 'lost', 'don’t', 'doubt', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'might', 'just', 'need', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Already', 'did', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'never', 'go', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'fuck', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Gets', 'the', 'bozack']),
			_elm_lang$core$Native_List.fromArray(
			['Laid', 'on', 'the', 'gas', ',', 'leaned', 'back', 'and', 'blew', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Twelve', 'gauge', 'blasted', 'out', ',', 'abused', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Left', 'it', 'for', 'the', 'next', ',', 'hit', 'eject', 'done', 'wit', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'want', 'it', 'you', 'can', 'have', 'it', ',', 'no', 'questions', 'asked']),
			_elm_lang$core$Native_List.fromArray(
			['Left', 'that', 'shit', 'on', 'the', 'side', 'of', 'the', 'road', 'in', 'a', 'ditch', ',', 'don’t', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'you', 'have', 'one', 'let', 'a', 'man', 'know', 'so', 'I', 'could', 'flip', 'a', 'bitch', 'and', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'for', 'the', 'hills', 'when', 'it', 'makes', 'you', 'feel']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'you', 'can\'t', 'ever', 'chill', 'no', 'more', ',', 'fuck', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Every', 'time', 'I', 'get', 'it', 'to', 'wind', ',', '\'round', 'my', 'finger', 'and', 'recline']),
			_elm_lang$core$Native_List.fromArray(
			['Behave', 'or', 'be', 'slayed', 'cause', 'I', 'will', 'be', 'damned', 'if', 'mine', 'ever', 'decays']),
			_elm_lang$core$Native_List.fromArray(
			['Forever', 'on', 'attack', 'gut', 'check', 'the', 'blind']),
			_elm_lang$core$Native_List.fromArray(
			['Game', 'recognize', 'game', 'is', 'tight']),
			_elm_lang$core$Native_List.fromArray(
			['Bow', 'down', 'or', 'get', 'banged', 'for', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'am', 'known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'them', 'eat', 'shit', 'and', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'I', 'creep', 'lit']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'the', 'deep', 'hits', 'with', 'a', 'sick', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'the', 'secrets', 'I', 'rely', '\'pon', 'to', 'freak', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pay', 'the', 'price', 'to', 'roll', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Waste', 'your', 'life', 'and', 'you', 'won\'t', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Played', 'out', 'with', 'nowhere', 'to', 'go', ',', 'bet', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Makes', 'you', 'feel', 'like', 'a', 'ho', ',', 'don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Known', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Corner', 'of', 'my', 'eye']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'coroner\'s', 'here;', 'why', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Under', 'pressure', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'back', 'bone', 'slip', 'left', 'to', 'the', 'death']),
			_elm_lang$core$Native_List.fromArray(
			['Massive', 'procession', 'of', 'cold', 'sweat']),
			_elm_lang$core$Native_List.fromArray(
			['Stalactite', 'step', 'slide', 'through', ',', 'you\'re', 'next']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'me', 'inside', 'I\'ll', 'do', 'the', 'rest']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Master', 'of', 'self-contained', 'combust']),
			_elm_lang$core$Native_List.fromArray(
			['Sustained', 'disgust', ',', 'command', 'him', 'claim']),
			_elm_lang$core$Native_List.fromArray(
			['Figure', 'eight', 'strut', ',', 'can\'t', 'be', 'touched']),
			_elm_lang$core$Native_List.fromArray(
			['Subversive', 'infiltration']),
			_elm_lang$core$Native_List.fromArray(
			['reign', 'supreme']),
			_elm_lang$core$Native_List.fromArray(
			['in', 'none', 'me', 'trust']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'must', 'them', '?', 'Fuck', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Mine', 'vomit', 'stain', 'them', ',', 'feel', 'not', 'but', 'hate', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Line', 'up', 'back', 'facin\'', ',', 'suspense', 'rapes', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'by', 'one', 'hot', 'cum', 'shot', 'clip', 'spray', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Life', 'drop', 'and', 'waste', 'them', 'in', 'pine', 'box', 'laid', 'them', 'to']),
			_elm_lang$core$Native_List.fromArray(
			['Grime', 'dismantled', ',', 'churn', 'the', 'fat']),
			_elm_lang$core$Native_List.fromArray(
			['Light', 'the', 'candle', ',', 'burn', 'the', 'wax']),
			_elm_lang$core$Native_List.fromArray(
			['Before', 'me', 'dies', ',', 'in', 'scorch', 'uprise']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'deny', 'it', ',', 'no', 'way', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Invoke', 'ancient', 'locc', 'to', 'the', 'brain', 'in', 'a', 'blaze', 'ignition', 'weightless', 'world']),
			_elm_lang$core$Native_List.fromArray(
			['Warped', 'rotation', ',', 'path', 'is', 'blurred']),
			_elm_lang$core$Native_List.fromArray(
			['Memento', 'mori', ',']),
			_elm_lang$core$Native_List.fromArray(
			['dead', 'man\'s', 'curve']),
			_elm_lang$core$Native_List.fromArray(
			['Oblivion', 'transcender', 'becomes', 'him', 'shroud']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'remember', ',', 'I\'m', 'no', 'one', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'for', 'yours', ',', 'lock', 'your', 'doors']),
			_elm_lang$core$Native_List.fromArray(
			['Identifier', 'destroyer']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'on', ',', 'stick', 'me', ',', 'cut', 'me', ',', 'drain', 'me', ',', 'suck', 'me', ',', 'drink', 'me', ',', 'take', 'me', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'me', 'one', 'three']),
			_elm_lang$core$Native_List.fromArray(
			['make', 'your', 'pumping', 'chamber', 'pound', 'and', 'drown']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'some', 'shit', 'to', 'say', ',', 'just', 'for', 'the', 'fuck', 'of', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'things', ',', 'them', 'things', ',', 'don\'t', 'even', 'ask', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Bear', 'the', 'mark']),
			_elm_lang$core$Native_List.fromArray(
			['Take', 'one', 'to', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Lifted', 'chin']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'don\'t', 'show']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'the', 'trip', 'never', 'stops']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'and', 'on', ',', 'it\'s', 'beyond', 'insane']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'I', 'set', 'myself', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'a', 'raging', 'sea', 'of', 'flames', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a', 'beatdown']),
			_elm_lang$core$Native_List.fromArray(
			['Madness', ',', 'chaos', 'in', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'my', 'blood', 'flow', ',', 'make', 'my', 'blood', 'flow', 'through', 'you', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'no', 'business', 'questioning', 'a', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a', 'beatdown']),
			_elm_lang$core$Native_List.fromArray(
			['Madness', ',', 'chaos', 'in', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'my', 'blood', 'flow', ',', 'make', 'my', 'blood', 'flow', 'through', 'you', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'no', 'business', 'questioning', 'a', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'not', 'on', 'it', ',', 'leanin\'', 'so', 'hard', 'you\'re', 'ashamed']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can\'t', 'dismiss', 'this', 'sick', 'transmission', ',', 'huffs', 'your', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Exhale', 'your', 'will', 'and', 'forget', 'I', 'ever', 'knew', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'do', 'you', 'do', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'man', 'with', 'hips', 'for', 'hulu']),
			_elm_lang$core$Native_List.fromArray(
			['Rack', 'a', 'snitch', ',', 'chalk', 'and', 'cue', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Corner', 'pocket', 'consume', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'many', 'hoes', 'in', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'many', 'hoes', 'in', 'my', 'motherfuckin\'', 'meal']),
			_elm_lang$core$Native_List.fromArray(
			['Asking', 'if', 'I', 'know', 'how', 'a', 'motherfucker', 'feels']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'a', 'motherfucker', 'feels']),
			_elm_lang$core$Native_List.fromArray(
			['Slit', 'them', 'choke', ',', 'flip', 'them', 'boat']),
			_elm_lang$core$Native_List.fromArray(
			['Dead', 'bitch', 'float', ',', 'swollen', 'corpse']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'remorse', ',', 'navigated', 'off', 'course']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'course', 'I', 'can', 'make', 'you', 'scream', 'but', 'if', 'you', 'ask', 'for', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['Bullshit', ',', 'matador', ',', 'grab', 'the', 'floor', ',', 'whip', 'it', 'cracked', 'to', 'all', 'fours']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'whimper', 'while', 'I', 'check', 'my', 'phone']),
			_elm_lang$core$Native_List.fromArray(
			['Who\'s', 'next', '?', 'Assassin', 'roam']),
			_elm_lang$core$Native_List.fromArray(
			['Music', 'drifts', ',', 'I', 'have', 'no', 'home']),
			_elm_lang$core$Native_List.fromArray(
			['Choose', 'this', 'life', 'you\'re', 'on', 'your', 'own']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a', 'beatdown']),
			_elm_lang$core$Native_List.fromArray(
			['Madness', ',', 'chaos', 'in', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'my', 'blood', 'flow', ',', 'make', 'my', 'blood', 'flow', 'through', 'you', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'no', 'business', 'questioning', 'a', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a', 'beatdown']),
			_elm_lang$core$Native_List.fromArray(
			['Madness', ',', 'chaos', 'in', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'my', 'blood', 'flow', ',', 'make', 'my', 'blood', 'flow', 'through', 'you', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'no', 'business', 'questioning', 'a', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Swallowed', 'way', 'too', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['Couldn\'t', 'handle', 'it', ',', 'I', 'fell']),
			_elm_lang$core$Native_List.fromArray(
			['Down', 'a', 'spiral', 'stair', 'case', 'winding', 'to', 'hell']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it', ',', 'now', 'I', 'can\'t', 'quit', ',', 'will', 'never', 'be', 'the', 'same']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'that', 'attitude', ',', 'you', 'got', 'no', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'fit', 'to', 'hurt', 'you;', 'gives', 'a', 'fuck', 'about', 'the', 'way', 'I', 'move', 'weight', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Dark', 'matter', ',', 'flu', 'state', 'of', 'consciousness']),
			_elm_lang$core$Native_List.fromArray(
			['Blew', 'straight', 'through', 'you', 'won\'t', 'do', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'beg', 'me', 'to', 'do', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Again', 'and', 'again', 'and', 'again', 'and', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['Strangler', 'clutch', ',']),
			_elm_lang$core$Native_List.fromArray(
			['sine', 'wave', 'deconstruct']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'way', 'or', 'no', 'way', ',', 'bangin\'', 'hey', 'makin\'', 'lust']),
			_elm_lang$core$Native_List.fromArray(
			['Lucid', 'nut', 'shake']),
			_elm_lang$core$Native_List.fromArray(
			['shake', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Booyakah']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'a', 'bitch', 'made', 'to', 'be', 'crushed']),
			_elm_lang$core$Native_List.fromArray(
			['Came', 'like', ',', 'what']),
			_elm_lang$core$Native_List.fromArray(
			['Now', 'you', 'crave', 'my', ',', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['Flat', 'busted', 'on', 'front', 'street', 'cake', 'cuppin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'you', 'wasn\'t', 'lion', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'done', 'been', 'done', 'with', 'tame']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'hunter', ',', 'fuck', 'the', 'fame']),
			_elm_lang$core$Native_List.fromArray(
			['Switch', 'lanin\'', 'ripper', 'slangin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'me', 'nuclear', 'wind', 'at', 'my', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Smokin\'', 'goldfish', 'at', 'the', 'photo', 'mat']),
			_elm_lang$core$Native_List.fromArray(
			['Load', 'my', 'clap', 'clap', 'can\'t', 'trust', '\'em', 'never', 'did']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'it', 'is', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a', 'beatdown']),
			_elm_lang$core$Native_List.fromArray(
			['Madness', ',', 'chaos', 'in', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'my', 'blood', 'flow', ',', 'make', 'my', 'blood', 'flow', 'through', 'you', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'no', 'business', 'questioning', 'a', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a', 'beatdown']),
			_elm_lang$core$Native_List.fromArray(
			['Madness', ',', 'chaos', 'in', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'my', 'blood', 'flow', ',', 'make', 'my', 'blood', 'flow', 'through', 'you', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'no', 'business', 'questioning', 'a', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a', 'beatdown']),
			_elm_lang$core$Native_List.fromArray(
			['Madness', ',', 'chaos', 'in', 'the', 'brain']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'my', 'blood', 'flow', ',', 'make', 'my', 'blood', 'flow', 'through', 'you', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'got', 'no', 'business', 'questioning', 'a', 'thang']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'fit', 'to', 'learn', 'the', 'proper', 'meaning', 'of', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Other', 'side', 'of', 'the', 'tracks']),
			_elm_lang$core$Native_List.fromArray(
			['Scuzz', 'outsiders']),
			_elm_lang$core$Native_List.fromArray(
			['Nothin\'', 'to', 'loose']),
			_elm_lang$core$Native_List.fromArray(
			['Strike', 'of', 'midnighters']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['True', 'black', 'and', 'blues']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'shoes', ',', 'flat', 'tires']),
			_elm_lang$core$Native_List.fromArray(
			['Broke', 'out', 'the', 'pen']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'on', 'barbed', 'wire']),
			_elm_lang$core$Native_List.fromArray(
			['Safe', 'in', 'your', 'home']),
			_elm_lang$core$Native_List.fromArray(
			['Gated', 'zone', 'terrorizers']),
			_elm_lang$core$Native_List.fromArray(
			['Nowhere', 'to', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['Far', 'as', 'I', 'can', 'get', 'hitchhikers']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'a', 'job', ',', 'might', 'have', 'to', 'rob']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'don\'t', 'know', 'just', 'to', 'get', 'by', ',', 'word']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'the', 'road', 'for', 'lifers']),
			_elm_lang$core$Native_List.fromArray(
			['Bullets', 'in', 'the', 'fire']),
			_elm_lang$core$Native_List.fromArray(
			['Check', 'the', 'chain', 'link']),
			_elm_lang$core$Native_List.fromArray(
			['Swayze']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'slummin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Let', '\'em', 'know', 'who', 'the', 'fuck', 'we', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Low', 'and', 'dirty', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'out', 'the', 'cuts']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'your', 'favorite', 'scar']),
			_elm_lang$core$Native_List.fromArray(
			['Crawlin', '\'on', 'tile', ',', 'can\'t', 'stand', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Been', 'a', 'while', ',']),
			_elm_lang$core$Native_List.fromArray(
			['kommodo', 'gut']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'give', 'a', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'live', 'with', 'pain']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'get', 'your', 'cut']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'long\'s', 'this', 'been', 'goin\'', 'on', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Man', 'shit', 'no', 'way', 'to', 'tell', 'too', 'far', 'gone', ',', 'go', 'get', 'those', 'flames', 'from', 'hell', 'bring', 'em', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'trip', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'handle', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'some', 'scandalous']),
			_elm_lang$core$Native_List.fromArray(
			['Inland', 'empire', ',', 'Los', 'Angeles']),
			_elm_lang$core$Native_List.fromArray(
			['Anti-ego', 'propaganda', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'yeah', ',', 'yeah', ',', 'yeah', ',', 'yeah', ',', 'yeah']),
			_elm_lang$core$Native_List.fromArray(
			['Who\'s', 'comin\'', 'up', '?', 'Who\'s', 'losin\'', 'ground', '?']),
			_elm_lang$core$Native_List.fromArray(
			['2012', ',', 'I\'m', 'shady', 'now', ',', 'running', 'game', 'on', 'every', 'thing', 'in', 'town']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'such', 'a', 'long', 'way', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'such', 'a', 'long', 'way', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'such', 'a', 'long', 'way', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Brown', 'paper', 'baggin\'', ',', 'asphalt', 'scrapin\'', ',', 'all', 'talk', 'no', 'action', ',', 'what', 'I\'m', 'waitin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Weak', 'tongue', 'waggin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Stray', 'dog', 'beggin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'don\'t', 'hurt', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'right', ',', 'I\'m', 'sayin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Beware', 'you', 'have', 'been', 'warned', ',', 'the', 'barrels', 'still', 'warm', ',', 'ease', 'up', 'off', 'that', 'lip', 'or', 'step']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'quick', 'a', 'bitch', 'fit', 'to', 'get', 'checked', ',', 'mate']),
			_elm_lang$core$Native_List.fromArray(
			['One', 'false', 'move\'ll', 'get', 'ya']),
			_elm_lang$core$Native_List.fromArray(
			['Set', 'straight']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'yeah', ',', 'yeah...']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'such', 'a', 'long', 'way', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'such', 'a', 'long', 'way', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'such', 'a', 'long', 'way', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'such', 'a', 'long', 'way', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Lost', 'boys', ',', 'lost', 'boys']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'yeah', 'yeah']),
			_elm_lang$core$Native_List.fromArray(
			['Ride', 'through', 'the', 'sky', 'of', 'black', 'mist']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face', ',', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face', ',', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'my', 'hands', 'on', 'this', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Impressed', 'with', 'me', ',', 'all', 'of', 'these', 'insects']),
			_elm_lang$core$Native_List.fromArray(
			['Act', 'as', 'if', 'I', 'never', 'meant', 'to']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'never', 'meant', 'to', 'be', 'soft']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'know', 'it', 'sounds', 'crazy', 'at', 'the', 'river', 'bank']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'thought', '\'bout', 'shit', 'for', 'a', 'minute', ',', 'mane']),
			_elm_lang$core$Native_List.fromArray(
			['Mane']),
			_elm_lang$core$Native_List.fromArray(
			['Twice', 'the', 'thickness', 'Nyquil']),
			_elm_lang$core$Native_List.fromArray(
			['Limited', 'discount', 'time', 'kill']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'here', 'for', '24', 'hours']),
			_elm_lang$core$Native_List.fromArray(
			['Letdowns', 'line', 'up', 'like', 'coward']),
			_elm_lang$core$Native_List.fromArray(
			['Amnesia', 'put', 'the', 'address']),
			_elm_lang$core$Native_List.fromArray(
			['Express', 'level', 'crash', 'test']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'tell', 'me', 'I', 'can\'t', 'call', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'talk', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face', ',', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face', ',', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['More', 'than', 'the', 'fairy']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Forged', 'on', 'my', 'signature', ',', 'blah', 'blah', 'blah']),
			_elm_lang$core$Native_List.fromArray(
			['Strangled', 'from', 'this', 'track', 'of', 'smoke', 'rising']),
			_elm_lang$core$Native_List.fromArray(
			['Hard', 'to', 'see', '\'em', 'proper']),
			_elm_lang$core$Native_List.fromArray(
			['pistol']),
			_elm_lang$core$Native_List.fromArray(
			['Mane']),
			_elm_lang$core$Native_List.fromArray(
			['Ungluing', 'my', 'person']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'this', 'city', 'strapped', 'with', 'strange', 'lies']),
			_elm_lang$core$Native_List.fromArray(
			['Reluctantly', 'searching']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'what', 'eluded', 'me', 'last', 'night']),
			_elm_lang$core$Native_List.fromArray(
			['Perfectly', 'for', 'decades']),
			_elm_lang$core$Native_List.fromArray(
			['Bully', 'ain\'t', 'trapped', 'that', 'trip', 'yet']),
			_elm_lang$core$Native_List.fromArray(
			['Put', 'this', 'life', 'behind', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'know', 'that\'s', 'just', 'a', 'half', 'step']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'make', 'that', 'bass']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'crisis', 'is', 'my', 'alarm']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'I\'m', 'like', ',', 'Shh', ',', 'stay', 'calm']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'fight', 'shit', 'I', 'ride', 'upon']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'knife', 'been', 'drawn']),
			_elm_lang$core$Native_List.fromArray(
			['3-6-5', 'light', 'of', 'dawn']),
			_elm_lang$core$Native_List.fromArray(
			['Lit', 'up', 'rock', 'you', 'live', 'under']),
			_elm_lang$core$Native_List.fromArray(
			['Ass', 'backwards', 'muthafucka', 'features', 'like', 'hot', 'butter']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'your', 'brother\'s', 'your', 'father', ',', 'and', 'your', 'sister\'s', 'your', 'mother']),
			_elm_lang$core$Native_List.fromArray(
			['Trend', 'setter', 'maximum', ',', 'third', 'planet', 'from', 'the', 'sun', 'orbit', 'my', 'lungs']),
			_elm_lang$core$Native_List.fromArray(
			['Bulldozin\'', 'cul', 'de', 'sacs', 'ground', 'under', 'over', 'every', 'act']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'no', 'slack', ',', 'no', 'slack']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'chance', 'to', 'throw', ',', 'I', 'rush', 'the', 'mound']),
			_elm_lang$core$Native_List.fromArray(
			['Rage', 'stormin\'', 'off', 'the', 'chains', ',', 'remind', 'me', 'of', 'rape', 'house', 'slave', 'cock', 'rings']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'played', 'out', 'like', 'talking']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'cadence', 'is', 'sloppy']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'break', 'me', ',', 'I', 'got', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'grave', 'stink', ',', 'I\'m', 'lofty']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'lady', 'like', 'loli']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', 'tramp', 'on', 'that', 'jigaboo', ',', 'goddamn', 'I\'m', 'so', 'sick', 'of', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'despise', 'that', 'shit', 'what', ',', 'I', 'would', 'never', 'align', 'me', 'with']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'free', 'to', 'mime', 'me', 'but', 'don\'t', 'be', 'saltine', 'when', 'I', 'call', 'you', 'a', 'biter', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', ',', 'pop', ',', 'pop', ',', 'pop']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'fucking', 'tired', 'of', 'all', 'the', 'perks']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'tried', 'nothing', ',', 'everything', 'works']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'less', 'I\'m', 'worth', ',', 'I\'ve', 'served', 'my', 'bid']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'fuck', 'life', 'wasn\'t', 'what', 'it', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'fuck', 'life', 'was', 'just', 'a', 'bridge']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'seen', 'some', 'free', 'landed', 'some', 'tricks']),
			_elm_lang$core$Native_List.fromArray(
			['Far', 'I', 'see', 'high', 'time', 'man', 'quit']),
			_elm_lang$core$Native_List.fromArray(
			['Won\'t', 'let', 'you', 'know', 'when', 'I', 'get', 'goin']),
			_elm_lang$core$Native_List.fromArray(
			['Phone', 'ring', 'too', 'long']),
			_elm_lang$core$Native_List.fromArray(
			['Phone', 'ring', 'too', 'long', ',', 'I\'m', 'probably', 'gone']),
			_elm_lang$core$Native_List.fromArray(
			['Ring', 'tone', 'jingle', 'my', 'swan', 'song']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'show', 'you', 'how', 'to', 'leave', 'well', 'enough', 'alone']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'this', 'world', 'this', 'on', 'cue', 'world']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fall', 'back', ',', 'concoct', 'new', 'worlds']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fall', 'out', 'in', 'throbbing', 'swirls']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fall', 'until', 'I', 'stop', 'this', 'world']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fall', 'the', 'fuck', 'off', 'this', 'world']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'live', 'down', 'the', 'street', 'from', 'you\'ve', 'noticed', 'me', ',', 'I\'ve', 'never', 'seen', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Wonder', 'what', 'the', 'fuck', 'I', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['Listen', 'up', ',', 'you', 'nosy', 'bitch', ',', 'listen', 'close']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'most', 'recent', 'purchase', ',', 'old', 'black', 'rope']),
			_elm_lang$core$Native_List.fromArray(
			['Gonna', 'learn', 'how', 'to', 'tie', 'it', ',', 'hang', 'it', 'in', 'my', 'chamber']),
			_elm_lang$core$Native_List.fromArray(
			['Perfect', 'reminder', ',', 'occult', 'I\'m', 'made', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'try', 'it', 'out', 'whenever', 'you', 'wanna']),
			_elm_lang$core$Native_List.fromArray(
			['Last', 'night', ',', '3:30', 'in', 'the', 'morning', ',', 'Death', 'on', 'my', 'front', 'porch']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'feel', 'him', 'itching', 'to', 'take', 'me', 'with', 'him', ',', 'hail', 'death', ',', 'fuck', 'you', 'waiting', 'for']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'a', 'question', 'no', 'one', 'mention', ',', 'he', 'turns', 'around', ',', 'hands', 'me', 'his', 'weapon']),
			_elm_lang$core$Native_List.fromArray(
			['He', 'slurs', ',', 'Use', 'at', 'your', 'discretion', ',', 'it\'s', 'been', 'a', 'pleasure', ',', 'Stefan']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'on', 'like', 'dead', ',', 'on', 'like', 'grey']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'in', 'your', 'way', ',', 'not', 'in', 'my', 'way', ',', 'I', 'got', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'was', 'in', 'my', 'way', ',', 'crept', 'out', 'my', 'way', ',', 'kept', 'out', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'one', 'like', 'bae', ',', 'you\'re', 'on', 'your', 'way', ',', 'way', ',', 'way', ',', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'on', 'like', 'dead', ',', 'on', 'like', 'grey']),
			_elm_lang$core$Native_List.fromArray(
			['Death', 'in', 'your', 'way', ',', 'not', 'in', 'my', 'way', ',', 'I', 'got', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'was', 'in', 'my', 'way', ',', 'crept', 'out', 'my', 'way', ',', 'kept', 'out', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'one', 'like', 'bae', ',', 'you\'re', 'on', 'your', 'way', ',', 'way', ',', 'way', ',', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'fucking', 'tired', 'of', 'all', 'the', 'perks']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'tried', 'nothing', ',', 'everything', 'works']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'less', 'I\'m', 'worth', ',', 'I\'ve', 'served', 'my', 'bid']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'fuck', 'life', 'wasn\'t', 'what', 'it', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'fuck', 'life', 'was', 'just', 'a', 'bridge']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'seen', 'some', 'free', 'landed', 'some', 'tricks']),
			_elm_lang$core$Native_List.fromArray(
			['Far', 'I', 'see', 'high', 'time', 'man', 'quit']),
			_elm_lang$core$Native_List.fromArray(
			['Won\'t', 'let', 'you', 'know', 'when', 'I', 'get', 'goin']),
			_elm_lang$core$Native_List.fromArray(
			['Phone', 'ring', 'too', 'long']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'you', 'worry', ',', 'impossible', 'for', 'anything', 'to', 'be', 'a', 'big', 'deal']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'in', 'no', 'weary', ',', 'my', 'vital', 'post', 'dated', 'but', 'clearly', 'been', 'ages', 'since', 'life', 'had', 'appeal']),
			_elm_lang$core$Native_List.fromArray(
			['Far', 'more', 'than', 'fascination', 'my', 'second', 'nature', 'chant', 'kill', 'cause', 'I', 'can']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'body', 'by', 'my', 'own', 'hands']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'friends', 'and', 'family', 'won\'t', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'I', 'stay', 'in', 'the', 'end', ',', 'don\'t', 'make', 'none', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'it', 'wasn\'t', 'for', 'them', ',', 'I\'d', 'make', 'that', 'decision', 'on', 'GP']),
			_elm_lang$core$Native_List.fromArray(
			['Had', 'to', 'do', 'it', 'all', 'again', ',', 'I\'d', 'make', 'that', 'decision', 'on', 'GP']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'nights', 'I', 'don\'t', 'die', 'for', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Wouldn\'t', 'believe', 'how', 'many', 'nights', 'I', 'ain\'t', 'died', 'for', 'you', 'on', 'GP']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'that', 'I', 'care', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I\'d', 'be', 'a', 'liar', 'if', 'I', 'sat', 'here', 'claiming', 'I\'d', 'exit', 'in', 'a', 'minute']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'can\'t', 'say', 'I', 'wouldn\'t', 'I', 'have', 'my', 'limits']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'nights', 'I', 'don\'t', 'die', 'for', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Wouldn\'t', 'believe', 'how', 'many', 'nights', 'I', 'ain\'t', 'died', 'for', 'you', 'on', 'GP']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'that', 'I', 'care', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I\'d', 'be', 'a', 'liar', 'if', 'I', 'sat', 'here', 'claiming', 'I\'d', 'exit', 'in', 'a', 'minute']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'can\'t', 'say', 'I', 'wouldn\'t', 'I', 'have', 'my', 'limit']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'nights', 'I', 'don\'t', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'saw', 'you', 'doing', 'peace', 'signs', 'with', 'the', 'F.B.I']),
			_elm_lang$core$Native_List.fromArray(
			['Might\'ve', 'tried', 'that', 'in', 'the', 'future', 'before', 'so', 'don\'t', 'lie']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'dead', 'dogs', 'go', 'to', 'heaven', 'cause', 'dumb', 'bitches', 'let', 'them', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['They\'re', 'just', 'racist', 'and', 'they', 'wanna', 'fuck']),
			_elm_lang$core$Native_List.fromArray(
			['God', 'chills', 'out', 'cause', 'she', 'doesn\'t', 'touch']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'where', 'I', 'don\'t', 'come', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'where', 'I', 'have', 'been', 'maybe']),
			_elm_lang$core$Native_List.fromArray(
			['Have', 'a', 'sad', 'cum', ',', 'baby']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'it', 'out', 'and', 'I', 'dip-dip-dip']),
			_elm_lang$core$Native_List.fromArray(
			['Drop', 'you', 'like', 'asses', 'and', 'you', 'trip-trip-trip']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'stop', 'it', 'when', 'I', 'drip-drip-drip']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can\'t', 'stop', 'it', 'when', 'you', 'drip-drip-drip']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'piss', 'on', 'your', 'face', 'like', 'I\'m', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'lick', 'up', 'the', 'place', 'like', 'you\'re', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'pick', 'up', 'the', 'pace', 'like', 'we\'re', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'fuck', 'you\'re', 'chasing', 'like', 'PSS-PSS', ',', 'PSS-PSS', ',', 'PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shit\'s', 'been', 'retarded', 'since', 'beginning', 'of', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'up', 'in', 'your', 'party', 'like', 'sickest', 'one', 'line']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'only', 'thing', 'ever', 'on', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'one', 'of', 'those', 'things', 'I', 'never', 'rewind']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'coming', 'out', 'your', 'pocket', 'like', 'carving', 'pools']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'my', 'jewels']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'throwing', 'heebie', 'jeebies', 'like', 'iTunes']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'cars', 'that', 'go', 'boom']),
			_elm_lang$core$Native_List.fromArray(
			['These', 'are', 'my', 'gold', 'bars', 'melted', 'on', 'spoons']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'junk', 'hits', 'like', 'martial', 'law']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'nod', 'like', ',', 'True']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'it', 'out', 'and', 'I', 'dip-dip-dip']),
			_elm_lang$core$Native_List.fromArray(
			['Drop', 'you', 'like', 'asses', 'and', 'you', 'trip-trip-trip']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'stop', 'it', 'when', 'I', 'drip-drip-drip']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can\'t', 'stop', 'it', 'when', 'you', 'drip-drip-drip']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'piss', 'on', 'your', 'face', 'like', 'I\'m', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'lick', 'up', 'the', 'place', 'like', 'you\'re', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'pick', 'up', 'the', 'pace', 'like', 'we\'re', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'fuck', 'you\'re', 'chasing', 'like', 'PSS-PSS', ',', 'PSS-PSS', ',', 'PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'I', 'were', 'her', 'and', 'she', 'was', 'him', 'we', 'would', 'go', 'and', 'fuck', 'ourselves', 'again', 'and', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['Life', 'is', 'very', 'dangerous', 'and', 'it', 'wants', 'to', 'rearrange', 'us', 'like', 'your', 'friends', ',', 'like', 'the', 'end']),
			_elm_lang$core$Native_List.fromArray(
			['Show', 'me', 'into', 'Target', 'and', 'I\'ll', 'show', 'you', 'how', 'I', 'bought', 'it', 'with', 'my', 'mind', 'in', 'my', 'mind']),
			_elm_lang$core$Native_List.fromArray(
			['Touch', 'it', 'out', 'in', 'the', 'parking', 'lot', ',', 'fuck', 'me', 'while', 'the', 'whole', 'world', 'watch', 'us', 'waste', 'our', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'it', 'out', 'and', 'I', 'dip-dip-dip']),
			_elm_lang$core$Native_List.fromArray(
			['Drop', 'you', 'like', 'asses', 'and', 'you', 'trip-trip-trip']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'stop', 'it', 'when', 'I', 'drip-drip-drip']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can\'t', 'stop', 'it', 'when', 'you', 'drip-drip-drip']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'piss', 'on', 'your', 'face', 'like', 'I\'m', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'lick', 'up', 'the', 'place', 'like', 'you\'re', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'pick', 'up', 'the', 'pace', 'like', 'we\'re', 'PSS-PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'fuck', 'you\'re', 'chasing', 'like', 'PSS-PSS', ',', 'PSS-PSS', ',', 'PSS-PSS']),
			_elm_lang$core$Native_List.fromArray(
			['Poser', 'killer', ',', 'poser', 'killer', ',', 'poser', 'killer', 'Schwa']),
			_elm_lang$core$Native_List.fromArray(
			['Poser', 'killer', ',', 'poser', 'killer', ',', 'poser', 'killer', 'Stop']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'you', 'start', 'talking', ',', 'I', 'don\'t', 'listen']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'just', 'wait', 'for', 'you', 'to', 'finish']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'when', 'you\'re', 'done', 'I\'ll', 'say', ',', 'That\'s', 'crazy']),
			_elm_lang$core$Native_List.fromArray(
			['Really', 'all', 'we', 'about', 'lately']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don\'t', 'reply']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'been', 'denied']),
			_elm_lang$core$Native_List.fromArray(
			['Sometimes', 'I', 'smile', ',', 'sometimes', 'I', 'moan', ',', 'sometimes', 'I', 'look', 'away', 'and', 'nod']),
			_elm_lang$core$Native_List.fromArray(
			['Sometimes', 'I', 'get', 'no', 'reply', 'and', 'wash', 'your', 'husband', 'like', 'a', 'dog']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'waste', 'your', 'breath', ',', 'the', 'time', 'was', 'over', 'before', 'it', 'started']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'you', 'arrived', ',', 'I', 'had', 'already', 'departed']),
			_elm_lang$core$Native_List.fromArray(
			['Now', 'you', 'know', 'I\'m-']),
			_elm_lang$core$Native_List.fromArray(
			['Walk', 'on', 'by']),
			_elm_lang$core$Native_List.fromArray(
			['Crashed', 'and', 'burned']),
			_elm_lang$core$Native_List.fromArray(
			['Forever', 'rocking', 'that', 'worm']),
			_elm_lang$core$Native_List.fromArray(
			['Called', 'the', 'worm']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'got', 'high']),
			_elm_lang$core$Native_List.fromArray(
			['Klepto', 'war', 'hand', 'on', 'the', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'answer', 'when', 'they', 'hit', 'me;', 'why', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'matter', ',', 'pass', 'on', 'the', 'lie']),
			_elm_lang$core$Native_List.fromArray(
			['\'Bout', 'what', 'happens', 'after', 'we', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Dust', 'to', 'ash', ',', 'ashes', 'to', 'malt']),
			_elm_lang$core$Native_List.fromArray(
			['Ghost', 'all', 'black', ',', 'control', 'the', 'zone']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'troll', 'is', 'threshed', ',', 'I\'m', 'forced', 'to', 'ride']),
			_elm_lang$core$Native_List.fromArray(
			['Lock', 'your', 'door']),
			_elm_lang$core$Native_List.fromArray(
			['Argent', 'clear']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'dead', 'is', 'souls', 'galore']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'just', 'got', 'spit', 'in', 'your', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Rabid', 'dogs', 'off', 'the', 'leash']),
			_elm_lang$core$Native_List.fromArray(
			['From', 'man', 'to', 'man', 'as', 'we', 'beef']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'the', 'fuck', 'out', 'of', 'that', 'Jeep']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'hell', 'leave', 'I', 'lead', 'the', 'sting']),
			_elm_lang$core$Native_List.fromArray(
			['Now', 'you', 'know', 'I\'m', 'ready']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'love', 'battle']),
			_elm_lang$core$Native_List.fromArray(
			['Talk', 'to', 'melons']),
			_elm_lang$core$Native_List.fromArray(
			['From', 'the', 'dogs', 'who', 'want', 'more', 'beef']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'the', 'law', ',', 'code', 'of', 'the', 'streets']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'every', 'oomph', ',', 'we\'ll', 'sue', 'the', 'pigs']),
			_elm_lang$core$Native_List.fromArray(
			['Poser', 'killer', ',', 'poser', 'killer', ',', 'poser', 'killer', ',', 'schwa']),
			_elm_lang$core$Native_List.fromArray(
			['Poser', 'killer', ',', 'poser', 'killer', ',', 'poser', 'killer', ',', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['Reload', 'the', 'barrel', 'and', 'creep', 'like', 'a', 'wolf', 'among', 'sheep']),
			_elm_lang$core$Native_List.fromArray(
			['See', 'how', 'we', 'bum-rush', 'the', 'weak']),
			_elm_lang$core$Native_List.fromArray(
			['Brush', 'them', 'guts', 'with', 'our', 'feet']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'knock', 'the', 'asphalt', ',', 'coded', 'mystique']),
			_elm_lang$core$Native_List.fromArray(
			['Crack', 'the', 'code', ',', 'unlock', 'the', 'vault', ',', 'make', 'off', 'with', 'all', 'that', 'we', 'seek']),
			_elm_lang$core$Native_List.fromArray(
			['America', ',', 'America', ',', 'now', 'I’m', 'coming', 'Africa']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'death', 'is', 'money']),
			_elm_lang$core$Native_List.fromArray(
			['Whose', 'bad', '?', 'His', 'bad']),
			_elm_lang$core$Native_List.fromArray(
			['Who’s', 'looking', 'shitty', '?', 'Not', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'think', 'he’s', 'listening', '?', 'Probably']),
			_elm_lang$core$Native_List.fromArray(
			['Mouthpiece', 'on', 'Sally’s', 'like', 'San', 'Joaquin', 'valley']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'your', 'middle', 'man', ',', 'throw', 'that', 'towel', 'in', ',', 'you', 'irk', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'yeah', ',', 'go', 'tell', 'a', 'friend']),
			_elm_lang$core$Native_List.fromArray(
			['You’re', 'irrelevant', ',', 'ain’t', 'shit', 'but', 'a', 'skank']),
			_elm_lang$core$Native_List.fromArray(
			['Skank', 'way', 'too', 'far', 'from', 'her', 'holding', 'tank']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'on', ',', 'girl', ',', 'get', 'your', 'front', 'on', ',', 'girl']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'rank', 'A-list', 'or', 'so', 'I', 'hear']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'no', 'basic', 'here', ',', 'no', 'safe', 'bets', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['Wouldn’t', 'touch', 'a', 'fake', 'bitch', 'with', 'latex', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['She\'s', 'so', ',', 'she\'s', 'so']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'know', 'we', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['She\'s...']),
			_elm_lang$core$Native_List.fromArray(
			['She’s', 'so', ',', 'she’s', 'so']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'thirsty', ',', 'thought', 'I', 'heard', 'a', 'mosquito']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'know', 'we', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'her', 'vox', 'so', 'desert', 'and', 'our', 'beats', 'so', 'dro']),
			_elm_lang$core$Native_List.fromArray(
			['She’s', 'so', ',', 'she’s', 'so']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'thirsty', ',', 'thought', 'I', 'heard', 'a', 'mosquito']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'know', 'we', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'her', 'vox', 'so', 'desert', 'and', 'our', 'beats', 'so', 'dro']),
			_elm_lang$core$Native_List.fromArray(
			['Party', 'full', 'of', 'thirsty', ',', 'lurkers', 'hella', 'worried']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'in', 'six', 'high', 'glass', 'heels']),
			_elm_lang$core$Native_List.fromArray(
			['Cinderella', 'water', 'hole', 'climbing', 'for', 'a', 'pot', 'of', 'goldie']),
			_elm_lang$core$Native_List.fromArray(
			['Flip', 'you', 'for', 'a', 'twenty', 'bill']),
			_elm_lang$core$Native_List.fromArray(
			['Aim', 'for', 'El', 'Dorado', 'estimated', 'arrival']),
			_elm_lang$core$Native_List.fromArray(
			['Time', 'it', 'take', 'a', 'fuck', 'to', 'make', 'a', 'deal']),
			_elm_lang$core$Native_List.fromArray(
			['Ain’t', 'gonna', 'make', 'it', 'though', ',', 'try', 'your', 'luck', 'in', 'porn']),
			_elm_lang$core$Native_List.fromArray(
			['You’re', 'so', 'thirsty', ',', 'all', 'you’ll', 'ever', 'earn', 'is', 'frills']),
			_elm_lang$core$Native_List.fromArray(
			['Check', 'two', 'skeeze']),
			_elm_lang$core$Native_List.fromArray(
			['Pop', 'that', 'pussy', 'pitch', 'into', 'a', 'tent']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'those', 'poles', 'make', 'you', 'so', 'bent']),
			_elm_lang$core$Native_List.fromArray(
			['Push', 'that', 'cart', 'peddles', 'you', 'ring', 'the', 'bell']),
			_elm_lang$core$Native_List.fromArray(
			['Ring', 'the', 'bell', 'though', ',', 'hands', 'full', 'of', 'dick']),
			_elm_lang$core$Native_List.fromArray(
			['Use', 'your', 'elbows', ',', 'door', 'to', 'door', 'you', 'sand', 'every', 'last', 'floor']),
			_elm_lang$core$Native_List.fromArray(
			['Deep', 'as', 'you', 'can', 'choke', 'a', 'quicksand', 'storm']),
			_elm_lang$core$Native_List.fromArray(
			['Lipstick', 'lap', 'dance', 'won’t', 'record']),
			_elm_lang$core$Native_List.fromArray(
			['She’s', 'so', ',', 'she’s', 'so']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'thirsty', ',', 'thought', 'I', 'heard', 'a', 'mosquito']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'know', 'we', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'her', 'vox', 'so', 'desert', 'and', 'our', 'beats', 'so', 'dro']),
			_elm_lang$core$Native_List.fromArray(
			['She’s', 'so', ',', 'she’s', 'so']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'thirsty', ',', 'thought', 'I', 'heard', 'a', 'mosquito']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'know', 'we', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'her', 'vox', 'so', 'desert', 'and', 'our', 'beats', 'so', 'dro']),
			_elm_lang$core$Native_List.fromArray(
			['Hot', 'shit', ',', 'cold', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Okay', ',', 'muthafucka', ',', 'let\'s', 'do', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Came', 'to', 'make', 'it', 'band', 'sawed', 'off', 'razor', 'edge', 'maintained', 'looseness']),
			_elm_lang$core$Native_List.fromArray(
			['Comin\'', 'through', ',', 'again', 'and', 'again', 'conduit']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'them', 'hands', 'wave', 'to']),
			_elm_lang$core$Native_List.fromArray(
			['High', 'to', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Wild', 'fire', 'through', 'your', 'city']),
			_elm_lang$core$Native_List.fromArray(
			['Wild', 'fire', 'through', 'your', 'whip', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Into', 'lightning', 'two']),
			_elm_lang$core$Native_List.fromArray(
			['K\'nt', 'hit', 'three']),
			_elm_lang$core$Native_List.fromArray(
			['Strikes', 'dug', 'out', 'dated']),
			_elm_lang$core$Native_List.fromArray(
			['Fools', 'no', 'dig', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['End', 'beat', 'limbo', ',']),
			_elm_lang$core$Native_List.fromArray(
			['baba', 'spitting']),
			_elm_lang$core$Native_List.fromArray(
			['Blood', 'in', 'slow', 'mo', ',', 'la', 'la', 'chimney']),
			_elm_lang$core$Native_List.fromArray(
			['Warholian', 'nightmare']),
			_elm_lang$core$Native_List.fromArray(
			['Storm', 'the', 'gates']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', ',', 'twelve', 'gauge', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo']),
			_elm_lang$core$Native_List.fromArray(
			['Stick', 'and', 'move']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['leave', 'no', 'proof']),
			_elm_lang$core$Native_List.fromArray(
			['Discard', 'directly', 'after', 'use']),
			_elm_lang$core$Native_List.fromArray(
			['Forensics', 'on', 'that', 'wild', 'goose']),
			_elm_lang$core$Native_List.fromArray(
			['Follow', 'my', 'footprints', 'into', 'loops']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I\'m', 'too', 'high', ',', 'too', 'high']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I\'m', 'too', 'high', ',', 'too', 'high']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'like', 'I\'m', 'never', 'ever', 'gonna', 'come', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['Scale', 'richter', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'dis', 'sound']),
			_elm_lang$core$Native_List.fromArray(
			['Scale', 'richter', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'dis', 'sound']),
			_elm_lang$core$Native_List.fromArray(
			['Down', 'break', 'dead', 'space']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'make', 'it', 'drop']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'street', 'beneath']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'ghetto', 'box']),
			_elm_lang$core$Native_List.fromArray(
			['Slap', 'the', 'beat', '\'til', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Floor', 'boards', 'crack']),
			_elm_lang$core$Native_List.fromArray(
			['\'Neath', 'the', 'weight', 'of', 'this', 'lic', ',', 'step', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'in', 'the', 'rhythm', 'like']),
			_elm_lang$core$Native_List.fromArray(
			['Beta', 'in', 'the', 'bong']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'to', 'give', '\'em', 'make', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['Sway', 'like', 'palms']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'wind']),
			_elm_lang$core$Native_List.fromArray(
			['my', 'lip', 'blow']),
			_elm_lang$core$Native_List.fromArray(
			['Mic', 'spray', 'kyrlon']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'till', 'the', 'break', 'of', 'dawn']),
			_elm_lang$core$Native_List.fromArray(
			['War', 'war', 'war', 'war']),
			_elm_lang$core$Native_List.fromArray(
			['War', 'war', 'war', 'war']),
			_elm_lang$core$Native_List.fromArray(
			['Guerilla', 'bass', ',', 'straight', 'from', 'the', 'trenches']),
			_elm_lang$core$Native_List.fromArray(
			['Posers', 'impaled', 'on', 'picket', 'fences']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'rest', 'your', 'head', 'in', 'roach-infested', 'basements']),
			_elm_lang$core$Native_List.fromArray(
			['and', 'smoke', 'pun2k', 'weight', 'for', 'breakfast']),
			_elm_lang$core$Native_List.fromArray(
			['Chop', 'shop', 'lifted']),
			_elm_lang$core$Native_List.fromArray(
			[',', 'bump', 'till', 'the', 'tape', 'deck', 'break']),
			_elm_lang$core$Native_List.fromArray(
			['Ask', 'samo', 'how', 'he', 'flipped', 'that', 'material', 'girl\'s', 'pancakes']),
			_elm_lang$core$Native_List.fromArray(
			['as', 'zydeco', 'copper', 'kettles']),
			_elm_lang$core$Native_List.fromArray(
			['Liquor', 'sto\'', ',', 'sellin\'', 'singles']),
			_elm_lang$core$Native_List.fromArray(
			['Mug', 'shots', 'out', ',', 'to', 'my', 'people']),
			_elm_lang$core$Native_List.fromArray(
			['Rollin\'', 'I', 'double', 'l', 'spread', 'eagle']),
			_elm_lang$core$Native_List.fromArray(
			['Hear', 'flow', ',', 'then', 'spit', 'evil']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['25-8', 'pun2k', 'weight']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'yo']),
			_elm_lang$core$Native_List.fromArray(
			['War', 'war', 'war', 'war']),
			_elm_lang$core$Native_List.fromArray(
			['War', 'war', 'war', 'war']),
			_elm_lang$core$Native_List.fromArray(
			['Headless']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'skid', 'like', 'Rita', 'lifted', 'ocean']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'drift', 'like', 'my', 'planet', 'don’t', 'spin']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'skid', 'all', 'over', 'marks', 'like', 'I’m', 'haunted']),
			_elm_lang$core$Native_List.fromArray(
			['Rev', 'it', 'up', ',', 'twirl', 'my', 'la', 'la', 'like', 'profits']),
			_elm_lang$core$Native_List.fromArray(
			['It’s', 'never', 'much', ',', 'I’m', 'war', 'torn', 'in', 'the', 'cockpit']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'interrupt', ',', 'my', 'turbulence', 'slaps']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'path', 'massive', 'demands', 'panoramic']),
			_elm_lang$core$Native_List.fromArray(
			['Massive']),
			_elm_lang$core$Native_List.fromArray(
			['Shitty', ',', 'you’re', 'ten', 'thousand', 'leagues', 'subzero', ',', 'sweat', 'dripping']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'hancock', 'do-rag', 'riptides', 'like', 'tent', 'city']),
			_elm_lang$core$Native_List.fromArray(
			['Standoff', 'through', 'low', 'lands', 'eerie', 'silencing']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Peel', 'out', ',', 'press', 'me', 'to', 'magnetic', 'slab']),
			_elm_lang$core$Native_List.fromArray(
			['Severe', 'swerving', 'I', 'tow', 'lag']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'uncertainty', '\'til', 'your', 'zipper', 'locks']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'salvia', 'silhouette', 'commence', 'shots']),
			_elm_lang$core$Native_List.fromArray(
			['Sixty', 'shots', 'a', 'second', 'on', 'a', 'hexed', 'clock']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'strike', '‘tween', 'each', 'time', 'your', 'solar', 'plex', 'drops']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'skidding', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can’t', 'help', 'yourself', ',', 'I', 'skid', 'in', 'doubt']),
			_elm_lang$core$Native_List.fromArray(
			['I’ve', 'dealt', 'with', 'yourself', ',', 'I', 'tricked', 'hell', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'helter', 'skelter', ',', 'I’m', 'on', 'that', 'Faust']),
			_elm_lang$core$Native_List.fromArray(
			['None', 'of', 'me', 'left', 'but', 'reflex']),
			_elm_lang$core$Native_List.fromArray(
			['skidding', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pulse', 'in', 'my', 'chest', 'feel', 'like', 'it’s', 'fixing', 'to', 'bounce']),
			_elm_lang$core$Native_List.fromArray(
			['Bounce', ',', 'bitch', ',', 'I', 'can’t', 'be', 'the', 'road']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'crashing', 'into', 'planes', ',', 'I', 'crash', 'and', 'stroll']),
			_elm_lang$core$Native_List.fromArray(
			['Maxed', 'out', 'my', 'oath']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'blame', 'me', ',', 'I’ve', 'no', 'soul']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'skids', '\'til', 'the', 'brink', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'jizz', 'snowmen']),
			_elm_lang$core$Native_List.fromArray(
			['Tall', 'knives', 'in', 'my', 'grill', 'feel', 'potent']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'jigsaw', 'manipulates', 'you', 'open']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'skids', 'rit', 'rubbernecks', 'agent', 'orange']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'skid', 'like', 'I’m', 'no', 'use']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'headband', 'expand', 'like', 'I', 'choose', 'juice']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'binge', ',', 'all', 'black', 'enhance', 'my', 'tragic']),
			_elm_lang$core$Native_List.fromArray(
			['Ends', 'to', 'a', 'means', 'I', 'can’t', 'establish']),
			_elm_lang$core$Native_List.fromArray(
			['Noise', 'of', 'nomads', 'on', 'sapphire', 'spice']),
			_elm_lang$core$Native_List.fromArray(
			['Cumulus', 'in', 'both', 'hands', ',', 'can’t', 'kill', 'myself', 'twice']),
			_elm_lang$core$Native_List.fromArray(
			['Pawns', 'tremble', 'like', 'dildos', 'wielded', 'by', 'duppies']),
			_elm_lang$core$Native_List.fromArray(
			['Traumatized', 'on', 'for', 'size', ',', 'roadkill', 'hides', 'like', 'yuppies']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'too', 'passcode', ',', 'these', 'gates', 'won’t', 'stay', 'closed']),
			_elm_lang$core$Native_List.fromArray(
			['Control', 'gets', 'old', ',', 'I', 'smash', 'out', 'my', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'vessel', 'thrown', 'like', 'slack', 'at', 'the', 'wind']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'finally', 'astral', 'now', ',', 'grab', 'my', 'stems']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['Spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes', ',', 'spikes']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'do', 'what', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Because', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'only', 'if', 'my', 'people', 'could']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'would', 'if', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'do', 'what', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Because', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'only', 'if', 'my', 'people', 'could']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'would', 'if', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Happy\'s', 'perfect']),
			_elm_lang$core$Native_List.fromArray(
			['Perfect\'s', 'tame']),
			_elm_lang$core$Native_List.fromArray(
			['Tame', 'and', 'cashmere', 'go', 'together']),
			_elm_lang$core$Native_List.fromArray(
			['Cashmere', 'makes', 'perfect', 'better']),
			_elm_lang$core$Native_List.fromArray(
			['Jon', 'and', 'Shelley', ',']),
			_elm_lang$core$Native_List.fromArray(
			['my', 'people', 'would', 'never']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'it', 'feel', 'good', 'to', 'drive', 'a', 'bus', '?']),
			_elm_lang$core$Native_List.fromArray(
			['People', 'need', 'to', 'get', 'picked', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Pride', 'your', 'uniform', 'and', 'stunt']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'do', 'what', 'my', 'people', 'would', 'grunt']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'it', 'feel', 'right', 'to', 'sell', 'a', 'tent', '?']),
			_elm_lang$core$Native_List.fromArray(
			['People', 'like', 'to', 'tell', 'your', 'scent']),
			_elm_lang$core$Native_List.fromArray(
			['Pause', 'the', 'bus', ',', 'put', 'off', 'your', 'yell']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'yell', ',', 'all', 'my', 'people', 'would', 'say']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', ',', 'it\'s', 'a', 'party']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'early', 'if', 'you\'re', 'lonely']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			[',', 'say', 'hey', ',', 'don\'t', 'you', 'O.D']),
			_elm_lang$core$Native_List.fromArray(
			['Say', ',', 'hey', ',', 'don\'t', 'you', 'O.D']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', ',', 'hey', ',', 'don\'t', 'you', 'O.D']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', 'kid!']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', 'kid!']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'do', 'what', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Because', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'only', 'if', 'my', 'people', 'could']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'would', 'if', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'do', 'what', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Because', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'only', 'if', 'my', 'people', 'could']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'would', 'if', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'do', 'what', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Because', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'only', 'if', 'my', 'people', 'could']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'would', 'if', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Support', ',', 'gravity', ',', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['Support', ',', 'gravity', ',', 'my', 'people', 'would']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'what', 'are', 'my', 'people', 'for', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'wife', 'has', 'a', 'lovely', 'neck']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'what', 'would', 'my', 'people', 'suck', '?']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'they', 'would', 'I', 'could', 'I', 'guess']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'guess', 'her', 'neck\'s', 'the', 'best']),
			_elm_lang$core$Native_List.fromArray(
			['Her', 'neck\'s', 'just', 'the', 'best']),
			_elm_lang$core$Native_List.fromArray(
			['Hello', 'there', ',', 'hello', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'perfect', 'now', 'and', 'then']),
			_elm_lang$core$Native_List.fromArray(
			['Jon', 'and', 'Shelley', 'are', 'my', 'friend']),
			_elm_lang$core$Native_List.fromArray(
			['They', 'know', 'what', 'my', 'people', 'for']),
			_elm_lang$core$Native_List.fromArray(
			['They', 'know', 'your', 'wife\'s', 'neck\'s', 'my', 'cure']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'question', ',', 'I\'m', 'sure']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', ',', 'it\'s', 'a', 'party']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'early', 'if', 'you\'re', 'lonely']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			[',', 'say', 'hey', ',', 'don\'t', 'you', 'O.D']),
			_elm_lang$core$Native_List.fromArray(
			['Say', ',', 'hey', ',', 'don\'t', 'you', 'O.D']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', ',', 'hey', ',', 'don\'t', 'you', 'O.D']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', 'kid!']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', 'kid!']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', 'kid!']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Say', 'hey', 'kid']),
			_elm_lang$core$Native_List.fromArray(
			['Hey', 'kid!']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'play', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'feel', 'hype', ',', 'I', 'man', 'kill', 'hype']),
			_elm_lang$core$Native_List.fromArray(
			['Slapped', 'to', 'still', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Actors', 'posin\'', ',', 'plastic', 'like', 'token']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'fit', 'my', 'low', 'end', ',', 'splits', 'your', 'ocean']),
			_elm_lang$core$Native_List.fromArray(
			['Obey', 'the', 'chosen']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['the', 'latent', 'quotient']),
			_elm_lang$core$Native_List.fromArray(
			['raised', 'to', 'drogen']),
			_elm_lang$core$Native_List.fromArray(
			['Heavy', 'is', 'the', 'head', 'you\'re', 'blowin']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'fuckin', 'flippin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Minute', 'ago', ',', 'wasn\'t', 'schiz', 'but', 'now', 'I\'m', 'itchin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Critical', 'condition']),
			_elm_lang$core$Native_List.fromArray(
			['Thought', 'I', 'told', 'you', 'not', 'to', 'listen']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'road', 'don\'t', 'stop', 'shiftin\'']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'floatin\'', ',', 'I\'m', 'driftin\'']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'ain\'t', 'heard', '?', 'Not', 'my', 'problem']),
			_elm_lang$core$Native_List.fromArray(
			['Past', 'ain\'t', 'poppin\'', ',', 'calli', 'curbed', 'beyond', 'forgotten']),
			_elm_lang$core$Native_List.fromArray(
			['Pervin\'', 'while', 'them', 'clutch', 'the', 'bottom']),
			_elm_lang$core$Native_List.fromArray(
			['Feeders', 'suck', 'like', 'stuck', 'in', 'Stockton']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', '\'em', 'off', 'like', 'drunks', 'been', 'clockin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Least', 'three', 'a', 'month', 'prestalkin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Noted', 'symptoms', 'hid', 'like', 'Laden']),
			_elm_lang$core$Native_List.fromArray(
			['Bin', 'through', 'shit', 'like', 'sodom']),
			_elm_lang$core$Native_List.fromArray(
			['Instinct', 'man', ',', 'no', 'question', 'looped', 'me', 'into', 'no', 'direction']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'footprints', 'in', 'this', 'bleach', ',', 'I', 'tread', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'know', 'yet', ',', 'but', 'that\'s', 'expected']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['Caved', 'in', 'my', 'ribs', ',', 'drug', 'out', ',', 'fucked', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Samhain', 'skid', 'off', 'bay', 'bridge']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'with', 'me', 'and', 'I\'ll', 'unhurt', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', 'all', 'I', 'do', 'locked', 'kept', ',', 'your', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', 'all', 'I', 'do', 'locked', 'kept', ',', 'your', 'move']),
			_elm_lang$core$Native_List.fromArray(
			['Should', 'we', 'be', 'worried', 'what', 'I\'m', 'not', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Heard', 'bleeders', 'knock', 'all', 'types', 'of', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Is', 'of', 'no', 'consequence']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'out', 'there', ',', 'I\'m', 'out', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'pushin\'', 'mojo', 'yo', 'yo', 'crack', ',', 'back', 'and', 'blow', 'yo', 'whole', 'set', 'lack']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'cojones', 'to', 'make', 'it', 'clap']),
			_elm_lang$core$Native_List.fromArray(
			['Bouncin\'', 'get', 'up', 'wit', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bouncin\'', ',', 'whoop', 'whoop']),
			_elm_lang$core$Native_List.fromArray(
			['Loud', 'and', 'lit', ',', 'Allan', 'Poe', 'poe', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'bout', 'to', 'loose', 'that', 'blue']),
			_elm_lang$core$Native_List.fromArray(
			['Spread', 'eagle']),
			_elm_lang$core$Native_List.fromArray(
			['\'cross', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['Spread', 'eagle']),
			_elm_lang$core$Native_List.fromArray(
			['\'cross', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['Spread', 'eagle']),
			_elm_lang$core$Native_List.fromArray(
			['\'cross', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'the', 'music', ',', 'I', 'make', 'it', 'cum']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'the', 'music', 'with', 'my', 'serpent', 'tongue']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'hit', 'hit!']),
			_elm_lang$core$Native_List.fromArray(
			['Want', 'a', 'beer', '?', 'Have', 'no', 'fear', ',', 'comes', 'and', 'goes', ',', 'man', 'it\'s', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'one', 'knows', ',', 'feels', 'so', 'weird', 'when', 'it', 'blows', 'through', 'my', 'bones']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'a', 'jones', 'for', 'it', ',', 'I', 'wanna', 'know', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'it\'s', '\'bout', 'what', 'I', 'got', 'to', 'show', 'for', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'want', 'some', 'more', 'of', 'it', ',', 'I', 'want', 'too', 'much']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'so', 'bored', 'with', 'it', ',', 'I', 'shot', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Wanna', 'light', 'my', 'torch', 'with', 'it', 'and', 'get', 'all', 'fucked', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah!']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'is', 'it', '?', 'Where', 'is', 'it', '?', 'How', 'will', 'it', 'affect', 'me', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'need', 'that', 'shit\'s', 'bound', 'to', 'be', 'the', 'death', 'of', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'buying', 'it', 'I\'m', 'taking', 'it', 'and', 'sharing', 'it', 'with', 'nobody']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'all', 'I', 'really', 'need', 'is', 'some', 'cool', 'shit', 'to', 'mob']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'driving', 'down', 'the', 'street', 'to', 'the', 'beat', 'of', 'a', 'blow', 'job']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'own', 'that', 'shit', ',']),
			_elm_lang$core$Native_List.fromArray(
			['on', 'some', 'throw', 'back', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['you', 'already', 'know', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'even', 'know', '\'bout', 'how', 'I', 'know', 'the', 'man', 'who', 'grows', 'that', ',', 'biatch!']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can\'t', 'buy', 'it', 'with', 'your', 'money', ',', 'you', 'can\'t', 'find', 'it', 'overseas']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'one', 'of', 'those', 'things', 'that', 'seems', 'outlandish', '\'til', 'you', 'have', 'it\'s', 'not', 'a', 'dream']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'for', 'me', ',', 'I\'m', 'cool', 'with', 'it', 'and', 'that\'s', 'alright', 'cause', 'it\'s', 'my', 'thing']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'is', 'it', '?', 'Where', 'is', 'it', '?', 'How', 'will', 'it', 'affect', 'me', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Work', 'that', 'angle', '\'til', 'it\'s', 'beveled', ',', 'curve', 'of', 'the', 'blade', 'doubled']),
			_elm_lang$core$Native_List.fromArray(
			['Edge', 'made', 'to', 'bleed', 'the', 'struggle', ',', 'best', 'believe', 'the', 'game\'s', 'a', 'hustle']),
			_elm_lang$core$Native_List.fromArray(
			['Observer', 'of', 'the', 'strange', 'occurrences', ',', 'conjurer', 'of', 'the', 'subtle']),
			_elm_lang$core$Native_List.fromArray(
			['Unseen', 'but', 'felt', 'disturbances', 'that', 'burst', 'a', 'bitch\'s', 'bubble']),
			_elm_lang$core$Native_List.fromArray(
			['That’s', 'right', 'it’s', 'all', 'mine', ',', 'never', 'was', 'yours']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'how', 'you', 'wait', 'in', 'line', 'while', 'I', 'walk', 'straight', 'through', 'the', 'door', ',', 'straight', 'through', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['Hear', 'you', 'say', 'something', 'but', 'ain\'t', 'nothing', ',', 'spectators', 'ignored']),
			_elm_lang$core$Native_List.fromArray(
			['Pay', 'no', 'mind', 'to', 'that', 'chump\'s', 'just', 'a', 'player-hatin\'', 'whore']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'the', 'music', ',', 'I', 'make', 'it', 'cum']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'fuck', 'the', 'music', 'with', 'my', 'serpent', 'tongue']),
			_elm_lang$core$Native_List.fromArray(
			['Ain’t', 'no', 'fun', 'if', 'the', 'aliens', 'can\'t', 'have', 'none']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I', 'fuck', 'it', 'dirty', ',', 'how', 'I', 'make', 'it', 'twitch', 'and', 'scream']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'it', 'screams', ',', 'Oh', ',', 'baby', ',', 'hurt', 'me.', 'Work', 'me', 'to', 'the', 'bone.', 'Oh', ',', 'please']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I', 'bend', 'the', 'rhythm', 'over', 'and', 'hit', ',', 'hit', ',', 'hit', 'it', 'on', 'my', 'knees']),
			_elm_lang$core$Native_List.fromArray(
			['Give', ',', 'give', ',', 'give', 'it', 'up', ',', 'I', 'need', 'it', 'all', 'the', 'time']),
			_elm_lang$core$Native_List.fromArray(
			['Bleed', 'it', 'on', 'the', 'drop', 'of', 'a', 'dime', ',', 'down', 'to', 'pound', 'it', '\'til', 'it', 'shines']),
			_elm_lang$core$Native_List.fromArray(
			['Moonlit', 'lake', 'of', 'blood', 'red', 'wine', ',', 'make', 'no', 'mistake', ',', 'I', 'makes', 'it', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['Break', 'shit', 'down', 'and', 'make', 'it', 'grind', 'to', 'the', 'groove', 'used', 'to', 'align']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'cascading', 'shades', 'of', 'jaded', 'blues', 'with', 'these', 'rhymes']),
			_elm_lang$core$Native_List.fromArray(
			['Nuclear', 'steeze', 'creeps', 'and', 'winds']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'secrets', 'behind', 'and', 'between', 'every', 'time', 'I', 'scream:']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', 'is', 'mine', '!', 'It\'s', 'all', 'mine', '!', 'All', 'the', 'time!', 'Shit', 'is', 'mine', '!']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'is', 'it', '?', 'Where', 'is', 'it', '?', 'How', 'will', 'it', 'affect', 'me', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', 'shit', ',', 'I', 'need', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah']),
			_elm_lang$core$Native_List.fromArray(
			['Thought', 'you', 'knew', ',', 'thought', 'you', 'thought', ',', 'thought', 'you', 'did', 'but', 'did', 'not']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'on', 'through;', 'What', 'you', 'got', '?', 'Is', 'it', 'cool', '?', 'Is', 'it', 'hot', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Check', 'one', 'two', ',', 'man', 'don\'t', 'stop', ',', 'I\'m', 'not', 'through', 'black', 'blood', 'clot']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'my', 'view', 'like', 'that', 'twat', 'spread', 'eagle', '\'cross', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['Spread', 'eagle']),
			_elm_lang$core$Native_List.fromArray(
			['\'cross', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['Spread', 'eagle']),
			_elm_lang$core$Native_List.fromArray(
			['\'cross', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['Spread', 'eagle']),
			_elm_lang$core$Native_List.fromArray(
			['\'cross', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['Need', 'no', 'ego', 'to', 'rock']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'we', 'know', 'just', 'gets', 'dropped', ',', 'how', 'we', 'keep', 'shit', 'on', 'lock']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'all', 'I', 'really', 'need', 'is', 'some', 'cool', 'shit', 'to', 'mob']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'driving', 'down', 'the', 'street', 'to', 'the', 'beat', 'of', 'a', 'blow', 'job']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', 'is', 'mine', ',', 'it\'s', 'all', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'the', 'time', ',', 'shit', 'is', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'we', 'came', 'to', 'blow', 'your', 'system']),
			_elm_lang$core$Native_List.fromArray(
			['blow']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'what', 'I\'m', 'sayin\'', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'or', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Braggin\'', 'about', 'how', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Had', 'it', 'all', 'dialed']),
			_elm_lang$core$Native_List.fromArray(
			['Well', ',', 'what\'s', 'up', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'your', 'shit', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I\'m', 'comin\'', ',', 'why', 'I\'m', 'slingin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'I\'m', 'from', 'and', 'what', 'I\'m', 'bringin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Tell', 'your', 'cousins', ',', 'best', 'stop', 'sleepin\'', 'cause', 'I\'m', 'bustin\'', 'for', 'no', 'reason', 'at', 'random', 'murder']),
			_elm_lang$core$Native_List.fromArray(
			['Killing', 'season']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'no', 'one', 'heard', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Cold', 'blood', 'creepin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Full', 'tilt', 'swervin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'your', 'bleedin\'']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'burnin\'', 'to', 'its', 'knees', 'and']),
			_elm_lang$core$Native_List.fromArray(
			['Beggin\'', 'for', 'mercy', 'while', 'I\'m', 'leanin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Hard', 'to', 'the', 'left']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'clockin\'', 'a-gripsin\'', 'the', 'death', 'pockets', 'of', 'the', 'head', 'knock', 'rhythm']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower', ',', 'system', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'we', 'came', 'to', 'blow', 'your', 'system']),
			_elm_lang$core$Native_List.fromArray(
			['blow']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'what', 'I\'m', 'sayin\'', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'or', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Braggin', 'about', 'how', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Had', 'it', 'all', 'dialed']),
			_elm_lang$core$Native_List.fromArray(
			['Well', ',', 'what\'s', 'up', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'your', 'shit', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'blow', 'your', 'system', ',', 'system', 'blower']),
			_elm_lang$core$Native_List.fromArray(
			['Stupid', 'dope', 'fiend', 'beat', 'low', 'hung', 'blood', 'spray', 'all', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'death', 'stomp', 'drums']),
			_elm_lang$core$Native_List.fromArray(
			['Scum', 'worshiping']),
			_elm_lang$core$Native_List.fromArray(
			['Speaker', 'ripping']),
			_elm_lang$core$Native_List.fromArray(
			['Pun2k', 'weight', 'holding', 'heretics']),
			_elm_lang$core$Native_List.fromArray(
			['Boundary', 'reapin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Frequency', 'freakin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Out', '\'til', 'we\'re', 'like', ',', 'That', 'track', 'sound', 'so', 'sick']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower', ',', 'system', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'heads', 'jumpin\'', 'out', 'their', 'skin']),
			_elm_lang$core$Native_List.fromArray(
			['Talkin\'', '\'bout', ',', 'Come', 'on', 'Death', 'grip', 'me', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'need', 'to', 'wonder', 'if']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'gonna', 'crack']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'no', ',', 'you', 'can', 'bet']),
			_elm_lang$core$Native_List.fromArray(
			['We\'re', 'fit', 'to', 'burn', 'the']),
			_elm_lang$core$Native_List.fromArray(
			['House', 'to', 'the', 'ground']),
			_elm_lang$core$Native_List.fromArray(
			['Soon', 'as', 'the', 'sound', 'gets', 'checked']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower', ',', 'system', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'we', 'came', 'to', 'blow', 'your', 'system']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'know', 'what', 'I\'m', 'sayin\'', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'or', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['Braggin\'', 'about', 'how', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Had', 'it', 'all', 'dialed']),
			_elm_lang$core$Native_List.fromArray(
			['Well', ',', 'what\'s', 'up', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'your', 'shit', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower', ',', 'system', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'trick', ',', 'go', 'fetch', 'my', 'whip']),
			_elm_lang$core$Native_List.fromArray(
			['Gotta', 'let', 'a', 'mark', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Who', 'he\'s', 'fuckin\'', 'with']),
			_elm_lang$core$Native_List.fromArray(
			['Ruthlessly', 'skin', 'a', 'chump']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'for', 'kicks']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'fuck', 'with', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Sadomaso-kiss', 'my', 'fist']),
			_elm_lang$core$Native_List.fromArray(
			['Suck', 'my', 'dick', ',', 'it\'s', 'not', 'cool']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'too', 'sick', ',', 'what', 'time', 'is', 'it', '?']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower', ',', 'system', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Deep', 'in', 'the', 'klink', 'base']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'straight', 'to', 'the', 'chase']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'a', 'triple', 'shot', 'of', '180', 'proof']),
			_elm_lang$core$Native_List.fromArray(
			['Kill-o-watts', 'riots', 'audio', 'violence']),
			_elm_lang$core$Native_List.fromArray(
			['Breaks', 'your', 'windows', 'and']),
			_elm_lang$core$Native_List.fromArray(
			['Takes', 'all', 'the', 'loot']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower', ',', 'system', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['Silver', 'coin', 'on', 'your', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['Forever', 'closed']),
			_elm_lang$core$Native_List.fromArray(
			['Raise', 'the', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'long', 'I', 'been', 'tired', 'of', 'that', 'old']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'nod', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', 'is', 'over']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower']),
			_elm_lang$core$Native_List.fromArray(
			['System', 'blower']),
			_elm_lang$core$Native_List.fromArray(
			['Triple', 'six', ',', 'five', ',', 'forked', 'tongue']),
			_elm_lang$core$Native_List.fromArray(
			['Subatomic', 'penetration', ',', 'rapid', 'fire', 'through', 'your', 'skull']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'I', 'shot', 'it', 'on', 'one', 'taking', 'it', 'back', 'to', 'the', 'days', 'of', 'trying', 'to', 'lose', 'control']),
			_elm_lang$core$Native_List.fromArray(
			['Swerving', 'in', 'a', 'blaze', 'of', 'fire', ',', 'raging', 'through', 'my', 'bones']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'shit', 'I\'m', 'feeling', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'yeah', ',', 'fuck', 'yeah', ',', 'I', 'feel', 'like', 'killing', 'it', ',', 'Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Alright', 'that’s', 'tight', ',', 'what', 'it\'s', 'like', 'to', 'experience', ',', 'Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'of', 'the', 'blue', ',', 'in', 'through', 'the', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Door', 'coming', 'through', 'like', 'Fuck', ',', 'what', 'was', 'that', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Man', 'I', 'don’t', 'know', ',', 'but', 'it', 'made', 'me', 'feel', 'so', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'we', 'creep', 'without', 'showing', 'you', 'jack']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', 'from', 'below', ',', 'give', 'a', 'shit', 'if', 'you', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'even', 'if', 'you', 'did', ',', 'you’d', 'keep', 'coming', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Back', 'for', 'more', ',', 'need', 'it', 'man', 'you\'re', 'addicted', 'to', 'the', 'heat']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'make', 'beats', 'catch']),
			_elm_lang$core$Native_List.fromArray(
			['Beat', 'it', '\'til', 'it', 'bleeds', 'to', 'death', ',', 'each', 'track']),
			_elm_lang$core$Native_List.fromArray(
			['Epileptic', 'seize', 'every', 'head', 'we', 'crack']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'EPMD', 'snapping', 'necks', 'as', 'we', 'tap', 'energy', 'from', 'everything', 'on', 'and', 'off', 'the', 'map']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'shit', 'I\'m', 'feeling', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'yeah', ',', 'fuck', 'yeah', ',', 'I', 'feel', 'like', 'killing', 'it', ',', 'Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Alright', 'that’s', 'tight', ',', 'what', 'it\'s', 'like', 'to', 'experience', ',', 'Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon', ',', 'shot', 'down', 'your', 'throat', 'like', 'a', 'keg', 'of', 'beer']),
			_elm_lang$core$Native_List.fromArray(
			['Choke', 'on', 'the', 'smoke', 'we', 'in', 'and', 'exhale', '\'til', 'the', 'whole', 'chamber', 'is', 'clear']),
			_elm_lang$core$Native_List.fromArray(
			['Haters', 'act', 'so', 'fucking', 'weird']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'stain', 'this', 'atmosphere']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'they', 'can\'t', 'cause', 'its', 'way', 'too', 'sheer']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'make', 'a', 'hater', 'disappear']),
			_elm_lang$core$Native_List.fromArray(
			['Take', 'shit', 'where', 'it', 'ain’t', 'never', 'been']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'what', 'you', 'thought', 'could', 'not', 'comprehend']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'shit', 'if', 'I', 'fisted', 'your', 'brain', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['10', ',', '9', ',', '8', ',', '7', ',', 'triple', 'six', ',', 'five', ',', 'forked', 'tongue']),
			_elm_lang$core$Native_List.fromArray(
			['Criminal', 'level', 'crunk', 'lightning', 'storm']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'out', 'the', 'way', 'or', 'get', 'up', 'torn']),
			_elm_lang$core$Native_List.fromArray(
			['Ain’t', 'a', 'picture', 'big', 'enough', 'to', 'fit']),
			_elm_lang$core$Native_List.fromArray(
			['What', 'we', 'dig', 'up', 'from', 'the', 'core']),
			_elm_lang$core$Native_List.fromArray(
			['Of', 'all', 'that', 'they', 'forgot', 'ever', 'was']),
			_elm_lang$core$Native_List.fromArray(
			['Militant', 'march', 'of', 'this', 'war']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon', ',', 'taking', 'them', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'we', 'see', 'is', 'blood']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon', ',', 'turning', 'them', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'to', 'trick', 'out', 'and', 'freak', 'that', 'buzz']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'shit', 'I\'m', 'feeling', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Hell', 'yeah', ',', 'fuck', 'yeah', ',', 'I', 'feel', 'like', 'killing', 'it', ',', 'Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Alright', 'that’s', 'tight', ',', 'what', 'it\'s', 'like', 'to', 'experience', ',', 'Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Lunar', 'eclipse', 'forcing', 'you', 'to', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'the', 'moonlit', 'fire', 'we', 'spray']),
			_elm_lang$core$Native_List.fromArray(
			['Cryonic', 'haunted', 'bullets', 'hollow', 'tipped', 'with', 'toxic', 'waste']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'here’s', 'the', 'deal', ',', 'if', 'you', 'don’t', 'feel', 'ill']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'want', 'it', 'nowhere', 'near', 'my', 'zone']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'shit', 'is', 'dead', ',', 'can\'t', 'nobody', 'get']),
			_elm_lang$core$Native_List.fromArray(
			['With', 'that', 'shit', 'gets', 'dial', 'toned']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon', ',', 'bitch', 'slapping', 'pussy', 'clots', 'and', 'clones']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon', ',', 'setting', 'off', 'Unabombs', 'inside', 'your', 'dome']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'it', 'up', ',', 'bitch', ',', 'you', 'know', 'this', 'is', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'with', 'this', 'or', 'get', 'left', 'cause', 'it\'s', 'on!']),
			_elm_lang$core$Native_List.fromArray(
			['Takyon']),
			_elm_lang$core$Native_List.fromArray(
			['Six', 'million', 'ways', 'to', 'die', ',', 'choose-']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'kill', 'it', 'like', 'ya', ',', 'you', 'say', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'like', 'ya', 'hate', 'it', ',', 'kill', 'it', 'like', 'ya', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'arrrgghh', ',', 'you', 'say', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'take', 'it', ',', 'I', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'you', 'starin\'', 'at', '?', 'Didn\'t', 'know', 'I\'d', 'be', 'so', 'quick', 'to', 'flash', ',', 'Terrified', 'by', 'the', 'way', 'a', 'basilisk', 'come', 'out', 'him', 'skin', 'so', 'fast']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'the', 'first', ',', 'won\'t', 'be', 'the', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Barrel', 'of', 'my', 'gun', 'down', 'the', 'hatch']),
			_elm_lang$core$Native_List.fromArray(
			['187', 'deep', 'throat', 'chokin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Eat', 'this', 'fourty-four', 'magnum', 'dick', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Murder', 'the', 'bar', 'raiser', ',']),
			_elm_lang$core$Native_List.fromArray(
			['inverted', 'cross', 'fader']),
			_elm_lang$core$Native_List.fromArray(
			['Ash', 'lung', 'blastin\'']),
			_elm_lang$core$Native_List.fromArray(
			['bum', 'rush', 'balls', 'to', 'the', 'wall', ',']),
			_elm_lang$core$Native_List.fromArray(
			['bitch', 'slayer']),
			_elm_lang$core$Native_List.fromArray(
			['Rainin\'', 'blood']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['burnin', '\'paper']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['A.', 'Jackson\'s', 'catchin\'', 'vapors']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'this', 'cage', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'thrash', 'you', 'later']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'kill', 'it', 'like', 'you', ',', 'you', 'say', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'like', 'you', 'hate', 'it', ',', 'kill', 'it', 'like', 'you', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'arrrgghh', ',', 'you', 'say', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'take', 'it', ',', 'I', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'kill', 'it', 'like', 'you', ',', 'you', 'say', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'like', 'you', 'hate', 'it', ',', 'kill', 'it', 'like', 'you', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'arrrgghh', ',', 'you', 'say', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'take', 'it', ',', 'I', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Step', 'to', 'me', 'with', 'that', 'bullshit', 'like', 'I', 'don\'t', 'know', 'what', 'you\'re', 'doin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Talkin\'', 'fast', ',', 'lookin\'', 'shady']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'can\'t', 'fade', 'me', ',', 'keep', 'it', 'movin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Hopes', 'that', 'mo\'', 'cash', 'will', 'help', 'you', 'cope']),
			_elm_lang$core$Native_List.fromArray(
			['Sorry', 'to', 'tell', 'you', ',', 'but', 'it', 'won\'t']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'do', 'I', 'get', 'out', 'then', '?', 'You', 'don\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'keep', 'this', 'locked', 'down', ',', 'fuck', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Watch', 'me', 'now', ',', 'fit', 'to', 'crush', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'it', 'once', ',', 'knock', 'it', 'down', 'and', 'I\'m', 'done', 'can\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Stop', 'this', 'break', 'out', ',', 'get', 'it', 'come', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Underground', 'railroad', ',']),
			_elm_lang$core$Native_List.fromArray(
			['gunclaps']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'sound', 'of', 'sirens', 'screamin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Count', 'on', 'it', ',', 'I\'m', 'leavin\'']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'kill', 'it', 'like', 'you', ',', 'you', 'say', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'like', 'you', 'hate', 'it', ',', 'kill', 'it', 'like', 'you', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'arrrgghh', ',', 'you', 'say', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'take', 'it', ',', 'I', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'kill', 'it', 'like', 'you', ',', 'you', 'say', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it', 'like', 'you', 'hate', 'it', ',', 'kill', 'it', 'like', 'you', 'hate', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'say', 'arrrgghh', ',', 'you', 'say', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'take', 'it', ',', 'I', 'can\'t', 'take', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', 'I', 'got', 'that', 'man', ',', 'fo\'', 'show']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'tell', '\'em', 'why', 'you', 'had', 'to', 'get', '\'em', 'though']),
			_elm_lang$core$Native_List.fromArray(
			['Get', '\'em', ',', 'get', '\'em', ',', 'cause', 'I', 'had', 'to', 'get', '\'em', 'though']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'the', 'beat', 'bangs', ',']),
			_elm_lang$core$Native_List.fromArray(
			['cause', 'we', 'came', 'to', 'flip', 'the', 'oz', 'out', 'your', 'sleep', 'train']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'the', 'smoke', 'clears', ',', 'who', 'remains', '?']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'right', 'here', ',', 'why', 'we', 'claim']),
			_elm_lang$core$Native_List.fromArray(
			['Out', 'of', 'nowhere', ',', 'for', 'keeps', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'go', 'there', ',', 'this', 'the', 'real', 'thing']),
			_elm_lang$core$Native_List.fromArray(
			['Get', '\'em', ',', 'get', '\'em', ',', 'cause', 'I', 'had', 'to', 'get', '\'em', 'though']),
			_elm_lang$core$Native_List.fromArray(
			['Board', 'the', 'plane', ',', 'they\'re', 'watchin\'', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Bullshit', 'stains', 'what', 'they', 'want', 'from', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', 'man', ',', 'my', 'philosophy:']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'take', 'a', 'goddamn', 'thing']),
			_elm_lang$core$Native_List.fromArray(
			['Voice', 'in', 'my', 'head', ',', 'Kill', 'everything']),
			_elm_lang$core$Native_List.fromArray(
			['Startin\'', 'with', 'this', 'asshole', 'right', 'next', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Get', '\'em', ',', 'get', '\'em', ',', 'cause', 'I', 'had', 'to', 'get', '\'em', 'though']),
			_elm_lang$core$Native_List.fromArray(
			['Get', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['How\'d', 'you', 'know', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'was', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Yeah', ',', 'that', 'shit', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['Came', 'prepared']),
			_elm_lang$core$Native_List.fromArray(
			['Set', 'it', 'slow', 'rolled']),
			_elm_lang$core$Native_List.fromArray(
			['Anticipation', 'grow', 'slow']),
			_elm_lang$core$Native_List.fromArray(
			['Deviated', 'septum']),
			_elm_lang$core$Native_List.fromArray(
			['blow', 'hole']),
			_elm_lang$core$Native_List.fromArray(
			['Sugar', 'cane', 'ko', 'ko']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', ',', 'aye', ',', 'pass', 'the', 'dro', 'my', 'way']),
			_elm_lang$core$Native_List.fromArray(
			['Or', 'no', 'way', 'twenty', 'fo\'', ',', 'no', '25-8']),
			_elm_lang$core$Native_List.fromArray(
			['Thought', 'you', 'knew']),
			_elm_lang$core$Native_List.fromArray(
			['Suicide', 'lane']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Grab', 'my', 'crotch', ',', 'what\'s', 'my', 'name', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Been', '\'round', 'the', 'block']),
			_elm_lang$core$Native_List.fromArray(
			['Hangin\'', 'scumbag', 'slangin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Pay', 'dirt', 'cave', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['Takin\'', 'no', 'prisoners']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'escaping', 'wash', 'brain', 'hook']),
			_elm_lang$core$Native_List.fromArray(
			['Nothin\'', 'I\'m', 'sayin']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', ',', 'aye', ',', 'know', 'what', 'I\'m', 'sayin', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'diamonds', ',', 'scrapin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Sidin\'', ',', 'wastin\'', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'altered', 'states', ',', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Back', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'diamonds', ',', 'scrapin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Sidin\'', ',', 'wastin\'', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'altered', 'states', ',', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Back', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['Sprayin\'', 'execution', ',']),
			_elm_lang$core$Native_List.fromArray(
			['witch', 'fingernails', 'clawin\'', 'through', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Crawlin\'', 'through', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Tunnels']),
			_elm_lang$core$Native_List.fromArray(
			['losing']),
			_elm_lang$core$Native_List.fromArray(
			['Touch', 'with', 'everything', 'I\'m', 'doin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Aaarrrggghh...', 'mass', 'confusion']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'make', 'more', 'electrocution']),
			_elm_lang$core$Native_List.fromArray(
			['Half', 'cocked', 'full', 'tilt']),
			_elm_lang$core$Native_List.fromArray(
			['Rabid', 'dog']),
			_elm_lang$core$Native_List.fromArray(
			['Filth', 'aarrrggghhh']),
			_elm_lang$core$Native_List.fromArray(
			['Know', 'what', 'I\'m', 'sayin\'', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Upside', 'down', 'in', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['Soft', 'top', 'bucket']),
			_elm_lang$core$Native_List.fromArray(
			['Screamin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Shred', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'diamonds', ',', 'scrapin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Sidin\'', ',', 'wastin\'', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'altered', 'states', ',', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Back', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'diamonds', ',', 'scrapin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Sidin\'', ',', 'wastin\'', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'altered', 'states', ',', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Back', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['Let', 'me', 'off', ',', 'screeching', 'halt']),
			_elm_lang$core$Native_List.fromArray(
			['Concussion', 'blinding']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'my', 'fault']),
			_elm_lang$core$Native_List.fromArray(
			['Ankles', 'tied', 'to', 'cinder', 'blocks']),
			_elm_lang$core$Native_List.fromArray(
			['Aye', ',', 'aye']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'any', 'means', 'necesserated']),
			_elm_lang$core$Native_List.fromArray(
			['Blade', 'cut', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Sewer', 'drain', 'grated']),
			_elm_lang$core$Native_List.fromArray(
			['Bubonic', 'plague']),
			_elm_lang$core$Native_List.fromArray(
			['Spreaded', 'faceless']),
			_elm_lang$core$Native_List.fromArray(
			['Lurking', 'in', 'the', 'deadest', 'spaces']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'your', 'knees', ',', 'black', 'goat', 'anus']),
			_elm_lang$core$Native_List.fromArray(
			['Christo', 'anti-clan', 'of', 'shameless']),
			_elm_lang$core$Native_List.fromArray(
			['Came', 'to', 'whip', 'those']),
			_elm_lang$core$Native_List.fromArray(
			['Into', 'shapeless']),
			_elm_lang$core$Native_List.fromArray(
			['Here', 'we', 'go', ',', 'devastated']),
			_elm_lang$core$Native_List.fromArray(
			['Here', 'we', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['Here', 'we', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['Diamonds', 'scrapin\'', 'the', 'marrow', ',', 'out', 'my', 'core']),
			_elm_lang$core$Native_List.fromArray(
			['Who\'s', 'in', 'the', 'mirror', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Who\'s', 'at', 'the', 'door', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Someone\'s', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Wasn\'t', 'there', 'before']),
			_elm_lang$core$Native_List.fromArray(
			['Ceiling', 'connected']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'the', 'chord']),
			_elm_lang$core$Native_List.fromArray(
			['Pull', 'it!']),
			_elm_lang$core$Native_List.fromArray(
			['Pull', 'that', 'shit!']),
			_elm_lang$core$Native_List.fromArray(
			['Pull', 'that', 'shit!']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'diamonds', ',', 'scrapin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Sidin\'', ',', 'wastin\'', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'altered', 'states', ',', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Back', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'diamonds', ',', 'scrapin\'']),
			_elm_lang$core$Native_List.fromArray(
			['Sidin\'', ',', 'wastin\'', 'my', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'altered', 'states', ',', 'them']),
			_elm_lang$core$Native_List.fromArray(
			['Back', 'it', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'the', 'fever']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'get', 'me', 'wrong']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'get', 'me', 'wrong']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'get', 'me', 'wrong']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'get', 'me', 'wrong']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is', 'violence', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'know', 'what', 'I\'m', '\'bout', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'know', 'what', 'I\'m', '\'bout', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'what', 'the', 'fuck', 'happens']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'know', 'what', 'I\'m', '\'bout', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'what', 'the', 'fuck', 'happens']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'know', 'what', 'I\'m', '\'bout', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'got', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Running', 'through', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'favorite', 'color', 'is', 'oh', 'my', 'god', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'wearing', 'black', 'gloves', 'through', 'your', 'mall', ',', 'I\'m', 'rich']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'wanna', 'check', 'my', 'pockets', 'but—']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'what', 'the', 'fuck', 'happens', 'when', 'shit', 'happens']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'a', 'fuck', 'gives', 'under', 'no', 'circumstances']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'your', 'clock', 'shit', 'memory', 'persist', 'a', 'clock', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Lick', 'lick', 'a', 'shot', ',', 'shit\'s', 'cracking']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'when', 'shit', 'happens', ',', 'cause', 'I\'m', 'not', 'acting']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'it', 'like', 'it', 'or', 'not', ',', 'I\'m', 'on', 'that', 'shit;', 'you\'re', 'not']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'this', 'ceremony', 'I', 'gouge', 'you', '\'til', 'you\'re', 'free']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'my', 'testimony', 'to', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Powers', 'that', 'b']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'know', 'what', 'I\'m', '\'bout', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'I', 'can\'t', 'know', 'what', 'I\'m', '\'bout', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'what', 'the', 'fuck', 'happened']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'I', 'can\'t', 'know', 'what', 'I\'m', '\'bout', 'to', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['Until', 'its', 'too', 'late', 'for', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['To', 'steal', 'my', 'name', ',', 'bow', 'down', 'on', 'cue']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'got', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Running', 'through', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'favorite', 'color', 'is', 'oh', 'my', 'god', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'wearing', 'black', 'gloves', 'through', 'your', 'mall', ',', 'I\'m', 'rich']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'wanna', 'check', 'my', 'pockets', 'but—']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Are', 'running', 'through', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'favorite', 'color', 'is', 'oh', 'my', 'god', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'wearing', 'black', 'gloves', 'through', 'your', 'mall', ',', 'I\'m', 'rich']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'wanna', 'check', 'my', 'pockets', 'but—']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'on', 'my', 'shit', 'kickers']),
			_elm_lang$core$Native_List.fromArray(
			['Smoke', 'coming', 'out', 'my', 'fingers', 'again']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'fuck', 'with', 'the', 'physical', 'world']),
			_elm_lang$core$Native_List.fromArray(
			['Cause', 'I', 'comply', 'with', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'never', 'over', 'right', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'stretchers', 'rollin\'', ',', 'I\'m', 'in', 'the', 'white', 'house']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'black', 'light', 'house', ',', 'I\'m', 'above', 'this', 'life', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'above', 'my', 'life', 'now']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'beneath', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Raised', 'on', 'short', 'notice', 'by', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Hook', 'me', ',', 'catch', 'me', ',', 'squeal', 'me', 'in']),
			_elm_lang$core$Native_List.fromArray(
			['Gut', 'me', ',', 'hack', 'me', ',', 'crop', 'your', 'grin']),
			_elm_lang$core$Native_List.fromArray(
			['Pack', 'me', ',', 'sell', 'me', ',', 'claim', 'we\'re', 'friends']),
			_elm_lang$core$Native_List.fromArray(
			['See', 'me', 'on', 'the', 'street', ',', 'drop', 'your', 'grin']),
			_elm_lang$core$Native_List.fromArray(
			['Squint', 'your', 'beady', 'eyes', 'and', 'flinch']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'a', 'sniveling', 'shiesty', 'snitch']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'fret', ',', 'I', 'know', 'you\'re', 'just', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'paid', 'by', 'the', 'universe']),
			_elm_lang$core$Native_List.fromArray(
			['Morbidly', 'blasé', 'when', 'I\'m', 'not', 'on', 'display']),
			_elm_lang$core$Native_List.fromArray(
			['Turn', 'up', 'my', 'mic', ',', 'your', 'hair', 'turn', 'white']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'paid', 'by', 'the', 'universe']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'salary']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'get', 'no', 'fucks', 'from', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'run', 'the', 'company']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'paid', 'by', 'the', 'universe']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'got', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Running', 'through', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'favorite', 'color', 'is', 'oh', 'my', 'god', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'wearing', 'black', 'gloves', 'through', 'your', 'mall', ',', 'I\'m', 'rich']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'wanna', 'check', 'my', 'pockets', 'but—']),
			_elm_lang$core$Native_List.fromArray(
			['The', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Are', 'running', 'through', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'favorite', 'color', 'is', 'oh', 'my', 'god', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'wearing', 'black', 'gloves', 'through', 'your', 'mall', ',', 'I\'m', 'rich']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'wanna', 'check', 'my', 'pockets', 'but—']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'I', 'ain\'t', 'shit', 'and', 'I', 'like', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'want', 'a', 'statement', ',', 'I\'m', 'like', ',', 'Why\'s', 'that', '?']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'parasite\'s', 'showing', ',', 'that\'s', 'not', 'my', 'bad']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'bad\'s', 'pathetic', ',', 'your', 'bad\'s', 'your', 'price', 'tag']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'bad\'s', 'embedded', 'in', 'your', 'lives', ',', 'a', 'white', 'flag']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'sterilized', 'white', 'flag', ',', 'born', ',', 'bred', ',', 'and', 'buried', 'in', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Wears', 'you', 'like', 'a', 'cherry', 'finish', ',', 'keeps', 'you', 'valuable', 'and', 'shiny']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'a', 'shiny', 'clown', 'to', 'me', 'and', 'the', 'powers', 'that', 'B']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'can\'t', 'I', 'just', 'float', 'through', 'the', 'walls', '?', 'Through', 'the', 'walls']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'can\'t', 'I', 'just', 'float', 'through', 'the', 'walls', '?', 'Through', 'the', 'walls']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'you\'re', 'delusional', ',', 'your', 'call', 'will', 'be', 'transferred', 'to', 'the', 'mother', 'ship']),
			_elm_lang$core$Native_List.fromArray(
			['Ugh!']),
			_elm_lang$core$Native_List.fromArray(
			['Yes', ',', 'I', 'lack', 'control']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'coming', 'through', ',', 'thought', 'you', 'knew', ',', 'fuck', 'if', 'you', 'didn\'t', ',', 'fuck', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Plutonium', 'lore', ',', 'what', 'this', 'is', ',', 'what', 'this', 'for']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'my', 'fists', 'push', 'black', 'holes', 'through', 'your', 'bitch', 'ass', 'decor']),
			_elm_lang$core$Native_List.fromArray(
			['Spit', 'it', 'back', 'like', 'a', 'whore', 'and', 'make', 'you', 'shit', 'your', 'fucking', 'drawers']),
			_elm_lang$core$Native_List.fromArray(
			['Scared', 'to', 'ride', ',', 'cowards', 'fall', 'before', 'my', 'eyes', ',', 'sound', 'of', 'my', 'balls']),
			_elm_lang$core$Native_List.fromArray(
			['Dragging', 'like', 'cannon', 'loaded', 'wagons', ',', 'drug', 'by', 'demons', 'down', 'your', 'halls']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'imagine', 'what\'s', 'fit', 'to', 'happen', 'when', 'I', 'get', 'to', 'flashing', ',', 'see', 'the', 'small']),
			_elm_lang$core$Native_List.fromArray(
			['Shrink', 'to', 'a', 'fraction', 'of', 'what', 'they\'re', 'lacking', 'and', 'less', 'than', 'that', 'in', 'no', 'time', 'at', 'all']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'believe', 'they', 'have', 'the', 'gaul', 'to', 'try', 'and', 'act']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'they’re', 'not', 'trapped', 'between', 'these', 'walls']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', 'Bring', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Sling', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Sling', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', ',', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'bring', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', ',', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'bring', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Sling', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Sometimes', 'feel', 'like', 'I\'m', 'close', 'but', 'never', 'get', 'there', ',', 'never', 'get', 'there']),
			_elm_lang$core$Native_List.fromArray(
			['Does', 'it', 'mean', 'I\'m', 'a', 'ghost', 'if', 'I\'m', 'still', 'here', '?', 'Wanna', 'leave', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'if', 'I', 'am', 'why', 'can\'t', 'I', 'just', 'float', 'through', 'the', 'walls', '?', 'Through', 'the', 'walls']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'if', 'I', 'can', ',', 'were', 'they', 'even', 'ever', 'there', 'at', 'all', '?', 'Not', 'at', 'all']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'much', 'time', 'spent', 'in', 'the', 'maze', 'will', 'drive', 'you', 'mad', ',', 'I', 'feel', 'so', 'bad']),
			_elm_lang$core$Native_List.fromArray(
			['Been', 'there', 'so', 'long', 'I', 'can\'t', 'remember', 'who', 'I', 'am', ',', 'or', 'where', 'I', 'stand']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'in', 'the', 'end', 'I', 'guess', 'I', 'just', 'don’t', 'give', 'a', 'damn', ',', 'twist', 'a', 'gram']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'keep', 'on', 'sticking', 'with', 'the', 'original', 'plan', ',', 'fuck', 'it', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Judge', 'you', 'no', 'more', 'than', 'I', 'wish', 'to', 'be', 'judged', ',', 'even', 'on', 'the', 'low']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I', 'do', 'know', 'what', 'you', 'do', 'not', 'speak', 'of', ',', 'don’t', 'know', 'but', 'it', 'shows']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'hide', 'but', 'I', 'see', 'who', 'you', 'are', 'because', 'I', 'just', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Keep', 'talking', 'but', 'you', 'already', 'said', 'too', 'much', ',', 'there', 'you', 'go']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'it', 'is', 'now\'s', 'how', 'it', 'always', 'was', ',', 'that’s', 'on', 'my', 'blood']),
			_elm_lang$core$Native_List.fromArray(
			['How', 'it', 'is', 'now\'s', 'how', 'it', 'always', 'was', ',', 'that’s', 'on', 'my', 'blood']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Sling', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Sling', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', ',', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'bring', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', ',', 'that', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'bring', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['Bring', 'it', ',', 'bring', 'that', 'shit', 'heated']),
			_elm_lang$core$Native_List.fromArray(
			['Sling', 'it', ',', 'bring', 'back', 'that', 'shit', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['See', 'my', 'blood', 'spill', 'drip', ',', 'by', 'chances']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'chill', ',', 'quit', ',', 'cause', 'I', 'can\'t', 'just', 'slip', 'into']),
			_elm_lang$core$Native_List.fromArray(
			['a', 'zagthoth']),
			_elm_lang$core$Native_List.fromArray(
			['trance']),
			_elm_lang$core$Native_List.fromArray(
			['Tongue', 'hissing', ',', 'serpent', 'chants']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'again', 'work', 'it', 'in', ',', 'yeah', 'just', 'like', 'that']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'paint', 'our', 'insides', 'black', 'as', 'the', 'shadows', '\'hind', 'our', 'flesh']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'make', 'all', 'that', 'we', 'lack', ',', 'the', 'part', 'of', 'life', 'that', 'we', 'forget']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'praise', 'due', 'to', 'the', 'fact', 'that', 'we\'ve', 'forgotten', 'how', 'to', 'sweat', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Check', 'it', ',', 'bring', 'it', ',', 'kill', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'everything', 'I', 'own', ',', 'swear', 'would', 'rather', 'slit', 'my', 'throat']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'die', 'on', 'the', 'run', 'than', 'be', 'the', 'one', 'who', 'ends', 'up', 'hangin\'', 'from', 'that', 'rope']),
			_elm_lang$core$Native_List.fromArray(
			['Tied', 'to', 'the', 'thumb', 'of', 'the', 'man', 'who', 'comes', 'to', 'empty', 'your', 'pockets', 'when', 'you', 'choke']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'to', 'get', 'that', 'shit', 'myself', 'and', 'get', 'the', 'fuck', 'out', 'of', 'this', 'game', 'before']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'end', 'up', 'getting', 'stuck', 'with', 'no', 'one', 'but', 'myself', 'to', 'blame', ',', 'all', 'the', 'way', 'insane']),
			_elm_lang$core$Native_List.fromArray(
			['Staring', 'at', 'the', 'ceiling', ',', 'in', 'the', 'dark']),
			_elm_lang$core$Native_List.fromArray(
			['Trying', 'not', 'to', 'let', 'the', 'feeling', ',', 'tear', 'you', 'apart']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'the', 'silence', 'is', 'buzzing', ',', 'and', 'it', 'won\'t', 'stop']),
			_elm_lang$core$Native_List.fromArray(
			['Tell', 'yourself', 'it\'s', 'almost', 'over', ',', 'but', 'it\'s', 'not']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'and', 'get', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['\'Fore', 'it', 'gets', 'you', 'lead-headed']),
			_elm_lang$core$Native_List.fromArray(
			['Shuttle', 'jacked', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Double', 'barrel', 'shots']),
			_elm_lang$core$Native_List.fromArray(
			['Either', 'you\'re', 'there', 'or', 'you’re', 'not']),
			_elm_lang$core$Native_List.fromArray(
			['True', 'vulture', ',', 'my', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'you', 'want', 'what', 'I', 'got', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'money', ',', 'watch', 'that', 'red', 'dot']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'your', 'brow']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['twelve', 'o\'clock']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'down', 'to', 'hell', 'drop']),
			_elm_lang$core$Native_List.fromArray(
			['A-a-a-as', 'your', 'whole', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Flashes', 'before', 'your', 'eyes']),
			_elm_lang$core$Native_List.fromArray(
			['And', 'don’t', 'nobody', 'know', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['True', 'vulture', ',', 'my', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'money', 'man', ',', 'yo', 'money']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'money', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'dime', ',', 'I', 'keep', 'the', 'mic', 'in', 'my', 'hand', ',', 'cuz']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['True', 'vulture', ',', 'my', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Gonna', 'bring', 'the', 'subculture', ',', 'get', 'ran']),
			_elm_lang$core$Native_List.fromArray(
			['Through', 'like', 'the', 'hole', 'in', 'your', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'there', 'and', 'you’re', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['Nothing\'s', 'fair', 'except', 'fare']),
			_elm_lang$core$Native_List.fromArray(
			['Collateral', 'damage', 'Fuck']),
			_elm_lang$core$Native_List.fromArray(
			['You’re', 'expendable']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'that', ',', 'collect', 'capital', ',', 'it', 'stacks', 'into', 'stupid', 'dough']),
			_elm_lang$core$Native_List.fromArray(
			['Use', 'the', 'star', 'axis', 'to', 'set', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Monsters', 'in', 'cubicles']),
			_elm_lang$core$Native_List.fromArray(
			['Take', 'that', 'death', 'by', 'jacked', 'funeral']),
			_elm_lang$core$Native_List.fromArray(
			['Full', 'blown', 'and', 'gagged', 'individuals']),
			_elm_lang$core$Native_List.fromArray(
			['Am', 'I', 'a', 'savage', '?', 'Hell', 'yeah', ',', 'like', 'you', 'didn\'t', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Future', 'primitive', 'digital']),
			_elm_lang$core$Native_List.fromArray(
			['Black', 'google', 'visual']),
			_elm_lang$core$Native_List.fromArray(
			['Runaway', 'the', 'rebels', ',', 'curtain', 'fall']),
			_elm_lang$core$Native_List.fromArray(
			['snap', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['Pro-line', 'original']),
			_elm_lang$core$Native_List.fromArray(
			['Stay', 'some', 'time', 'in', 'official', ',', 'ohh']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', ',', 'that’s', 'so', 'federal']),
			_elm_lang$core$Native_List.fromArray(
			['Missile', 'represent', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Don’t', 'know', ',', 'don’t', 'ever', 'forget', 'it', ',', 'ho']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'money', 'man', ',', 'yo', 'money']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'money', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'dime', ',', 'I', 'keep', 'the', 'mic', 'in', 'my', 'hand', ',', 'cuz']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'fools', 'will', 'never', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'your', 'performance']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'live', 'break', 'houses', 'the', 'ritual']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'different', 'from', 'the', 'recorded', 'transmission']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'in', 'the', 'studio']),
			_elm_lang$core$Native_List.fromArray(
			['Two', 'black', 'and', 'blue', 'trenches']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'thou', 'pay', 'my', 'food', 'plus', 'capital']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'money', ',', 'mayne']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'to', 'hang', 'but', 'got', 'banged']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'that', 'black']),
			_elm_lang$core$Native_List.fromArray(
			['buku']),
			_elm_lang$core$Native_List.fromArray(
			['Flamed', 'to', 'wax', 'voodoo']),
			_elm_lang$core$Native_List.fromArray(
			['Simulate', 'dead', 'ass', 'like', 'shrooms']),
			_elm_lang$core$Native_List.fromArray(
			['Eat', 'a', 'cap', 'and', 'watch', 'the', 'bass', 'launch', 'the', 'face', 'off', 'the', 'moon']),
			_elm_lang$core$Native_List.fromArray(
			['While', 'I\'m', 'takin\'', 'new', 'cakes', 'and', 'find']),
			_elm_lang$core$Native_List.fromArray(
			['A', 'new', 'way', 'to', 'get', 'blown']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'money’s', 'my', 'money', ',', 'mayne']),
			_elm_lang$core$Native_List.fromArray(
			['What’s', 'up', 'with', 'the', 'struggle', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'down', 'with', 'it', 'or', 'get', 'caged']),
			_elm_lang$core$Native_List.fromArray(
			['By', 'the', 'laws', 'of', 'the', 'jungle']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'money', 'man', ',', 'yo', 'money']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'money', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'the', 'dime', ',', 'I', 'keep', 'the', 'mic', 'in', 'my', 'hand', ',', 'cuz']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['Them', 'no', 'understand']),
			_elm_lang$core$Native_List.fromArray(
			['True', 'vulture', 'my', 'man']),
			_elm_lang$core$Native_List.fromArray(
			['Yo', ',', 'yo', ',', 'money']),
			_elm_lang$core$Native_List.fromArray(
			['Doors', 'and', 'windows', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Motions', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'take', 'my', 'life', 'like', 'I', 'kept', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'take', 'my', 'life', 'like', 'I', 'kept', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'sounds', 'like', 'you', 'meant', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'take', 'my', 'life', 'anyway', 'I', 'can', 'fetish']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'my', 'fetish']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'it', 'only', 'as', 'directed']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'it', 'cause', 'I', 'got', 'the', 'queen\'s', 'tits']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'it', 'like', 'you\'re', 'the', 'queen\'s', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hold', 'your', 'ground', 'with', 'my', 'perch']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'my', 'slur', ',', 'quench', 'my', 'hearse']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don\'t', 'wanna']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'my', 'nap']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don\'t', 'wanna']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'you', 'back']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'whirling', ',', 'ohh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'agony\'s', 'priceless']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'take', 'my', 'life', 'any', 'way', 'you', 'can', 'slice', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'my', 'shaman', 'fetish']),
			_elm_lang$core$Native_List.fromArray(
			['Diner', 'in', 'the', 'desert', 'for', 'effect']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'effects']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'my', 'shaman', 'like', 'connect']),
			_elm_lang$core$Native_List.fromArray(
			['Disconnect']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'the', 'wretch', 'Maya']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'always', 'known']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'always', 'known']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'you', 'can\'t', 'snatch', 'my', 'fetish', ',', 'I\'ll', 'FedEx', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Notify', 'me', 'when', 'you', 'miss', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'be', 'in', 'my', 'liquid']),
			_elm_lang$core$Native_List.fromArray(
			['Pickle', 'punked', 'lavish']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'you', 'miss', 'it', ',', 'I\'ll', 'track', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'fetish', 'like', 'magic']),
			_elm_lang$core$Native_List.fromArray(
			['Feel', 'contrived', 'instant', 'you', 'snatch', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'my', ',', 'snatch', 'my', ',', 'fetish']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'it', ',', 'up', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'my', ',', 'snatch', 'my', ',', 'fetish']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'my', ',', 'snatch', 'my', ',', 'fetish']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'keep', 'it', ',', 'up', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'I\'ll', 'ever', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'like', 'I', 'even', 'want', 'to', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'like', 'I', 'never', 'didn\'t', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'like', 'I', 'don\'t', 'know', 'I', 'don\'t', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'I\'m', 'so', 'necessary']),
			_elm_lang$core$Native_List.fromArray(
			['Blank', 'blank', 'obituary']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'Broadway', 'cemetery']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'Broadway', 'cemetery']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'like', 'I\'ll', 'ever', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'like', 'I', 'even', 'want', 'to', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'like', 'I', 'never', 'didn\'t', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['Was', 'like', 'I', 'don\'t', 'know', 'I', 'don\'t', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'I\'m', 'so', 'necessary']),
			_elm_lang$core$Native_List.fromArray(
			['Blank', 'blank', 'obituary']),
			_elm_lang$core$Native_List.fromArray(
			['At', 'Broadway', 'cemetery']),
			_elm_lang$core$Native_List.fromArray(
			['Tsk', 'tsk', 'tsk']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'terracotta', 'army']),
			_elm_lang$core$Native_List.fromArray(
			['Disarms', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Disowns', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Also', 'also', 'also', 'Mr.', 'Whippy', 'told', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Hit', 'play', 'highway', 'hocus', 'ain\'t', 'much', 'more', 'highway']),
			_elm_lang$core$Native_List.fromArray(
			['Can', 'ride', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'dead', 'mother', 'in', 'my', 'dream']),
			_elm_lang$core$Native_List.fromArray(
			['Remember', 'when', 'December', 'blew', 'her', 'ashes', '\'cross', 'my', 'jeans']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'these', 'jeans']),
			_elm_lang$core$Native_List.fromArray(
			['Somethings', 'only', 'I', 'have', 'seen']),
			_elm_lang$core$Native_List.fromArray(
			['Some', 'people', 'only', 'I', 'have', 'been']),
			_elm_lang$core$Native_List.fromArray(
			['Used', 'to', 'know', 'who', 'I', 'was']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'if', 'I', 'knew', 'who', 'that', 'was']),
			_elm_lang$core$Native_List.fromArray(
			['Pay', 'no', 'mind', ',', 'illogical']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'don\'t', 'die', 'in', 'a', 'hospital']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'yeah']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'should', 'be', 'worried']),
			_elm_lang$core$Native_List.fromArray(
			['Oh', 'yeah']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'temporary']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'but', 'when', 'I', 'do']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'tell', 'you', 'how', 'I', 'knew']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'always', 'known']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'always', 'known']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'was', 'conceived', ',', 'by', 'my', 'disease']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Anyhow', ',', 'anymore', ',', 'anyone', ',', 'anything']),
			_elm_lang$core$Native_List.fromArray(
			['Anywhere', ',', 'anytime']),
			_elm_lang$core$Native_List.fromArray(
			['Snatch', 'my', 'fetish']),
			_elm_lang$core$Native_List.fromArray(
			['Sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['Nothing', 'you', 'can', 'offer', 'I', 'ain\'t', 'hocked']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Everything\'s', 'nothing', 'to', 'me', ',', 'I\'m', 'knocked']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'can\'t', 'maim', 'a', 'martian', 'till', 'you', 'come']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'abstain', 'from', 'being', 'and', 'succumb']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'feel', 'none', ',', 'I', 'flog', 'the', 'remedy']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Alchemy', 'for', 'your', 'bodily']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Nonsensically']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['Got', 'a', 'pendleton', 'on', 'my', 'valley']),
			_elm_lang$core$Native_List.fromArray(
			['Up', 'my', 'sleeves']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Nylons', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Side', 'bitches', 'don’t']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'table', 'through', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'body', 'through', 'your']),
			_elm_lang$core$Native_List.fromArray(
			['Three', 'bedrooms', 'in', 'a', 'good', 'neighborhood']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'fire', 'like', 'a', 'margarita', 'made', 'out', 'of', 'wood']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'got', 'solar', 'panels', 'for', 'thirty', 'cents', 'a', 'watt']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'future', ',']),
			_elm_lang$core$Native_List.fromArray(
			['there’s', 'a', 'party', 'from', 'the', 'past', ',', 'she’s', 'a', 'cop']),
			_elm_lang$core$Native_List.fromArray(
			['I’ll', 'jail', 'break', 'ADX', 'with', 'a', 'blank', 'tarot', 'card']),
			_elm_lang$core$Native_List.fromArray(
			['Same', 'card', 'pull', 'your', 'hoe', 'card', 'like', 'Zoltar']),
			_elm_lang$core$Native_List.fromArray(
			['Two', 'crystal', 'balls', 'dangle', 'from', 'my', 'boneyard']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'niagara', 'falls', 'flowing', 'crowbar']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'la', 'la', 'la', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'got', 'folsom', 'bars']),
			_elm_lang$core$Native_List.fromArray(
			['Tour', 'flows', 'urinal']),
			_elm_lang$core$Native_List.fromArray(
			['take', 'a', 'dive', 'bars']),
			_elm_lang$core$Native_List.fromArray(
			['La', 'la', 'la', 'la']),
			_elm_lang$core$Native_List.fromArray(
			['Go', 'down', 'in', 'the', 'fifth']),
			_elm_lang$core$Native_List.fromArray(
			['you', 'service', 'town', 'car']),
			_elm_lang$core$Native_List.fromArray(
			['Swiftly', 'service', 'me']),
			_elm_lang$core$Native_List.fromArray(
			[',', 'bitch', 'it’s', 'called', 'outlaw']),
			_elm_lang$core$Native_List.fromArray(
			['Nylons', 'on', 'veal']),
			_elm_lang$core$Native_List.fromArray(
			['Side', 'bitches', 'don’t', 'heal']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'table', 'through', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'body', 'through', 'your', 'bed']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Three', 'bedrooms', 'in', 'a', 'good', 'neighborhood']),
			_elm_lang$core$Native_List.fromArray(
			['On', 'fire', 'like', 'a', 'margarita', 'made', 'out', 'of', 'wood']),
			_elm_lang$core$Native_List.fromArray(
			['She', 'got', 'solar', 'panels', 'for', 'thirty', 'cents', 'a', 'watt']),
			_elm_lang$core$Native_List.fromArray(
			['In', 'the', 'future', ',', 'there’s', 'a', 'party', 'from', 'the', 'past', ',', 'she’s', 'a', 'cop']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'private', 'ocean', 'I', 'carve']),
			_elm_lang$core$Native_List.fromArray(
			['I’ll', 'carve', 'this', 'bitch', 'into', 'high', 'art']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'say', 'bitch', 'made', 'state', 'of', 'mind', 'art']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'murder', 'spree', 'murk', 'out', 'this', 'conk']),
			_elm_lang$core$Native_List.fromArray(
			['Albert', 'Fish']),
			_elm_lang$core$Native_List.fromArray(
			['gaunt', 'sunk', 'out', 'this', 'conk']),
			_elm_lang$core$Native_List.fromArray(
			['Strictly', 'ugly', 'fuck', 'for', 'your', 'cunt']),
			_elm_lang$core$Native_List.fromArray(
			['Cunts', 'over', 'easy', 'and', 'more', 'blunts']),
			_elm_lang$core$Native_List.fromArray(
			['Thermal', 'strong', 'arm', 'gravity', 'sink', 'bong']),
			_elm_lang$core$Native_List.fromArray(
			['Head', 'games', 'with', 'an', 'only', 'child']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'foghorn', 'devils', 'devils', 'jelly']),
			_elm_lang$core$Native_List.fromArray(
			['Felt', 'me', ',', 'unbelt', 'me', ',', 'bombard', 'your', 'belly']),
			_elm_lang$core$Native_List.fromArray(
			['Force', 'feed', 'me', 'through', 'your', 'telly']),
			_elm_lang$core$Native_List.fromArray(
			['Cyborg', 'swelling', 'pregnant', 'can’t', 'abort']),
			_elm_lang$core$Native_List.fromArray(
			['Nylons', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Side', 'bitches', 'don’t']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'table', 'through', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'body', 'through', 'your']),
			_elm_lang$core$Native_List.fromArray(
			['Nylons', 'on', 'veal']),
			_elm_lang$core$Native_List.fromArray(
			['Side', 'bitches', 'don’t', 'heal']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'table', 'through', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'body', 'through', 'your']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'all', 'up', 'in', 'my', 'glory', 'hole', 'S-O', 'no', ',', 'no', ',', 'no', ',', 'no']),
			_elm_lang$core$Native_List.fromArray(
			['Nylons', 'on']),
			_elm_lang$core$Native_List.fromArray(
			['Side', 'bitches', 'don’t']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'table', 'through', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'body', 'through', 'your']),
			_elm_lang$core$Native_List.fromArray(
			['Nylons', 'on', 'veal']),
			_elm_lang$core$Native_List.fromArray(
			['Side', 'bitches', 'don’t', 'heal']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'table', 'through', 'my', 'head']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'body', 'through', 'your']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'cloaked', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Poker', 'fucking', 'polygraphs']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'dirt', 'so', 'baked', ',', 'man', 'menstruate']),
			_elm_lang$core$Native_List.fromArray(
			['After', 'each', 'take']),
			_elm_lang$core$Native_List.fromArray(
			['test', ',', 'say', 'I', 'passed']),
			_elm_lang$core$Native_List.fromArray(
			['That’s', 'trash', ',', 'I’m', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Kind', 'you', 'mine', 'to', 'trade', 'for', 'cash']),
			_elm_lang$core$Native_List.fromArray(
			['You’re', 'trash', ',', 'born', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Eye', 'you', 'close', ',', 'all', 'I', 'see’s', 'more', 'trash', ',', 'mi', 'amor']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Stoked', 'ain’t', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'was', 'over', 'that', 'for', 'this', 'whole', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Taste', 'of', 'my', 'blood', 'bliss']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who', 'I', 'wasn’t']),
			_elm_lang$core$Native_List.fromArray(
			['Commodify', 'my', 'lack', 'of', 'progress']),
			_elm_lang$core$Native_List.fromArray(
			['Specifically', 'the', 'process']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'this', 'lukewarm', 'elixir']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'blood’s', 'real', 'shit', ',', 'sir']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Be', 'it', 'motel', 'six', 'to', 'vogue', 'vino', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Local', 'comcast', 'to', 'shit', 'vevo', 'ads']),
			_elm_lang$core$Native_List.fromArray(
			['From', 'upper', 'mid', 'to', 'been', 'repossessed']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'side', 'of', 'my', 'machete']),
			_elm_lang$core$Native_List.fromArray(
			['Fall', 'out', 'mercury', 'confetti']),
			_elm_lang$core$Native_List.fromArray(
			['Ebony', 'skies', ',', 'I', 'died', 'already']),
			_elm_lang$core$Native_List.fromArray(
			['Liquor', 'store', 'counting', 'pennies']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'in', 'motion', ',', 'do', 'you', 'savvy', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'exhume', '‘cause', 'it', 'relax', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Watch', 'you', 'think', '‘bout', 'that', '?', 'Don’t', 'fight', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Smell', 'me', 'though', ',', 'fucker', 'quiet']),
			_elm_lang$core$Native_List.fromArray(
			['Cyclone', 'in', 'a', 'gortex', 'shell']),
			_elm_lang$core$Native_List.fromArray(
			['Audio', 'input', 'for', 'my', 'spell']),
			_elm_lang$core$Native_List.fromArray(
			['Show', 'up', 'for', 'what', '?', 'This', 'cig’s', 'too', 'plush']),
			_elm_lang$core$Native_List.fromArray(
			['Long', 'as', 'my', 'smokescreen’s', 'holding', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hold', 'this', 'down', 'like', 'high', 'contrast']),
			_elm_lang$core$Native_List.fromArray(
			['Stills', 'taken', 'from', 'shade', 'on', 'flash']),
			_elm_lang$core$Native_List.fromArray(
			['I’m', 'so', 'shade', 'tree', 'it', 'makes', 'me', 'laugh']),
			_elm_lang$core$Native_List.fromArray(
			['Every', 'time', 'you', 'reply', 'that’s', 'fine']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Lawn', 'glad', 'stretch', '\'til', 'it', 'sag', 'like', 'breast']),
			_elm_lang$core$Native_List.fromArray(
			['Off', 'fat', 'fucks', ',', 'stressed', '‘cause', 'they', 'can’t', 'compress']),
			_elm_lang$core$Native_List.fromArray(
			['Extra', 'bump', 'this', 'shit', 'is', 'sex', ',', 'decrepit', 'sex']),
			_elm_lang$core$Native_List.fromArray(
			['Shit', ',', 'I', 'got', 'something', 'for', 'this', 'orchids']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'know', 'trash', ',', 'we', 'know', 'clean', 'don’t', 'last']),
			_elm_lang$core$Native_List.fromArray(
			['Never', 'last', 'when', 'we', 'load', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'upload', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Face', 'down', ',', 'trash', 'begets', 'trash']),
			_elm_lang$core$Native_List.fromArray(
			['Single', 'strike']),
			_elm_lang$core$Native_List.fromArray(
			[',']),
			_elm_lang$core$Native_List.fromArray(
			['cadence', 'slip']),
			_elm_lang$core$Native_List.fromArray(
			['Once', 'I\'ll', 'make', 'you', 'my', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['We', 'don\'t', 'want', ',', 'we', 'take', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Hella', 'zeros', 'life', 'elixir', 'drenched']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'need', 'is', 'my', 'fix']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'your', 'idols', ',', 'suck', 'my', 'dick']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Five', 'rings', 'on', 'my', 'hand']),
			_elm_lang$core$Native_List.fromArray(
			['Faces', 'gag']),
			_elm_lang$core$Native_List.fromArray(
			['Where', 'the', 'fuck\'s', 'my', 'true', 'ones', 'at', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Wavin\'', 'high', 'burnin\'', 'freak', 'fuck', 'flags']),
			_elm_lang$core$Native_List.fromArray(
			['Takes', 'one', 'to', 'no', 'one', 'knows', 'how', 'fucked', 'I', 'am']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'I', 'showed', '\'em', ',', 'they\'d', 'just', 'run', 'like', 'hoes']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'these', 'pussies', 'on', 'hella', 'zeros']),
			_elm_lang$core$Native_List.fromArray(
			['Two', 'heavens', 'is', 'all', 'I', 'know']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Pressin\'', 'down', 'the', 'pillow', '\'til', 'I', 'can\'t', 'hear', 'you', 'breathin\'']),
			_elm_lang$core$Native_List.fromArray(
			['For', 'no', 'reason']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'on', 'my', 'way', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Five', 'rings', 'on', 'my', 'hand']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'smoking', 'cigarettes', 'in', 'the', 'shower;', 'when', 'they', 'get', 'wet', 'I', 'just', 'light', 'another']),
			_elm_lang$core$Native_List.fromArray(
			['Fatal', ',', 'cardiac', 'over', 'cancer', ',', 'don\'t', 'gimme', 'no', 'suffer']),
			_elm_lang$core$Native_List.fromArray(
			['Steal', 'me', 'over', 'feel', 'me', 'linger', ',', 'until', 'I\'m', 'six', 'under']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'a', 'fucking', 'thing', 'sacred', ',', 'when', 'I', 'get', 'naked']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'lighting', 'up', 'like', 'Vegas']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'sevens', 'king', 'of', 'pentacles']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'chaining', 'like', 'it\'s', 'money', ',', 'dirty', 'money', ',', 'surgeons', 'general']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'if', 'my', 'flesh', 'keeps', 'me', 'prisoner']),
			_elm_lang$core$Native_List.fromArray(
			['As', 'if']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'been', 'spinning', 'chambers', 'since', 'the', 'day', 'I', 'was', 'born']),
			_elm_lang$core$Native_List.fromArray(
			['Like', ',', 'what\'s', 'it', 'all', 'for', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Like', ',', 'why', 'the', 'fuck', 'not', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'if', 'I', 'don\'t', 'get', 'off', 'I', 'don\'t', 'know', 'how', 'to', 'be', 'caught']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'off', 'at', 'all', 'costs']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'pah', 'pow']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'fuck', 'you', 'off', 'at', 'no', 'cost']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'pah', 'pow']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'turned', 'off', 'won\'t', 'be', 'back', 'soon']),
			_elm_lang$core$Native_List.fromArray(
			['Look', 'up', 'see', 'my', 'nuts', 'slap', 'the', 'moon']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'turned', 'off', 'like', 'a', 'myth']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'look', 'me', 'up', ',', 'I', 'don\'t', 'exist']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'spin', 'the', 'chamber', '\'tween', 'my', 'lips']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'pull', 'the', 'trigger', 'like', 'a', 'giff']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'get', 'hit', ',', 'I\'ve', 'never', 'lost']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'a', 'rumor', ',', 'I\'m', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'footprint', 'precedes', 'me', 'follow', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'all', 'the', 'way', 'over', 'my', 'species']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'footprint', 'so', 'dropped', 'it\'s', 'bottomless']),
			_elm_lang$core$Native_List.fromArray(
			['Species', 'call', 'my', 'redwings', 'apocalypse']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'want', 'this', 'bitch', 'I', 'drop', 'a', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Snuff', 'your', 'bloodclot', 'metropolis']),
			_elm_lang$core$Native_List.fromArray(
			['Trail', 'of', 'anonymous', 'casualties']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'boom', ',', 'mastery']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ve', 'been', 'over', 'that', 'glass', 'house']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'my', 'windows', 'blacked', 'out']),
			_elm_lang$core$Native_List.fromArray(
			['Straight', 'jacked', 'up', ',', 'the', 'fuck', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Guts', 'up', 'man', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'man', 'stand', 'down']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'with', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'drop', 'liquid']),
			_elm_lang$core$Native_List.fromArray(
			['Red', 'light', 'district']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'be', 'finished']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'never', 'started']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'run', 'for', 'martyr']),
			_elm_lang$core$Native_List.fromArray(
			['While', 'I\'d', 'push', 'harsher']),
			_elm_lang$core$Native_List.fromArray(
			['Lose', 'it', 'more', 'further']),
			_elm_lang$core$Native_List.fromArray(
			['Lose', 'it', 'more', 'nerder']),
			_elm_lang$core$Native_List.fromArray(
			['Ha', ',', 'ha', ',', 'ha', ',', 'ha', ',', 'ha']),
			_elm_lang$core$Native_List.fromArray(
			['Boom', 'boom', 'boom', 'boom']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'off', 'at', 'all', 'costs']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'pah', 'pow']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'fuck', 'you', 'off', 'at', 'no', 'cost']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'pah', 'pow']),
			_elm_lang$core$Native_List.fromArray(
			['Take', 'off', 'my', 'shirt', 'cause', 'it', 'hurt', ',', 'form', 'of', 'murder']),
			_elm_lang$core$Native_List.fromArray(
			['Art', 'of', 'indifference', 'trump', 'consequences']),
			_elm_lang$core$Native_List.fromArray(
			['Like', 'first', 'off', ',', 'I\'m', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'pah', 'pow']),
			_elm_lang$core$Native_List.fromArray(
			['Trust', 'me', 'you', 'can\'t', 'trust', 'me', 'try', 'trust', 'me', 'you\'ll', 'see', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'I', 'see', 'you', 'through', 'the', 'ringer', ',', 'my', 'ringer', 'catch', 'deuce', 'deuce']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'repeat', 'like', 'pi', 'my', 'ringer', 'catch', 'deuce', 'deuce', 'divided', 'seven', 'times']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'lead', 'you', 'to', 'where', 'am', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'off', 'at', 'all', 'costs']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'pah', 'pow']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'fuck', 'you', 'off', 'at', 'no', 'cost']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'turned', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Pah', 'pow', 'pah', 'pow']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'propa-voila-shadow-ganda']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shadow', 'stigmata', 'offer']),
			_elm_lang$core$Native_List.fromArray(
			['Left', 'right', 'up', ',', 'step', 'right', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'your', 'crisis', ',', 'why', 'bother']),
			_elm_lang$core$Native_List.fromArray(
			['Quack', 'like', 'priest', ',', 'win', 'five', 'dollar']),
			_elm_lang$core$Native_List.fromArray(
			['Melanin', 'pewter', 'cellophane']),
			_elm_lang$core$Native_List.fromArray(
			['Arms', 'long', 'as', 'their', 'legs']),
			_elm_lang$core$Native_List.fromArray(
			['Even', 'the', 'greys', 'can\'t', 'oh-oh-oh-oh-oh']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Maybe', 'I', 'belong', 'to', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'sure', 'you', 'want', 'me', 'to']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shadow\'s', 'on', 'to', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Voila-voila']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'can\'t', 'make', 'you', 'like', 'voila']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'make', 'you', 'love', 'voila']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'you', 'make', 'love', 'to', 'voila', 'holes']),
			_elm_lang$core$Native_List.fromArray(
			['Make', 'you', 'replace', 'your', 'faith', 'with', 'voila', ',']),
			_elm_lang$core$Native_List.fromArray(
			['hotel']),
			_elm_lang$core$Native_List.fromArray(
			['New', 'necklace', ',', 'new', 'temple', ',', 'new', 'help', ',', 'help']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don\'t', 'talk', 'to', 'the', 'help', ',', 'help']),
			_elm_lang$core$Native_List.fromArray(
			['Who\'s', 'voila', 'suits', 'who', 'too', 'well']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'talk', 'to', 'the', 'help', ',', 'help']),
			_elm_lang$core$Native_List.fromArray(
			['Oh-oh-oh-oh-oh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'propa-voila-shadow-ganda']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shadow', 'stigmata', 'offer']),
			_elm_lang$core$Native_List.fromArray(
			['Left', 'right', 'up', ',', 'step', 'right', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'your', 'crisis', ',', 'why', 'bother']),
			_elm_lang$core$Native_List.fromArray(
			['Quack', 'like', 'priest', ',', 'win', 'five', 'dollar']),
			_elm_lang$core$Native_List.fromArray(
			['Melanin', 'pewter', 'cellophane']),
			_elm_lang$core$Native_List.fromArray(
			['Arms', 'long', 'as', 'their', 'legs']),
			_elm_lang$core$Native_List.fromArray(
			['Even', 'the', 'greys', 'can\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'your', 'lucky', 'day', ',', 'my', 'shadow', 'bernays', 'voila']),
			_elm_lang$core$Native_List.fromArray(
			['Aren\'t', 'you', 'lucky', ',', 'fuck', 'my', 'shadow', 'gush', 'voila']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'a', 'lucky', 'spin', ',', 'my', 'shadow', 'spam', 'voila']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shadow', 'slither', ',', 'my', 'shadow', 'whisper', 'voila']),
			_elm_lang$core$Native_List.fromArray(
			['Live', 'in', 'my', 'shadow', 'while', 'you', 'wait', 'to', 'gasp', 'in', 'space']),
			_elm_lang$core$Native_List.fromArray(
			['Gasp', 'in', 'my', 'shadow', 'like', 'everything', 'that', 'lives']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shadow', 'incubate', 'everything', 'that', 'is']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shadow', 'cast', 'voila', 'through', 'every', 'one', 'of', 'its', 'kids']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'don\'t', 'talk', 'to', 'the', 'help', ',', 'help']),
			_elm_lang$core$Native_List.fromArray(
			['Who\'s', 'voila', 'suits', 'who', 'too', 'well']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'talk', 'to', 'the', 'help', ',', 'help']),
			_elm_lang$core$Native_List.fromArray(
			['Oh-oh-oh-oh-oh']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'propa-voila-shadow-ganda']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'shadow', 'stigmata', 'offer']),
			_elm_lang$core$Native_List.fromArray(
			['Left', 'right', 'up', ',', 'step', 'right', 'up']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'your', 'crisis', ',', 'why', 'bother']),
			_elm_lang$core$Native_List.fromArray(
			['Quack', 'like', 'priest', ',', 'win', 'five', 'dollar']),
			_elm_lang$core$Native_List.fromArray(
			['Melanin', 'pewter', 'cellophane']),
			_elm_lang$core$Native_List.fromArray(
			['Arms', 'long', 'as', 'their', 'legs']),
			_elm_lang$core$Native_List.fromArray(
			['Even', 'the', 'greys', 'can\'t']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Voila']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'game', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'ruin', 'you', ',', 'fucker', ',', 'try', 'your', 'luck']),
			_elm_lang$core$Native_List.fromArray(
			['Luck\'s', 'on', 'your', 'side', ',', 'you\'re', 'feeling', 'yourself', ',', 'huh', ',', 'fucker', '?']),
			_elm_lang$core$Native_List.fromArray(
			['That', 'about', 'enough']),
			_elm_lang$core$Native_List.fromArray(
			['Well', ',', 'guess', 'what', 'fucker']),
			_elm_lang$core$Native_List.fromArray(
			['Fucker', ',', 'try', 'and', 'game', 'me', ',', 'then']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'end', 'of', 'your', 'line']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'need', 'an', 'offering', ',', 'you\'ll', 'do', 'just', 'fine']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'Type', 'A', 'hell']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'not', 'about', 'you', ',', 'fucker']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'make', 'me', 'make', 'this', 'about', 'you', ',', 'fucker']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me', ',', 'I', 'dare', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me', ',', 'how', 'dare', 'you', '?']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'stand', 'through', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Obviously']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'laugh', 'when', 'you', 'ask', 'if', 'you\'re', 'under', 'my', 'spell']),
			_elm_lang$core$Native_List.fromArray(
			['Obviously']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'guide', 'your', 'demise', 'like', 'funeral', 'sails']),
			_elm_lang$core$Native_List.fromArray(
			['Obviously']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'touch', 'tied', 'to', 'strings', 'that', 'steer', 'my', 'figures', 'inside', 'out', 'their', 'wax']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'pour', ',', 'I', 'swill', ',', 'you\'re', 'false', 'like', 'tears', ',', 'priceless', 'to', 'feel', 'my', 'subjects', 'crack']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me', ',', 'I\'ll', 'redirect']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'fucker', 'tame', 'me', 'yet']),
			_elm_lang$core$Native_List.fromArray(
			['Fit', 'to', 'try', 'and', 'tame', 'me', ',', 'be', 'my', 'guest']),
			_elm_lang$core$Native_List.fromArray(
			['Just', 'try', 'and', 'game', 'me', ',', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me', ',', 'I\'m', 'like', ',', 'So', ',', 'anyway']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'game', 'me', ',', 'I\'m', 'like', ',', 'No', ',', 'not', 'today']),
			_elm_lang$core$Native_List.fromArray(
			['This', 'bitch']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['I\'ll', 'make', 'you', 'mine']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'a', 'bitch', 'gotta', 'lie', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', ',', 'if', 'you\'re', 'so', 'sure']),
			_elm_lang$core$Native_List.fromArray(
			['Ain\'t', 'dead', 'or', 'alive', ',', 'ain\'t', 'wore', 'this', 'floor']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'floor', 'tremble']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'voice', ',', 'silencer']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'make', 'your', 'choice']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'make', 'no', 'excuses', ',', 'just', 'fucking', 'noise']),
			_elm_lang$core$Native_List.fromArray(
			['Try', 'and', 'tame', 'me', ',', 'maybe', 'not', 'up', 'to', 'you', 'because']),
			_elm_lang$core$Native_List.fromArray(
			['Can\'t', 'tame', 'me', 'I\'m', 'proof', 'of']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'you', 'gonna', 'do', ',', 'scream', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'out', 'in', 'tune', 'out', 'my', 'grooves', ',', 'uhh', ',', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'lose', 'my', 'form', ',', 'I\'m', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'out', 'in', 'tune', 'out', 'my', 'grooves', ',', 'uhh', ',', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'lose', 'my', 'form', ',', 'I\'m', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['Influence', 'executed']),
			_elm_lang$core$Native_List.fromArray(
			['Mass', 'execution', ',', 'rapid', 'improvements']),
			_elm_lang$core$Native_List.fromArray(
			['Toothless', 'accent', ',', 'drawl', 'of', 'a', 'shaman']),
			_elm_lang$core$Native_List.fromArray(
			['Putrid', 'fanatic', 'ride', 'out', 'like', 'famine']),
			_elm_lang$core$Native_List.fromArray(
			['Luminescent', 'rattles', ',', 'thunder', 'in', 'vials']),
			_elm_lang$core$Native_List.fromArray(
			['Choose', 'your', 'battles', 'or', 'end', 'in', 'piles']),
			_elm_lang$core$Native_List.fromArray(
			['Braided', 'fumigation', ',', 'destitution', 'ramped']),
			_elm_lang$core$Native_List.fromArray(
			['Desiccated', 'satyr', 'make', 'a', 'massacre', 'dance']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'out', 'in', 'tune', 'out', 'my', 'grooves', ',', 'uhh', ',', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'lose', 'my', 'form', ',', 'I\'m', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['Psychotropic', 'steel', 'trap', ',', 'rock', 'a', 'beat', 'up', 'Bears', 'hat']),
			_elm_lang$core$Native_List.fromArray(
			['Naw', 'man', ',', 'I', 'don’t', 'feel', 'this', 'and', 'I', 'shit', 'on', 'your', 'guilt', 'trip']),
			_elm_lang$core$Native_List.fromArray(
			['Then', 'extinguish', 'your', 'illness', 'like', 'seven', 'grams', 'of', 'thorazine']),
			_elm_lang$core$Native_List.fromArray(
			['Tyrannic', 'authority', 'cleansed', 'by', 'your', 'aggressor']),
			_elm_lang$core$Native_List.fromArray(
			['Inhuman', 'elitist', 'decline', 'your', 'surrender']),
			_elm_lang$core$Native_List.fromArray(
			['Sign', 'of', 'the', 'freak', 'thriving', 'on', 'a', 'bender']),
			_elm_lang$core$Native_List.fromArray(
			['Forbidden', 'discipline', ',', 'all', 'lines', 'disconnected']),
			_elm_lang$core$Native_List.fromArray(
			['Vacated', 'premises', 'occupied', 'by', 'my', 'death', 'wish']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'out', 'in', 'tune', 'out', 'my', 'grooves', ',', 'uhh', ',', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'lose', 'my', 'form', ',', 'I\'m', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'out', 'in', 'tune', 'out', 'my', 'grooves', ',', 'uhh', ',', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'lose', 'my', 'form', ',', 'I\'m', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['Luster', 'of', 'entrails', 'stacked', 'and', 'slung']),
			_elm_lang$core$Native_List.fromArray(
			['Under', 'cement', 'veils', 'my', 'traffic', 'hums']),
			_elm_lang$core$Native_List.fromArray(
			['Compulsion', 'on', 'risers', ',', 'your', 'stranglers', 'knuckles']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'temples', 'buckle']),
			_elm_lang$core$Native_List.fromArray(
			['Decompression', 'silo', 'inside', 'this', 'muzzle']),
			_elm_lang$core$Native_List.fromArray(
			['Overdriven', 'rituals', 'on', 'my', 'torso', ',', 'my', 'infernal', 'boro']),
			_elm_lang$core$Native_List.fromArray(
			['If', 'I', 'went', 'soft', 'Glock', 'to', 'my', 'navel']),
			_elm_lang$core$Native_List.fromArray(
			['Flaws', 'get', 'knocked', 'off', ',', 'flaws', 'get', 'knocked', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'out', 'in', 'tune', 'out', 'my', 'grooves', ',', 'uhh', ',', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'lose', 'my', 'form', ',', 'I\'m', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'out', 'in', 'tune', 'out', 'my', 'grooves', ',', 'uhh', ',', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'I', 'do', 'is', 'lose', 'my', 'form', ',', 'I\'m', 'warping']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'off', 'and', 'rid', 'of', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'nail', 'the', 'coffin', 'lid', 'on', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['Whatchyou', 'want', 'some', '?', 'Don\'t', 'want', 'none']),
			_elm_lang$core$Native_List.fromArray(
			['Your', 'number', 'one', 'is', 'my', 'two', 'dollar', 'whore']),
			_elm_lang$core$Native_List.fromArray(
			['So', 'whatchyou', 'bought', 'that', 'for', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Why', 'you', 'wanna', 'rock', 'that', 'for', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'here', ',', 'drop', 'much', 'more']),
			_elm_lang$core$Native_List.fromArray(
			['Slow', 'down', ',', 'turbo', ',', 'look', 'down', ',', 'vertigo']),
			_elm_lang$core$Native_List.fromArray(
			['Turn', 'around;', 'where\'d', 'she', 'go', '?']),
			_elm_lang$core$Native_List.fromArray(
			['Wah', 'tried', 'to', 'slip', 'alpha', 'bone', 'game']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['Knew', 'you', 'had', 'it', 'comin\'', ',', 'grabbed', 'your', 'plum', 'and', 'your', 'gomez']),
			_elm_lang$core$Native_List.fromArray(
			['Even', 'though', 'I', 'said', 'don\'t', 'go', 'there', ',', 'that\'s', 'ho', 'flair']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'be', 'a', 'bitch', 'and', 'you', 'know', 'that\'s', 'not', 'even', 'on', 'the', 'low', ',', 'can\'t', 'see', 'check', 'the', 'kodak']),
			_elm_lang$core$Native_List.fromArray(
			['Who', ',', 'me', '?', 'Yeah', ',', 'you', 'feel', 'me', 'climbin\'', 'out', 'your', 'stomach']),
			_elm_lang$core$Native_List.fromArray(
			['Gettin\'', 'queazy', ',', 'easy', 'does', 'it', 'can\'t', 'help', 'yourself', ',', 'suck', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Wah']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'off', 'and', 'rid', 'of', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'nail', 'the', 'coffin', 'lid', 'on', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'get', 'off', 'and', 'rid', 'of', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'nail', 'the', 'coffin', 'lid', 'on', '\'em']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['Collar', 'popper', ',', 'hollar', 'but', 'all', 'I', 'hear\'s', 'nada']),
			_elm_lang$core$Native_List.fromArray(
			['All', 'this', 'talk', 'about', 'dollars', 'need', 'to', 'stop', 'real', 'quick']),
			_elm_lang$core$Native_List.fromArray(
			['Real', 'shit', 'ain\'t', 'prada', ',', 'you', 'lost', 'it', ',', 'you', 'slipped']),
			_elm_lang$core$Native_List.fromArray(
			['Musta', 'forgot', 'who', 'this']),
			_elm_lang$core$Native_List.fromArray(
			['Whammy']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'reaction', 'I-man', 'the', 'cause']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'buyin\'', 'land', 'and', 'gun', 'while', 'you\'re', 'at', 'the', 'mall']),
			_elm_lang$core$Native_List.fromArray(
			['Big', 'man', 'is', 'small', 'man', 'with', 'a', 'tall', 'can', 'of', 'flaws']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'head', 'in', 'my', 'hand', ',', 'my', 'hand', 'in', 'my']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['W-w-w-w-w-w-whammy']),
			_elm_lang$core$Native_List.fromArray(
			['Hand', 'yourself', 'over', ',', 'remain', 'calm', ',', 'I', 'only', 'plan', 'to', 'steal']),
			_elm_lang$core$Native_List.fromArray(
			['Whatever', 'I', 'want']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'head', 'in', 'furnace']),
			_elm_lang$core$Native_List.fromArray(
			['Cream']),
			_elm_lang$core$Native_List.fromArray(
			['Proof', 'of', 'purchase']),
			_elm_lang$core$Native_List.fromArray(
			['Ghost', 'in', 'machine']),
			_elm_lang$core$Native_List.fromArray(
			['Laced']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'I', 'spit', 'on', 'your', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['You\'ll', 'take', 'what', 'you', 'can', 'get']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'once', 'have', 'I', 'been', 'had', 'yet']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'skull', 'in', 'nylon', ',', 'my', 'throat', 'like', 'pipe', 'bomb']),
			_elm_lang$core$Native_List.fromArray(
			['Give', 'it', 'give', 'it', 'to', 'me', '\'til', 'you\'re', 'all', 'used', 'up', ',', 'play', 'play']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'forget', 'to', 'fuck', 'off']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'lose', 'it', ',', 'I', 'can\'t', 'remember', 'why']),
			_elm_lang$core$Native_List.fromArray(
			['No', 'agenda', ',', 'still', 'can\'t', 'remember', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Uncross', 'my', 'fingers']),
			_elm_lang$core$Native_List.fromArray(
			['Heard', 'you', 'claim', 'we\'ve', 'met', 'before']),
			_elm_lang$core$Native_List.fromArray(
			['Always', 'forget', 'who', 'they', 'are']),
			_elm_lang$core$Native_List.fromArray(
			['Lay']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'head', 'in', 'furnace']),
			_elm_lang$core$Native_List.fromArray(
			['Cream']),
			_elm_lang$core$Native_List.fromArray(
			['Proof', 'of', 'purchase']),
			_elm_lang$core$Native_List.fromArray(
			['Ghost', 'in', 'machine']),
			_elm_lang$core$Native_List.fromArray(
			['Laced']),
			_elm_lang$core$Native_List.fromArray(
			['When', 'I', 'spit', 'on', 'your', 'face']),
			_elm_lang$core$Native_List.fromArray(
			['You\'ll', 'take', 'what', 'you', 'can', 'get']),
			_elm_lang$core$Native_List.fromArray(
			['Not', 'once']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Lay', ',', 'cream', ',', 'fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Lay', ',', 'cream', ',', 'fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Lay', ',', 'fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Cream', ',', 'fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Lay', ',', 'fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Cream', ',', 'fuck', 'who\'s', 'watching']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'off', 'and', 'you\'ll', 'be', 'alright!']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['Ruthless', 'and', 'free']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Ruthless', 'and', 'free']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'live', 'in', 'hiding']),
			_elm_lang$core$Native_List.fromArray(
			['You\'re', 'climbing', 'the', 'walls', ',', 'no', 'privacy']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'trying', 'to', 'survive', 'but', 'I\'m', 'dying;', 'die', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Blow', 'out', 'the', 'lights', ',', 'take', 'your', 'life']),
			_elm_lang$core$Native_List.fromArray(
			['Ride', 'the', 'falling', 'sky', 'with', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Falling', 'inside', 'of', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suic']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs', 'gone', 'mad']),
			_elm_lang$core$Native_List.fromArray(
			['Above', 'the', 'law', 'in', 'your', 'ass']),
			_elm_lang$core$Native_List.fromArray(
			['Fire', 'trash', 'meltdown', ',', 'I\'m', 'not', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'world', 'of', 'dogs', ',', 'infrared']),
			_elm_lang$core$Native_List.fromArray(
			['Tear', 'me', 'apart', ',', 'left', 'for', 'dead']),
			_elm_lang$core$Native_List.fromArray(
			['But', 'I\'m', 'not', 'dead', 'yet']),
			_elm_lang$core$Native_List.fromArray(
			['Sick', '\'em', ',', 'sick', '\'em', ',', 'yes']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['Ruthless', 'and', 'free']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['Ruthless', 'and', 'free']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide', 'to', 'me']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suicide']),
			_elm_lang$core$Native_List.fromArray(
			['It\'s', 'all', 'suic']),
			_elm_lang$core$Native_List.fromArray(
			['Cut', 'it']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'tell', 'no', 'one', ',', 'no', 'one', 'can', 'know', ',', 'come', 'closer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'almost', 'over', ',', 'lower', 'sinkholer']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'nothing', ',', 'feed', 'me', 'to', 'this', 'world', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['Barely', 'breathing', 'in', 'this', 'world', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['Foam', 'of', 'feral', 'reality', 'forming', 'on', 'mountains', 'of', 'teeth']),
			_elm_lang$core$Native_List.fromArray(
			['Devour', 'the', 'hand', ',', 'spit', 'out', 'the', 'leash']),
			_elm_lang$core$Native_List.fromArray(
			['Crown', 'the', 'beast', ',', 'my', 'throne\'s', 'the', 'street']),
			_elm_lang$core$Native_List.fromArray(
			['Too', 'cold', 'to', 'sleep', ',', 'I', 'kill', 'myself', ',', 'I', 'feel', 'no', 'pain']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'obsolete']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['World', 'of', 'dogs']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'so', 'fuckin\'', 'dark', 'in', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come', 'fuck', 'apart', 'in', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'die', 'in', 'the', 'process']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'die', 'in', 'the', 'process']),
			_elm_lang$core$Native_List.fromArray(
			['Kettle', 'drum', 'roll', 'hard', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'I', 'said', 'fucker', 'don\'t', 'start', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come', 'fuck', 'apart', 'in', 'here', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come', 'fuck', 'apart', 'in', 'here', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'hover', 'above', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Life', 'pulled', 'out', 'your', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'become', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Opening', 'of', 'the', 'mouth']),
			_elm_lang$core$Native_List.fromArray(
			['Unlawful', 'possession']),
			_elm_lang$core$Native_List.fromArray(
			['Jellyfish', 'in', 'cold', 'sweat', 'deep', 'end']),
			_elm_lang$core$Native_List.fromArray(
			['Hollow', 'shell', 'twitch', 'disconnection']),
			_elm_lang$core$Native_List.fromArray(
			['Pupils', 'swell']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'entrance']),
			_elm_lang$core$Native_List.fromArray(
			['Hijacked', 'no', 'questions', 'asked']),
			_elm_lang$core$Native_List.fromArray(
			['Stretch', 'you', 'on', 'like', 'latex', 'mask']),
			_elm_lang$core$Native_List.fromArray(
			['My', 'sigils', 'your', 'epitaph']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come']),
			_elm_lang$core$Native_List.fromArray(
			['fuck', 'apart', 'in', 'here', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come']),
			_elm_lang$core$Native_List.fromArray(
			['fuck', 'apart', 'in', 'here', ',']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'die']),
			_elm_lang$core$Native_List.fromArray(
			['I\'m', 'not', 'you', ',', 'I\'m', 'not', 'you', ',', 'I\'m', 'not', 'you']),
			_elm_lang$core$Native_List.fromArray(
			['Fear', 'you', 'wear', 'it', 'well', 'Mademoiselle']),
			_elm_lang$core$Native_List.fromArray(
			['Here\'s', 'to', 'your', 'destiny']),
			_elm_lang$core$Native_List.fromArray(
			['Hysterics', 'scream', 'help']),
			_elm_lang$core$Native_List.fromArray(
			['Don\'t', 'worry', ',', 'in', 'a', 'few', 'you\'ll', 'all', 'be', 'somewhere', 'else']),
			_elm_lang$core$Native_List.fromArray(
			['Prepare', 'yourselves']),
			_elm_lang$core$Native_List.fromArray(
			['Freelance', 'motherfucker']),
			_elm_lang$core$Native_List.fromArray(
			['Get', 'so', 'fuckin', 'dark', 'in', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come', 'fuck', 'apart', 'in', 'here']),
			_elm_lang$core$Native_List.fromArray(
			['I', 'die', 'in', 'the', 'process']),
			_elm_lang$core$Native_List.fromArray(
			['You', 'die', 'in', 'the', 'process']),
			_elm_lang$core$Native_List.fromArray(
			['Kettle', 'drum', 'roll', 'hard', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Fuck', 'I', 'said', 'fucker', 'don\'t', 'start', 'shit']),
			_elm_lang$core$Native_List.fromArray(
			['Emerald', 'tablet']),
			_elm_lang$core$Native_List.fromArray(
			['apartment', 'toxic']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come', 'fuck', 'apart', 'in', 'here', ',', 'I']),
			_elm_lang$core$Native_List.fromArray(
			['Come', 'come', 'fuck', 'apart', 'in', 'here', ',', 'I'])
		]));

var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$none;
};
var _user$project$Main$lyricLine = function (line) {
	return A2(
		_elm_lang$html$Html$p,
		_elm_lang$core$Native_List.fromArray(
			[]),
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html$text(line)
			]));
};
var _user$project$Main_ops = _user$project$Main_ops || {};
_user$project$Main_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});
var _user$project$Main$addAppropriateSpace = function (s) {
	var _p0 = s;
	switch (_p0) {
		case ',':
			return ',';
		case '?':
			return '?';
		default:
			return A2(
				_elm_lang$core$String$cons,
				_elm_lang$core$Native_Utils.chr(' '),
				s);
	}
};
var _user$project$Main$joinTokens = function (_p1) {
	return _elm_lang$core$String$trim(
		A2(
			_elm_lang$core$String$join,
			'',
			A2(_elm_lang$core$List$map, _user$project$Main$addAppropriateSpace, _p1)));
};
var _user$project$Main$generateLine = F3(
	function (past, seed, markov) {
		generateLine:
		while (true) {
			var _p2 = function () {
				var _p3 = _elm_lang$core$List$head(past);
				if (_p3.ctor === 'Nothing') {
					return A2(
						_mgold$elm_random_pcg$Random_Pcg$step,
						_janiczek$elm_markov$Markov$firstState(markov),
						seed);
				} else {
					return A2(
						_mgold$elm_random_pcg$Random_Pcg$step,
						A2(_janiczek$elm_markov$Markov$nextState, markov, _p3._0),
						seed);
				}
			}();
			var nextWord = _p2._0;
			var nextSeed = _p2._1;
			var _p4 = nextWord;
			if (_p4.ctor === 'Nothing') {
				return {
					ctor: '_Tuple2',
					_0: nextSeed,
					_1: _elm_lang$core$List$reverse(past)
				};
			} else {
				var _p5 = _p4._0;
				if (_elm_lang$core$Native_Utils.eq(_p5, ',')) {
					if (_elm_lang$core$Native_Utils.cmp(
						_elm_lang$core$List$length(past),
						12) > 0) {
						return {
							ctor: '_Tuple2',
							_0: nextSeed,
							_1: _elm_lang$core$List$reverse(past)
						};
					} else {
						if (_elm_lang$core$Native_Utils.eq(
							_elm_lang$core$List$length(past),
							0)) {
							var _v3 = past,
								_v4 = nextSeed,
								_v5 = markov;
							past = _v3;
							seed = _v4;
							markov = _v5;
							continue generateLine;
						} else {
							var _v6 = A2(_elm_lang$core$List_ops['::'], _p5, past),
								_v7 = nextSeed,
								_v8 = markov;
							past = _v6;
							seed = _v7;
							markov = _v8;
							continue generateLine;
						}
					}
				} else {
					var _v9 = A2(_elm_lang$core$List_ops['::'], _p5, past),
						_v10 = nextSeed,
						_v11 = markov;
					past = _v9;
					seed = _v10;
					markov = _v11;
					continue generateLine;
				}
			}
		}
	});
var _user$project$Main$generate = F3(
	function (n, seed, markov) {
		var _p6 = n;
		if (_p6 === 0) {
			return {
				ctor: '_Tuple2',
				_0: seed,
				_1: _elm_lang$core$Native_List.fromArray(
					[])
			};
		} else {
			var _p7 = A3(
				_user$project$Main$generateLine,
				_elm_lang$core$Native_List.fromArray(
					[]),
				seed,
				markov);
			var newSeed = _p7._0;
			var nextLine = _p7._1;
			var _p8 = A3(_user$project$Main$generate, n - 1, newSeed, markov);
			var finalSeed = _p8._0;
			var restOfLines = _p8._1;
			return {
				ctor: '_Tuple2',
				_0: finalSeed,
				_1: _elm_lang$core$List$reverse(
					A2(
						_elm_lang$core$List_ops['::'],
						_user$project$Main$joinTokens(nextLine),
						restOfLines))
			};
		}
	});
var _user$project$Main$updateModel = F2(
	function (msg, model) {
		var _p9 = msg;
		var _p10 = A3(_user$project$Main$generate, _p9._0, model.seed, model.markov);
		var newSeed = _p10._0;
		var newLyric = _p10._1;
		return _elm_lang$core$Native_Utils.update(
			model,
			{lyric: newLyric, seed: newSeed});
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		return {
			ctor: '_Tuple2',
			_0: A2(_user$project$Main$updateModel, msg, model),
			_1: _elm_lang$core$Platform_Cmd$none
		};
	});
var _user$project$Main$init = F2(
	function (sm, flags) {
		var _p11 = A3(
			_user$project$Main$generate,
			20,
			A2(_elm_lang$core$Basics$uncurry, _mgold$elm_random_pcg$Random_Pcg$initialSeed2, flags.randomSeed),
			sm);
		var seed = _p11._0;
		var initialLyric = _p11._1;
		return {
			ctor: '_Tuple2',
			_0: {seed: seed, markov: sm, lyric: initialLyric},
			_1: _elm_lang$core$Platform_Cmd$none
		};
	});
var _user$project$Main$randomSeed = _elm_lang$core$Native_Platform.incomingPort(
	'randomSeed',
	A3(
		_elm_lang$core$Json_Decode$tuple2,
		F2(
			function (x1, x2) {
				return {ctor: '_Tuple2', _0: x1, _1: x2};
			}),
		_elm_lang$core$Json_Decode$int,
		_elm_lang$core$Json_Decode$int));
var _user$project$Main$Model = F3(
	function (a, b, c) {
		return {seed: a, markov: b, lyric: c};
	});
var _user$project$Main$Flags = function (a) {
	return {randomSeed: a};
};
var _user$project$Main$Generate = function (a) {
	return {ctor: 'Generate', _0: a};
};
var _user$project$Main$view = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		_elm_lang$core$Native_List.fromArray(
			[
				_elm_lang$html$Html_Attributes$class('main'),
				_elm_lang$html$Html_Attributes$style(
				_elm_lang$core$Native_List.fromArray(
					[
						A2(_user$project$Main_ops['=>'], 'background-color', 'black'),
						A2(_user$project$Main_ops['=>'], 'color', 'white'),
						A2(_user$project$Main_ops['=>'], 'width', '100%'),
						A2(_user$project$Main_ops['=>'], 'height', '100%'),
						A2(_user$project$Main_ops['=>'], 'margin', '0'),
						A2(_user$project$Main_ops['=>'], 'padding', '2em'),
						A2(_user$project$Main_ops['=>'], 'font-family', 'Courier New, monospace'),
						A2(_user$project$Main_ops['=>'], 'text-align', 'center')
					]))
			]),
		A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Native_List.fromArray(
				[
					A2(
					_elm_lang$html$Html$h1,
					_elm_lang$core$Native_List.fromArray(
						[]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('DEATH GRIPSUM')
						])),
					A2(
					_elm_lang$html$Html$button,
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html_Events$onClick(
							_user$project$Main$Generate(20))
						]),
					_elm_lang$core$Native_List.fromArray(
						[
							_elm_lang$html$Html$text('Generate')
						]))
				]),
			A2(_elm_lang$core$List$map, _user$project$Main$lyricLine, model.lyric)));
};
var _user$project$Main$main = {
	main: _elm_lang$html$Html_App$programWithFlags(
		{
			init: _user$project$Main$init(_user$project$DeathGripsum$lyricMarkov),
			view: _user$project$Main$view,
			subscriptions: _user$project$Main$subscriptions,
			update: _user$project$Main$update
		}),
	flags: A2(
		_elm_lang$core$Json_Decode$andThen,
		A2(
			_elm_lang$core$Json_Decode_ops[':='],
			'randomSeed',
			A3(
				_elm_lang$core$Json_Decode$tuple2,
				F2(
					function (x1, x2) {
						return {ctor: '_Tuple2', _0: x1, _1: x2};
					}),
				_elm_lang$core$Json_Decode$int,
				_elm_lang$core$Json_Decode$int)),
		function (randomSeed) {
			return _elm_lang$core$Json_Decode$succeed(
				{randomSeed: randomSeed});
		})
};

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
_elm_lang$core$Native_Platform.addPublicModule(Elm['Main'], 'Main', typeof _user$project$Main$main === 'undefined' ? null : _user$project$Main$main);

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

