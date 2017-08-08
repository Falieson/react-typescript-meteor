import undefined from './TasksItemComponent';
import {shallow, mount} from 'enzyme'
import * as React from 'react';
import TasksList from './TasksListComponent'
import {TaskItem} from './TasksItemModel'
import {tasksListEmptyTest} from './TasksTests'

test('TasksList renders with 0 records', () => {
  const component = shallow(<TasksList tasks={[]} />)

  const taskListContainer = component.find('.app-tasks-list--container')
  expect(taskListContainer.exists()).toEqual(true)  

  const taskList = component.find('.app-tasks-list')
  expect(taskList.exists()).toEqual(false)  
  
  tasksListEmptyTest(component)
});

test('TasksList renders with 3 tasks', () => {
  const records = [
    new TaskItem({name: "First Task"}),
    new TaskItem({name: "Second Task"}),
    new TaskItem({name: "Third Task"}),
  ]
  const component = mount(<TasksList tasks={records} />)

  const taskListContainer = component.find('.app-tasks-list--container')
  expect(taskListContainer.exists()).toEqual(true)  

  const emptyTaskList = component.find('.app-tasks-list--empty')
  expect(emptyTaskList.exists()).toEqual(false)  

  const taskList = component.find('.app-tasks-list')
  expect(taskList.exists()).toEqual(true)

  const taskItem = component.find('.app-tasks-item')
  expect(taskItem).toHaveLength(3)
  expect(taskItem.first().text()).toEqual('First Task')
  expect(taskItem.at(1).text()).toEqual('Second Task')  
  expect(taskItem.last().text()).toEqual('Third Task')  
});


