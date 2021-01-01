import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.css';
const cx = classNames.bind(styles);

const Profile = ({ user }) => {
  console.log(user);
  const onFileChange = e => {
    const file = e.target.files[0];
    console.log(file);
  };

  return (
    <section>
      <h2 className={cx('title')}>내 정보</h2>
      <div className={cx('box')}>
        <div className={cx('row')}>
          <span>사진</span>
          <input
            className={cx('upload')}
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
        </div>
        <div className={cx('row')}>
          <span>이메일</span>
          <p className={cx('email')} type="text">
            {user.email}
          </p>
        </div>
        <div className={cx('row')}>
          <span>이름</span>
          <input className={cx('name')} type="text" />
        </div>

        <div className={cx('row')}>
          <span>소개</span>
          <textarea className={cx('message')}></textarea>
        </div>
        <div className={cx('row')}>
          <button className={cx('save')}>저장하기</button>
          <button className={cx('logout')}>로그아웃</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
