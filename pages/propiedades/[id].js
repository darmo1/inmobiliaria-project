import React from "react";
import { sanityClient , urlFor } from "../../lib/sanity";
import { useRouter } from "next/router";
import CardHouses from "../../components/CardHouses";
import DetailHouses from "../../components/DetailHouses";
import { Carousel } from 'react-responsive-carousel';
import useWindowSize from '../../Hooks/useWindowSize'


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
      const dataFilter = data.filter(({ _id }) => _id === id);
      setApartment(dataFilter)
      setLoading(false)
    }
    fetchData();
  }, [id]);

  const { width } = useWindowSize()

  const displayCount = width >= 640 ? 3 : 1
    const [currentIndex, setSlide] = React.useState(0)

  return (
    <main className="p-4" id="properties">
      <h1 className="mx-auto text-4xl text-center my-4">Propiedades</h1>

      {loading ? (
        <div>Cargando ....</div>
      ) : apartment.length === 0 ? (
        <div>En este momento no está disponible esta propiedad</div>
      ) : (
        <>
        <Carousel
        dynamicHeight={false}  
         showThumbs={false}
         infiniteLoop={true}
         showStatus={false}
         showArrows={true}
         autoPlay={false}
         stopOnHover={true}
         swipeable={true}
         className="flex justify-center mx-auto py-8"
         width={1200}
        
         centerMode
         centerSlidePercentage={100 / displayCount}
         selectedItem={currentIndex}
        >
          
         <div>
         <img
          src={`${urlFor(apartment[0].image)}`}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
        />
         </div>
        {apartment[0]?.["image-dos"] ? (
         <div>
            <img
            src={`${urlFor(apartment[0]?.["image-dos"])}`}
            alt="houses"
            className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
          />
         </div>
        ) : null}
        {apartment[0]?.["image-tres"] ? (
         <div>
            <img
            src={`${urlFor(apartment[0]?.["image-tres"])}`}
            alt="houses"
            className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
          />
         </div>
        ) : null}
        {apartment[0]?.["image-cuatro"] ? (
          <div>
            <img
            src={`${urlFor(apartment[0]?.["image-cuatro"])}`}
            alt="houses"
            className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
          />
          </div>
        ) : null}
        {apartment[0]?.["image-cinco"] ? (
         <div>
            <img
            src={`${urlFor(apartment[0]?.["image-cinco"])}`}
            alt="houses"
            className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
          />
         </div>
        ) : null}
          
        </Carousel>
          <DetailHouses card={apartment[0]} />
        </>
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
