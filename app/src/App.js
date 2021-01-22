import { Provider } from 'react-redux';
import store from './redux/configureStore';

import TradesContainer from './containers/TradesContainer';

import './styles/main.css';

function App() {
  return (
    <Provider store={store}>
      <TradesContainer />
    </Provider>
  );
}

export default App;
