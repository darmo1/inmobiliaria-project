
import * as React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardHouses from './CardHouses'
import useWindowSize from '../Hooks/useWindowSize'

const HousesSection = ({data}) => {

    const { width } = useWindowSize()

    const displayCount = width >= 640 ? 3 : 1
    const [currentIndex, setSlide] = React.useState(0)
    return (
        
    <div className="w-full bg-gradient">


<div className=" max-w-4xl mx-auto overflow-hidden py-8">
        <h1 className="text-4xl text-center text-white font-semibold"> Lanzamientos exclusivos  </h1>
        <h2 className="text-xl text-center text-white">Con nuestros lanzamientos exclusivos tendrás la propiedad de tus sueños</h2>
         
         <Carousel
         dynamicHeight={false}  
         showThumbs={false}
         infiniteLoop={true}
         showStatus={false}
         showArrows={true}
         autoPlay={false}
         stopOnHover={true}
         swipeable={true}
         className="flex  py-8"
         width={900}
        
         centerMode
         centerSlidePercentage={100 / displayCount}
         selectedItem={currentIndex}
         >
             
              {data.map( (card, index) => {
                 return (
                     <CardHouses card={card} key={index} />
                 )
             })}




            
         </Carousel>
      </div>
    </div>
    )
}

export default HousesSection
