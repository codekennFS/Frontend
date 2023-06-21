'use client'
import Link from "next/link";
import React, {useState} from "react";
import Task from "./Task/Task";


export default function Home() {
  // const [taskModal, setTaskModal] = useState<boolean>(false)

  // const handleModal  = () => {
  //   setTaskModal(!taskModal);
  // };
 

  return (
    <>
    <main className="text-3xl w-5/6 mx-auto">
    <h3>Welcome to primetasker</h3>
    {/* <button onClick={handleModal}>View tasks</button> <br /> */}
    </main>

    {/* {taskModal && <Task />} */}
    </>
  );
}
