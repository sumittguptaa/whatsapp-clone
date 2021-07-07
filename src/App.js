import React , {useState}from "react"
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from './StateProvider';

function App() {
  const [{user} ,dispatch ] = useStateValue();
  // const [user , setUser] = useState(null);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body" >
        <Router> 
        <Sidebar/>
          <Switch>
              <Route path="/rooms/:roomId" > <Chat/> </Route>
          </Switch>
        </Router>

      </div>
  
      )

      }
        </div>
     
      
  );
}

export default App;
