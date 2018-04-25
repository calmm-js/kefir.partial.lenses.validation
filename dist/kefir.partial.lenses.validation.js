(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('partial.lenses.validation'), require('kefir.combines')) :
	typeof define === 'function' && define.amd ? define(['exports', 'partial.lenses.validation', 'kefir.combines'], factory) :
	(factory((global.Kefir = global.Kefir || {}, global.Kefir.partial = global.Kefir.partial || {}, global.Kefir.partial.lenses = global.Kefir.partial.lenses || {}, global.Kefir.partial.lenses.validation = {}),global.partial.lenses.validation,global.kefir.combines));
}(this, (function (exports,V,kefir_combines) { 'use strict';

	// THIS FILE IS GENERATED

	var accept = /*#__PURE__*/kefir_combines.liftFOF(V.accept);
	var acceptAs = /*#__PURE__*/kefir_combines.liftFOF(V.acceptAs);
	var acceptWith = /*#__PURE__*/kefir_combines.liftFOF(V.acceptWith);
	var accepts = /*#__PURE__*/kefir_combines.liftFOF(V.accepts);
	var acceptsAsync = /*#__PURE__*/kefir_combines.liftFOF(V.acceptsAsync);
	var and = /*#__PURE__*/kefir_combines.liftFOF(V.and);
	var args = /*#__PURE__*/kefir_combines.liftFOF(V.args);
	var arrayId = /*#__PURE__*/kefir_combines.liftFOF(V.arrayId);
	var arrayIx = /*#__PURE__*/kefir_combines.liftFOF(V.arrayIx);
	var both = /*#__PURE__*/kefir_combines.liftFOF(V.both);
	var cases = /*#__PURE__*/kefir_combines.liftFOF(V.cases);
	var casesOf = /*#__PURE__*/kefir_combines.liftFOF(V.casesOf);
	var choose = /*#__PURE__*/kefir_combines.liftFOF(V.choose);
	var dependentFn = /*#__PURE__*/kefir_combines.liftFOF(V.dependentFn);
	var either = /*#__PURE__*/kefir_combines.liftFOF(V.either);
	var errors = /*#__PURE__*/kefir_combines.liftFOF(V.errors);
	var errorsAsync = /*#__PURE__*/kefir_combines.liftFOF(V.errorsAsync);
	var freeFn = /*#__PURE__*/kefir_combines.liftFOF(V.freeFn);
	var ifElse = /*#__PURE__*/kefir_combines.liftFOF(V.ifElse);
	var keep = /*#__PURE__*/kefir_combines.liftFOF(V.keep);
	var lazy = /*#__PURE__*/kefir_combines.liftFOF(V.lazy);
	var modifyAfter = /*#__PURE__*/kefir_combines.liftFOF(V.modifyAfter);
	var modifyError = /*#__PURE__*/kefir_combines.liftFOF(V.modifyError);
	var not = /*#__PURE__*/kefir_combines.liftFOF(V.not);
	var optional = /*#__PURE__*/kefir_combines.liftFOF(V.optional);
	var or = /*#__PURE__*/kefir_combines.liftFOF(V.or);
	var promote = /*#__PURE__*/kefir_combines.liftFOF(V.promote);
	var props = /*#__PURE__*/kefir_combines.liftFOF(V.props);
	var propsOr = /*#__PURE__*/kefir_combines.liftFOF(V.propsOr);
	var reject = /*#__PURE__*/kefir_combines.liftFOF(V.reject);
	var rejectAs = /*#__PURE__*/kefir_combines.liftFOF(V.rejectAs);
	var rejectWith = /*#__PURE__*/kefir_combines.liftFOF(V.rejectWith);
	var remove = /*#__PURE__*/kefir_combines.liftFOF(V.remove);
	var removeAfter = /*#__PURE__*/kefir_combines.liftFOF(V.removeAfter);
	var run = /*#__PURE__*/kefir_combines.liftFOF(V.run);
	var setAfter = /*#__PURE__*/kefir_combines.liftFOF(V.setAfter);
	var setError = /*#__PURE__*/kefir_combines.liftFOF(V.setError);
	var tryValidateAsyncNow = /*#__PURE__*/kefir_combines.liftFOF(V.tryValidateAsyncNow);
	var tuple = /*#__PURE__*/kefir_combines.liftFOF(V.tuple);
	var upgrades = /*#__PURE__*/kefir_combines.liftFOF(V.upgrades);
	var upgradesOf = /*#__PURE__*/kefir_combines.liftFOF(V.upgradesOf);
	var validate = /*#__PURE__*/kefir_combines.liftFOF(V.validate);
	var validateAsync = /*#__PURE__*/kefir_combines.liftFOF(V.validateAsync);
	var where = /*#__PURE__*/kefir_combines.liftFOF(V.where);

	exports.accept = accept;
	exports.acceptAs = acceptAs;
	exports.acceptWith = acceptWith;
	exports.accepts = accepts;
	exports.acceptsAsync = acceptsAsync;
	exports.and = and;
	exports.args = args;
	exports.arrayId = arrayId;
	exports.arrayIx = arrayIx;
	exports.both = both;
	exports.cases = cases;
	exports.casesOf = casesOf;
	exports.choose = choose;
	exports.dependentFn = dependentFn;
	exports.either = either;
	exports.errors = errors;
	exports.errorsAsync = errorsAsync;
	exports.freeFn = freeFn;
	exports.ifElse = ifElse;
	exports.keep = keep;
	exports.lazy = lazy;
	exports.modifyAfter = modifyAfter;
	exports.modifyError = modifyError;
	exports.not = not;
	exports.optional = optional;
	exports.or = or;
	exports.promote = promote;
	exports.props = props;
	exports.propsOr = propsOr;
	exports.reject = reject;
	exports.rejectAs = rejectAs;
	exports.rejectWith = rejectWith;
	exports.remove = remove;
	exports.removeAfter = removeAfter;
	exports.run = run;
	exports.setAfter = setAfter;
	exports.setError = setError;
	exports.tryValidateAsyncNow = tryValidateAsyncNow;
	exports.tuple = tuple;
	exports.upgrades = upgrades;
	exports.upgradesOf = upgradesOf;
	exports.validate = validate;
	exports.validateAsync = validateAsync;
	exports.where = where;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
