import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  width: 100%;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme.gray100};

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.gray500};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.gray100};

  @media (max-width: 500px) {
    font-size: 1rem;
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.green500};
  }

  &::placeholder {
    color: ${(props) => props.theme.gray500};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  @media (max-width: 500px) {
    width: 2.2rem;
  }
`
