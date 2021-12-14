import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { useObserveElementResize } from "../../hooks";
import { Note, WithPosition } from "../../models";
import { Body } from "./Body";
import { Header } from "./Header";

const Base = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  resize: both;
  overflow: auto;
  color: #ffffff;
`;

interface StickyNoteProps {
  note: Note;
  isDraggable?: boolean;
  startDragging?: (note: Note, startPosition: WithPosition) => void;
  stopDragging?: () => void;
  onChange?: (id: string, patch: Partial<Note>) => void;
  onDelete?: (note: Note) => void;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  note, startDragging, isDraggable, stopDragging, onChange, onDelete
}) => {
  const { color, description, left, top, height, width, title, id } = note;
  const noteRef = useRef(note);
  noteRef.current = note;
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(({ height, width }: DOMRectReadOnly) => {
    onChange?.(id, { width, height });
  }, [onChange, id]);
  useObserveElementResize(ref, handleResize);

  const handleStartDragging = useCallback(startPosition => {
    startDragging?.(noteRef.current, startPosition);
  }, [startDragging]);

  const handleDescriptionChange = useCallback(description => {
    onChange?.(id, { description });
  }, [onChange, id]);

  const handleDelete = useCallback(() => {
    onDelete?.(noteRef.current);
  }, [onDelete]);

  return (
    <Base ref={ref} style={{
      top: top,
      left: left,
      backgroundColor: color,
      height: height,
      width: width,
      zIndex: isDraggable ? 10 : undefined
    }}
          onMouseUp={stopDragging}>
      <Header onStartDragging={handleStartDragging} onDelete={handleDelete} title={title}/>
      <Body description={description} onChange={handleDescriptionChange}/>
    </Base>
  );
};