import { useRef, useState } from "react"
import ComputadorContainer from "./computador/ComputadorContainer"
import LeaoContainer from "./leao/LeaoContainer"
import BookContainer from "./livros/BookContainer"
import Counter from "./Counter"
import "./services.css"
import { motion, useInView } from "motion/react"

const textVariants={
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const listVariants={
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    },
  },
}

const service =[
  {
    id: 1,
    img: "/service1.png",
    title: "Desenvolvimento Web",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Design de Produto",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Branding",
    counter: 46,
  }
]

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-200px"});
  return (
    <div className='services' ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate": "initial"}
          className="sTitle"
        >
          Como posso ajudar?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate": "initial"}
          className="serviceList"
        >
          {service.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projetos</h3>
              </div>

            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Projetos Completos"/>
          <Counter from={0} to={72} text="Clientes Felizes"/>
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputadorContainer/>
        ) : currentServiceId === 2 ? (
          <LeaoContainer/>
        ) : (
          <BookContainer/>
         )}
      </div>
    </div>
  )
}

export default Services