"use client";
import { useEffect, useState } from "react";
import { useGameStore } from "@/stores/GameStore";
import Modal from "./components/Modal";
import { TrophyIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import GameBoard from "./GameBoard";

export default function Home() {
  const { board, currentPlayer, winner, draw, reset, makeMove } =
    useGameStore();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (winner || board.every((cell) => cell !== null)) {
      setTimeout(() => setModalOpen(true), 300);
    }
  }, [winner, board]);

  const handleClose = () => {
    setModalOpen(false);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Noughts and Crosses</h1>

      {!winner && !draw && (
        <p className="mt-4 text-xl">Turn: {currentPlayer}</p>
      )}
      <GameBoard />

      {/* <GameLog/> */}

      <Modal isOpen={modalOpen} onClose={handleClose}>
        <div className="text-2xl font-bold">
          {winner ? (
            <>
              <TrophyIcon className="text-yellow-500" />
              <h2>WINNER:</h2>
              <p>PLAYER {winner}</p>
            </>
          ) : (
            <>
              <HandRaisedIcon className="text-orange-500" />
              <h2>IT IS A DRAW!</h2>
            </>
          )}
        </div>
      </Modal>
      <button
        onClick={reset}
        className="text-2xl mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Reset Game
      </button>
    </div>
  );
}
