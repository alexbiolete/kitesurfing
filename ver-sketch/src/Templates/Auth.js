import { useState } from 'react'
import Navbar from '../Organisms/Navbar'
import Dashboard from '../Pages/Auth/Dashboard'

const Auth = ({ spots, favourites }) => {
  const [showModalAddSpot, setShowModalAddSpot] = useState(false)

  return (
    <div>
      <Navbar showModalAddSpot={showModalAddSpot} setShowModalAddSpot={setShowModalAddSpot} />
      <Dashboard spots={spots} showModalAddSpot={showModalAddSpot} setShowModalAddSpot={setShowModalAddSpot} favourites={favourites} />
    </div>
  )
}

export default Auth
