import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
// import { Provider } from "react-redux";
import store from'./store' 

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider Store={store}> */}
      <Todolist />
    {/* </Provider> */}
   </React.StrictMode>,
  document.getElementById("root")
);


