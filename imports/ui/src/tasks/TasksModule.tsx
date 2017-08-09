import * as React from 'react'
import {Header, ITask, Item, List} from './'

// interface IProps {}

interface IState {
  records: ITask[],
}

export default class CounterComponent extends React.Component<{}, IState> {
  constructor() {
    super();
    this.state = {
      records: [],
    };
  }

  public actionAddTaskToList = (newTaskRecord: ITask, callback: () => void) => {
    this.setState((prevState) => ({
      records: [...prevState.records, newTaskRecord],
    }), () => callback())
  }

  public render() {
    const {records} = this.state
    return (
      <div className="app-tasks">
        <Header
          listName='React Task List'
          totalTasks={records.length}
          actionNewTaskSubmit={this.actionAddTaskToList}
        />
        <List tasks={records} />
      </div>
    );
  }
}
