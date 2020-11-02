import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { Input, List, Checkbox } from "antd";
import todoActions from "./store/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react"
const Todolist2 = props => {
  const { inputChange, pressEnter, toggle, inputValue, list } = props;
  const handleInputChange = e => {
    const value = e.target.value;
    console.log(value);
    inputChange(value);
  };
  const handlePressEnter = () => {
    pressEnter()
  };
  const handleToggle = (e, index) => {
    toggle(index)
  };
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
    <div>
      <button onClick={onIncrementAsync}>
        Increment after 1 second
    </button>
      {' '}
      <button onClick={onIncrement}>
        Increment
    </button>
      {' '}
      <button onClick={onDecrement}>
        Decrement
    </button>
      <hr />
      <div>
        Clicked: {value} times
    </div>
    </div>

  return (
    <Fragment>

      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <Counter></Counter>
        <div>
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
          <Input
            value={inputValue}
            placeholder="todo info"
            style={{ width: "300px", marginRight: "3px" }}
            onChange={handleInputChange}
            onPressEnter={handlePressEnter}
          />
        </div>
        <List
          style={{ marginRight: "30px" }}
          bordered
          // dataSource={list} // get data from reducer directly
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              style={{
                marginTop: "10px",
                textDecoration: item.isCompleted ? "line-through" : "none"
              }}
            >
              <Checkbox onChange={value => handleToggle(value, index)}>
                {" "}
              </Checkbox>
              {item.text}
            </List.Item>
          )}
        />
      </div>
    </Fragment>

  );
};
// export default Todolist2;

const { inputChange, pressEnter, toggle } = todoActions;

export default connect(
  state => {
    const { inputValue, list } = state;
    return {
      inputValue,
      list
    };
  },
  { inputChange, pressEnter, toggle }
)(Todolist2);

// const mapStateToProps = (state /*, ownProps*/) => {
//   console.log(state.list);
//   return {
//     list: state.list,
//     // list: state.dafaultState.list,
//     inputValue: state.inputValue
//   };
// };
// const mapDispatchToProps = { inputChange };

// export default connect(mapStateToProps, mapDispatchToProps)(Todolist2);
