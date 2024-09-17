import styled from '@emotion/styled'
import { css } from '@emotion/react'

// right: ${(size) => size.position.x}px;

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
    background-color: #b45309;

    &:hover {
      background-color: #d97706;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
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
