<img width="181" alt="dingcologoman" src="https://user-images.githubusercontent.com/100761993/183570217-bf40dc41-dc3c-44a0-ab00-f298b256edd6.png">


### 배포URL : https://typiano.co.kr/



### 목차
1. 실행방법
2. 기술스택
3. 페이지 

## 실행방법
localhost:3000에서 yarn install => graphql endpoint graphql15을 graphql로 변경 => yarn dev
현재 백엔드 서버 닫혀서 데이터 불러오질 못하고 있습니다.

## 🛠 기술 스택

- GraphQL
- Emotion
- React.js
- Next.js
- TypeScript
- JavaScript
- Apollo Client
- GCP
![Untitled](https://user-images.githubusercontent.com/100761993/183465608-b679c727-58a8-4592-8a5b-dc690c92c8dc.jpg)

## 페이지 구성

### 1. 홈 메인 페이지


![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/100761993/188081262-b5eea7e6-6f58-4f64-b15d-e1c3aa00bd4e.gif)


> 홈 메인에는 케러셀과 상품들이 바로 보여지게 됩니다.
- 홈 메인에 보이는 상품을 클릭시 상품 디테일 페이지로 이동하게 됩니다.

### 2. 회원가입 페이지

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/100761993/188083176-8bae712c-0d65-4d51-b0cb-0ce0291297b6.gif)


> 헤더의 메뉴를 통해 회원가입이 가능합니다.
- yup 적용으로 에러를 사전에 방지하였습니다. 
- 올바르지 못한 값을 입력한 경우에 회원가입 버튼이 활성화 되지 않습니다.

### 3. 로그인 & 로그아웃

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/100761993/188083616-5386cca9-3bb0-47b2-95d2-5f79955849e5.gif)

> 상단 레이아웃 헤더의 메뉴를 통해 로그인으로 이동이 가능합니다.
- yup을 적용해 올바르지 않은 값을 입력한 경우 에러 메시지가 보여집니다.

### 4. Freeboard (자유게시판)

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/100761993/188084216-3b31e691-f1ba-4f83-ad29-fd83003fc9e5.gif)

> 자유게시판 리스트 페이지 입니다.
> 윗 부분의 글은 `좋아요` 순의 Best 게시글 입니다.
- 페이지네이션이 적용되어있어 리스트의 글을 확인할 수 있습니다.
- 제목으로 게시글을 검색할 수 있습니다. debouncing이 적용되어있어, 일정 시간 경과 후 확인할 수 있습니다.


### 5. Freeboard (게시글 상세보기)

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/100761993/188084560-06a95d79-1b65-4d93-976e-17b535d804fa.gif)

> 자유게시판 게시글  상세보기 페이지입니다. 
> 비회원도 이용이 가능합니다. 
- react-player 적용으로 유튜브 영상이 재생 가능합니다.
- optimistic UI의 적용으로 좋아요 갯수를 추가 렌더링 없이 바로 확인할 수 있습니다.
- 댓글 기능이 있습니다.
- 툴팁으로 등록한 주소를 띄웁니다.

### 6. Freeboard 댓글

![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/100761993/188084941-f2932ac8-892e-47f3-9588-d02e11a6dafe.gif)

> 댓글을 등록, 수정, 삭제할 수 있습니다.
> 비회원도 이용이 가능합니다.
- 댓글 수정, 삭제시 모달을 띄워 비밀번호를 입력받아 비밀번호가 일치할 경우에만 수정, 삭제가 가능합니다.
- 별점을 줄 수 있습니다.

### 7. Freeboard 등록하기

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/100761993/188086016-638e444d-9034-4c54-a937-92e18a24ce31.gif)

> 비회원도 이용이 가능합니다.
> 익명으로 작성할 수 있습니다.
- yup을 적용해 필수값이 누락되지 않도록 했습니다.
- react-quill이 적용되어 있습니다.
- daum-post-code로 주소를 입력받습니다.

### 8. Freeboard 수정 & 삭제

-수정
![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/100761993/188086741-a190133d-227f-46c7-b665-a7fb59e15131.gif)

- 삭제
![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/100761993/188086509-ae69a42b-8de9-47c3-8772-697bbc824a53.gif)



### 9. Brand마켓 리스트

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/100761993/188097832-8d918bf8-6868-4f28-8e0b-95908c111519.gif)



