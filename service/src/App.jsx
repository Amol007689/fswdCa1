import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceCard from './components/ServiceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ServiceCard name={"Web Development"} description={"We create fast and responsive websites."} />
      <ServiceCard name={"App Development"} description={"We build modern mobile apps."} />
      <ServiceCard name={"UI/UX Design"} description={"We design user-friendly interfaces."} />
    </>
  )
}

export default App
