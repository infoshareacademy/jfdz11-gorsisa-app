import React, {Component} from 'react'
import Notifications from './Notifications'
import CountUp from 'react-countup';
import style from './Dashboard.css' ;
import ProjectsList from '../projects/ProjectList'




class  Dashboard extends Component{
 render (){
     return (
         <div className = "dashboard_container">
       
         <div className="row">
         
         <div className="col s12 m6">
         <Notifications/>
         <ProjectsList/>
         <CountUp end ={1024656} Count visit/>
         
         
         </div>
         <div className="col s12 m5 offset-m1"> 

     
         Przebiegnięte km
         <CountUp
  className="account-balance"
  start={-875.039}
  end={160527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="KM"
  suffix=" left"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
  >
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp>
      
         
        </div>

         <div className="inline-chart">
         Czas do kolejnego biegu
         <Notifications />
         <CountUp start={100} end={0}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}

</CountUp>
</div>
</div>
         
         </div>
        
         


     )
     
 }
 
}
 


export default Dashboard
