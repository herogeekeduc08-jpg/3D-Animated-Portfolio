import { useEffect, useRef, useState } from "react"
import "./portfolio.css"
import { motion, useScroll, useTransform } from "motion/react"

const items =[
   {
    id: 1,
    img: "/p1.jpg",
    title: "Aplicação Blog Full Stack",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
    link: "/",
  },
]

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    },
  }
}

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  }
}

const ListItem = ({item}) => {

  return(
    <div className="pItem">
      <div className="pImg">
        <img src={item.img} alt="" />
      </div>
      <div className="pText">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>

      </div>
    </div>
  )
}

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0)

  const ref = useRef()

  useEffect(()=>{
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    }

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    }
  },[])
  
  const {scrollYProgress} = useScroll({target:ref})

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  )

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{x:xTranslate}}>
        <div 
          className="empty"
          style={{width: window.innerWidth - containerDistance}}
        />
        {items.map(item=>(
          <ListItem item={item} key={item.id}/>
        ))}
      </motion.div>
      <section/>
      <section/>
      <section/>
      <section/>
      <section/>
    </div>
  )
}

export default Portfolio