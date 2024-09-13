import styled from '@emotion/styled'
import { css } from '@emotion/react'

const sizes = {
  medium: css`
    font-size: 1.5rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
}

const variations = {
  primary: css`
    color: #f8fafc;
    /* color: #fff; */
    /* background-color: #2563eb; */
    background-color: #b45309;
    margin-left: auto;
    margin-right: auto;
    width: 50%;

    &:hover {
      background-color: #d97706;
    }
  `,
}

interface ButtonProps {
  size?: keyof typeof sizes
  variation?: keyof typeof variations
}

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;

  ${(props) => sizes[props.size ?? 'medium']}
  ${(props) => variations[props.variation ?? 'primary']}
`

export default Button
