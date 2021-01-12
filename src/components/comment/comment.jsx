import React, { useState } from 'react';
import styles from './comment.module.css';
import classNames from 'classnames/bind';
import defaultImg from 'images/no_img.jpg';
const cx = classNames.bind(styles);

const Comment = ({
  userId,
  id,
  uid,
  img,
  name,
  content,
  date,
  writing,
  setWriting,
  onEditHandle,
  onDeleteHandle,
}) => {
  const [editing, setEditing] = useState(false);
  const [comment, setComment] = useState('');

  // 수정
  const onEdit = () => {
    setComment(content);
    setEditing(true);
  };

  // 수정확인
  const onCheckEdit = () => {
    setEditing(false);
    const temp = writing.comments.map(value => {
      if (value.id === id) {
        return { ...value, content: comment };
      } else {
        return value;
      }
    });
    setWriting({ ...writing, comments: temp });
    onEditHandle(temp);
  };

  // 삭제
  const onDelete = () => {
    let result = window.confirm('댓글을 삭제하시겠습니까?');
    if (result) {
      const temp = writing.comments.filter(comment => comment.id !== id);
      setWriting({
        ...writing,
        comments: temp,
      });
      onDeleteHandle(temp);
    }
  };

  return (
    <li className={cx('box')}>
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
        <span className={cx('name')}>{name ? name : '이름없음'}</span>
        <span className={cx('date')}>{date}</span>
      </div>
      {editing ? (
        <>
          <input
            className={cx('input')}
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button className={cx('editCheck')} onClick={onCheckEdit}>
            확인
          </button>
        </>
      ) : (
        <p className={cx('content')}>{content}</p>
      )}
      {userId === uid && (
        <div className={cx('btnBox')}>
          {!editing && (
            <button className={cx('edit')} onClick={onEdit}>
              수정
            </button>
          )}
          <button className={cx('delete')} onClick={onDelete}>
            삭제
          </button>
        </div>
      )}
    </li>
  );
};

export default Comment;
