import {mount, shallow} from 'enzyme'
import * as React from 'react'
import TaskHeader from './TasksHeaderComponent'

import {
  tasksHeaderMessageTest,
  tasksInputPlaceholderTest,
  tasksInputSubmitTest,
} from './TasksTests.test'


test('TaskHeader exists', () => {
  const component = shallow(<TaskHeader listName='Demo' totalTasks={55} />)

  tasksHeaderMessageTest(component, 'Demo', 55)
  tasksInputPlaceholderTest(component)
  tasksInputSubmitTest(component)
});


test('TaskHeader changes Value after Inputted', () => {
  const component = mount(<TaskHeader listName='Demo' totalTasks={55} />)

  const taskInput = component.find('.app-tasks-newTask-input')
  expect(taskInput.props().value).toEqual('')

  const taskInputProps = taskInput.props()
  if(taskInputProps.onChange) {
    const event = {currentTarget: {value: 'First Task'}}
    taskInputProps.onChange(event)
  }
  expect(taskInput.props().value).toEqual('First Task')
})

test('TaskHeader clears Value after Submitted', () => {
  const component = mount(<TaskHeader listName='Demo' totalTasks={55} />)

  const taskInput = component.find('.app-tasks-newTask-input')
  expect(taskInput.props().value).toEqual('')

  const taskInputProps = taskInput.props()
  if(taskInputProps.onChange) {
    const event = {currentTarget: {value: 'First Task'}}
    taskInputProps.onChange(event)
  }
  expect(taskInput.props().value).toEqual('First Task')
  
  const taskSubmit = component.find('.app-tasks-newTask-submit')
  taskSubmit.simulate('click')
  expect(taskInput.props().value).toEqual('')
})
