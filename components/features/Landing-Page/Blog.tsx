import Image from "next/image";
import Link from "next/link";

import Article1 from "@/assets/articles/article1.png";
import Article2 from "@/assets/articles/article2.png";
import Article3 from "@/assets/articles/article3.png";
import { ArrowRight } from "lucide-react";
import React from "react";

const articles = [
  {
    id: 1,
    title: "Children's Day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
    img: Article1,
  },
  {
    id: 2,
    title: "World Environment Day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
    img: Article2,
  },
  {
    id: 3,
    title: "Independence day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
    img: Article3,
  },
];

const Blog = () => {
  return (
    <section className="p-6 lg:p-8 space-y-7">
      <h1 className="text-lg">Articles and Guides</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:justify-center place-items-center">
        {articles.map((article) => {
          return (
            <article
              key={article.id}
              className="w-full border border-reserved-50 max-w-[350px] rounded-sm"
            >
              <div className="rounded-sm relative bg-[#F4F4F4] h-[250px]">
                <Image
                  src={article.img}
                  fill
                  placeholder="blur"
                  alt={article.title}
                />
              </div>
              <section className="p-[20px] pt-0 flex flex-col gap-3 bg-[#F4F4F4]">
                <h4 className="text-sm font-semibold">{article.title}</h4>
                <p className="opacity-60">{article.description}</p>
                <Link
                  href={"#"}
                  className="flex items-center gap-1 text-brandColor"
                >
                  Read more <ArrowRight />
                </Link>
              </section>
            </article>
          );
        })}
      </div>
      <Link href={"#"} className="flex items-center justify-end gap-1">
        More articles
        <span className="rotate-[-45deg]">
          <ArrowRight />
        </span>
      </Link>
    </section>
  );
};

export default Blog;
