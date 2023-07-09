import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const tasksAdapter = createEntityAdapter({
  selectId: (task) => task.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

export const initialState = tasksAdapter.getInitialState({
  pageData: {},
  newCount: 0,
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const task = JSON.parse(action.payload);
      console.log(task);
      state = {
        ...state,
        ids: state.ids.unshift(task._id),
        entities: { [task._id]: task, ...state.entities },
        newCount: state.newCount + 1,
      };
    },

    clearCount: (state, action) => {
      state = initialState;
    },
  },
});

export default taskSlice.reducer;
