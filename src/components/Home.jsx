import React from 'react'
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2>Welcome to Cricket Prediction</h2>
      <p>Use our platform to predict cricket match outcomes!</p>
    </motion.div>
  )
}

export default Home
