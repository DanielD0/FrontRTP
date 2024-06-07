import Navbar from './Components/Nabvar/Navbar';
import Home from './Pages/Home'
import RTP from './Pages/RTP'
import User from './Pages/User'
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rtp' element={<RTP />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
