import Layout from '../components/MyLayout';
import { view } from 'react-easy-state';
import counter from '../containers/counter-res';

export default view(() => (
  <Layout title='Counter'>
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
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
  </Layout>
))
