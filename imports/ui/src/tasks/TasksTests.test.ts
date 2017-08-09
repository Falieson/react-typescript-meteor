// Has a .tests. file name so Typescript doesn't fail on expect()
test('TasksModule shared tests loaded', ()=> {
  expect(true).toBe(true)
})

// HEADER
export function tasksHeaderMessageTest(component, message, count) {
  const taskHeaderMessage = component.find('.app-tasks-header')
  expect(taskHeaderMessage.exists()).toEqual(true)
  expect(taskHeaderMessage.text()).toEqual(`${message} (${count})`)
}
export function tasksInputPlaceholderTest(component) {
  const taskInput = component.find('.app-tasks-newTask-input')
  expect(taskInput.exists()).toEqual(true)
  expect(taskInput.props().type).toEqual('text')
  expect(taskInput.props().placeholder).toEqual('New Task Name')
}

export function tasksInputSubmitTest(component) {
  const taskSubmit = component.find('.app-tasks-newTask-submit')
  expect(taskSubmit.exists()).toEqual(true)  
  expect(taskSubmit.props().type).toEqual('submit')
  expect(taskSubmit.props().value).toEqual('Add')
}

// LIST
export function tasksListEmptyTest(component)  {
  const emptyTaskList = component.find('.app-tasks-list--empty')
  expect(emptyTaskList.exists()).toEqual(true)  
  expect(emptyTaskList.text()).toEqual('Start your list!')
}
