import Head from 'next/head'
import Header from './Header'
import { Provider } from 'unstated'
import CounterContainer from '../containers/CounterContainer'
import GlobalStyles from './GlobalStyles';

const counter = new CounterContainer()

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title ? `Next App | ${title}` : 'Next App' }</title>
      <meta charSet='utf8' />
      <meta  name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <Provider inject={[counter]}>
      {children}
    </Provider>
    <style jsx>{`
      margin: 20;
      padding: 20;
      border: 1px solid #DDD;
    `}</style>
    <GlobalStyles />
  </div>
)

export default Layout
