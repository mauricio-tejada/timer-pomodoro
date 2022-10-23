import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme.gray300};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.green500};
      }

      &.active {
        color: ${(props) => props.theme.green500};
      }
    }
  }
`
