import { firebaseFireStore } from './firebase';

class BoardRepository {
  syncBoard(onUpdate) {
    firebaseFireStore.collection('board').onSnapshot(snapshot => {
      const boardData = snapshot.docs.map(doc => ({ ...doc.data() }));
      boardData && onUpdate(boardData);
    });
  }

  saveBoard(id, writing) {
    firebaseFireStore.collection('board').doc(String(id)).set(writing);
  }

  updateBoard(id, writing) {
    console.log(writing);
    firebaseFireStore.doc(`board/${id}`).update(writing);
  }

  removeBoard(id) {
    firebaseFireStore.doc(`board/${id}`).delete();
  }

  // 댓글
  saveComment(id, writing, temp) {
    const addWriting = { ...writing, comments: [...writing.comments, temp] };
    firebaseFireStore.doc(`board/${id}`).update(addWriting);
  }

  updateComment(id, writing, temp) {
    const modifyWriting = { ...writing, comments: temp };
    firebaseFireStore.doc(`board/${id}`).update(modifyWriting);
  }
}

export default BoardRepository;
