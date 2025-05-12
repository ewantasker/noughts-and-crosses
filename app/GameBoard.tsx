import { useGameStore } from "@/stores/GameStore";

export default function GameBoard() {
  const { board, makeMove } = useGameStore();
  return (
    <div className="grid grid-cols-[auto_repeat(3,_10.5rem)] grid-rows-[auto_repeat(3,_10.5rem)] gap-2 items-center">
      {/* Top column labels */}
      <div></div>
      <div className="text-center font-bold">A</div>
      <div className="text-center font-bold">B</div>
      <div className="text-center font-bold">C</div>

      {/* Row 1 */}
      <div className="text-center font-bold">1</div>
      {board.slice(0, 3).map((cell, index) => (
        <button
          key={index}
          onClick={() => makeMove(index)}
          className="w-40 h-40 text-2xl font-bold border-2 border-gray-400 flex items-center justify-center"
        >
          {cell}
        </button>
      ))}

      {/* Row 2 */}
      <div className="text-center font-bold">2</div>
      {board.slice(3, 6).map((cell, index) => (
        <button
          key={index + 3}
          onClick={() => makeMove(index + 3)}
          className="w-40 h-40 text-2xl font-bold border-2 border-gray-400 flex items-center justify-center"
        >
          {cell}
        </button>
      ))}

      {/* Row 3 */}
      <div className="text-center font-bold">3</div>
      {board.slice(6, 9).map((cell, index) => (
        <button
          key={index + 6}
          onClick={() => makeMove(index + 6)}
          className="w-40 h-40 text-2xl font-bold border-2 border-gray-400 flex items-center justify-center"
        >
          {cell}
        </button>
      ))}
    </div>
  );
}
