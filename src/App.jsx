import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import FeaturedProject from './components/FeaturedProject'
import IASolutions from './components/IASolutions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AgentWidget from './components/AgentWidget'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <FeaturedProject />
        <IASolutions />
        <Contact />
      </main>
      <Footer />
      <AgentWidget />
    </>
  )
}
