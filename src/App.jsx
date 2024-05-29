import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/main'
import { RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>
    },    
  ])

  return (    
    <RouterProvider router = {router}/>    
  )
}

export default App
