import sanityClient from "@lib/sanity";
import HousesSection from "components/HousesSection";
import React from "react";

const house = `*[_type == 'houses' && "Casas" in categories[]->title] {
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
  }`;

const aptos = `*[_type == 'houses' && "Apartamentos" in categories[]->title] {
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
  }`;

const bodegas = `*[_type == 'houses' && "Bodegas" in categories[]->title] {
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
  }`;

const terrenos = `*[_type == 'houses' && "Terrenos" in categories[]->title] {
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
  }`;

const otros = `*[_type == 'houses' && "otros" in categories[]->title] {
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
  }`;

async function getCategoriesHouse() {
  const response = await sanityClient.fetch(house);
  return response;
}
async function getCategoriesAptos() {
  const response = await sanityClient.fetch(aptos);
  return response;
}
async function getCategoriesBoddegas() {
  const response = await sanityClient.fetch(bodegas);
  return response;
}
async function getCategoriesOtros() {
  const response = await sanityClient.fetch(otros);
  return response;
}
async function getCategoriesTerrenos() {
  const response = await sanityClient.fetch(terrenos);
  return response;
}

export async function getStaticProps(){
  const dataHouse = await getCategoriesHouse();
  const dataAptos = await getCategoriesAptos();
  const dataBodegas = await getCategoriesBoddegas();
  const dataOtros = await getCategoriesOtros();
  const dataTerrenos = await getCategoriesTerrenos();

  return {
    props: {
      data: {dataHouse, dataAptos, dataBodegas, dataOtros, dataTerrenos}
    }
  }
}

export default function Propiedades({ data }) {
   const {dataHouse, dataAptos, dataBodegas, dataOtros, dataTerrenos} = data
  

  return (
    <div className="max-2xl mx-auto my-2">

      <div>
      {(dataHouse && dataHouse.length > 0) &&  <HousesSection data={dataHouse} title="Casas"   description=''/> }
      {(dataAptos && dataAptos.length > 0) &&  <HousesSection data={dataAptos} title="Apartamentos"   description=''/>}
      {(dataBodegas && dataBodegas.length > 0) &&  <HousesSection data={dataBodegas} title="Bodegas"   description=''/>}
      {(dataTerrenos && dataTerrenos.length > 0) &&  <HousesSection data={dataTerrenos} title="Terrenos"   description=''/>}
      {(dataOtros && dataOtros.length > 0) &&  <HousesSection data={dataOtros} title="otros"   description=''/>}
   
      </div>
      <div></div>
      <div></div>
      <div></div>
        {

        }

    </div>
  );
};


