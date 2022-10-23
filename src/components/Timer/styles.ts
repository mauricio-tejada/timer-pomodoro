import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
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
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  font-size: 10rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  line-height: 8rem;
  color: ${(props) => props.theme.gray100};

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme.gray700};
  }
`
export const CountdownSeparator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.green300};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme.green500};
  color: ${(props) => props.theme.gray100};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.green700};
  }
`
