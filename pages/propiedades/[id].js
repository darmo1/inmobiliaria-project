import React from "react";
import { sanityClient } from "../../lib/sanity";
import { useRouter } from "next/router";
import CardHouses from "../../components/CardHouses";
import DetailHouses from "../../components/DetailHouses";

const queryHouses = `*[_type == 'houses']{
    _id,
    address,
    bathroom,
    cocinas,
    comedor,
    detalle,
    habitaciones,
   'image': image.asset->url,
   'image-dos': imagedos.asset->url,
   'image-tres': imagetres.asset->url,
   'image-cuatro': imagecuatro.asset->url,
   'image-cinco': imagecinco.asset->url,
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

const DetallePropiedad = () => {
  const router = useRouter();
  const { id } = router.query;

  const [apartment, setApartment] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const data = await sanityClient.fetch(queryHouses);
      console.log(data, "here from data");
      const dataFilter = data.filter(({ _id }) => _id === id);
      setApartment(dataFilter)
      setLoading(false)
    }
    fetchData();
  }, [id]);

  return (
    <main className="p-4">
      <h1 className="mx-auto text-4xl text-center my-4">Propiedades</h1>

      {loading ? (
        <div>Cargando ....</div>
      ) : apartment.length === 0 ? (
        <div>En este momento no está disponible esta propiedad</div>
      ) : (
        <DetailHouses card={apartment[0]} />
      )}
    </main>
  );
};

export default DetallePropiedad;

// export async function getStaticProps(context) {

//     const data = context
//     console.log(context)
//     // const data = await sanityClient.fetch(queryHouses);
//     // console.log(data)

//     return {
//       props: { data },
//       revalidate: 10,
//     };
//   }
