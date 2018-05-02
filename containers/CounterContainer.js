import { Container } from 'unstated';
import produce from 'immer';

export default class CounterContainer extends Container {
  state = {
    count: 0
  };

  setCount = count => {
    this.setState(produce(draft => { draft.count = count }))
  }

  increment = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState(produce(draft => { draft.count++ }))
  }

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    this.setState(produce(draft => { draft.count-- }))
  }
}
