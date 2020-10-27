
const defaultState = {
  inputValue: "",
  list:[
    { text: "yoy", isCompleted: false },
    { text: "wow", isCompleted: false },
    { text: "zoz", isCompleted: false }
  ]
};
//reducer can accept 'state' but never change it.
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push({ text: newState.inputValue, isCompleted: false });
    newState.inputValue = "";
    return newState;
  }
  if (action.type === "toggle_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list[action.value].isCompleted = !state.list[action.value].isCompleted;
    return newState;
  }
  return state;
};
