import React from 'react'
import styled from 'styled-components'
import SkillBar from 'react-skillbars'

const Stat = ({stat}) => {
 const skills = [
  {type: stat.name, level: stat.value }
 ]
 return (
  <StatContainer>
   <p>Level {stat.level}</p>
   <SkillBar skills={skills}/>
  </StatContainer>
 )
}

// Figure out how to show the goal in the stat cotainer. 

const StatContainer = styled.p`
 width: 0.1rem;
 margin: 0;
 padding: 0;
`

export default Stat

