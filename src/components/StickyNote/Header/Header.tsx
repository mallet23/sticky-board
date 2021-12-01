import React, { useCallback } from "react";
import styled from "styled-components";
import { WithPosition } from "../../../models";
import { DeleteButton } from "./DeleteButton";

const Base = styled.div`
  cursor: move;
  min-height: 20px;
  border-bottom: 1px solid;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 5px;
`;

interface HeaderProps {
  title: string;
  onStartDragging: (startPosition: WithPosition) => void;
  onDelete: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title, onStartDragging, onDelete
}) => {
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    onStartDragging({ left: e.screenX, top: e.screenY });
  }, [onStartDragging]);

  return (
    <div>
      <Base onMouseDown={handleMouseDown}>{title}</Base>
      <DeleteButton onClick={onDelete}/>
    </div>
  );
};