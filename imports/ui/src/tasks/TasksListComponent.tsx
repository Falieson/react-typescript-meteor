import * as React from 'react'
import {ITask, Item} from './'

interface IProps {
  tasks: ITask[],
}

const styles = {
  ul: {paddingLeft: '20px', margin: '5px'},
}

class TasksList extends React.Component<IProps, {}> {
  public renderNoTasks() {
    return (
      <h3 className='app-tasks-list--empty'>
        Start your list!
      </h3>
    )
  }
  public renderTask = (task: ITask) => {
    return (
      <Item key={task._id} task={task} />
    )
  }
  public renderList() {
    return (
      <ul style={styles.ul} className='app-tasks-list'>
        {this.props.tasks.map(task => this.renderTask(task))}
      </ul>
    )
  }

  public render() {
    const {tasks} = this.props
    const result = tasks.length > 0 ? this.renderList() : this.renderNoTasks()

    return (
      <div className='app-tasks-list--container'>
        {result}
      </div>
    )
  }
}

export default TasksList
