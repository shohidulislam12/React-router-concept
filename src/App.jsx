
import './App.css'
import Phones from './assets/Phones/Phones'
import LineChart from './assets/PriceOption/LineChart/LineChart'

import PriceOptions from './assets/PriceOption/priceOptions'

import NAvbar from './Components/Navbar/NAvbar'

function App() {


  return (
    <>
    
  <NAvbar></NAvbar>

    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>
 
    </>
  )
}

export default App
