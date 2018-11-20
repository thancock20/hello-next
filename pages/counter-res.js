import Layout from '../components/MyLayout';
import { view, store } from 'react-easy-state';

class Counter extends React.Component {
  counter = store({
    count: 0
  })

  increment = () => { this.counter.count++ }

  decrement = () => { this.counter.count-- }

  render() {
    return (
      <Layout title='Counter'>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.counter.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </Layout>
    )
  }
}

export default view(Counter);