> Brand마켓 게시글 리스트 입니다.
- 무한스크롤로 이전 게시글을 모두 보여줍니다.
- 상품명으로 검색이 가능합니다. debouncing이 적용되어 있습니다.
- Best상품은  pick이 많은 순서로 정렬됩니다.

### 10. Brand마켓 게시글 상세보기

![ezgif com-gif-brandDetail](https://user-images.githubusercontent.com/100761993/183449985-6a3ba9cb-b6f8-4a53-88c1-e1b725cb1433.gif)


> Brand마켓 게시글 상세보기 입니다.
> 회원만 이용이 가능합니다. 권한 분기가 되어있습니다.
- kakao-map과 daum-post-code가 적용되어 있습니다.
- 로컬스토리지를 이용한 장바구니 담기 기능이 있으며, 중복으로 담기지 않습니다.
- pick(찜하기)기능이 있습니다(토글버튼).
- 결제하기 기능이 있습니다.
- Q&A부분을 분리했습니다.
- 작성자와 로그인한 유저가 다를 경우 수정, 삭제 버튼이 보이지 않습니다.
- 작성자가 본인의 상품을 구매할 수 없습니다.

### 11. Brand마켓 Q&A 기능
댓글 생성
 ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/100761993/183453663-c277a33f-ea29-4f17-92a0-adf6f74fa894.gif)
  
  
  대댓글 
 ![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/100761993/183453848-e44e6bd3-3bbd-4669-a64a-72044f30ea4a.gif)


> 중고마켓 상세보기의 댓글, 대댓글 기능입니다.
> 회원만 이용이 가능합니다.
- 본인이 작성한 글이 아닐 경우 수정, 삭제 버튼이 보이지 않습니다.
- 대댓글 기능이 있습니다.
- 무한스크롤이 적용되어 있습니다.

### 12. Brand마켓 게시글 쓰기

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/100761993/188097113-444d0e9b-0e6b-454a-9d24-7ec51a6255d7.gif)

> 회원만 이용이 가능합니다. 권한분기가 되어있습니다.
- kakao-map이 상세보기 페이지와 공통 컴포넌트로 사용되고 있습니다.
- yup이 적용되어 필수항목 미작성시 버튼이 활성화 되지 않도록 하였습니다.
- 태그를 추가할 수 있습니다.
- react-quill이 적용되어 있습니다.

### 13. 중고마켓 게시글 수정 & 삭제하기

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/100761993/183455391-d1f09868-c052-47de-bb65-7feea498047e.gif)

> 회원만 이용이 가능합니다.
- 글 작성자만 수정, 삭제가 가능합니다.
- 중고마켓 게시글 작성하기와 공통으로 컴포넌트를 사용합니다.

### 14. 충전하기 & 결제하기

![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/100761993/188087768-92b25289-fe00-4a32-a733-adf44c3fe270.gif)


> 회원만 이용이 가능합니다.
- import를 이용해 충전을 합니다(테스트모드).
- 모달을 띄워 충전합니다.
- 본인의 상품은 결제할 수 없습니다.
- 포인트보다 비싼 금액의 상품을 구매할 수 없습니다.

### 앞으로 고쳐야하며 해야할일

! 이외 스스로 부족한걸 찾아서 내것으로 만들기 !

부트 캠프 수료 후 React와 next.js 이용해 개인 홈페이지를 만들었습니다.  혼자서 부족한 부분을 스스로 공부하며 실제로 업무에서 사용될법한 기술로 각각의 기능을 하는 웹사이트를 만들었다는 점에서 조금은 발전하고 있다는 생각이 들었습니다.

디자인부터 기획 그리고 기능 구현, 배포까지 혼자 진행하다 보니 그만큼 능동적으로 해결해야 하는 부분이 많았습니다. 기술 구현을 하면서도 계속해서 디자인을 수정하게 되고, 구현하고자 했던 기능들을 완성은 했지만 내가 짠 코드가 좋은 코드인지, 좋은 설계인지 객관적인 지표가 없어서 혼란스러웠습니다.

하지만 이전에 배웠던것을 복습하며 검색을 통해서 개선도 하고 이 모든 과정을 포기하지 않고 어떻게든 프로젝트를 배포시켰다는 점에서 제가 하고 있는 일에 더 애착도 가지게 되었습니다. 처음으로 진행한 개인 프로젝트지만 몸소 체감한 부족한 점들을 개선하여 다음 프로젝트에서 한층 더 성장한 실력을 발휘하고 싶습니다.
