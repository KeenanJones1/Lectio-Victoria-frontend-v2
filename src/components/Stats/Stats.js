import React from 'react'
import Stat from './Stat'

const Stats = ({stats}) => {

 const renderStats = () => {
  sortStats(stats);
  return stats.map(stat => <Stat stat={stat}/> )
 }

 const sortStats = (stats) => {
  let sortedStats = stats.sort((a,b) => b.level - a.level || b.value - a.value)
 }

 return (
  <div className="" id="stats-container">
   <h1>Stats</h1>
   <div className="row">
   {renderStats()}
   </div>
  </div>
 )
}

export default Stats
