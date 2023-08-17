import './App.css'
import MuiButton from './components/MuiButton'
import MuiTextField from './components/MuiTextField'
import MuiTypography from './components/MuiTypography'

function App() {

  return (
    <>
      <div>
        <h5>TYPHOGRAPHY</h5>
         <MuiTypography />
         <hr />
         <h5>BUTTONS</h5>
         <MuiButton />
         <hr />
         <h5>TEXT FIELD</h5>
         <MuiTextField />
      </div>
    </>
  )
}

export default App
