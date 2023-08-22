import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'

const App = () => {
  return (
    <div className="m-0 p-0 flex flex-col justify-center items-center gap-[100px] box-border min-h-screen text-white snap-center snap-mandatory ">
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App;
