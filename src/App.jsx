
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {


  return <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
    </Routes>
  </>
}

export default App
