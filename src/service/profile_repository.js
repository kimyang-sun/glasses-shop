import { firebaseFireStore } from './firebase';

class ProfileRepository {
  syncProfile(userId, onUpdate) {
    const unsubscribe = firebaseFireStore
      .collection('users')
      .doc(userId)
      .collection('profile')
      .onSnapshot(snapshot => {
        const profileData = snapshot.docs.map(doc => ({ ...doc.data() }));
        profileData && onUpdate(profileData[0]);
      });
    return () => unsubscribe();
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
