import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import MoreProjects from './components/MoreProjects'
import OtherProjects from './components/OtherProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AgentWidget from './components/AgentWidget'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Experience />
        <Skills />
        <FeaturedProject />
        <MoreProjects />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
      <AgentWidget />
    </>
  )
}
