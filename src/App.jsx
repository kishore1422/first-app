
import './App.css'
import { motion } from 'motion/react'

function App() {

  return (
    <>
      <motion.div
     
      animate = {{
        x : [0,1200,1200,0,0],
        y : [0,0,700,700,0],
        rotate : 360
      }}
      transition={{
        delay: 1 ,
        duration : 5,
        repeat: Infinity,
        ease: "anticipate"
      }}
       id='box'
       ></motion.div>
     <h1 className='text-3xl m-1 font-bold p-4 border-2 text-center text-cyan-300 backdrop-blur-2xl'> Hello I am  Nanda kishore  </h1>
     <p className='text-center'> I am learning React </p>
     <br></br>

     <div className = ' w-90 mx-auto object-cover rounded-lg bg-gray-300  p-10 flex flex-col items-center justify-center '>
      <img  className = "rounded-4xl "src="Wallpaper.png" alt="picture" />
      <div>
        <h1 className=' text-cyan-400 bg-blend-color text-xl rounded-3xl m-1 p-2'> This is Mother and Daughter</h1>
        <p className=' text-black text-sm text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat et perferendis sapiente maxime repudiandae inventore alias, dolores, consequatur vero laboriosam consectetur hic recusandae provident ad dolore voluptate aperiam ullam?
        </p>

      </div>
     </div>
     <hr></hr>
     <br></br>
   
    </>
  )
}

export default App
