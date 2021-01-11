import React, { useState } from 'react';
import styles from './board_edit.module.css';
import classNames from 'classnames/bind';
import { useBoardDispatch } from 'contexts/board_context';
const cx = classNames.bind(styles);

const BoardEdit = ({ writing, setWriting, setEditing }) => {
  const { id, title, content } = writing;
  const dispatch = useBoardDispatch();
  const [note, setNote] = useState({
    title: title,
    content: content,
  });

  const onChange = e => {
    const { value, name } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    // 글쓰기 디스패치
    dispatch({
      type: 'EDIT',
      id,
      ...note,
    });

    setWriting({ ...writing, ...note });
    setEditing(false);
    alert('수정되었습니다');
  };

  return (
    <form className={cx('form')} onSubmit={onSubmit}>
      <h3>수정하기</h3>
      <input
        className={cx('title')}
        type="text"
        placeholder="제목을 입력해주세요"
        name="title"
        value={note.title}
        onChange={onChange}
      />
      <textarea
        className={cx('content')}
        placeholder="내용을 입력해주세요"
        name="content"
        value={note.content}
        onChange={onChange}
      ></textarea>
      <div className={cx('buttons')}>
        <button className={cx('write')} type="submit">
          수정하기
        </button>
        <button
          className={cx('cancel')}
          type="button"
          onClick={() => setEditing(false)}
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default BoardEdit;
