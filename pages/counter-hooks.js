import Layout from '../components/MyLayout';
import React, { useState } from 'react';

export default () =>  {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

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
