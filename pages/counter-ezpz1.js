import Layout from '../components/MyLayout';
import { StoreProvider, useStore, useAction } from 'easy-peasy';
import store from '../containers/counter-ezpz';

const Counter = () => {
  const count = useStore(state => state.counter.count);
  const increment = useAction(dispatch => dispatch.counter.increment);
  const decrement = useAction(dispatch => dispatch.counter.decrement);

  return (
    <Layout title='Counter-Hooks'>
      <div>
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </Layout>
  )
}

export default () => (
  <StoreProvider store={store}>
    <Counter />
  </StoreProvider>
)
