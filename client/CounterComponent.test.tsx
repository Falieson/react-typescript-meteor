import {shallow} from 'enzyme'
import * as React from 'react'
import Counter from './CounterComponent'

test('CounterComponent changes Value after Clicked', () => {
  const component = shallow(<Counter defaultValue={1} />);

  const counterMessage = component.find('.app-counter-message')
  expect(counterMessage.text()).toEqual('Count is 1');

  const counterAdd = component.find('.app-counter-button--incrementer')
  expect(counterAdd.exists()).toEqual(true)
  expect(counterAdd.text()).toEqual('Incrementer');
  counterAdd.simulate('click');
  expect(counterMessage.text()).toEqual('Count is 2');

  // const counterMinus = component.find('.app-counter-button--decrementer')
  // expect(counterMinus.exists()).toEqual(true)
  // expect(counterMinus.text()).toEqual('Decrementer');
  // counterMinus.simulate('click');
  // expect(counterMessage.text()).toEqual('Count is 0');
});
