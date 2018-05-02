import Layout from '../components/MyLayout'
import { Subscribe } from 'unstated'
import CounterContainer from '../containers/CounterContainer'

export default () => (
  <div>
    <Layout title='Counter-U2'>
      <Subscribe to={[CounterContainer]}>
        {counter => (
          <div>
            <button onClick={counter.decrement}>-</button>
            <span>{counter.state.count}</span>
            <button onClick={counter.increment}>+</button>
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
        )}
      </Subscribe>
    </Layout>
  </div>
)
