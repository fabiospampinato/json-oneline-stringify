
/* IMPORT */

import {describe} from 'fava';
import stringify from '../dist/index.js';
import {INPUT, OUTPUT} from './fixtures.js';

/* MAIN */

describe ( 'JSON Oneline Stringify', it => {

  it ( 'ignores function', t => {

    t.is ( stringify ( stringify ), undefined );
    t.is ( stringify ( [stringify] ), '[]' );
    t.is ( stringify ( { value: stringify } ), '{}' );

  });

  it ( 'ignores symbol', t => {

    t.is ( stringify ( Symbol () ), undefined );
    t.is ( stringify ( [Symbol ()] ), '[]' );
    t.is ( stringify ( { value: Symbol () } ), '{}' );

  });

  it ( 'ignores undefined', t => {

    t.is ( stringify ( undefined ), undefined );
    t.is ( stringify ( [undefined] ), '[]' );
    t.is ( stringify ( { value: undefined } ), '{}' );

  });

  it ( 'supports null', t => {

    t.is ( stringify ( null ), 'null' );
    t.is ( stringify ( [null] ), '[null]' );
    t.is ( stringify ( { value: null } ), '{ "value": null }' );

  });

  it ( 'supports number', t => {

    t.is ( stringify ( 123 ), '123' );
    t.is ( stringify ( [123] ), '[123]' );
    t.is ( stringify ( { value: 123 } ), '{ "value": 123 }' );

  });

  it ( 'supports boolean', t => {

    t.is ( stringify ( true ), 'true' );
    t.is ( stringify ( [true] ), '[true]' );
    t.is ( stringify ( { value: true } ), '{ "value": true }' );

    t.is ( stringify ( false ), 'false' );
    t.is ( stringify ( [false] ), '[false]' );
    t.is ( stringify ( { value: false } ), '{ "value": false }' );

  });

  it ( 'supports string', t => {

    t.is ( stringify ( "str" ), '"str"' );
    t.is ( stringify ( ["str"] ), '["str"]' );
    t.is ( stringify ( { value: "str" } ), '{ "value": "str" }' );

  });

  it ( 'supports array', t => {

    t.is ( stringify ( [undefined, null, 123, true, false, "str"] ), '[null, 123, true, false, "str"]' );

  });

  it ( 'supports object', t => {

    t.is ( stringify ( { a: undefined, b: null, c: 123, d: true, e: false, f: "str" } ), '{ "b": null, "c": 123, "d": true, "e": false, "f": "str" }' );

  });

  it ( 'supports complicated objects', t => {

    t.is ( stringify ( INPUT ), OUTPUT );

  });

  it ( 'throws on bigint', t => {

    t.throws ( () => stringify ( 123n ), { message: 'Unsupported type: "bigint"' } );
    t.throws ( () => stringify ( [123n] ), { message: 'Unsupported type: "bigint"' } );
    t.throws ( () => stringify ( { value: 123n } ), { message: 'Unsupported type: "bigint"' } );

  });

});
