import './App.css'
import ProductProvider from './Context/ProductProvider'
import router from './Route/Route'
import {RouterProvider} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      <ProductProvider>
      <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
     
    </div>
  )
}

export default App
