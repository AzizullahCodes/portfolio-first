
import './App.css'
import MyNavbar from './components/navbar/navbar'
import MyRoutes from './utils/routes'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer/footer'

function App() {
 
  return (
   <BrowserRouter>
   <MyNavbar/>
   <MyRoutes/>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
