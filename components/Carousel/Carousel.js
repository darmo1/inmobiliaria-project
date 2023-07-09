import React from "react";
import Slider from "react-slick";

const CarouselComponent = ({ data }) => {
  const [apartment] = data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="my-8">
    <Slider {...settings}>
      {apartment?.image && <div>
        <img
          src={apartment?.image}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-dos"] && <div>
        <img
          src={apartment?.["image-dos"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-tres"] && <div>
        <img
          src={apartment?.["image-tres"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-cuatro"] && <div>
        <img
          src={apartment?.["image-cuatro"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-cinco"] && <div>
        <img
          src={apartment?.["image-cinco"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-seis"] && <div>
        <img
          src={apartment?.["image-seis"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}

      {apartment?.["image-siete"] && <div>
        <img
          src={apartment?.["image-siete"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-ocho"] && <div>
        <img
          src={apartment?.["image-ocho"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-nueve"] && <div>
        <img
          src={apartment?.["image-nueve"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
      {apartment?.["image-diez"] && <div>
        <img
          src={apartment?.["image-diez"]}
          alt="houses"
          className="rounded-lg md:h-72  h-22 w-full  p-2 rounded-2xl"
        />
      </div>}
    </Slider>
    </div>
  );
};

export default CarouselComponent;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#5e0817",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#5e0817",
        borderRadius: "10px"
      }}
      onClick={onClick}
    />
  );
}
