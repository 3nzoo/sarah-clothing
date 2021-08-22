import './App.css';
import HomePage from './pages/hompage/HomePage';
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';


const HatsPage = () => {
  return (
    <div>
      <h1>Hats here</h1>
    </div>
  )
}

const SneakersPage = () => {
  return (
    <div>
      <h1>sneakers here</h1>
    </div>
  )
}

const WomenPage = () => {
  return (
    <div>
      <h1>women here</h1>
    </div>
  )
}

const MensPage = () => {
  return (
    <div>
      <h1>mens here</h1>
    </div>
  )
}

const JacketsPage = () => {
  return (
    <div>
      <h1>jackets here</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/hats" component={HatsPage}/>
        <Route path="/shop/mens" component={MensPage}/>
        <Route path="/shop/womens" component={WomenPage}/>
        <Route path="/shop/sneakers" component={SneakersPage}/>
        <Route path="/shop/jackets" component={JacketsPage}/>
        <Route path="/shop/" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
