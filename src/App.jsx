import React from 'react' 
import Header from './component/Header'
import Hero from './component/hero/Hero'
import Cards from './component/card Section/cards'
import About from './component/about section/About'
import Commint from './component/commint section/commint'
import Newsletters from './component/newsletter/Newsletters'
import Footer from './component/footer/Footer'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <About />
      <Commint />
      <Newsletters />
      <Footer />
    </div>
  )
}

export default App

