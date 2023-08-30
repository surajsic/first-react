import React, {useState} from 'react'
//import PropTypes  from 'react'

export default function Textform(props) {
  const handleUpclick=()=>{
    console.log("You have clicked the convert button"+ text)
    let newText= text.toUpperCase()
    setText(newText)
  }

  const handlechange=(event)=>{
    console.log("On change")
    setText(event.target.value)
  }

  const handleLclick= ()=>{
    let newText= text.toLowerCase();
    setText(newText)
  }

  const [text, setText] = useState("Enter your text here");
  //setText("new text")
  return (
    <div>
      <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea className="form-control" value={text} onChange={handlechange}  id="myBox" rows="10"></textarea>
</div>
<button className="btn-primary" onClick={handleUpclick}>Convert to uppercase</button>
<button className="btn-secondary" onClick={handleLclick}>Convert to lowercase</button>
    </div>
  )
}

//Textform.defaultPropTypes={heading: PropTypes.string.isRequired, Exampletextarea: PropTypes.string.isRequired}