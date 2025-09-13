import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/Aboutpage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element= {<HomePage />} />
    <Route path='/about' element= {<AboutPage />} />
  </Route>
))

const App = ()=>{
  return(
    <RouterProvider router={router} />
  )
}

export default App