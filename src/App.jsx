import React from 'react' 
import Header from './component/Header'
import Hero from './component/hero/Hero'
import Cards from './component/card Section/cards'
import About from './component/about section/About'
import Commint from './component/commint section/commint'
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <About />
      <Commint />
    </div>
  )
}

export default App

