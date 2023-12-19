import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Sidebar from './components/Sidebar';
import Dashboard from "./components/Dashboard"
import TopBar from './components/TopBar';
import User from './components/User';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div class="container-fluid">
                <Switch>
                  <Route exact={true} path="/" component={Dashboard} />
                  <Route exact={true} path="/user" component={User} />
                </Switch>
              </div>

            </div>
          </div>


        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
