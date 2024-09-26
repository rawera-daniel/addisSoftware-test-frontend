import styled from '@emotion/styled'
import { css } from '@emotion/react'

// right: ${(size) => size.position.x}px;

const sizes = {
  medium: css`
    font-size: 1.5rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-align: center;
  `,
}

const variations = {
  primary: css`
    color: #f8fafc;
    background-color: #b45309;

    &:hover {
      background-color: #d97706;
    }
  `,
}

interface ButtonProps {
  size?: keyof typeof sizes
  variation?: keyof typeof variations
  position?: 'center'
}

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;

  ${(props) => sizes[props.size ?? 'medium']}
  ${(props) => variations[props.variation ?? 'primary']}

  ${(props) =>
    props.position === 'center' &&
    css`
      margin: 0 auto;
      width: 50%;
    `}
`

export default Button
