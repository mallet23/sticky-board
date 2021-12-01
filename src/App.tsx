import React from "react";
import { Board } from "./components";
import { StickBoardStoreProvider } from "./stores";

export const App: React.FC = () => {
  return (
    <StickBoardStoreProvider>
      <Board/>
    </StickBoardStoreProvider>
  );
};