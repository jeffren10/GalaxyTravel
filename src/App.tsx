import {Routes, Route} from 'react-router-dom' 

import Home from './router/Home'
import Pricing from './router/pricing'
import Contact from './router/Contact'
import Training from './router/Training'

function App() {
  return (
      <>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/Training' element={<Training/>} />
          <Route path='/contact' element={<Contact/>} />
         </Routes>
      </>
  );
}

export default App;
