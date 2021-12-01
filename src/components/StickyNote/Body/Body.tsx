import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Editor } from "./Editor";

const Readonly = styled.div`
  padding: 5px;
  overflow: auto;
  white-space: pre-line;
  flex-grow: 1;
`;

interface BodyProps {
  description: string;
  onChange: (description: string) => void;
}

export const Body: React.FC<BodyProps> = ({
  description,
  onChange
}) => {
  const [editMode, setEditMode] = useState(false);

  const exitEditMode = useCallback(() => {
    setEditMode(false);
  }, []);

  const handleReadonlyDblClick = useCallback(() => setEditMode(true), []);

  if (editMode) {
    return <Editor onChange={onChange} value={description} onExit={exitEditMode}/>;
  }

  return (
    <Readonly onDoubleClick={handleReadonlyDblClick}>{description}</Readonly>
  );
};