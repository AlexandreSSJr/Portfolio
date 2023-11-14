import './App.scss'

import { useEffect, useState } from 'react'

import Contact from './pages/contact'
import Projects from './pages/projects'

function App() {
  const [test, setTest] = useState(false)

  useEffect(() => {
    console.debug(test)
  }, [test])

  const swapTest = () => {
    setTest(!test)
  }

  return (
    <>
      <div className="absolute inset-x-0 top-6 flex flex-1 items-center justify-center p-4">
        <div onClick={swapTest}>
          <h1>{'Alex Santos'}</h1>
          <h2>{'Portfolio'}</h2>
        </div>
      </div>
      <div className="mt-40">
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
