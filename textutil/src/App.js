import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import TextForrm from './Component/TextForrm';
import { useState } from 'react';
import Alert from './Component/Alert';
import About from './Component/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

<Router>



</Router>


// import About from './Component/About';

function App() {
 const [mode, setmode] = useState('light');
 const [alert1, setalert]= useState(null);

    const Showalert=(massage, type)=>{
       setalert({
        mgs: massage,
        type: type
       })
       setTimeout(() => {
        setalert(null)
       }, 2000);
    }
 const togglemodes = ()=>{
  if(mode==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743;';
    Showalert("darkmode has been enabled", "success")
  }
  else{
    setmode('light');
    document.body.style.backgroundColor='skyblue';
    Showalert("darkmode has been enabled", "success")


  }
 }
  return (
   <>
  <Router>
<NavBar title="TextUtils" aboutText="AboutTextUtil" link="Link" dropdown="DropDown" disable="Disable" search="Search" 
 mode = {mode} toglemode={togglemodes}/>
 <Alert alert={alert1}/>
<div className='container my-3' >

<Switch>
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/">
          <TextForrm firsth1text="enter the below textarea"  Showalert={Showalert} mode = {mode}   />
          </Route>
        </Switch>

<div style={{backgroundColor:'rgb(255, 99, 71)'}}>
</div>
<About/>
</div>
</Router>
   </>
  );
}

export default App;
