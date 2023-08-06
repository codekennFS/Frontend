"use client";

import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

import "./style.css";
import TaskModal from "./taskModal";

export default function Task() {
  const [queryPresent, setQueryPresent] = useState(false);
  const [taskId, setTaskId] = useState("");
  const searchParams = useSearchParams();

  const handleModalClose = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("task_id");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}${newSearchParams.toString()}`
    );
    setQueryPresent(false);
  };

  useEffect(() => {
    const search = searchParams.get("task_id");
    console.log(search);

    if (!search) return;

    setQueryPresent(true);
    setTaskId(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="bg-black task-div mt-7">
        {/* <Link href='/'>Home</Link>/
        <Link href='#'>Tasks</Link> */}
        <h1 className="text-sm text-white "> Complete HTML and CSS courses</h1>
        <TaskModal
          taskId={taskId}
          closeFunction={handleModalClose}
          queryPresent={queryPresent}
        />
      </div>
    </>
  );
}
