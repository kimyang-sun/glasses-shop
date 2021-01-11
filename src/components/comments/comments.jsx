import React, { useState } from 'react';
import styles from './comments.module.css';
import classNames from 'classnames/bind';
import Comment from 'components/comment/comment';
import { useBoardDispatch } from 'contexts/board_context';
const cx = classNames.bind(styles);

const Comments = ({ userId, id, profile, writing, setWriting }) => {
  const [comment, setComment] = useState('');
  const dispatch = useBoardDispatch();

  // 댓글 등록
  const onClick = () => {
    // 현재 날짜
    const today = new Date();
    const year = today.toLocaleDateString('en-US', {
      year: 'numeric',
    });
    const month = today.toLocaleDateString('en-US', {
      month: '2-digit',
    });
    const day = today.toLocaleDateString('en-US', {
      day: '2-digit',
    });

    const temp = {
      id: today,
      uid: userId,
      img: profile.img,
      name: profile.name,
      content: comment,
      date: `${year}-${month}-${day}`,
    };

    // 디스패치 변경
    dispatch({
      type: 'COMMENT_ADD',
      id,
      temp,
    });

    // 실시간 상태 변경
    setWriting({
      ...writing,
      comments: [...writing.comments, temp],
    });
    setComment('');
  };

  // 댓글 삭제
  const onDeleteHandle = temp => {
    dispatch({
      type: 'COMMENT_DELETE',
      id,
      temp,
    });
  };

  return (
    <div className={cx('container')}>
      <p className={cx('title')}>댓글</p>
      <ul className={cx('contents')}>
        {writing.comments.map(comment => (
          <Comment
            userId={userId}
            key={comment.id}
            id={comment.id}
            uid={comment.uid}
            img={comment.img}
            name={comment.name}
            content={comment.content}
            date={comment.date}
            dispatch={dispatch}
            writing={writing}
            setWriting={setWriting}
            onDeleteHandle={onDeleteHandle}
          />
        ))}
      </ul>
      <div className={cx('inputBox')}>
        <input
          className={cx('input')}
          type="text"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <button className={cx('button')} onClick={onClick}>
          등록
        </button>
      </div>
    </div>
  );
};

export default Comments;
