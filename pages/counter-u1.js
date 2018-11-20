import Layout from '../components/MyLayout'
import { Subscribe } from 'unstated'
import CounterContainer from '../containers/CounterContainer'

export default () => (
  <div>
    <Layout title="Counter-U1">
      <Subscribe to={[CounterContainer]}>
        {counter => (
          <div>
            <button onClick={counter.decrement}>-</button>
            <span className="count">{counter.state.count}</span>
            <button onClick={counter.increment}>+</button>
          </div>
        )}
      </Subscribe>
    </Layout>
  </div>
)
