import React from "react";
import styled from "styled-components";

const Base = styled.button`
  margin: 4px;
`;

interface ApplyButtonProps {
  onClick: () => void;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => {
  return (
    <Base onClick={onClick}>Add</Base>
  );
};
