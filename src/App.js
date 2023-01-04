import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import { useAuthContext} from './hooks/useAuthContext'


//auth prevents everything in app div from rendering until authIsReady is true.
function App() {
  const { authIsReady, user } = useAuthContext()


  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
            {user && <Redirect to="/" />}
            {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
        )}
    </div>
  );
}

export default App
