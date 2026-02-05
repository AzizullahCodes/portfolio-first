
import './App.css'
import MyNavbar from './components/navbar/navbar'
import MyRoutes from './utils/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
 
  return (
   <BrowserRouter>
   <MyNavbar/>
   <MyRoutes/>
   </BrowserRouter>
  )
}

export default App
