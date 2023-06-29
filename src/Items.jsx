import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
const Items = ({title,p1,p2,leftbtntext,rightbtntext,bgimg}) => {
  return (
    <Wrap bgimage = {bgimg}>
    <Fade bottom>
      <Wrap1>
        <h1>{title}</h1>
        <p>{p1}</p>
        <p>{p2}</p>
     </Wrap1> </Fade>
     <Fade bottom>
      <Wrap2>
        <Wrap3><button>{leftbtntext}</button></Wrap3>
        <Wrap4>{rightbtntext?<button>{rightbtntext}</button>:""}</Wrap4>
      </Wrap2>
      </Fade>
    </Wrap>
  )
}

export default Items

const Wrap = styled.div`

  height : 100vh;
  background-image: ${props => `url("/image/${props.bgimage}")`};
  background-repeat : no-repeat;
  background-size:cover;
  display : flex;
  background-position: center;
  flex-direction : column;
  justify-content : space-between;
  window.scrollBy(0, 100vh);
`
const Wrap1 = styled.div`
  padding : 80px;
`
const Wrap2 = styled.div`
  padding : 100px;
  display:flex;
  justify-content:center;
`
const Wrap3 = styled.div`
button{
  background-color:white;
  border-color:white;
}
`
const Wrap4 = styled.div`
button{
background-color:#696A69;
border-color:#696A69;
color:white;
}
 
`
