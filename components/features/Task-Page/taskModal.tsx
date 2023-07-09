import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const TaskModal = ({
  taskId,
  closeFunction,
  queryPresent,
}: {
  taskId: string;
  closeFunction: Function;
  queryPresent: boolean;
}) => {
  const handleClose = () => {
    closeFunction();
  };

  return (
    <AnimatePresence>
      {queryPresent && (
        <motion.section
          key={taskId}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100dvh", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.4,
          }}
          className="absolute bottom-0 flex items-center justify-center w-full overflow-hidden text-xl text-white bg-black"
        >
          <button onClick={handleClose} className="absolute top-5 left-5">
            X
          </button>
          <h1>God Abeggg, my task id is {taskId}</h1>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default TaskModal;
