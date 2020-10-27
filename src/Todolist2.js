import React from "react";
import "antd/dist/antd.css";
import { Input, List, Checkbox } from "antd";
import todoActions from "./store/actions";
import { connect } from "react-redux";

const Todolist2 = props => {
  const { inputChange, pressEnter, toggle,inputValue, list } = props;
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
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
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
