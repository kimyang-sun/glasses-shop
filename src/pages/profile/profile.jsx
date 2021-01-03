import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.css';
import { useProfileDispatch } from 'contexts/profile_context';
import { useHistory } from 'react-router-dom';
const cx = classNames.bind(styles);

const Profile = ({
  profileRepository,
  user,
  logoutHandler,
  profile,
  onChange,
  imgOnChange,
  ImageInput,
}) => {
  const history = useHistory();
  const profileDispatch = useProfileDispatch();

  // 프로필 저장
  const onSave = () => {
    profileDispatch({
      type: 'SAVE',
      profile,
    });
    profileRepository.saveProfile(user.uid, profile);
  };

  // 계정 로그아웃
  const onLogout = () => {
    logoutHandler();
    history.push('/');
  };

  return (
    <section>
      <h2 className={cx('title')}>내 정보</h2>
      <div className={cx('box')}>
        <div className={cx('row')}>
          <span>사진</span>
          <ImageInput profile={profile} imgOnChange={imgOnChange} />
        </div>
        <div className={cx('row')}>
          <span>이메일</span>
          <p className={cx('email')} type="text">
            {user.email}
          </p>
        </div>
        <div className={cx('row')}>
          <span>이름</span>
          <input
            name={'name'}
            className={cx('name')}
            type="text"
            placeholder="이름을 입력하세요"
            value={profile.name}
            onChange={e => onChange(e)}
          />
        </div>

        <div className={cx('row')}>
          <span>소개</span>
          <textarea
            name={'message'}
            className={cx('message')}
            placeholder="소개를 해주세요"
            value={profile.message}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <div className={cx('row')}>
          <button className={cx('save')} onClick={onSave}>
            저장하기
          </button>
          <button className={cx('logout')} onClick={onLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
