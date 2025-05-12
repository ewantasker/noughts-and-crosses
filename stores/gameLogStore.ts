import { create } from "zustand";

type Player = "X" | "O";

interface GameLogState {
  log: string[];
  currentPlayer: Player;
  winner: Player | null;
  draw: boolean;
}

export const useGameStore = create<GameLogState>((set, get) => ({
  log: [],
  currentPlayer: "X",
  winner: null,
  draw: false,

  updateLog: (index) => {},

  reset: () => {},
}));
