import './App.css'
import PracticeBackground from './Components/Practicing-config/practiceBackground'
import router from './Route/Route'
import {RouterProvider} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
      {/* <PracticeBackground>
      </PracticeBackground> */}
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  )
}

export default App
