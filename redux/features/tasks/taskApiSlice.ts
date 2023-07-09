import { apiSlice } from "../../apiSlice";
import { tasksAdapter } from "./taskSlice";
import { initialState } from "./taskSlice";

const tasksApiCalls = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
          // params: {},
          // skipToken: true,
        };
      },
      transformResponse: (response: any) => {
        // const { meta, tasks } = response.data;
        // const loadedTasks = tasks.map((task: any) => {
        //   task.id = task._id;
        //   return task;
        // });
        // return tasksAdapter.setAll(
        //   { ...initialState, pageData: meta, newCount: 3 },
        //   loadedTasks
        // );
        console.log(response);
      },
      providesTags: ["user"],
    }),
  }),
});

export const { useGetTasksQuery } = tasksApiCalls;
