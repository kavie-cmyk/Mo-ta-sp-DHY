import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { StudentJourney } from './components/StudentJourney'
import { Story } from './components/Story'
import { Lecturer } from './components/Lecturer'
import { AIRoles } from './components/AIRoles'
import { Modality } from './components/Modality'
import { Comparison } from './components/Comparison'
import { Anatomy } from './components/Anatomy'
import { FeedbackLoop } from './components/FeedbackLoop'
import { Governance } from './components/Governance'
import { LMSHMU } from './components/LMSHMU'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <StudentJourney />
        <Story />
        <Lecturer />
        <AIRoles />
        <Modality />
        <Comparison />
        <Anatomy />
        <FeedbackLoop />
        <Governance />
        <LMSHMU />
      </main>
      <Footer />
    </>
  )
}
