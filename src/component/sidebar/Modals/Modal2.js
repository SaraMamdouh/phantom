import React from 'react';
import './style.css'

const ModalComponent2 =(props)=>{
    return (
<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
  <div className="modal-content text-center height">
      <div className="modal-header">
        <button type="button" className="close"  aria-label="Close" data-dismiss="modal" onClick={props.remove} >
          <span aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 7.05L16.95 6L12 10.95L7.05 6L6 7.05L10.95 12L6 16.95L7.05 18L12 13.05L16.95 18L18 16.95L13.05 12L18 7.05Z" fill="white" fillOpacity="0.6"/>
</svg>
</span>
        </button>
      </div>
      <div className="modal-body">
          <span className="email-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.8779 17.7784L29.091 13.5981V8.00005C29.091 7.82523 29.0069 7.6273 28.877 7.48494L21.606 0.213955C21.4796 0.0875455 21.2954 0 21.0909 0H5.81816C4.21446 0 2.90912 1.30466 2.90912 2.90912V13.5981L0.122182 17.7784C0.0431591 17.9022 0 18.0614 0 18.1819V29.091C0 30.6953 1.30541 32.0001 2.90912 32.0001H29.091C30.6947 32.0001 32.0001 30.6954 32.0001 29.091V18.1819C32 18.05 31.9526 17.8919 31.8779 17.7784ZM21.8182 2.48298L26.608 7.27276H23.2727C22.4702 7.27276 21.8182 6.62005 21.8182 5.81823V2.48298ZM9.45458 8.72728H22.5455C22.9475 8.72728 23.2728 9.05258 23.2728 9.45458C23.2728 9.85658 22.9475 10.1819 22.5455 10.1819H9.45458C9.05258 10.1819 8.72728 9.85658 8.72728 9.45458C8.72728 9.05258 9.05258 8.72728 9.45458 8.72728ZM9.45458 11.6364H22.5455C22.9475 11.6364 23.2728 11.9617 23.2728 12.3637C23.2728 12.7657 22.9475 13.091 22.5455 13.091H9.45458C9.05258 13.091 8.72728 12.7657 8.72728 12.3637C8.72728 11.9616 9.05258 11.6364 9.45458 11.6364ZM9.45458 14.5454H16.7273C17.1293 14.5454 17.4546 14.8707 17.4546 15.2727C17.4546 15.6747 17.1293 16 16.7273 16H9.45458C9.05258 16 8.72728 15.6747 8.72728 15.2727C8.72728 14.8707 9.05258 14.5454 9.45458 14.5454ZM26.1818 17.4546C24.5781 17.4546 23.2727 18.7592 23.2727 20.3637C23.2727 21.1655 22.6207 21.8182 21.8182 21.8182H10.1818C9.37923 21.8182 8.72728 21.1655 8.72728 20.3637C8.72728 18.7592 7.42187 17.4546 5.81816 17.4546H2.08623L3.17427 15.8224C3.30068 15.9286 3.45812 16 3.63634 16H5.81816C7.97298 16 9.83094 17.6079 10.1378 19.74C10.1903 20.098 10.4957 20.3636 10.858 20.3636H21.142C21.5043 20.3636 21.8097 20.098 21.8622 19.74C22.1691 17.6079 24.027 16 26.1818 16H28.3637C28.542 16 28.6993 15.9286 28.8257 15.8224L29.9138 17.4546H26.1818Z" fill="#63F4F7"/>
</svg>
        </span>
        <h3 className="modal-title title">Confirmation Email Sent</h3>
<p className="modal-paragraph">
We sent a link to <span className="email-font">anthony2142@email.com</span> and <span className="email-font">jamesconor@email.com</span> . Check the email to confirm the transfer.
</p>
<a className="link" href="#">Didn’t get a confirmation email?</a>
<span className="spam">Check your spam or<span className="send-span"> Send Again</span></span>
      </div>
    </div>
  </div>
</div>
    )
}

export default ModalComponent2;