import React ,{useState}from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [menuContent , setMenuContent] = useState(false);


  return (

    <Wrapper>
      <Wrap1>
        $7,500 <a>Federal Tax Credit</a> Available for new Model 3 and Model Y
      </Wrap1>
      <Wrap2>
        <LeftLogo>
             <a><img src="/image/logo.svg" alt="" /></a>
        </LeftLogo>
        
             <button styles={{all:"unset",cursor:"pointer"}} onClick={()=>setMenuContent(true) }>Menu</button>
        
        
      </Wrap2>
      {menuContent ?
      <MenuContent>
            <button styles={{all:"unset" , cursor:"pointer"}} onClick={()=>setMenuContent(false) }><CloseIcon /></button>
            <a>Model S</a>
            <a>Model 3</a>
            <a>Model X</a>
            <a>Model Y</a>
            <a>Solar Roof</a>
            <a>Solar Panel</a>
            <a>Powerwall</a>
            <a>Existing Inventory</a>
            <a>Trade-In</a>
            <a>Demo Drive</a>
            <a>Insurance</a>
            <a>Fleet</a>
            <a>Commercial Energy</a>
            <a>Utilities</a>
            <a>Charging</a>
            <a>Careers</a>
            <a>Find Us</a>
            <a>Events</a>
            <a>Support</a>
            <a>Investor Relations</a>
            <a>Shop</a>
            <a>Account</a>
            <a>More</a> 
        </MenuContent> : ""}
    </Wrapper>
    
      
  )
}

export default Header

const Wrapper = styled.div`
  position:fixed;
  display:flex;
  flex-direction:column;
  align-items:right;
  justify-content:center;
  width:100%;
  button{
  margin-right:40px;
  border: 1px solid #C9C9C9;
  padding:6px 12px;
  border-radius:3px;
  background-color:#9D9D9D;
  opacity:85%;
  cursor:pointer;
  }
`
const LeftLogo = styled.div`
  margin-left:30px;
`
const Wrap1 = styled.div`
  font-size:20px;
  width:100%;
  color:white;
  background-color:#073248;
  padding:20px;
  a{
    text-decoration: underline;
  }
  opacity:100%;
`
const Wrap2 = styled.div`
  margin-top:20px;
  display:flex;
  width:100%;
  flex-direction:row;
  justify-content:space-between;
`
const MenuContent = styled.div`
  display:flex;
  text-decoration:none;
  width:18%;
  text-align:start;
  height:130vh;
  flex-direction:column;
  top:0;
  bottom:0;
  right:0;
  padding:10px;
  background-color:white;
  a{
    padding:8px 25px;
  }
  p{
    text-align:right;
    padding : 0px;
    
  }
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  button{
    align-items:right;
    background-color:white;
    border : 0px white none;
  }
  
`;

