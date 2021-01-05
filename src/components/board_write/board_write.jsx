import React, { useState } from 'react';
import styles from './board_write.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const BoardWrite = () => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChange = e => {
    const { value, name } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  return (
    <form className={cx('form')} onSubmit={onSubmit}>
      <h3>글쓰기</h3>
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
          글쓰기
        </button>
        <button className={cx('cancel')} type="button">
          취소
        </button>
      </div>
    </form>
  );
};

export default BoardWrite;
