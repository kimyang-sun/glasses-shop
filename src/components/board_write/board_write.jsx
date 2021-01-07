import React, { useState } from 'react';
import styles from './board_write.module.css';
import classNames from 'classnames/bind';
import { useBoardDispatch, useBoardNextId } from 'contexts/board_context';
const cx = classNames.bind(styles);

const BoardWrite = ({ profileState, writeCancel }) => {
  const { name, img } = profileState;
  const dispatch = useBoardDispatch();
  const nextId = useBoardNextId();
  const [note, setNote] = useState({
    title: '',
    content: '',
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
      ...note,
      id: nextId.current,
      writer: name ? name : '이름없음',
      img: img,
      date: `${year}-${month}-${day}`,
    };

    // 글쓰기 디스패치
    dispatch({
      type: 'WRITE',
      temp,
    });
    // 글쓰기 버튼을 누르면 input 초기화
    setNote({
      title: '',
      content: '',
    });
    // 고유 id도 1을 더해준다
    nextId.current += 1;
    writeCancel();
  };

  const onCancel = () => {
    writeCancel();
    setNote({
      title: '',
      content: '',
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
        <button className={cx('cancel')} type="button" onClick={onCancel}>
          취소
        </button>
      </div>
    </form>
  );
};

export default BoardWrite;
