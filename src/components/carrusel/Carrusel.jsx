import { useCallback, useEffect } from "react";
import "./css/carrusel.css";
import useEmblaCarousel from "embla-carousel-react";
import slides from "../../data/dataCarrousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronUp,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Carrusel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Asegura que el carrusel se inicializa correctamente
    }
  }, [emblaApi]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <div className="embla__slide" key={slide.id}>
                <img src={slide.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="btns">
                <button className="embla__button embla__button--prev" onClick={scrollPrev}>
                    <FontAwesomeIcon icon={faCircleChevronDown} size='2xl'/>
                 </button>
                <button className="embla__button embla__button--next" onClick={scrollNext}>
                    <FontAwesomeIcon icon={faCircleChevronUp} size='2xl'/>
                </button>
            </div>
    </>
  );
};

export default Carrusel;
