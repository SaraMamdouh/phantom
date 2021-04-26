import React from 'react';
import './style.css';

const HandleClick =(e)=>{
e.preventDefault();
var element=e.target;
var dropdown=document.querySelector(".dropdown-menu");
element.classList.toggle("clicked")
dropdown.classList.toggle("display")

}

const Navbar =()=>{

    return (
      <section>
        <nav className="dashboard-navbar ">
          <div className="container-fluid">
          <div className="navbar-content float-right">
          <div className="dropdown">
  <i className="fas fa-bell" onClick={HandleClick}></i>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <ul>
      <li className="title">Notifications</li>
      <li>
        <i className='fas fa-check-circle'></i>
        <h6 className="notification">Transfer link confirmed <span className="light">by jamesconor@email.com</span>
        <span className="time light">just now</span>
        </h6>
      </li>
      <li>
        <i className='fas fa-check-circle'></i>
        <h6 className="notification">Transfer link confirmed <span className="light">by jamesconor@email.com</span>
        <span className="time light">2 min ago</span>
        </h6>
      </li>
      <li>
        <span className="email-circle">
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M0.691776 1.46438L7.5558 7.04867C7.57857 7.06738 7.60342 7.08367 7.62943 7.09668C7.721 7.14348 7.81783 7.16707 7.91791 7.16707C8.02369 7.16707 8.12951 7.13941 8.28412 7.04582L15.1429 1.46477C15.2446 1.38215 15.3012 1.25684 15.2963 1.12621C15.2914 0.995586 15.2255 0.874727 15.118 0.799883C14.8369 0.60375 14.5077 0.5 14.1671 0.5H1.66713C1.32654 0.5 0.997792 0.603359 0.71662 0.799492C0.609198 0.873945 0.543261 0.994805 0.538378 1.12582C0.533495 1.25645 0.590058 1.38176 0.691776 1.46438Z" fill="#FCBC23"/>
<path d="M10 10.9164C10 7.92971 12.43 5.49971 15.4167 5.49971C15.647 5.49971 15.8334 5.31334 15.8334 5.08303V2.85283C15.8334 2.69209 15.741 2.54561 15.5957 2.47647C15.4505 2.40893 15.2787 2.42885 15.1538 2.52979L8.76098 7.73198L8.68773 7.78042C8.20719 8.07542 7.61676 8.0905 7.07438 7.73241L0.679531 2.52932C0.55543 2.42799 0.383711 2.40764 0.237617 2.476C0.0923828 2.54522 0 2.6917 0 2.8524V10.4997C0 11.4189 0.747461 12.1664 1.66668 12.1664H9.64969C9.77055 12.1664 9.88527 12.1139 9.96465 12.0228C10.0436 11.9316 10.0794 11.8103 10.0623 11.6907C10.0199 11.3945 10 11.1483 10 10.9164Z" fill="#FCBC23"/>
<path d="M15.4163 6.3335C12.8891 6.3335 10.833 8.38955 10.833 10.9168C10.833 13.4441 12.8891 15.5002 15.4163 15.5002C17.9436 15.5002 19.9996 13.4441 19.9996 10.9169C19.9996 8.38959 17.9436 6.3335 15.4163 6.3335ZM17.3776 10.3781C17.2962 10.4595 17.1896 10.5002 17.083 10.5002C16.9764 10.5002 16.8698 10.4595 16.7884 10.3781L15.833 9.42272V13.4169C15.833 13.6472 15.6466 13.8335 15.4163 13.8335C15.186 13.8335 14.9996 13.6472 14.9996 13.4169V9.42272L14.0443 10.3781C13.8815 10.5409 13.6178 10.5409 13.4551 10.3781C13.2923 10.2153 13.2923 9.95166 13.4551 9.78893L15.1212 8.12276C15.1598 8.08408 15.206 8.05342 15.2573 8.03221C15.3591 7.9901 15.4736 7.9901 15.5755 8.03221C15.6268 8.05342 15.6729 8.08408 15.7115 8.12276L17.3777 9.78893C17.5404 9.95166 17.5404 10.2153 17.3776 10.3781Z" fill="#FCBC23"/>
</svg>
</span>
<h6 className="notification">Confirmation email sent <span className="light"> to anthony2142@email.com and jamesconor@email.com </span>
        <span className="time light">5 min ago</span>
        </h6>
      </li>
    </ul>
  
  </div>
</div>
           <div className="personal">
            <img src="./../images/Yasmin Leonard Photography.jpg" alt="yasmin" className="image"/>
            <div className="personal-information">
            <span className="name">Anthony Mike</span>
            <span className="email">anthony2142@email.com</span>
            <span><i className="fas fa-chevron-down"></i></span>
            </div>
</div>  
</div>    
</div>
        </nav>
        </section>
    )
}

export default Navbar;