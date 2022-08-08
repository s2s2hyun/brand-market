// logo

### 배포URL : https://typiano.co.kr/

### 목차
1. 실행방법
2. 기술스택
3. 페이지 

## 실행방법
localhost:3000에서 yarn install => graphql endpoint graphql15을 graphql로 변경 => yarn dev

## 기술스택


## 페이지 구성

### 1. 홈 메인 페이지


![ezgif com-gif-homemain](https://user-images.githubusercontent.com/100761993/183446990-c8a3b722-88a2-4498-a576-551bd30788ad.gif)

> 홈 메인에는 케러셀과 상품들이 바로 보여지게 됩니다.
- 홈 메인에 보이는 상품을 클릭시 상품 디테일 페이지로 이동하게 됩니다.

### 2. 회원가입 페이지
![ezgif com-gif-signup](https://user-images.githubusercontent.com/100761993/183447872-13e0dfa7-8eb4-4ccd-a7ab-9fbc6c5def6e.gif)

> 헤더의 메뉴를 통해 회원가입이 가능합니다.
- yup 적용으로 에러를 사전에 방지하였습니다. 
- 올바르지 못한 값을 입력한 경우에 회원가입 버튼이 활성화 되지 않습니다.

### 3. 로그인 & 로그아웃
![ezgif com-gif-login](https://user-images.githubusercontent.com/100761993/183448111-826c53b4-2b68-4336-adb6-23f90267645a.gif)

> 상단 레이아웃 헤더의 메뉴를 통해 로그인으로 이동이 가능합니다.
- yup을 적용해 올바르지 않은 값을 입력한 경우 에러 메시지가 보여집니다.

### 4. Freeboard (자유게시판)

![ezgif com-gif-board](https://user-images.githubusercontent.com/100761993/183448276-f64bd8c6-40db-41af-bd15-1b9137aba0ba.gif)

> 자유게시판 리스트 페이지 입니다.
> 윗 부분의 글은 `좋아요` 순의 Best 게시글 입니다.
- 페이지네이션이 적용되어있어 리스트의 글을 확인할 수 있습니다.
- 제목으로 게시글을 검색할 수 있습니다. debouncing이 적용되어있어, 일정 시간 경과 후 확인할 수 있습니다.


### 5. Freeboard (게시글 상세보기)

![ezgif com-gif-boardDetail](https://user-images.githubusercontent.com/100761993/183448522-078ad323-99e5-435d-b2c8-00194ae6f972.gif)

> 자유게시판 게시글  상세보기 페이지입니다. 
> 비회원도 이용이 가능합니다. 
- react-player 적용으로 유튜브 영상이 재생 가능합니다.
- optimistic UI의 적용으로 좋아요 갯수를 추가 렌더링 없이 바로 확인할 수 있습니다.
- 댓글 기능이 있습니다.
- 툴팁으로 등록한 주소를 띄웁니다.

### 6. Freeboard 댓글

![ezgif com-gif-boardCommentWrite](https://user-images.githubusercontent.com/100761993/183448967-61ce184e-55e9-41ee-a438-1db61ba76866.gif)

> 댓글을 등록, 수정, 삭제할 수 있습니다.
> 비회원도 이용이 가능합니다.
- 댓글 수정, 삭제시 모달을 띄워 비밀번호를 입력받아 비밀번호가 일치할 경우에만 수정, 삭제가 가능합니다.
- 별점을 줄 수 있습니다.

### 7. Freeboard 등록하기

![ezgif com-gif-boardWrite](https://user-images.githubusercontent.com/100761993/183449100-92d564de-3f20-4a2f-8634-b27eb59b4838.gif)

> 비회원도 이용이 가능합니다.
> 익명으로 작성할 수 있습니다.
- yup을 적용해 필수값이 누락되지 않도록 했습니다.
- react-quill이 적용되어 있습니다.
- daum-post-code로 주소를 입력받습니다.

### 8. Freeboard 수정 & 삭제

// 대기 

### 9. Brand마켓 리스트



> Brand마켓 게시글 리스트 입니다.
- 무한스크롤로 이전 게시글을 모두 보여줍니다.
- 상품명으로 검색이 가능합니다. debouncing이 적용되어 있습니다.
- 검색바 위의 게시글은 pick이 많은 순서로 정렬됩니다.
- 최근 본 상품 3개가 순서대로 오른쪽에 나타납니다.  
- 하트를 호버하면 pick한 숫자가 나타납니다.

### 10. Brand마켓 게시글 상세보기

![ezgif com-gif-brandDetail](https://user-images.githubusercontent.com/100761993/183449985-6a3ba9cb-b6f8-4a53-88c1-e1b725cb1433.gif)


> Brand마켓 게시글 상세보기 입니다.
> 회원만 이용이 가능합니다. 권한 분기가 되어있습니다.
- carousel이 적용되어 있습니다.
- kakao-map과 daum-post-code가 적용되어 있습니다.
- 로컬스토리지를 이용한 장바구니 담기 기능이 있으며, 중복으로 담기지 않습니다.
- pick(찜하기)기능이 있습니다(토글버튼).
- 결제하기 기능이 있습니다.
- Q&A부분을 분리했습니다.
- 작성자와 로그인한 유저가 다를 경우 수정, 삭제 버튼이 보이지 않습니다.
- 작성자가 본인의 상품을 구매할 수 없습니다.

### 11. Brand마켓 Q&A 기능

  ㄷㄱ

> 중고마켓 상세보기의 댓글, 대댓글 기능입니다.
> 회원만 이용이 가능합니다.
- 본인이 작성한 글이 아닐 경우 수정, 삭제 버튼이 보이지 않습니다.
- 대댓글 기능이 있습니다.
- 무한스크롤이 적용되어 있습니다.

### 12. Brand마켓 게시글 쓰기

  

> 회원만 이용이 가능합니다. 권한분기가 되어있습니다.
- kakao-map이 상세보기 페이지와 공통 컴포넌트로 사용되고 있습니다.
- yup이 적용되어 필수항목 미작성시 버튼이 활성화 되지 않도록 하였습니다.
- 태그를 추가할 수 있습니다.
- react-quill이 적용되어 있습니다.

### 13. 중고마켓 게시글 수정 & 삭제하기

ㄷㄱ 

> 회원만 이용이 가능합니다.
- 글 작성자만 수정, 삭제가 가능합니다.
- 중고마켓 게시글 작성하기와 공통으로 컴포넌트를 사용합니다.

### 14. 충전하기 & 결제하기

ㄷㄱ

> 회원만 이용이 가능합니다.
- import를 이용해 충전을 합니다(테스트모드).
- 모달을 띄워 충전합니다.
- 본인의 상품은 결제할 수 없습니다.
- 포인트보다 비싼 금액의 상품을 구매할 수 없습니다.
