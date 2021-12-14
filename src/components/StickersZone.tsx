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
  startCreateNote: (startPosition: WithPosition) => void;
  draggingCreateNote: (draggingPosition: WithPosition) => void;
  stopCreateNote: () => void;
  dragging: (cursorPosition: WithPosition) => void;
  onDeleteNote: (note: Note) => void;
  notes: Note[];
  changeNote: (id: string, patch: Partial<Note>) => void;
  draggableNoteId?: string;
}

export const StickersZone: React.FC<StickersZoneProps> = ({
  startCreateNote,
  stopCreateNote,
  draggingCreateNote,
  notes,
  startDragging,
  stopDragging,
  draggableNoteId,
  changeNote,
  dragging,
  onDeleteNote
}) => {
  const zoneRef = useRef<HTMLDivElement>(null);

  const draggableNoteIdRef = useRef(draggableNoteId);
  draggableNoteIdRef.current = draggableNoteId;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const pageX = e.pageX;
    const pageY = e.pageY;
    if (draggableNoteIdRef.current) {
      dragging({ left: pageX, top: pageY });
    } else {
      draggingCreateNote({ left: pageX, top: pageY })
    }
  }, [dragging, draggingCreateNote]);

  const handleMouseUp = useCallback(() => {
    if (draggableNoteIdRef.current) {
      stopDragging();
    } else {
      stopCreateNote();
    }
  },[stopCreateNote, stopDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === zoneRef.current && !draggableNoteIdRef.current) {
      startCreateNote({ left: e.pageX, top: e.pageY })
    }
  },[startCreateNote]);
  return (
    <Base ref={zoneRef} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown}
          style={{ cursor: draggableNoteId ? "move" : undefined }}>
      {notes.map(note => (
        <StickyNote onDelete={onDeleteNote} key={note.id} note={note} startDragging={startDragging}
                    stopDragging={stopDragging}
                    isDraggable={note.id === draggableNoteId} onChange={changeNote}/>))}
    </Base>
  );
};