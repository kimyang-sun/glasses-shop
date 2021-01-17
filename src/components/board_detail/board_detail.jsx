import React, { useEffect, useState } from 'react';
import styles from './board_detail.module.css';
import classNames from 'classnames/bind';
import Comments from 'components/comments/comments';
import defaultImg from 'images/no_img.jpg';
import BoardEdit from 'components/board_edit/board_edit';
const cx = classNames.bind(styles);

const BoardDetail = ({
  userId,
  writing,
  setWriting,
  onDelete,
  profile,
  boardRepository,
  refresh,
}) => {
  // 새로고침시 데이터가 없기때문에 board 페이지로 이동시킵니다.
  useEffect(() => {
    if (!writing) refresh();
  }, [refresh, writing]);
  const [editing, setEditing] = useState(false);

  return (
    <>
      {writing && (
        <>
          {editing ? (
            <BoardEdit
              writing={writing}
              setWriting={setWriting}
              setEditing={setEditing}
              boardRepository={boardRepository}
            />
          ) : (
            <div className={cx('container')}>
              <h4 className={cx('title')}>{writing.title}</h4>
              <div className={cx('information')}>
                {writing.img ? (
                  <span
                    className={cx('img')}
                    style={{ backgroundImage: `url(${writing.img})` }}
                  ></span>
                ) : (
                  <span
                    className={cx('img')}
                    style={{ backgroundImage: `url(${defaultImg})` }}
                  ></span>
                )}
                <span className={cx('writer')}>{writing.writer}</span>
                <span className={cx('date')}>{`(${writing.date})`}</span>
              </div>
              {userId === writing.uid && (
                <div className={cx('btnBox')}>
                  <button
                    className={cx('edit')}
                    onClick={() => setEditing(true)}
                  >
                    수정
                  </button>
                  <button
                    className={cx('delete')}
                    onClick={() => onDelete(writing.id)}
                  >
                    삭제
                  </button>
                </div>
              )}
              <p className={cx('content')}>{writing.content}</p>
              <Comments
                userId={userId}
                id={writing.id}
                profile={profile}
                writing={writing}
                setWriting={setWriting}
                boardRepository={boardRepository}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BoardDetail;
