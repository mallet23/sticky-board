import React from "react";
import styled from "styled-components";

const Base = styled.label`
  margin: 4px;
  display: flex;
  flex-direction: column;
`;

interface ControlPanelProps {
  title: string;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({ children: control, title }) => {
  return (
    <Base>
      {title}:
      {control}
    </Base>
  );
};
