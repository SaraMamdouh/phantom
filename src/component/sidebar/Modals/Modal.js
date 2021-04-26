import React from 'react';
import './style.css'

const ModalComponent =(props)=>{
    return (
<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header pb-0">
        <h5 className="modal-title" id="exampleModalLabel">Transfer</h5>
      </div>
      <div className="modal-body">
        <span className="text">Transfer to </span>
        <input type="email" placeholder="enter the email address" className="form-control"/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn close-button mt-0" data-dismiss="modal" onClick={props.remove}>Close</button>
        <button type="button" className="btn send-button mt-0"  data-dismiss="modal" data-toggle="modal" data-target="#exampleModal" onClick={props.click}>Send</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default ModalComponent;