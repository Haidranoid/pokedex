import React, {FC} from "react";
import {StatStyled} from "./Stat.styled";

interface StatProps {
  children: React.ReactNode
}

const Stat: FC<StatProps> = ({children}) => {
  return <StatStyled>
    {children}
  </StatStyled>
}

export default Stat
