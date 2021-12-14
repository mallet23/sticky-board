import React from "react";

import { Note } from "../../models";
import { StickyNote } from "../StickyNote";

interface DraggableAddNoteProps {
  noteToCreate?: Note;
}

export const DraggableAddNote: React.FC<DraggableAddNoteProps> = ({ noteToCreate }) => {
  if(!noteToCreate){
    return <></>;
  }

  return (
    <StickyNote note={noteToCreate}  />
  );
};