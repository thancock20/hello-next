import Layout from '../components/MyLayout';
import { StoreProvider, useStore, useAction } from 'easy-peasy';
import store from '../containers/counter-ezpz';

const Counter = () => {
  const count = useStore(state => state.count);
  const increment = useAction(dispatch => dispatch.increment);
  const decrement = useAction(dispatch => dispatch.decrement);

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
