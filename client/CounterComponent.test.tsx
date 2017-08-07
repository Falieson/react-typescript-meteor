import {shallow} from 'enzyme'
import * as React from 'react'
import Counter from './CounterComponent'

test('CounterComponent changes Value after Clicked', () => {
  const component = shallow(<Counter defaultValue='1' />);

  const counterMessage = component.find('.app-counter-message')
  const counterAdd = component.find('.app-counter-button--incrementer')
  const counterMinus = component.find('.app-counter-button--decrementer')

  expect(counterMessage.text()).toEqual('Count is 1');

  counterAdd.simulate('click');
  expect(counterMessage.text()).toEqual('Count is 2');

  counterMinus.simulate('click');
  counterMinus.simulate('click');
  expect(counterMessage.text()).toEqual('Count is 0');
});
