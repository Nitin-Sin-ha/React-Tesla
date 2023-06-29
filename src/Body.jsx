import React from 'react'
import styled from 'styled-components'
import Items from "./Items"
const Body = () => {
  return (
    <Wrapper>
        <Items 
            title = "Model 3" 
            p1 = "Starting at $32,740"
            p2 = "After Federal Tax Credit"
            bgimg = "Model3.jpeg"
            leftbtntext = "Explore Inventory"
            rightbtntext = "Custom Order"
        />
        <Items 
            title = "Model Y" 
            p1 = "Starting at $40,740"
            p2 = "After Federal Tax Credit"
            bgimg = "modelY.jpeg"
            leftbtntext = "Explore Inventory"
            rightbtntext = "Custom Order"
        />
        <Items 
            title = "Model S" 
            p1 = "Explore Inventory"
            p2 = ""
            bgimg = "modelS.jpeg"
            leftbtntext = "Demo Drive"
            rightbtntext = "Custom Order"
        />
        <Items 
            title = "Model X" 
            p1 = "Explore Inventory"
            p2 = ""
            bgimg = "modelX.jpeg"
            leftbtntext = "Demo Drive"
            rightbtntext = "Custom Order"
        />
        <Items 
            title = "Solar Panels" 
            p1 = "Schedule a Virtual Consultation"
            p2 = ""
            bgimg = "solar.jpeg"
            leftbtntext = "Order Now"
            rightbtntext = "Learn More"
        />
        <Items 
            title = "Solar Roof" 
            p1 = "Produce Clean Energy From Your Roof"
            p2 = ""
            bgimg = "roof.jpeg"
            leftbtntext = "Order Now"
            rightbtntext = "Learn More"
        />
        <Items 
            title = "Power Wall" 
            p1 = ""
            p2 = ""
            bgimg = "powerwall.avif"
            leftbtntext = "Order Now"
            rightbtntext = "Learn More"
        />
        <Items 
            title = "Accessories" 
            p1 = ""
            p2 = ""
            bgimg = "access.png"
            leftbtntext = "Shop Now"
            rightbtntext = ""
        />

    </Wrapper>
  )
}

export default Body

const Wrapper = styled.div`

`