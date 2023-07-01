import React from "react";

const Section5 = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
      author: "Lorem ipsum",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
      author: "Lorem ipsum",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
      author: "Lorem ipsum",
    },
  ];

  return (
    <section className="p-6 lg:p-8 space-y-7">
      <h1 className="text-xl">Lorem</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:justify-center place-items-center">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.id}
              className="p-[20px] border border-[#D9D9D9] lg:w-[350px] rounded-sm space-y-3"
            >
              <div className="lg:w-[310px] h-[226px] bg-[#D9D9D9] rounded-sm"></div>
              <div className="space-y-5">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <p>{blog.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section5;
