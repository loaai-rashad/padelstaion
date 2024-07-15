import { useRef, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import images from './images';
import './Slider.css';

const Slider = () => {
   const carouselref = useRef();
   const [width, setwidth] = useState(0);

   useEffect(() => {
      setwidth(carouselref.current.scrollWidth - carouselref.current.offsetWidth)

   }, []);
   return (
      <div>
         <motion.div
            ref={carouselref}
            className="carousel">


            <motion.div drag="x"
               dragConstraints={{ right: 0, left: -width }}
               className="inner-carousel">

               {images.map((image) => (
                  <motion.div className="item" key={image}>
                     <img src={image} alt="carousel-img" />
                  </motion.div>
               ))}
            </motion.div>
         </motion.div>
      </div>
   )
}

export default Slider
