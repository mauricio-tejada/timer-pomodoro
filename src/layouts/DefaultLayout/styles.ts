import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: 90vh;
  max-height: 740px;
  margin: 5vh auto;
  border-radius: 8px;
  padding: 2.5rem;

  background: ${(props) => props.theme.gray800};

  display: flex;
  flex-direction: column;
`
