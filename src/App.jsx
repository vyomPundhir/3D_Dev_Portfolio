import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'

const App = () => {
  return (
    <div className="m-0 p-0 box-border min-h-screen text-white snap-center snap-mandatory bg-gradient-to-r from-[#000000] to-[#021914]">
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App;
