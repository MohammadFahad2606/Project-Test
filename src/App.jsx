

import { Routes,Route } from 'react-router'
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Detail from './Pages/Detail'

function App() {
 

  return (
    <>
<Header/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/detail" element={<Detail />} />
  <Route path="/:key" element={<Detail />} />
  <Route path="*" element="404" />
</Routes>;
<Footer/>
    </>
  )
}

export default App
