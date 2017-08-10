import {shallow} from 'enzyme'
import * as React from 'react'

const Hello = ()=> (<div id='message'>Hello</div>)


test('CounterComponent changes Value after Clicked', () => {
  const component = shallow(<Hello />);
  const HelloComponent = component.find('div')

  expect(HelloComponent.text()).toEqual('Hello')
})
