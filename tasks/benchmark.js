
/* IMPORT */

import benchmark from 'benchloop';
import stringify from '../dist/index.js';
import {INPUT} from '../test/fixtures.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'JSON.stringify',
  fn: () => {
    JSON.stringify ( INPUT );
  }
});

benchmark ({
  name: 'json-oneline.stringify',
  fn: () => {
    stringify ( INPUT );
  }
});

benchmark.summary ();
