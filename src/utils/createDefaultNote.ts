import { v4 as uuid } from "uuid";
import { Note } from "../models";
import { randomDarkColor } from "./random";

export const createDefaultNote = (): Note => {
  return {
    id: uuid(),
    color: randomDarkColor(),
    title: "My Note Title",
    description: "My Note Description",
    left: 50,
    top: 50,
    height: 200,
    width: 200
  };
};