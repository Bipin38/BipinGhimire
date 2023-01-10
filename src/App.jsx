import React from 'react'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Navbar from './component/nav/Navbar'
// import Portfolio from './component/portfolio/Portfolio'
// import Testimonial from './component/testimonial/Testimonial'

function App(){
  return (
    <>
        <Header />
        <Navbar />
        <About />
        <Experience />
        {/* <Portfolio /> */}
        {/* <Testimonial /> */}
        <Contact />
        <Footer />

    </>
  )
}

export default App;