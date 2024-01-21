import React, {FC} from "react";
import {StatBarFilledStyled, StatBarStyled} from "./StatBar.styled";

interface StatBarProps {
  statAmount: number
  statName: string
}

const StatBar: FC<StatBarProps> = ({statAmount, statName}) => {
  return <StatBarStyled>
    <div>
      {statName}
    </div>
    <StatBarFilledStyled width={statAmount}/>
  </StatBarStyled>
}

export default StatBar
