import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Counters from './collections'

const {methods} = Counters

// describe('demo', () => {
//   it('should add foo', () => {
//     expect(ValidatedMethod).toHaveBeenCalledWith({
//       name: 'Foo.add',
//       run: jasmine.any(Function),
//       validate: undefined,
//     });
//   });
// });

test('Method \'Counters.methods.add\' works', ()=> {
  expect(ValidatedMethod).toHaveBeenCalledWith({
    name: 'Counters.methods.add',
    run: jasmine.any(Function),
    validate: undefined,
  })
})
