import './App.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <div className="App">
        {/* <Provider store={store}> */}
        <RouterProvider router={router} />
        {/* </Provider> */}
      </div>
      ;
    </>
  );
}

export default App;
