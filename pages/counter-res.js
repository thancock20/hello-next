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
          <span>{this.counter.count}</span>
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

export default view(Counter);
