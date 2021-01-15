import React, { useState } from 'react';
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
}) => {
  const { uid, id, title, writer, content, img, date } = writing;
  const [editing, setEditing] = useState(false);

  return (
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
          <h4 className={cx('title')}>{title}</h4>
          <div className={cx('information')}>
            {img ? (
              <span
                className={cx('img')}
                style={{ backgroundImage: `url(${img})` }}
              ></span>
            ) : (
              <span
                className={cx('img')}
                style={{ backgroundImage: `url(${defaultImg})` }}
              ></span>
            )}
            <span className={cx('writer')}>{writer}</span>
            <span className={cx('date')}>{`(${date})`}</span>
          </div>
          {userId === uid && (
            <div className={cx('btnBox')}>
              <button className={cx('edit')} onClick={() => setEditing(true)}>
                수정
              </button>
              <button className={cx('delete')} onClick={() => onDelete(id)}>
                삭제
              </button>
            </div>
          )}
          <p className={cx('content')}>{content}</p>
          <Comments
            userId={userId}
            id={id}
            profile={profile}
            writing={writing}
            setWriting={setWriting}
            boardRepository={boardRepository}
          />
        </div>
      )}
    </>
  );
};

export default BoardDetail;
