import { createContext } from "react";
import { StickBoardStore } from "./StickyBoardStore";


export const StickBoardStoreContext = createContext<StickBoardStore | undefined>(undefined);