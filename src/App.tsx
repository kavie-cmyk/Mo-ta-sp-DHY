import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Platform } from './components/Platform'
import { StudentJourney } from './components/StudentJourney'
import { Lecturer } from './components/Lecturer'
import { AIRoles } from './components/AIRoles'
import { HMU } from './components/HMU'
import { NextStep } from './components/NextStep'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Platform />
        <StudentJourney />
        <Lecturer />
        <AIRoles />
        <HMU />
        <NextStep />
      </main>
      <Footer />
    </>
  )
}
