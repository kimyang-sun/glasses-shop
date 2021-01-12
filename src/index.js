import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import AuthService from './service/auth_service';
import CartRepository from 'service/cart_repository';
import ProfileRepository from 'service/profile_repository';
import ImageUploader from 'service/image_uploader';
import ImageFileInput from 'components/image_file_input/image_file_input';
import BoardRepository from 'service/board_repository';

const authService = new AuthService();
const cartRepository = new CartRepository();
const profileRepository = new ProfileRepository();
const boardRepository = new BoardRepository();
const imageUploader = new ImageUploader();
const ImageInput = React.memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      cartRepository={cartRepository}
      profileRepository={profileRepository}
      boardRepository={boardRepository}
      ImageInput={ImageInput}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
