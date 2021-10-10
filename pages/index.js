import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import FeatureServices from "../components/FeatureServices";
import HousesSection from "../components/HousesSection";
import Products from "../components/Products";
import { sanityClient } from "../lib/sanity";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

export default function Home({data}) {
  return (
    <React.Fragment>
      <Head>
        <title>Inmobiliaria Don Quijote</title>
        <meta
          name="description"
          content="Generated by Inmobiliaria Don Quijote"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Banner />
      <Products />
      <HousesSection data = {data}/>
      <FeatureServices />





    </React.Fragment>
  );
}

const queryHouses = `*[_type == 'houses']{
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

export async function getStaticProps() {

  const data =  await sanityClient.fetch(queryHouses)
  return {
    props: { data },
    revalidate: 10,
  };
}
