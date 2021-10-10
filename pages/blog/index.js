import * as React from "react";
import { sanityClient } from "../../lib/sanity";
import { useRouter } from "next/router";
import Link from "next/link";
import CardPosts from "../../components/CardPosts";


export default function Blog({ response }) {
  console.log(response, "response data post");

  const [search, setSearch] = React.useState("");

  return (
    <main  className="max-w-5xl mx-auto">
      
      <div className="flex md:flex-wrap m-4">
      {response.map(( post, index )=> {
          return (
            <Link href={"/blog/" + post.slug.current} key={index} passHref>
          <a>
            <CardPosts post={post} />
          </a>
        </Link>
          )
      })}
        
 
      </div>
    </main>
  );
}

const queryBlogData = `*[_type == "post"] | order(publishedAt desc){
    title,
    slug,
    mainImage{
        asset->{
            _id,
            url
        },
        alt
    },
    summary,
    publishedAt,
    'name': author->name,
    'authorImage': author->image
  }`;

export async function getStaticProps() {
  const response = await sanityClient.fetch(queryBlogData);

  return {
    props: {
      response,
    },
    revalidate: 10,
  };
}
