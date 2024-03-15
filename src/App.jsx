import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import HomePortfolio from './components/HomePortfolio'
import HomeHeader from './components/HomeHeader'
import Home from './components/Layouts/Home.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          {/* // http://localhost:3000/ */}
          <Route path='/' element = {<HomeHeader /> }></Route>
          {/* <Route path='/' element = { <HomeHeader />}></Route> */}

        </Routes>
      <FooterComponent/>  
    </BrowserRouter>
    <BrowserRouter>
      <Routes>
        {/* // http://localhost:3000/employees */}
        <Route path='/employees' element = { <ListEmployeeComponents /> }></Route>
        {/* // https://localhost:3000/add-employee */}
        <Route path='/add-employee' element= {<EmployeeComponent/>}></Route>
      </Routes>
    </BrowserRouter>     
    </>
  )
}

export default App
