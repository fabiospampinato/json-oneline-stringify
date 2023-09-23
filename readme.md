# JSON Oneline Stringify

A little function for stringifying into a single line, in a readable form.

## Install

```sh
npm install --save json-oneline-stringify
```

## Usage

```ts
import stringify from 'json-oneline-stringify';

// It formats objects and arrays nicely, with spaces for readability

const input = [123, { value: 'string' }];
const output = stringify ( input ); // => '[123, { "value": "string" }]
```

## License

MIT © Fabio Spampinato
