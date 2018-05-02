import Layout from '../components/MyLayout';
import produce from 'immer';

export default class Counter extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(produce(draft => { draft.count++ }))
  }

  decrement = () => {
    this.setState(produce(draft => { draft.count-- }))
  }

  render() {
    return (
      <Layout title='Counter'>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
          <style jsx>{`
            span {
              margin: 10px;
              font-weight: bold;
            }

            button {
              width: 50px;
              margin: 10px 0;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}
