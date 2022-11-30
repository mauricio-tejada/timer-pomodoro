import styled from 'styled-components'

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

  width: 100%;
  max-width: 650px;

  @media (max-width: 500px) {
    font-size: 5.5rem;
    line-height: 4rem;
    gap: 0.3rem;
  }

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme.gray700};

    @media (max-width: 500px) {
      padding: 1rem 0.5rem;
    }
  }
`
export const CountdownSeparator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme.green300};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 1rem 0;
    width: 0.5rem;
    font-size: 2rem;
  }
`
