import Blog from './components/Blog'
import Contact from './components/Contact'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Who from './components/Who'
import Works from './components/Works'

const App = () => {
  return (
    <div className="m-0 p-0 flex flex-col justify-center items-center gap-[80px] box-border min-h-screen text-white snap-center snap-mandatory ">
      <Hero />
      <Who/>
      <TechStack/>
      <Works/>
      <Blog />
      <Contact/>
    </div>
  )
}

export default App;
