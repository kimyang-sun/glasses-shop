import React from 'react';
import styles from './image_file_input.module.css';
import classNames from 'classnames/bind';
import defaultImg from 'images/no_img.jpg';
const cx = classNames.bind(styles);

const ImageFileInput = ({
  imageUploader,
  profile,
  imgOnChange,
  imgOnRemove,
}) => {
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
          <div
            className={cx('img')}
            style={{ backgroundImage: `url(${profile.img})` }}
          ></div>
        ) : (
          <div
            className={cx('img')}
            style={{ backgroundImage: `url(${defaultImg})` }}
          ></div>
        )}
      </label>
      <button className={cx('removeBtn')} type="button" onClick={imgOnRemove}>
        사진 내리기
      </button>
    </>
  );
};

export default ImageFileInput;
