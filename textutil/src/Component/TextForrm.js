import react from "react"
import  {useState} from 'react'

function TextForrm(props) {
    // const [text,  seTtext]=useState("enter text here")

  const   handle=()=>{
    const utext=text.toLocaleUpperCase();

    seTtext(utext);
    props.Showalert("convert to uppercase","success")
    

  }
  const loverhandle= ()=>{
    const loverword = text.toLocaleLowerCase();
    seTtext(loverword);
    props.Showalert("convert to lowercase", 'success')
       }
       const cleartext=()=>{
        const clear= '';
        seTtext(clear);

       }
    const handlecopy=()=>{
      var  text = document.getElementById('myform')
   text.select();


    }

    const handlChangee= (event)=>{
        console.log("click handle");
        seTtext( event.target.value);

    }
     let extraspace =()=>{
      let space= text.split(/[ ]+/);
      seTtext(space.join(" "))
     }
        const [text,  seTtext]=useState("enter text here")

  return (
    <>
    <div className="container">
    <h1  style={{color:'white'}}>{props.firsth1text}
</h1>
      

      
<div className="mb-3"style={{backgroungColor: props.mode==='dark'?'black':'blue'}} >
  <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:'white'}}>Example textarea</label>
  <textarea className="form-control" style={{backgroundColor: props.mode==='white'?'black' :'yellow', color: props.mode==='dark'?'gray':'black'}} id="myform" value ={text} onChange={handlChangee}  rows="3"></textarea>
</div>
<button className="btn btn-primary" onClick={handle}>convert to uppercase</button>

<button className="btn btn-primary mx-2" onClick={loverhandle}>convert to lovercase</button>
<button className="btn btn-primary mx-2" onClick={cleartext}>clear text</button>

<button className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
<button className="btn btn-primary mx-2" onClick={extraspace}>remove extra space</button>



    </div>
    <div className="container"  style={{color:'white'}}>
    <h1 > your text summery</h1>
    <p >
       {text.split(" ").length} word {text.length} charectars
    </p>
    <p  >{ 0.08*text.split(" ").length} minutes read</p>
    <p >priview</p>
    <p  >{text.length>0?text: "enter something in the textbox above to preview"}</p>
    </div>
    </>
  )
  }

export default TextForrm
