import React from "react";
import styled from "styled-components";

const Base = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  opacity: 0.5;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #ffffff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

interface DeleteButtonProps {
  onClick: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick
}) => {
  return (
    <Base onClick={onClick}/>
  );
};