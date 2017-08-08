// FIXME: export default from './TasksModule'  <-- all of these should work
// export {default as Header} from './TasksHeaderComponent'
// export {default as Item} from './TasksItemComponent'
// export {default as List} from './TasksListComponent'

import Header from './TasksHeaderComponent'
import Item from './TasksItemComponent'
import List from './TasksListComponent'
import TasksModule from './TasksModule'

import {ITaskItem, TaskItem } from './TasksItemModel'


export {
  Header,
  Item,
  List,
  ITaskItem as ITask,
  TaskItem
}
export default TasksModule
