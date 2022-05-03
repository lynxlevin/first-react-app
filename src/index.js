import React, { useState } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = i => {
        if (calculateWinner(squares) || squares[i]) return;
        const clone = [...squares];
        clone[i] = xIsNext ? 'X' : 'O';
        setSquares(clone);
        setXIsNext(!xIsNext);
    };

    const renderSquare = i => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    const calculateWinner = squares => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (const line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const getStatus = () => {
        const winner = calculateWinner(squares);
        const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
        return status;
    };

    return (
        <div>
            <div className="status">{getStatus()}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
};

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);
