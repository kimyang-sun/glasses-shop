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
        <input
          className={cx('upload')}
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
        <input className={cx('name')} type="text" />
        <input className={cx('email')} type="text" />
        <textarea className={cx('message')}></textarea>
      </div>
    </section>
  );
};

export default Profile;
