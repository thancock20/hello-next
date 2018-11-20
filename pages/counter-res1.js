import Layout from '../components/MyLayout';
import { view } from 'react-easy-state';
import counter from '../containers/counter-res';

export default view(() => (
  <Layout title='Counter'>
    <div>
      <button onClick={counter.decrement}>-</button>
      <span className="count">{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  </Layout>
))
