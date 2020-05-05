import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

export default () => {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      <div className="carouselItem">
        <img
          src="/carousel/image.png"
          srcset="/carousel/image@2x.png 2x,
             /carousel/image@3x.png 3x"
          class="Image"
        />
        <h3>Suspension mejorada</h3>
        <p>Mejor control de marcha estabilidad y capacidad de offroad</p>
      </div>
      <div className="carouselItem">
        <img
          src="/carousel2/image.png"
          srcset="/carousel2/image@2x.png 2x,
             /carousel/image@3x.png 3x"
          class="Image"
        />
        <h3>Suspension mejorada</h3>
        <p>Mejor control de marcha estabilidad y capacidad de offroad</p>
      </div>
      <div className="carouselItem">
        <img
          src="/carousel3/image.png"
          srcset="/carousel3/image@2x.png 2x,
             /carousel3/image@3x.png 3x"
          class="Image"
        />
        <h3>Suspension mejorada</h3>
        <p>Mejor control de marcha estabilidad y capacidad de offroad</p>
      </div>
      <div className="carouselItem">
        <img
          src="/carousel4/image.png"
          srcset="/carousel4/image@2x.png 2x,
             /carousel4/image@3x.png 3x"
          class="Image"
        />
        <h3>Suspension mejorada</h3>
        <p>Mejor control de marcha estabilidad y capacidad de offroad</p>
      </div>
      <div className="carouselItem">
        <img
          src="/img.png"
          srcset="/img@2x.png 2x,
             /img@3x.png 3x"
          class="Image"
        />
        <h3>Suspension mejorada</h3>
        <p>Mejor control de marcha estabilidad y capacidad de offroad</p>
      </div>
      <div className="carouselItem">
        <img
          src="/1.png"
          srcset="/1@2x.png 2x,
             /1@3x.png 3x"
          class="Image"
        />
        <h3>Suspension mejorada</h3>
        <p>Mejor control de marcha estabilidad y capacidad de offroad</p>
      </div>
    </InfiniteCarousel>
  );
};
