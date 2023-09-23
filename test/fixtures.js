
/* MAIN */

const INPUT = {
  a: 'B\nA',
  b: 'B\u0000A',
  c: 123,
  d: true,
  e: false,
  f: null,
  g: undefined,
  arr: ['string', 123, null, false, undefined, [['nested', undefined]]],
  obj: { foo: {} }
};

const OUTPUT = '{ "a": "B\\nA", "b": "B\\u0000A", "c": 123, "d": true, "e": false, "f": null, "arr": ["string", 123, null, false, [["nested"]]], "obj": { "foo": {} } }';

/* EXPORT */

export {INPUT, OUTPUT};
