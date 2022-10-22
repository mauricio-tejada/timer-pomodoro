import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'blue',
    secondary: 'orange',
    danger: 'yellow',
    success: 'green',
}


export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 100px;

    ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }}
`