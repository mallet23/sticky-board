import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { StickBoardStoreContext } from "../stores";
import { Board } from "./Board";

const BoardContainer: React.FC = observer(() => {
  const store = useContext(StickBoardStoreContext)!;

  const {
    noteToCreate,
    notes,
    startDragging,
    stopDragging,
    changeNote,
    deleteNote,
    draggableNoteId,
    dragging,
    stopCreateNote,
    startCreateNote,
    draggingCreateNote
  } = store;

  return <Board noteToCreate={noteToCreate} stopCreateNote={stopCreateNote} startCreateNote={startCreateNote}
                draggingCreateNote={draggingCreateNote} notes={notes} onDeleteNote={deleteNote}
                startDragging={startDragging}
                stopDragging={stopDragging} dragging={dragging} changeNote={changeNote}
                draggableNoteId={draggableNoteId}/>;
});

export { BoardContainer as Board };
