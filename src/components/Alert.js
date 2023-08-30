import React, {useState} from 'react'

export default function Alert(props) {
    const[alert, setAlert]=useState(null)

    const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
  }

  showAlert("Alert has been successfully passed", "success")
  return (
    props.alert && <div className='container'>
        <h1>{alert}</h1>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
  {props.alert.type}: {props.alert.message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

</div>
    </div>
  )
}

