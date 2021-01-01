import { firebaseFireStore } from './firebase';

class CartRepository {
  syncCart(userId, onUpdate) {
    firebaseFireStore
      .collection('users')
      .doc(userId)
      .collection('carts')
      .onSnapshot(snapshot => {
        const cartData = snapshot.docs.map(doc => ({ ...doc.data() }));
        cartData && onUpdate(cartData);
      });
  }

  async syncProduct(userId, setInit, onUpdate) {
    await firebaseFireStore
      .collection('users')
      .doc(userId)
      .collection('carts')
      .onSnapshot(snapshot => {
        const cartDataId = snapshot.docs.map(doc => doc.data().id);
        cartDataId && onUpdate(cartDataId);
      });
    setInit(true);
  }

  saveCart(userId, id, cart) {
    firebaseFireStore
      .collection('users')
      .doc(userId)
      .collection('carts')
      .doc(String(id))
      .set(cart);
  }

  removeCart(userId, id) {
    firebaseFireStore.doc(`users/${userId}/carts/${id}`).delete();
  }

  selectedRemoveCart(userId, checked) {
    console.log(checked);
    checked.forEach(check =>
      firebaseFireStore.doc(`users/${userId}/carts/${check.id}`).delete()
    );
  }
}

export default CartRepository;
