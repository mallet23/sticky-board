import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { StickBoardStoreContext } from "../stores";
import { Board } from "./Board";

const BoardContainer: React.FC = observer(() => {
  const store = useContext(StickBoardStoreContext)!;

  const { notes, addNote, startDragging, stopDragging, changeNote, deleteNote, draggableNoteId, dragging } = store;

  return <Board notes={notes} onAddNote={addNote} onDeleteNote={deleteNote} startDragging={startDragging}
                stopDragging={stopDragging} dragging={dragging} changeNote={changeNote}
                draggableNoteId={draggableNoteId}/>;
});

export { BoardContainer as Board };
