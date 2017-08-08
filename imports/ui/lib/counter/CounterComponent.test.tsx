import {shallow, mount} from 'enzyme'
import * as React from 'react'
import Counter from './CounterComponent'

test('CounterComponent exists', () => {
  const component = shallow(<Counter defaultValue={100} />);

  const counterMessage = component.find('.app-counter-message')
  expect(counterMessage.exists()).toEqual(true)
  expect(counterMessage.text()).toEqual('Count is 100');

  const counterAdd = component.find('.app-counter-button--incrementer')
  expect(counterAdd.exists()).toEqual(true)
  expect(counterAdd.text()).toEqual('Increase');

  const counterMinus = component.find('.app-counter-button--decrementer')
  expect(counterMinus.exists()).toEqual(true)
  expect(counterMinus.text()).toEqual('Decrease');
});

test('CounterComponent changes Value after Clicked', () => {
  const component = mount(<Counter defaultValue={1} />);

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
