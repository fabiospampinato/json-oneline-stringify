
/* MAIN */

function stringify ( input: Function | symbol | undefined ): undefined;
function stringify ( input: null | number | boolean | string | unknown[] | Record<any, unknown> ): string;
function stringify ( input: unknown ): string | undefined;
function stringify ( input: unknown ): string | undefined {

  const type = typeof input;

  if ( type === 'string' || type === 'number' ) return JSON.stringify ( input );

  if ( type === 'boolean' ) return input ? 'true' : 'false';

  if ( type === 'object' ) {

    if ( input === null ) {

      return 'null';

    } else if ( Array.isArray ( input ) ) {

      let children = '';

      for ( let i = 0, l = input.length; i < l; i++ ) {

        const value = input[i];
        const child = stringify ( value );

        if ( child === undefined ) continue;

        children += children ? `, ${child}` : child;

      }

      return `[${children}]`;

    } else {

      let children = '';

      for ( const prop in input ) {

        const value = stringify ( input[prop] );

        if ( value === undefined ) continue;

        const key = stringify ( prop );

        children += children ? `, ${key}: ${value}` : `${key}: ${value}`;

      }

      return children ? `{ ${children} }` : '{}';

    }

  }

  if ( type === 'undefined' || type === 'function' || type === 'symbol' ) return;

  throw new Error ( `Unsupported type: "${type}"` );

}

/* EXPORT */

export default stringify;
