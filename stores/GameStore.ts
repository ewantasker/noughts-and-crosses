import { create } from "zustand";

type Player = "X" | "O";
type Cell = Player | null;

interface GameState {
  board: Cell[];
  currentPlayer: Player;
  winner: Player | null;
  draw: boolean;
  makeMove: (index: number) => void;
  reset: () => void;
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const useGameStore = create<GameState>((set, get) => ({
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
  draw: false,

  makeMove: (index) => {
    const { board, currentPlayer, winner } = get();
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    const newWinner = checkWinner(newBoard);
    const isDraw = board.every((cell) => cell !== null) && !winner;

    set({
      board: newBoard,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
      winner: newWinner,
      draw: isDraw,
    });
  },

  reset: () =>
    set({
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
      draw: false,
    }),
}));

function checkWinner(board: Cell[]): Player | null {
  for (const [a, b, c] of winningCombos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
