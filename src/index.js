import React from "react";
import ReactDOM from "react-dom";
import Todolist from "./Todolist";
import Todolist2 from "./Todolist2";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
    <Provider store={store}>
      {/* <Todolist /> */}
      <Todolist2 />
    </Provider>
    ,
  document.getElementById("root")
);
