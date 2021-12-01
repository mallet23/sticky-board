import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Note, WithPosition } from "../models";
import { StickyNote } from "./StickyNote";

const Base = styled.div`
  flex-grow: 1;
  position: relative;
`;

interface StickersZoneProps {
  stopDragging: () => void;
  startDragging: (note: Note, startPosition: WithPosition) => void;
  dragging: (cursorPosition: WithPosition) => void;
  onDeleteNote: (note: Note) => void;
  notes: Note[];
  changeNote: (id: string, patch: Partial<Note>) => void;
  draggableNoteId?: string;
}

export const StickersZone: React.FC<StickersZoneProps> = ({
  notes,
  startDragging,
  stopDragging,
  draggableNoteId,
  changeNote,
  dragging,
  onDeleteNote
}) => {
  const draggableNoteIdRef = useRef(draggableNoteId);
  draggableNoteIdRef.current = draggableNoteId;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (draggableNoteIdRef.current) {
      dragging({ left: e.screenX, top: e.screenY });
    }
  }, [dragging]);

  return (
    <Base onMouseUp={stopDragging} onMouseMove={handleMouseMove}
          style={{ cursor: draggableNoteId ? "move" : undefined }}>
      {notes.map(note => (
        <StickyNote onDelete={onDeleteNote} key={note.id} note={note} startDragging={startDragging}
                    stopDragging={stopDragging}
                    isDraggable={note.id === draggableNoteId} onChange={changeNote}/>))}
    </Base>
  );
};