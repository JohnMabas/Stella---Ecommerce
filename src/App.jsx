import './App.css'
import Cards from './Components/Cards'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
  <Header />
  <Hero />
  <Nav />

  <section className='flex '>
    <Sidebar />
    <Cards />
    
  </section>
     
    </>
  )
}

export default App
