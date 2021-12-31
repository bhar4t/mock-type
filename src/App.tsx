import Home from './components/Home';
import Layout from './layout/Layout';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'

function App() {
  const component = <Home />
  return (
    <Provider store={store}>
      <Layout>
        {component}
      </Layout>
    </Provider>
  );
}

export default App;
