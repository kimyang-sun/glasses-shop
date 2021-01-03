import { firebaseFireStore } from './firebase';

class ProfileRepository {
  syncProfile(userId, onUpdate) {
    firebaseFireStore
      .collection('users')
      .doc(userId)
      .collection('profile')
      .get();
  }

  saveProfile(userId, profile) {
    firebaseFireStore
      .collection('users')
      .doc(userId)
      .collection('profile')
      .doc('information')
      .set(profile);
  }
}

export default ProfileRepository;
