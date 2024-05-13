import React from 'react'
import loading from  './loading.gif'
function spinner() {
  return (
    <div className="text-center">
      <img src={loading} alt="loading"/>
    </div>
  )
}

export default spinner
//inspect-network-no throttling-slow 3G.....to see loading part
//api key,country all can be send as a prop depending ...