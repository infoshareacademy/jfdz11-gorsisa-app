import React, {Component} from 'react'
import CountUp from 'react-countup';

class  Dashboard extends ComponentW {
 render (){
     return (
         <div className = "dashboard_container">

         <CountUp end ={100}/>
         <div className="row">
         <div className="col s 12 m6"></div>
         <div className="col s 12 m5 iffset0m1"></div>
         </div>
         </div>


     )
 }
}

export default Dashboard