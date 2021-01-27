import React from 'react'
import Stat from './Stat'

const Stats = ({stats}) => {

 const renderStats = () => {
  return stats.map(stat => <Stat stat={stat}/> )
 }

 return (
  <div>
   <h1>Stats</h1>
   {renderStats()}
  </div>
 )
}

export default Stats
