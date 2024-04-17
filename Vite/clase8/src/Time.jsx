import { useState } from 'react'
import './App.css'

const Time = () => {

    
    const ActualH = new Date().toTimeString().slice(0,8)
    const [HoraMinSec,setHoraMinSec] = useState(ActualH);
  
  
    const GetHHMMSS = () =>{
      const ActualH = new Date().toTimeString()
      return setHoraMinSec(ActualH.slice(0,8));
    }
    setInterval(GetHHMMSS,1000)
    return (
      <>
      <h2>Hora actual Local
      </h2>
      <section className="Clock">
      <p id="clock">{HoraMinSec}</p>
      </section>
      </>
    )
  }

export default Time