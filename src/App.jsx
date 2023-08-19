import './App.css'
import { MuiAutocomplete } from './components/MuiAutocomplete'
import MuiButton from './components/MuiButton'
import { MuiCheckbox } from './components/MuiCheckbox'
import { MuiRadioButton } from './components/MuiRadioButton'
import { MuiRaiting } from './components/MuiRaiting'
import MuiSelect from './components/MuiSelect'
import { MuiSwitch } from './components/MuiSwitch'
import MuiTextField from './components/MuiTextField'
import MuiTypography from './components/MuiTypography'

function App() {

  return (
    <>
      <div className='App'>
        <h5>TYPHOGRAPHY</h5>
         <MuiTypography />
         <hr />
         <h5>BUTTONS</h5>
         <MuiButton />
         <hr />
         <h5>TEXT FIELD</h5>
         <MuiTextField />
         <hr />
         <h5>SELECT</h5>
         <MuiSelect />
         <hr />
         <h5>RADIO BUTTON</h5>
         <MuiRadioButton />
         <hr />
         <h5>CHECKBOX</h5>
         <MuiCheckbox />
         <hr />
         <h5>SWITCH</h5>
         <MuiSwitch />
         <hr />
         <h5>RAITING</h5>
         <MuiRaiting />
         <hr />
         <h5>AUTOCOMPLETE</h5>
         <MuiAutocomplete />
      </div>
    </>
  )
}

export default App
