import BoardList from 'components/board_list/board_list';
import { useBoardState } from 'contexts/board_context';
import React from 'react';

const Board = () => {
  const boardState = useBoardState();

  return <BoardList boardState={boardState} />;
};

export default Board;
