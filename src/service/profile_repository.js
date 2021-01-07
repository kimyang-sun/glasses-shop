import { firebaseFireStore } from './firebase';

class ProfileRepository {
  syncProfile(userId, onUpdate) {
    firebaseFireStore
      .collection('users')
      .doc(userId)
      .collection('profile')
      .onSnapshot(snapshot => {
        const profileData = snapshot.docs.map(doc => ({ ...doc.data() }));
        profileData && onUpdate(profileData[0]);
      });
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
