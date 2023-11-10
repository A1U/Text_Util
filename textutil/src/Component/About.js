    import React, { useState } from 'react'

    function About() {

    const [darkmode, setdarkmode]= useState({
        backgroundColor: 'black',
        color:'white'
    })
 const [btntext, setbtntext]= useState('enable dark mode')
    let toggleState=()=>{
        if(darkmode.color=='white'){
            setdarkmode({
                color:'black',
                backgroundColor:'white'
            })
           
        }
        else{
            setdarkmode({
                color:'white',
                backgroundColor:'black'
            })
            setbtntext("enable light mode")
        }
    }
    
    return (
    <>
    <div className='container' style={darkmode}>
    <h2  className= 'my-3'>About US</h2>

    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"   style={darkmode}>
                Accordion Item #1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"  style={darkmode}>
                Accordion Item #2
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"  style={darkmode}>
                Accordion Item #3
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's
            accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look,
            at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
        </div>
    </div>
    <button type="button" onClick={toggleState}  className="btn btn-warning my-3">{btntext}</button>
    </>
    )
    }

    export default About;
