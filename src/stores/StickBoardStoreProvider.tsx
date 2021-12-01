import React from "react";

import { StickBoardStoreContext } from "./StickBoardStoreContext";
import { StickBoardStore } from "./StickyBoardStore";

export const StickBoardStoreProvider: React.FC = ({ children }) => {
  const store = new StickBoardStore();
  return <StickBoardStoreContext.Provider value={store}>{children}</StickBoardStoreContext.Provider>;
};
