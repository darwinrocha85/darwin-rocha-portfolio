import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import RelevantProject from './components/RelevantProject'
import OtherProjects from './components/OtherProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
        <RelevantProject />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
