import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import FeatureServices from "../components/FeatureServices";
import HousesSection from "../components/HousesSection";
import Products from "../components/Products";
import sanityClient  from "../lib/sanity";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Equipo from "../components/Equipo";
import Blog from "../components/Blog";
import { BannerPromo } from "../components/BanerPromo";
import Grid from "../components/Grid";
import useWindowSize from "../Hooks/useWindowSize";
import PQRS from "../components/PQRS";

export default function Home({ data, dataEquipo, posts }) {
  const { width } = useWindowSize();

  return (
    <React.Fragment>
      <Head>
        <title>Inmobiliaria Don Quijote</title>
        <meta
          name="description"
          content="Generated by Inmobiliaria Don Quijote"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <Banner /> */}
      {/* <BannerPromo /> */}
      <br />
      <Products />


      <HousesSection data = {data}/>
      {/* <BannerPromo image='/banner2.jpg'  background="bg-bannerColor2"  /> */}
      <Equipo dataEquipo={dataEquipo} />
      <FeatureServices />
      {/* <Blog posts={posts} /> */}
      <PQRS />
      {
        width < 768 ? null : <Grid />
      }
      
    </React.Fragment>
  );
}

const queryHouses = `*[_type == 'houses'] | order(_createdAt asc)[0..9]{
  _id,
  address,
  bathroom,
  cocinas,
  comedor,
  habitaciones,
 'image': image.asset->url,
  name,
  order,
  parqueadero,
  patios,
  price,
  sala,
  valoracion,
  piscina
}
`;

const queryEquipo = `*[_type == 'equipo']{
  name,
  _id,
  'image': image.asset->url,
  descripcion,
  order
  
}`;

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
}[0...3]`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(queryHouses);
  const dataEquipo = await sanityClient.fetch(queryEquipo);
  const dataBlog = await sanityClient.fetch(queryBlogData);

  return {
    props: { data, dataEquipo, posts: dataBlog },
    revalidate: 10,
  };
}
