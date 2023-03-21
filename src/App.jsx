import React from "react";
import { Provider } from "react-redux";
import store from "./components/Store";
import Counter from "./components/Counter";
import Login from "./components/Login";



const App = () => (
  <Provider store={store}>
  <div>
    <Counter />
    <Login />
  </div>
</Provider>
);

export default App;
