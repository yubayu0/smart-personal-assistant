
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DashbordPages from "./pages/DashbordPages"
function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<DashbordPages/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
