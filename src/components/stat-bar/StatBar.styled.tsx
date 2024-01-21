import styled from "styled-components";

interface StatSmallBarStyledProps {
  width: number
}

export const StatBarStyled = styled.div`

`

export const StatBarFilledStyled =  styled.div<StatSmallBarStyledProps>`
  margin-top: 2px;
  margin-bottom: 8px;
  background-color: #2626AEFF;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 12px;
  width: ${props => `${props.width * 5}px`};
`
