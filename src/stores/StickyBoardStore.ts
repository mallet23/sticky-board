import { action, makeObservable, observable, reaction } from "mobx";
import { Note, WithPosition } from "../models";

const storageKey = "sticky-board";

export class StickBoardStore {
  @observable notes: Note[] = [];
  @observable draggableNoteId?: string;
  draggableStartDelta?: WithPosition;

  constructor() {
    makeObservable(this);
    const savedNotes = localStorage.getItem(storageKey);
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }

    reaction(() => this.notes, () => this.updateStorage());
  }

  @action.bound
  startDragging(note: Note, startPosition: WithPosition) {
    this.draggableNoteId = note.id;
    this.draggableStartDelta = {
      top: note.top - startPosition.top,
      left: note.left - startPosition.left
    };

    // make last for overlap others
    this.notes = [...this.notes.filter(n => n !== note), note];
  };

  @action.bound
  stopDragging() {
    if (this.draggableNoteId) {
      this.draggableNoteId = undefined;
    }
  };

  @action.bound
  dragging(position: WithPosition) {
    this.notes = this.notes.map(note => {
        if (note.id === this.draggableNoteId) {
          const newPositionY = position.top + this.draggableStartDelta!.top;
          const newPositionX = position.left + this.draggableStartDelta!.left;

          return {
            ...note,
            top: newPositionY,
            left: newPositionX
          };
        } else
          return note;
      }
    );
  };

  @action.bound
  addNote(note: Note) {
    this.notes = [...this.notes, note];
  };

  @action.bound
  deleteNote(note: Note) {
    this.notes = this.notes.filter(x => x.id !== note.id);
  }

  @action.bound
  changeNote(id: string, patch: Partial<Note>) {
    this.notes = this.notes.map(note => note.id === id ? { ...note, ...patch } : note);
  }

  private updateStorage() {
    localStorage.setItem(storageKey, JSON.stringify(this.notes));
  };
}
