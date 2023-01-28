import React from 'react'
import "./PrimaryInput.css"
export default function PrimaryInput(props) {
 
  return (
    <>
    <div className="Primary-input">
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} value={props.value} name={props.name}/>
    </div>
    </>
  )
}
