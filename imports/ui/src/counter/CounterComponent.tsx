import {Meteor} from 'meteor/meteor'
import * as React from 'react'
import {ICounter} from './'

interface IProps {
  value?: number,
  defaultValue?: number,
}

interface IState {
  value: number,
  counters: ICounter[],
}

export default class CounterComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const {defaultValue, value} = props
    this.state = {
      value: value || defaultValue,
      counters: []
    };
  }

  public handleChangeValue(decrement: boolean): void {
    this.setState((prevState) => ({
      value: decrement ? prevState.value - 1 : prevState.value + 1,
    }))
  }

  public handleClickNew() {
    const randomId = `${Math.floor((Math.random() * 100) + 1)}${Math.floor((Math.random() * 100) + 1)}`
    const oldCounter = {id: randomId, value: this.state.value }
    this.setState((ps) => ({
      counters: [...ps.counters, oldCounter],
      value: this.props.defaultValue
    }))

    Meteor.call('Counters.methods.add', oldCounter, (err: any, res: any) => {
      if(!err) {
        console.log("Added CounterID: ", res)
      } else {
        const {message} = err
        if(message){
          console.error(message, {err})
        } else {
          console.error("Full Error: ", {err})
        }
      }      
    })
  }

  public renderChangeValue(
    { decrement= false }: {decrement?: boolean} = {}
  ): React.ReactElement<{}> {

    return (
      <button
        className={`app-counter-button--${decrement ? 'decrementer' : 'incrementer'}`}
        onClick={this.handleChangeValue.bind(this, decrement)}
      >
        {decrement ? 'Decrease' : 'Increase'}
      </button>
    )
  }

  public renderNewCounter() {
    return (
      <button
        className={`app-counter-button--new`}
        onClick={this.handleClickNew.bind(this)}
      >
        New
      </button>
    )
  }

  public render() {
    return (
      <div>
        <div className="app-counter">
          <div className="app-counter-message">
            Count is {this.state.value}
          </div>
          {this.renderChangeValue()}
          {this.renderChangeValue({decrement: true})}
          {this.renderNewCounter()}
        </div>
        <div className="app-counter-amount">
          Counters created: {this.state.counters.length + 1}
        </div>
      </div>
    );
  }
}
