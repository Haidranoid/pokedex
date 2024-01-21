import React, {FC} from "react";

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section: FC<SectionProps> = ({title, children}) => {
  return <div>
    <div>
      <h3>{title}</h3>
    </div>
    <div>
      {children}
    </div>
  </div>
}

export default Section
