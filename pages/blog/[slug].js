import * as React from 'react';
import { useRouter } from 'next/router';
import { sanityClient, urlFor } from '../../lib/sanity';


const Post = () => {
    const router = useRouter();
    const slug = router.query.slug;
    
    return (
        <main>

        </main>
    )

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
  `


  export async function getStaticProps(){

    const data = await sanityClient(queryPost)
    console.log(data, 'data')


    return {
      props: {
  
      },
      revalidate:10
    }
  }