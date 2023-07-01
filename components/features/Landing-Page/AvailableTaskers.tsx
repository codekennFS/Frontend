import React from "react";

const tasks = [
  {
    id: 1,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 2,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 3,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 4,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 5,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 6,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 7,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 8,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 9,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
  {
    id: 10,
    title: "Cleaning",
    participants: "cleaners",
    online: 23,
  },
];

const AvailableTaskers = () => {
  return (
    <section className="flex flex-col gap-6 p-6 lg:p-8">
      <h1 className="text-xl">Lorem ipsum</h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {tasks.map((task) => {
          return (
            <div key={task.id} className="space-y-3">
              <div className="lg:w-[182px] h-[168px] bg-reserved-100 rounded-[17px]"></div>
              <div>
                <p className="text-sm font-semibold">{task.title}</p>
                <p>{task.online + " " + task.participants + " online"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AvailableTaskers;
