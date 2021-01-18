# Glasses Shop (React.js)

- 로그인 화면
  ![image](https://user-images.githubusercontent.com/56675004/104903916-f0e58300-59c3-11eb-89d0-bc960437428c.png)

- 메인
  ![image](https://user-images.githubusercontent.com/56675004/104904089-212d2180-59c4-11eb-9f22-89ef29eadc75.png)

- 상품
  ![image](https://user-images.githubusercontent.com/56675004/104904127-2db17a00-59c4-11eb-89e1-77973350a7af.png)

- 게시판
  ![image](https://user-images.githubusercontent.com/56675004/104904212-4588fe00-59c4-11eb-937f-653b64e412ac.png)

  ![image](https://user-images.githubusercontent.com/56675004/104904261-546fb080-59c4-11eb-9d8f-b98d25df42c0.png)

  ![image](https://user-images.githubusercontent.com/56675004/104904428-7e28d780-59c4-11eb-9d59-246b43a5c567.png)

- 장바구니
  ![image](https://user-images.githubusercontent.com/56675004/104904496-900a7a80-59c4-11eb-87ed-8bb299749e2c.png)

- 내 정보
  ![image](https://user-images.githubusercontent.com/56675004/104904599-afa1a300-59c4-11eb-96ea-896d7a7a7cba.png)

---

#### 📌

```
- React.js
- React-Router
- Firebase (auth, firestore)
```

---

## 링크

- [https://glasses-shop.netlify.app](https://glasses-shop.netlify.app)

---

## 설명

### [로그인]

```
- Firebase Auth를 이용하여 로그인을 구현하였습니다.
- 이메일 계정을 생성할 수 있습니다.
- 구글 계정으로도 로그인을 할 수 있습니다.
- '내 정보'에서 로그아웃이 가능합니다.
```

### [내 정보 저장]

```
- Firebase Firestore를 이용하여 데이터를 저장합니다.
- 프로필 사진 업로드는 FileReader를 이용하였습니다.
```

### [게시판]

```
- Firebase firestore를 이용하여 데이터를 저장합니다.
- 게시글을 작성할 수 있고 댓글도 작성할 수 있습니다.
- 게시글과 댓글을 수정,삭제할 수 있습니다.
- 본인의 계정으로만 수정,삭제할 수 있습니다.
- 저장되어있는 프로필 사진과 이름을 불러와서 기록됩니다.
- 게시글과 댓글 작성 날짜가 기록됩니다.
```

### [상품 & 장바구니]

```
- '상품'에서 장바구니를 추가,삭제할 수 있습니다.
- '장바구니'에서 장바구니 삭제를 할 수 있습니다.
- 장바구니 상품들을 따로 체크해서 관리할 수 있습니다.
- 특정 상품만 체크하여 삭제할 수 있습니다.
- 체크가 되어있지 않으면 결제금액 부분이 비활성화됩니다.
- 결제금액이 활성화되면 상품 개수에 따라 가격이 달라집니다.
- 쿠폰을 체크하면 해당 쿠폰이 적용된 값이 계산됩니다.
```

### [기타]

```
- state 관리는 useReducer와 Context API를 이용하였습니다.
- 컴포넌트 스타일링은 css-module을 이용하였습니다.
```
