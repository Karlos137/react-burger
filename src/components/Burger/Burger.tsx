// Framer Motion
import { Transition } from "framer-motion"

// Styled Components
import { StyledBurger, Line } from "./Burger.styles"

type Props = {
  isOpen?: boolean
  color?: string
  strokeWidth?: string | number
  width?: string | number
  height?: string | number
  transition?: Transition
  onClick: () => void
  lineProps?: any
}

const Burger = ({
  isOpen = false,
  color = "#003049",
  strokeWidth = 1,
  width = 24,
  height = 16,
  transition = {},
  lineProps = null,
  onClick,
}: Props) => {
  const variant = isOpen ? "open" : "closed"

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: 45,
      translateY: 2,
    },
  }
  const center = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: -45,
      translateY: -2,
    },
  }
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  }

  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <StyledBurger
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      onClick={() => {
        onClick()
      }}
    >
      <Line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <Line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <Line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </StyledBurger>
  )
}

export default Burger
