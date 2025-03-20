import React from 'react'
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5 }}
  >
    <h2>About Cricket Prediction</h2>
    <p>This platform uses advanced algorithms to predict cricket match outcomes.</p>
  </motion.div>
  )
}

export default About