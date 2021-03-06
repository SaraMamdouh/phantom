import React,{useState} from 'react';
import ModalComponent from './Modals/Modal';
import ModalComponent2 from './Modals/Modal2';
import './style.css'

const SidebarComponent3 =()=>{
    const[Modal,setModal]=useState(false)
    const[emailModal,setEmail]=useState(false)

    const HandleClick=()=>{
        setModal(false)
        setEmail(true)
    }
    const HandlRemove=()=>{
        setModal(false)
        setEmail(false)
        console.log(emailModal,Modal)
    }

return(
    <div className="cards third-card">
            <h5 className="card-title size mb-1">
        <span className="shape">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5229 15.5229 20 10 20C4.47705 20 0 15.5229 0 10C0 4.47705 4.47705 0 10 0C15.5229 0 20 4.47705 20 10ZM15.8394 6.88672L13.1123 4.15967C12.8994 3.94678 12.5537 3.94678 12.3408 4.15967C12.1279 4.3728 12.1279 4.71802 12.3408 4.93115L14.1367 6.72705H4.54541C4.24414 6.72705 4 6.97119 4 7.27246C4 7.57373 4.24414 7.81787 4.54541 7.81787H14.1367L12.3408 9.61401C12.1279 9.8269 12.1279 10.1724 12.3408 10.3853C12.4473 10.4917 12.5869 10.5449 12.7266 10.5449C12.8037 10.5449 12.8809 10.5288 12.9521 10.4966C13.0103 10.4702 13.0645 10.4331 13.1123 10.3853L15.8394 7.6582C16.0522 7.44507 16.0522 7.09985 15.8394 6.88672ZM5.86328 12.1816H15.4546C15.7559 12.1816 16 12.426 16 12.7271C16 13.0283 15.7559 13.2725 15.4546 13.2725H5.86328L7.65918 15.0686C7.87207 15.2815 7.87207 15.6267 7.65918 15.8398C7.55273 15.9463 7.41309 15.9995 7.27344 15.9995C7.13379 15.9995 6.99414 15.9463 6.8877 15.8398L4.16064 13.1128C4.0835 13.0354 4.03418 12.9404 4.0127 12.8408C3.97559 12.6663 4.0249 12.4771 4.16064 12.3413L6.8877 9.61426C7.10059 9.40137 7.44629 9.40137 7.65918 9.61426C7.87207 9.82739 7.87207 10.1726 7.65918 10.3857L5.86328 12.1816Z" fill="#01A9F4"/>
</svg>
    </span> 
    Transfer</h5>
        <div className="card-content">
            <div className="content-left">
                <span className="card-title light d-block"> Current Email</span>
                <span className="card-title">anthony2142@emaill.com</span>
                </div>
                <button className="btn transfer-button mt-0 float-right"  data-toggle="modal" data-target="#exampleModal" onClick={()=>setModal(true)}>Transfer to <i className="fas fa-chevron-right"></i></button>
                </div>
    {Modal===true?<ModalComponent click={HandleClick} remove={HandlRemove}/>:null}
    {emailModal===true?<ModalComponent2 remove={HandlRemove}/>:null}
    </div> 
)
}

export default SidebarComponent3;