import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/main'
import { RouterProvider } from 'react-router-dom'
import { SholderArticlePage } from './pages/sholderArticle'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainPage/>
    },
    {
      path:"/sholderArticle/gym",
      element:<SholderArticlePage/>
    }
  ])

  return (    
    <RouterProvider router = {router}/>    
  )
}

export default App
