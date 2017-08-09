import {shallow, mount} from 'enzyme'
import * as React from 'react'
import TasksModule from './TasksModule'

import {
  tasksHeaderMessageTest,
  tasksInputPlaceholderTest,
  tasksInputSubmitTest,
  tasksListEmptyTest,
} from './TasksTests.test'

test('TasksModule renders with 0 records', () => {
  const component = mount(<TasksModule />)

  const tasksModule = component.find('.app-tasks')
  expect(tasksModule.exists()).toEqual(true)

  tasksHeaderMessageTest(component, 'React Task List', 0)
  tasksInputPlaceholderTest(component)
  tasksInputSubmitTest(component)
  tasksListEmptyTest(component)
});

function tasksModuleNewTaskSubmitTest(component, taskName, count) {
  // FILL OUT INPUT WITH TASK NAME
  const taskInput = component.find('.app-tasks-newTask-input')
  const taskInputProps = taskInput.props()
  if(taskInputProps.onChange) {
    const event = {currentTarget: {value: taskName}}
    taskInputProps.onChange(event)
  }

  // SUBMIT INPUT
  const taskSubmit = component.find('.app-tasks-newTask-submit')
  taskSubmit.simulate('click')

  // LIST HAS TASK WITH THIS NAME
  const taskList = component.find('.app-tasks-list')
  expect(taskList.exists()).toEqual(true)

  const taskItem = component.find('.app-tasks-item')
  expect(taskItem).toHaveLength(count)
  expect(taskItem.at(count-1).text()).toEqual(taskName)
}
test('TasksModule adds a Task to the List', () => {
  const component = mount(<TasksModule />)

  // SELECT TASKS MODULE
  const tasksModule = component.find('.app-tasks')
  expect(tasksModule.exists()).toEqual(true)

  // == FIRST ==
  tasksModuleNewTaskSubmitTest(component, 'First Task', 1)
  tasksHeaderMessageTest(component, 'React Task List', 1)

  // == SECOND ==
  tasksModuleNewTaskSubmitTest(component, 'Second Task', 2)
  tasksHeaderMessageTest(component, 'React Task List', 2)

  // == THIRD ==
  tasksModuleNewTaskSubmitTest(component, 'Third Task', 3)
  tasksHeaderMessageTest(component, 'React Task List', 3)
})