import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Note } from "../../models";
import { createDefaultNote } from "../../utils";
import { ApplyButton } from "./ApplyButton";
import { ControlPanel } from "./ControlPanel";

const Base = styled.div`
  margin: 4px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

const TextArea = styled.textarea`
  min-height: 50px;
  max-height: 100px;
  resize: vertical;
`;

interface AddNoteProps {
  onAdd: (note: Note) => void;
}

export const AddNote: React.FC<AddNoteProps> = ({ onAdd }) => {
  const [note, setNote] = useState(createDefaultNote());
  const noteRef = useRef(note);
  noteRef.current = note;

  const updateNote = useCallback((patch: Partial<Note>) => {
    setNote({ ...noteRef.current, ...patch });
  }, []);

  const handleDescriptionChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateNote({ description: event.target.value });
  }, [updateNote]);
  const handleTitleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateNote({ title: event.target.value });
  }, [updateNote]);
  const handleHeightChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateNote({ height: Number(event.target.value) });
  }, [updateNote]);
  const handleWidthChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateNote({ width: Number(event.target.value) });
  }, [updateNote]);
  const handleTopChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateNote({ top: Number(event.target.value) });
  }, [updateNote]);
  const handleLeftChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateNote({ left: Number(event.target.value) });
  }, [updateNote]);

  const handleAdd = useCallback(() => {
    onAdd(noteRef.current);
    setNote(createDefaultNote());
  }, [onAdd]);

  return (
    <Base style={{ backgroundColor: note.color }}>
      <ApplyButton onClick={handleAdd}/>
      <ControlPanel title="Title">
        <input value={note.title} onChange={handleTitleChange}/>
      </ControlPanel>
      <ControlPanel title="Description">
        <TextArea value={note.description} onChange={handleDescriptionChange}/>
      </ControlPanel>
      <ControlPanel title="Width">
        <input type="number" value={note.width} onChange={handleWidthChange}/>
      </ControlPanel>
      <ControlPanel title="Height">
        <input type="number" value={note.height} onChange={handleHeightChange}/>
      </ControlPanel>
      <ControlPanel title="Position Top(px)">
        <input type="number" value={note.top} onChange={handleTopChange}/>
      </ControlPanel>
      <ControlPanel title="Position Left(px)">
        <input type="number" value={note.left} onChange={handleLeftChange}/>
      </ControlPanel>
    </Base>
  );
};