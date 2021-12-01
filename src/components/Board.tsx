import React from "react";
import styled from "styled-components";
import { Note, WithPosition } from "../models";
import { AddNote } from "./AddNote";
import { StickersZone } from "./StickersZone";

const Base = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  display: flex;
`;

const ActionZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;

interface BoardProps {
  onAddNote: (note: Note) => void;
  changeNote: (id: string, patch: Partial<Note>) => void;
  onDeleteNote: (note: Note) => void;
  startDragging: (note: Note, startPosition: WithPosition) => void;
  stopDragging: () => void;
  dragging: (cursorPosition: WithPosition) => void;
  notes: Note[];
  draggableNoteId?: string;
}

export const Board: React.FC<BoardProps> = ({
  notes,
  onAddNote,
  onDeleteNote,
  stopDragging,
  startDragging,
  changeNote,
  draggableNoteId,
  dragging
}) => {
  return (
    <Base>
      <ActionZone>
        <AddNote onAdd={onAddNote}/>
      </ActionZone>
      <StickersZone stopDragging={stopDragging} startDragging={startDragging} dragging={dragging} notes={notes}
                    draggableNoteId={draggableNoteId} changeNote={changeNote} onDeleteNote={onDeleteNote}/>
    </Base>
  );
};