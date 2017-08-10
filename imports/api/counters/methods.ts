import { Meteor } from 'meteor/meteor'
import Counters from './collections'

Meteor.methods({
  'counters.add': function ({ id, value }: {id: string, value: number}) {
    return Counters.insert({ id, value, createdAt: new Date() })
  },
})
// # counters api/ddp methods

/* Validated Method 
  ## Method definition
  ```
  const method = new ValidatedMethod({
    name, // DDP method name
    mixins, // Method extensions
    validate, // argument validation
    applyOptions, // options passed to Meteor.apply
    run // Method body
  });
  ```
  ## Method example
  ```
  export const addFoo = new ValidatedMethod({
    name: 'Foo.add',
    validate: new SimpleSchema({
      bar: { type: String },
    }).validator(),
    run(bar) {
      console.log('foo', bar);
    },
  });
  ```
  
  ## Method call
  ```
  method.call({ arg1, arg2 });
  ```
*/

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Counters from './collections'
import {NewCounterSchema} from './schema'

Counters.methods = {}

// Meteor.methods({
//   'counters.add': function ({ id, value }: {id: string, value: number}) {
//     return Counters.insert({ id, value, createdAt: new Date() })
//   },
// })
Counters.methods.add = new ValidatedMethod({
  name: 'Counters.methods.add',
  validate: NewCounterSchema.validator(),
  run({ id, value }) {
    return Counters.insert({ id, value, createdAt: new Date() })
  }
})
