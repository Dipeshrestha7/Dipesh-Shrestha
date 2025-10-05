import React from 'react'
import Header from './Components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer'
import CustomCursor from './Components/CustomCursor'
import { AnimatePresence, motion } from 'framer-motion'

function Layout() {
  const location = useLocation()
  return (
    <>
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default Layout