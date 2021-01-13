import BoardDetail from 'components/board_detail/board_detail';
import BoardList from 'components/board_list/board_list';
import BoardWrite from 'components/board_write/board_write';
import { useBoardDispatch, useBoardState } from 'contexts/board_context';
import { useProfileState } from 'contexts/profile_context';
import React, { useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

const Board = ({ user, profile, boardRepository }) => {
  const boardState = useBoardState();
  const boardDispatch = useBoardDispatch();
  const profileState = useProfileState();
  const match = useRouteMatch();
  const history = useHistory();
  const [writing, setWriting] = useState(null);
  const userId = user.uid;

  // 글쓰기
  const writeOpen = () => {
    history.push(`${match.url}/write`);
  };

  const writeCancel = () => {
    history.push(`${match.url}`);
  };

  // 게시글 보기
  const detailOpen = clicked => {
    history.push(`${match.url}/detail`);
    const temp = { ...clicked };
    delete temp.detailOpen;
    setWriting(temp);
  };

  // 게시물 삭제
  const onDelete = id => {
    let result = window.confirm('게시글을 삭제하시겠습니까?');
    if (result) {
      boardDispatch({
        type: 'DELETE',
        id,
      });
      alert('삭제되었습니다');
      history.push(`${match.url}`);
      boardRepository.removeBoard(id); // firestore 삭제
    }
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
          <BoardWrite
            userId={userId}
            profileState={profileState}
            writeCancel={writeCancel}
            boardRepository={boardRepository}
          />
        </Route>
        <Route path={`${match.path}/detail`}>
          <BoardDetail
            userId={userId}
            writing={writing}
            setWriting={setWriting}
            onDelete={onDelete}
            profile={profile}
            boardRepository={boardRepository}
          />
        </Route>
      </Switch>
    </section>
  );
};

export default Board;
