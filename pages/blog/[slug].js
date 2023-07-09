'use client'
import * as React from "react";
import { useRouter } from "next/router";
import sanityClient from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
import LayoutSecundary from "../../Layout/LayoutSecundary";

export default function Post() {
  const router = useRouter();
  const slug = router.query.slug;

  const [currentPost, setCurrentPost] = React.useState([]);

  const URL = `*[slug.current == '${slug}']{
    title,
    _id,
    slug,
    'mainImage': mainImage{
    asset->{
            _id,
            url
            },
  },
  body,
   publishedAt,
   'name': author->name,
   'authorImage': author->image
  }
  `;

  React.useEffect(async () => {
    try {
      const res = await sanityClient.fetch(URL);
      setCurrentPost(res[0]);
    } catch (err) {
      console.log(err);
    }
  }, [slug]);

  return (
    <LayoutSecundary showBanner={true}>
      <main className="px-8 sm:-mt-56 ">
        {currentPost ? (
          <React.Fragment>
            <div
              className="parallax-container"
              style={{
                backgroundImage: `url(${currentPost?.mainImage})`,
              }}
            ></div>
            <div className="max-w-5xl mx-auto ">
              <h1 className="text-center text-4xl my-8">{currentPost.title}</h1>
              <div className="post-details">
                <div className="text-center">
                  {new Date(currentPost.publishedAt).toLocaleDateString()}
                </div>
                <p className="text-center mb-8">{`Escrito por:  ${currentPost.name}`}</p>
              </div>
              <div className="block-content mb-20">
                {/* <BlockContent
                  blocks={currentPost.body}
                  projectId="68f3de3x"
                  dataset="production"
                /> */}
              </div>
            </div>
          </React.Fragment>
        ) : null}
        <style jsx>{`
          .parallax-container {
            background-attachment: fixed;
            background-position: top;
            background-repeat: no-repeat;
            background-size: cover;
            height: 550px;
          }

          .post-details {
            max-width: 300px;
            margin: 0 auto;

            justify-content: space-around;
          }

          .block-content {
            word-wrap: break-word;
            line-height: 2;
            text-align: justify;
          }
        `}</style>
      </main>
    </LayoutSecundary>
  );
}

const queryPost = `*[_type == 'post']{
    title,
    _id,
    slug,
     mainImage{
    asset->{
            _id,
            url
            },
  },
  body,
   publishedAt,
   'name': author->name,
   'authorImage': author->image
  }
  `;

