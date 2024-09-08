import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const gridContainerVariats = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren:0.25,
    }
  }
}

const gridSquareVariants = {
  hidden: { opacity : 0 }, show: { opacity : 1 }
}

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252,211,77,1)",
  }
}

function App() {
  const  { scrollYProgress: completionprogress } = useScroll()

  const containerRef = useRef(null)

  const isInView = useInView(containerRef, {once:true})
  const mainControls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0,1],
    ["-100%","0%"]
  )

  const paragraphTwoValue = useTransform(
    scrollYProgress, 
    [0,1], 
    ["100%", "0%"]
  )

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])

  return (
   <div className="flex-flex-col gap-10 overflow-x-hidden">
    <motion.section
    variants={gridContainerVariats}
    initial="hidden"
    animate="show"
    className="grid grid-cols-3 p-10 gap-10">
      <motion.div 
      variants={gridSquareVariants}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
        <motion.div
        className='w-20 h-20 bg-stone-100 rounded-lg'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{
          opacity: { duration: 2, ease: "easeOut", delay: 0.2 },
          y: { duration: 1, ease: "easeOut", delay: 0.2 },
        }}
        ></motion.div>
        <motion.div
        className='w-20 h-20 bg-stone-100 rounded-full'
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{
          opacity: { duration: 2, ease: "easeOut", delay: 0.2 },
          y: { duration: 1, ease: "easeOut", delay: 0.2 },
        }}
        ></motion.div>
      </motion.div>
      <motion.div 
      variants={gridSquareVariants}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
        <motion.div
        className='w-1/3 h-1/3 shadow-md bg-rose-400'
        animate={{
          scale: [1,2,2,1],
          rotate:[0,90,90,0],
          borderRadius: ["10%","10%","50%","10%"]
        }}
        transition={{
          duration:5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay:1
        }}
        ></motion.div>
      </motion.div>
      <motion.div 
      variants={gridSquareVariants}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
        <motion.button
          whileTap={{scale:0.9}}
          whileHover={{
            scale:1.1,
            backgroundColor: "#d1d5db",
            color: "black"
          }}
          transition={{bounceDamping:10, bounceStiffness: 600}}
          className='bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide'
        >
          Button
        </motion.button>
      </motion.div>
      <motion.div 
      variants={gridSquareVariants}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
        <motion.div
        className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
        drag
        dragConstraints={{
          top:-125, right:125,bottom:125, left:-125
        }}
        dragTransition={{bounceDamping:10, bounceStiffness:600}}
        ></motion.div>
      </motion.div>
      <motion.div 
      variants={gridSquareVariants}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
        <motion.div
          className='w-40 aspect-square bg-gray-50/20 rounded-xl'
        >
          <motion.div 
            className='w-full bg-gray-400 rounded-xl h-full origin-bottom' style={{scaleY:completionprogress}}
          ></motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
      variants={gridSquareVariants}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-1/2 stroke-amber-500 stroke-[0.5]"
        >
          <motion.path
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            variants={svgIconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: {
                duration:2,
                ease:"easeInOut",
                delay:1,
                repeat:Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
              fill: {
                duration: 2,
                ease: "easeIn",
                delay: 2,
                repeat:Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
          ></motion.path>
        </motion.svg>
      </motion.div>
    </motion.section>
    <section className='flex flex-col gap-10 mb-10' ref={containerRef}>
      <motion.h1 className='text-5xl tracking-wide text-slate-100 text-center' 
      animate={mainControls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y:75 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{delay:0.3}}
      >
        Just Keep Scrolling
      </motion.h1>
      <motion.p className='text-slate-100 font-thin text-xl w-1/2 mx-auto'
        style={{translateX: paragraphOneValue}}  
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis quibusdam perferendis, dolores ab laborum maxime dicta aliquid ipsam doloribus alias, delectus autem? Reprehenderit consectetur, debitis, impedit fuga suscipit veritatis eveniet doloremque officia recusandae iure praesentium doloribus distinctio, saepe veniam nostrum alias! Tenetur deserunt, odit nostrum ut expedita repellat dolor?</motion.p>
      <motion.p className='text-slate-100 font-thin text-xl w-1/2 mx-auto'
        style={{translateX: paragraphTwoValue}}  
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est atque similique non at illo vel beatae? Voluptatum aperiam, atque delectus voluptas eaque similique recusandae nulla dolore doloremque sint minima debitis ipsam animi velit modi quae mollitia in. Optio dicta numquam fugit quaerat voluptas est saepe autem quas ipsum id.</motion.p>
    </section>
   </div>
  )
}

export default App
