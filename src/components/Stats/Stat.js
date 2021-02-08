import React from 'react'
import styled from 'styled-components'
import SkillBar from 'react-skillbars'

const Stat = ({stat}) => {
 const skills = [
  {type: stat.name,
   level: Math.round((stat.value / stat.goal) * 100),
   color: {
    "bar": "#3498db",
    "title": {
     "text": "#fff",
     "background": "#2980b9"
    }
   }}
 ]


 return (
  <StatContainer className="col-4">
   <StatHeader>Level {stat.level}</StatHeader>
   <SkillBar skills={skills} animationDuration={500} height={15} />
  </StatContainer>
 )
}

const StatContainer = styled.div`
 /* width: 0.1rem; */
 height: 5vh;
 /* margin: 0;
 padding: 0; */
 /* position: absolute; */
 /* left: 40%;
 top: 50%; */
`

const StatHeader = styled.p`
 margin: 0;
`

export default Stat

