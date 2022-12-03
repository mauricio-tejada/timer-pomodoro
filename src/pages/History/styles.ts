import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding-top: 3.5rem;
  overflow: auto;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.gray100};

      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
    svg:hover {
      color: ${(props) => props.theme.red500};
      cursor: pointer;
    }
  }
`
export const HistoryList = styled.div`
  //flex: 1;
  margin-top: 2rem;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme.gray600};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.gray100};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme.gray700};
      border-top: 4px solid ${(props) => props.theme.gray800};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
  &::-webkit-scrollbar {
    border-radius: 8px;
    width: 0.75rem;
    background: ${(props) => props.theme.gray700};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${(props) => props.theme.gray500};
  }
`

const STATUS_COLORS = {
  yellow: 'yellow500',
  green: 'green500',
  red: 'red500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
