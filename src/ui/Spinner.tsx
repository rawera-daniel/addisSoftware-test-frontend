import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'

const d5Animation = keyframes`
  0%  {box-shadow: 20px 0 #000, -20px 0 #0002; background: #000 }
  33% {box-shadow: 20px 0 #000, -20px 0 #0002; background: #0002}
  66% {box-shadow: 20px 0 #0002,-20px 0 #000; background: #0002}
  100%{box-shadow: 20px 0 #0002,-20px 0 #000; background: #000 }
`

const Spinner = styled.div`
  margin: 6.5rem auto;
  width: 15px;

  aspect-ratio: 1;
  border-radius: 50%;
  animation: ${d5Animation} 1s infinite linear alternate;
`

export default Spinner
