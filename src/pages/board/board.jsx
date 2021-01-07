import BoardDetail from 'components/board_detail/board_detail';
import BoardList from 'components/board_list/board_list';
import BoardWrite from 'components/board_write/board_write';
import { useBoardState } from 'contexts/board_context';
import { useProfileState } from 'contexts/profile_context';
import React, { useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

const Board = () => {
  const boardState = useBoardState();
  const profileState = useProfileState();
  const match = useRouteMatch();
  const history = useHistory();
  const [writing, setWriting] = useState(null);

  // 글쓰기
  const writeOpen = () => {
    history.push(`${match.url}/write`);
  };

  const writeCancel = () => {
    history.push(`${match.url}`);
  };

  // 게시글 상세
  const detailOpen = clicked => {
    history.push(`${match.url}/detail`);
    setWriting(clicked);
  };

  return (
    <section>
      <Switch>
        <Route exact path={`${match.path}`}>
          <BoardList
            boardState={boardState}
            writeOpen={writeOpen}
            detailOpen={detailOpen}
          />
        </Route>
        <Route path={`${match.path}/write`}>
          <BoardWrite profileState={profileState} writeCancel={writeCancel} />
        </Route>
        <Route path={`${match.path}/detail`}>
          <BoardDetail writing={writing} />
        </Route>
      </Switch>
    </section>
  );
};

export default Board;
