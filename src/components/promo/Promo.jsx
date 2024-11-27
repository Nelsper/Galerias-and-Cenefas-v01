import React, { useEffect } from "react";
import "./css/promo.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import promos from "./dataPromo";

const Promo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      loop: true,
    },
    [Autoplay({ delay: 3000 })]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Asegura que el carrusel se inicializa correctamente
    }
  }, [emblaApi]);

  return (
    <>
      <div className="promo">
        <div className="promo__viewport" ref={emblaRef}>
          <div className="promo__container">
            {promos.map((promo) => (
              <div className="promo__slide" key={promo.id}>
                <img src={promo.img} alt="Promociones" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
