import * as  React from "react";
import Link from 'next/link'
import { urlFor } from '../lib/next-sanity.config'


const CardPosts = ({ post }) => {
  return (
    <React.Fragment>
    <article className="mr-2 w-full md:w-auto">
      <div className="border border-gray-200 border-opacity-60 rounded-lg ">
        <img
          src={post.mainImage.asset.url}
          alt="hey"
          className="md:h-36 w-full object-cover object-center rounded-t-lg"
        />
        <div className="p-6 hover:bg-customRedLight hover:text-white transition duration-300 ease-in">
          <h2 className="text-sm font-light text-indigo-300 mb-1">
            {" "}
            {new Date(post.publishedAt).toLocaleDateString()}{" "}
          </h2>
          <h1 className="text-2xl font-semibold mb-3">{post.title}</h1>
          <div className="leading-relaxed mb-3">{post?.summary.substring(0,150)}...</div>

          <div className="justify-center   md:flex md:items-center md:justify-start  my-8 ">
            <img
              src={urlFor(post.authorImage.asset)}
              alt={post.name}
              className="rounded-full w-16 md:w-1/4 md:mr-4"
            />
            <div className="mt-6 md:text-center ">{post.name}</div>
          </div>

          <div className="flex justify-center md:flex md:items-center md:flex-wrap">
          <Link href={"/blog/" + post.slug.current} key={post._id} className=" text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
            
           
              Leer más ...
            
           
            </Link>
          </div>
        </div>
      </div>
    </article>
    <style jsx>{`
    /* .height-article{
      height: 500px;
    } */
    `}</style>
    </React.Fragment>
  );
};

export default CardPosts;
