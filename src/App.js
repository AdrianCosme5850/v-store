import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/Cart'
import { Provider } from 'react-redux';
import store from './components/store';

function App() {
  return (<>
  <Provider store={store}>
    <Header/>
    <Categories/>
    <Products/>
    <Cart/>
    <Footer/>
  </Provider>
  </>);
}

export default App;
