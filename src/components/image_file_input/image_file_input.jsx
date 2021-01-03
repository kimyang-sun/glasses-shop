import React from 'react';
import styles from './image_file_input.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const ImageFileInput = ({ imageUploader, profile, imgOnChange }) => {
  const onFileChange = async e => {
    const file = e.target.files[0];
    imageUploader.upload(file, imgOnChange);
  };

  return (
    <>
      <input
        id="pr_file"
        className={cx('upload')}
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
      <label className={cx('file')} htmlFor="pr_file">
        {profile.img ? (
          <span
            className={cx('img')}
            style={{ backgroundImage: `url(${profile.img})` }}
          ></span>
        ) : (
          <span className={cx('notImg')}>NO IMG</span>
        )}
      </label>
    </>
  );
};

export default ImageFileInput;
