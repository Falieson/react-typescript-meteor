/* Tasks Header | React Meteor Example
(c) 2017 Florian Mettetal <florianmettetal.developer@gmail.com>

Output: TaskListName, TotalTasks, InputTasks

Inputs: Name, TotalTasks
*/

import * as React from 'react'
import {ITask, TaskItem} from './'

interface IProps {
  listName: string,
  totalTasks: number,
  actionNewTaskSubmit: (newTaskRecord: ITask, callback: () => void) => void,
}

interface IState {
  newTaskTitle: string
}

const styles = {
  container: {paddingBottom: '10px'},
  h2: {marginBottom: '10px'},
  subheader: {display: 'inline-flex'},
}

class TasksHeader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      newTaskTitle: '',
    }
    
    this.onTaskNameChange = this.onTaskNameChange.bind(this)
    this.onTaskSubmit = this.onTaskSubmit.bind(this)
  }

  public onTaskNameChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      newTaskTitle: e.currentTarget.value
    })
  }

  public onTaskSubmit() {
    // NOTE: Using the TaskItem factory should really be done in the Smart/Container Component
    //  this will be fixed in redux branch
    const TaskRecord = new TaskItem({
      createdBy: 'Demo User',
      listId: 'list_0',
      name: this.state.newTaskTitle,
    })

    const resetTaskTitle = () => this.setState({newTaskTitle: ''})

    const {actionNewTaskSubmit} = this.props
    if(actionNewTaskSubmit){
      actionNewTaskSubmit(TaskRecord, resetTaskTitle)
    } else { // NOTE: should be if (Meteor.isTest) but doesn't work
      resetTaskTitle()
    }
  }

  public renderTaskHeader() {
    return (
      <h2 style={styles.h2} className="app-tasks-header">
        {this.props.listName} ({this.props.totalTasks})
      </h2>
    )
  }
  public renderTaskInput(): React.ReactElement<{}> {
    return (
      <input
        type='text'
        className="app-tasks-newTask-input"
        onChange={this.onTaskNameChange}
        value={this.state.newTaskTitle}
        placeholder='New Task Name'
      />
    )
  }

  public renderTaskSubmit(): React.ReactElement<{}> {
    return (
      <input
        type='submit'
        className="app-tasks-newTask-submit"
        onClick={this.onTaskSubmit}
        value="Add"
      />
    )
  }

  public render() {
    return (
      <div style={styles.container} className="app-tasks-header--container">
        {this.renderTaskHeader()}
        <div style={styles.subheader}>
          {this.renderTaskInput()}
          {this.renderTaskSubmit()}
        </div>
      </div>
    )
  }
}

export default TasksHeader
