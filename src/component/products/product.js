import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../redux/product/productAction';
import './style.css';

function Product ({fetchProduct,data}) {
 
  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <section className="product-list">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>date <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17.4999L5.625 13.1249L6.50625 12.2437L10 15.7312L13.4938 12.2437L14.375 13.1249L10 17.4999Z" fill="white"/>
<path d="M10 2.5L14.375 6.875L13.4938 7.75625L10 4.26875L6.50625 7.75625L5.625 6.875L10 2.5Z" fill="white"/>
</svg>
</th>
            <th>product</th>
            <th>size (US)</th>
            <th>website</th>
            <th>price</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
         {
           data.data.map(m=>{
             return(
               <tr key={m.id}>
               <td>{m.date}</td>
               <td>{m.name}</td>
               <td>{m.size}.0</td>
               <td>{m.website}</td>
               <td>$ {m.price}</td>
               <td className={m.success===true?"success":"failure"}></td>
               </tr>
             )
           })
         }
        </tbody>
      </table>
    </section>

  )
}
 const mapStateToProps=state=>{
return{
  data:state.product
}
 }
const mapDispatchToProps = dispatch => {
  return {
     fetchProduct:()=>dispatch(fetchData())
  }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)