import React,{Component} from 'react';
import FilterComponent from './filter-component';
import FilterComponent1 from './filter1-component';
import './style.css';

class Filter extends Component{
  state={
    component1:{
        "title":"filter by:",
         "time":["1D" , "1M","1Y"]
      }
  }
  render(){
return(
        <section className="filter">
          <FilterComponent1 data={this.state.component1}/>
              <FilterComponent title="Total Checkouts"/>
              <FilterComponent title="Total Failure"/>
    </section>
      )
    }
  }



  export default Filter;