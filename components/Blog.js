import React from "react";
import Link from "next/link";
import CardPosts from "./CardPosts";
const Blog = ({ posts }) => {
  return (
    <React.Fragment>
      <section className="bg-balls w-full py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl text-center mb-8">Blog</h1>
          <div className="flex md:flex-nowrap  flex-wrap">
            {posts.map((post, index) => {
              return (
                <Link
                  href={"/blog/" + post.slug.current}
                  key={index}
                  passHref
                  className="px-4 md:px-2"
                >
                  <CardPosts post={post} />
                </Link>
              );
            })}
          </div>

          <Link
            href={`/blog`}
            className="flex justify-center text-xl font-semibold hover:text-blue-500"
          >
            Ver todos los posts
          </Link>
        </div>
      </section>
      <style jsx>{`
        .bg-balls {
          background-image: url("/balls.svg");
          min-height: 700px;
          repeat: no-repeat;
          background-size: cover;
          background-position: bottom;
          position: relative;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Blog;
