import React from "react";
import styled from "styled-components";
import { Note, WithPosition } from "../models";
import { DraggableAddNote } from "./DraggableAddNote";
import { StickersZone } from "./StickersZone";

const Base = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

interface BoardProps {
  changeNote: (id: string, patch: Partial<Note>) => void;
  onDeleteNote: (note: Note) => void;
  startDragging: (note: Note, startPosition: WithPosition) => void;
  stopDragging: () => void;
  dragging: (cursorPosition: WithPosition) => void;
  startCreateNote: (startPosition: WithPosition) => void;
  draggingCreateNote: (draggingPosition: WithPosition) => void;
  stopCreateNote: () => void;
  notes: Note[];
  noteToCreate?: Note;
  draggableNoteId?: string;
}

export const Board: React.FC<BoardProps> = ({
  noteToCreate,
  startCreateNote,
  draggingCreateNote,
  stopCreateNote,
  notes,
  onDeleteNote,
  stopDragging,
  startDragging,
  changeNote,
  draggableNoteId,
  dragging
}) => {
  return (
    <Base>
      <DraggableAddNote noteToCreate={noteToCreate} />
      <StickersZone draggingCreateNote={draggingCreateNote} startCreateNote={startCreateNote}
                    stopCreateNote={stopCreateNote} stopDragging={stopDragging} startDragging={startDragging}
                    dragging={dragging} notes={notes}
                    draggableNoteId={draggableNoteId} changeNote={changeNote} onDeleteNote={onDeleteNote}/>
    </Base>
  );
};