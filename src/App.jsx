import '@/App.scss'

import Contact from '@/pages/contact'
import Introduction from '@/pages/introduction'
import Projects from '@/pages/projects'

function App() {
  // const [test, setTest] = useState(false)

  // useEffect(() => {
  //   console.debug(test)
  // }, [test])

  // const swapTest = () => {
  //   setTest(!test)
  // }

  return (
    <>
      {/* <div className="absolute inset-x-0 top-6 flex flex-1 items-center justify-center p-4"> */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div>
          <h1>{'Alex Santos'}</h1>
          <h2>{'Portfolio'}</h2>
        </div>
      </div>
      <div className="m-6 flex flex-1 flex-col gap-20 p-6">
        <Introduction />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
