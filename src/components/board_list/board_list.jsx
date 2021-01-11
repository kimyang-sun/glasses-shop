import React, { useCallback, useRef, useState } from 'react';
import Pagination from 'components/pagination/pagination';
import BoardItem from 'components/board_item/board_item';
import styles from './board_list.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const BoardList = ({ boardState, writeOpen, detailOpen }) => {
  // 페이지 관련
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const postsPerPage = useRef(6); // 페이지당 아이템 수

  const indexOfLast = currentPage * postsPerPage.current; // 마지막 페이지 순서
  const indexOfFirst = indexOfLast - postsPerPage.current; // 첫 페이지 순서
  const currentPostsSlice = useCallback(
    posts => {
      const current = [...posts].reverse().slice(indexOfFirst, indexOfLast);
      return current;
    },
    [indexOfFirst, indexOfLast]
  );
  const currentPosts = currentPostsSlice(boardState);

  return (
    <>
      <h2>게시판</h2>
      {boardState.length === 0 ? (
        <p className={cx('empty')}>게시글이 없습니다 😥</p>
      ) : (
        <>
          <ul className={cx('list')}>
            {currentPosts.map(note => (
              <BoardItem
                key={note.id}
                uid={note.uid}
                id={note.id}
                title={note.title}
                writer={note.writer}
                content={note.content}
                img={note.img}
                date={note.date}
                comments={note.comments}
                detailOpen={detailOpen}
              />
            ))}
          </ul>
          <Pagination
            totalPosts={boardState.length}
            page={currentPage}
            paginate={setCurrentPage}
            postsPerPage={postsPerPage.current}
          />
        </>
      )}
      <button className={cx('writeBtn')} onClick={writeOpen}>
        글쓰기
      </button>
    </>
  );
};

export default BoardList;
