import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import './App.css'
import {OrderProvider} from "./contexts/OrderContext"



function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
        <Router />
      </OrderProvider>
    </BrowserRouter>
  )
}

export default App
