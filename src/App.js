import React ,{useState}from 'react'
import './App.css'
import Login from './component/Login'
import TableData from './component/TableData'
const App = () => {
  const [loginView,setloginView]=useState(true);
  const loginHandle=(data)=>setloginView(data);
  return (
    <>
    { loginView ? <Login loginHandle={loginHandle}/>:<TableData/>}
    </>
    
  )
}

export default App