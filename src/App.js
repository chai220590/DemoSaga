import { Provider } from 'react-redux';
import './App.css';
import DemoSagaComponent from './saga/DemoSagaComponent';
import store from './saga/store';
function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <div className='app-bg'>
        </div>
        <div className='app-content'>
          <DemoSagaComponent />
        </div>
      </div></Provider>
  );
}

export default App;
