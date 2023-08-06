"use client";

import { useGetTasksQuery } from "@/redux/features/tasks/taskApiSlice";
import React from "react";

import Main from "./main";

type Props = {};

export default function Page({}: Props) {
  // Added "arguments" to the useGetTasksQuery hook
  const {
    data: users,
    isError,
    isLoading,
    isSuccess,
  } = useGetTasksQuery(arguments);
  return <Main />;
}
