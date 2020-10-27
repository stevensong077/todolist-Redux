import React, { Component} from "react";
import "antd/dist/antd.css";
import { Input, List, Checkbox } from "antd";
import store from "./store/index.js";
import { connect } from "react-redux";
import  todoactions from "./store/actions";

// const Todolist = props => {
//   const { inputChange, inputValue, list } = props;
//   const handleInputChange = e => {
//     const value = e.target.value;
//     inputChange(value);
//   };
//   // handleStoreChange() {
//   //   this.setState(store.getState());
//   // }
//   const handlePressEnter = () => {
  //   const action = {
  //     type: "add_todo_item"
  //   };
  //   store.dispatch(action);
  // };
  // const handleToggle = (e, index) => {
  //   // console.log(`checked = ${e.target.checked}`);
  //   const action = {
  //     type: "toggle_todo_item",
  //     value: index
  //   };
  //   store.dispatch(action);
  // };
    
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }

  handlePressEnter() {
    const action = {
      type: "add_todo_item"
    };
    store.dispatch(action);
  }
  handleToggle(e, index) {
    // console.log(`checked = ${e.target.checked}`);
    const action = {
      type: "toggle_todo_item",
      value: index
    };
    store.dispatch(action);
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: "300px", marginRight: "3px" }}
            onChange={this.handleInputChange}
            onPressEnter={this.handlePressEnter}
          />
        </div>
        <List
          style={{ marginRight: "30px" }}
          bordered
          // dataSource={list} // get data from reducer directly
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              style={{
                marginTop: "10px",
                textDecoration: item.isCompleted ? "line-through" : "none"
              }}
            >
              <Checkbox onChange={value => this.handleToggle(value, index)}>
                {" "}
              </Checkbox>
              {item.text}
            </List.Item>
          )}
        />
      </div>
    );
  }
};

export default Todolist;

// const { inputChange } = todoactions;
// const mapStateToProps = (state /*, ownProps*/) => {
//   console.log(state.list);
//   return {
//     list: state.list,
//     // list: state.dafaultState.list,
//     inputValue: state.inputValue
//   };
// };
// const mapDispatchToProps = { inputChange };

// export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
