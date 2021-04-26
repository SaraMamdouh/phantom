import './App.css';
import Filter from './component/filter/filter';
import Navbar from './component/navbar/navbar';
import Product from './component/products/product';
import {Provider} from 'react-redux';
import store from './redux/store'
import Sidebar from './component/sidebar/sidebar';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <Navbar/>
    <div className="page-section">
        <div className="grid-1">
      <Filter/>
      <Product/>
      </div>
      <div className="grid-2">
      <Sidebar/>
      </div>
    </div>
    </div>
    </Provider>
  );
}

export default App;
