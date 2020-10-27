
const actions = {
  CHANGE_INPUT_VALUE: "change_input_value",
  ADD_TODO_ITEM: "add_todo_item",
  TOGGLE_TODO_ITEM: "toggle_todo_item",

  inputChange: value => ({
    type: actions.CHANGE_INPUT_VALUE,
    value
  }),

  pressEnter: () => ({
    type: actions.ADD_TODO_ITEM
  }),

  toggle: index => ({
    type: actions.TOGGLE_TODO_ITEM,
    value: index
  })
};

export default actions;
