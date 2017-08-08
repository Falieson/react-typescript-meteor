import {shallow, mount} from 'enzyme'
import * as React from 'react'
import TasksItem from './TasksItemComponent'
test('TaskItem exists', () => {
  const component = shallow(<TasksItem task={{name:'First Task\'s Name'}} />)

  const taskItem = component.find('.app-tasks-item')
  expect(taskItem.exists()).toEqual(true)  
  expect(taskItem.text()).toEqual('First Task\'s Name')
});
