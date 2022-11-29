import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import UsersHome from './pages/UsersHome'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddUsers from './users/AddUsers';
import EditUsers from './users/EditUsers';
import AddRestaurant from './restaurants/AddRestaurant';
import EditRestaurant from './restaurants/EditRestaurant';
import ViewRestaurant from './restaurants/ViewRestaurant';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/addrestaurant" element={<AddRestaurant/>}/>
          <Route exact path="/editrestaurant/:id" element={<EditRestaurant/>}/>
          <Route exact path="/restaurant/:id" element={<ViewRestaurant/>}/>
          <Route exact path="/users" element={<UsersHome/>}/>
          <Route exact path="/users/adduser" element={<AddUsers/>}/>
          <Route exact path="/users/edituser/:id" element={<EditUsers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
