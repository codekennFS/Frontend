import React from "react";

import CompletedTasksCard from "./CompletedTasksCard";

const CompletedTasks = () => {
  return (
    <section className="flex flex-col w-full p-6 space-y-5 lg:p-8 lg:min-h-screen">
      <h1 className="text-lg">Explore, see what others are getting done</h1>
      <div className="flex flex-col justify-between w-full grow">
        <div className="overflow-x-scroll">
          <div className="flex gap-8 w-fit">
            <CompletedTasksCard />
            <article className="w-[31rem] h-[17rem] rounded-sm border border-black"></article>
            <article className="w-[31rem] h-[17rem] rounded-sm border border-black"></article>
            <article className="w-[31rem] h-[17rem] rounded-sm border border-black"></article>
            <article className="w-[31rem] h-[17rem] rounded-sm border border-black"></article>
            <article className="w-[31rem] h-[17rem] rounded-sm border border-black"></article>
          </div>
        </div>
        <div>
          <article className="w-[31rem] h-[17rem] rounded-sm border border-black"></article>
        </div>
        <div>
          <article className="w-[31rem] h-[17rem] rounded-sm border border-black"></article>
        </div>
      </div>
    </section>
  );
};

export default CompletedTasks;
