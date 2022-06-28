// React
import { useState } from "react"

// React components
import Burger from "../Burger"

// Styled Components
import { StyledBurgers } from "./Burgers.styles"

const Burgers = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <StyledBurgers>
      <Burger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      <Burger
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        color="#2a9d8f"
        strokeWidth="4"
        width="48"
        height="32"
        transition={{ ease: "easeIn", duration: 0.3 }}
        lineProps={{ strokeLinecap: "round" }}
      />
      <Burger
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        color="#D62828"
        width="24"
        height="28"
        strokeWidth="2"
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
      />
    </StyledBurgers>
  )
}

export default Burgers
