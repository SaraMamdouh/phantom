import React from 'react';
import'./style.css'

const FilterComponent1 = (props)=>{
    const ClickDate=(e)=>{
        var ele=e.target;
        var element=document.getElementsByClassName("date-child");
        for(var i=0; i<element.length;i++){
        element[i].classList.remove("child-active");
        }
        ele.classList.add("child-active")
    }
return (
    <div className="cards" key={Math.random()}>
        <h6 className="card-title">{props.data.title}</h6>
        <div className="date">
           {
           props.data.time.map(m=>{
    return(
        <button type="button" className="btn date-child" onClick={(e)=>ClickDate(e)} key={Math.random()}>{m}</button>)
   })}    
        </div>
        </div>
)
}

export default FilterComponent1;