// NOTE: This was the first attempt but getting weird syntax error {
// So trying over with './CounterComponent.tsx' and using this as model to debug

import * as React from 'react'

interface IProps {
  defaultValue: number | string
}

interface IState {
  value: number
}

export default class CounterComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const {defaultValue} = props
    this.state = {
      value: typeof(defaultValue) === 'number' ? defaultValue : parseInt(defaultValue, 10),
    };
  }

  public handleChangeValue(decrement: boolean): void {
    this.setState((prevState) => ({
      value: decrement ? prevState.value - 1 : prevState.value + 1,
    }))
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

  public render() {
    return (
      <div>
        <p>Count is {this.state.value}</p>
        <p>
          {this.renderChangeValue()}
          {this.renderChangeValue({decrement: true})}
        </p>
      </div>
    );
  }
}
