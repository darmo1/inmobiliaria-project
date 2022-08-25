import React from "react";
import { Carousel } from "react-responsive-carousel";
import { sanityClient, urlFor } from "../../lib/sanity";

const CarouselComponent = ({ data , displayCount, currentIndex}) => {
  const [apartment] = data;
  return (
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
      centerMode
      centerSlidePercentage={100 / displayCount}
      selectedItem={currentIndex}
    >
      <div>
        <img
          src={`${urlFor(apartment.image)}`}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
        />
      </div>
      <div>
        <img
          src={`${urlFor(apartment?.["image-dos"])}`}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
        />
      </div>
      <div>
        <img
          src={`${urlFor(apartment?.["image-tres"])}`}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
        />
      </div>
      <div>
        <img
          src={`${urlFor(apartment?.["image-cuatro"])}`}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
        />
      </div>
      <div>
        <img
          src={`${urlFor(apartment?.["image-cinco"])}`}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full md:w-1/2 p-2 rounded-2xl"
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
