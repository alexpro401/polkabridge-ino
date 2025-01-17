import "./App.css";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Fragment } from "react";
import Home from "./pages/Home";
import "./web";
import Navbar from "./common/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import PoolDetails from "./components/PoolDetails";
import Profile from "./pages/Profile/Profile";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <div>
            <Navbar />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="pool-details/:id" element={<PoolDetails />} />
                <Route path="profile" element={<Profile />} />
              </Routes>
            </Router>
          </div>
        </Fragment>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
