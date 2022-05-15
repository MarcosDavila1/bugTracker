import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/home' component={Home}/>
    </div>
  );
}

export default App;
