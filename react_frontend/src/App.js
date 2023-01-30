import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowAnnonce from './components/ShowAnnonce';
import AddAnnonce from './components/AddAnnonce';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import UpdateAnnonce from './components/UpdateAnnonce';
import AnnonceDetail from './components/AnnonceDetail';

function App() {
  return (
    <div className="App">
      <h1>GradeUp</h1>
      
        <div>
          <Router>
          <NavbarMenu />
            <Switch>
              <Route exact path="/" component={ShowAnnonce} />
              <Route exact path="/addAnnonce" component={AddAnnonce}/> 
              <Route exact path="/:id/update" component={UpdateAnnonce} />
              <Route exact path="/:id/" component={AnnonceDetail} /> 
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
