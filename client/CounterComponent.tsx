import * as React from 'react'

export default class CounterComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.defaultValue
    }
  }

  handleChangeValue = ()=> {
    this.setState((prev) => ({
      value: prev.value+1
    }))
  }

  renderValueChanger() {
    return (
      <div
        className="app-counter-button--incrementer"
        onClick={this.handleChangeValue.bind(this)}
      >
        Incrementer        
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="app-counter">
          <div className="app-counter-message">
            Count is {this.state.value}
          </div>
          {this.renderValueChanger()}
        </div>
      </div>
    )
  }
}
