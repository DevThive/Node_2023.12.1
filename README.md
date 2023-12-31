# 심화 개인 과제 (Prisma)

2023.12.01

# 환경변수

PORT : 포트 번호

DATABASE_URL : prisma 사용을 위한 DB URL

ACCESS_TOKEN_SECRET : jwt AccessToken 암호키

# 실행 방법

npm install

npm run dev

# 더 고민해 보기

1. Class와 Instance가 각각 무엇인지 설명해주세요

   class는 객체를 만드는 틀을 말합니다.
   instance는 class를 기반으로 구현된 구체적인 실체를 말합니다.

2. Class의 Method는 화살표 함수 형태로 구현하지 않았을 때 발생할 수 있는 문제와 해당 문제를 해결할 수 있는 다른 방법을 적어주세요

   콜백 함수 this에 값을 참조시키지 못하는 오류가 발생하며, 이를 해결 할 때는 this에 변수를 할당을 해주는 방법이 있습니다.

3. 3-Layered Architecture의 장점과 단점

   장점 : 각 계층이 나누어져 있기 때문에 기능을 추가하거나 관리를 할 때 좋은거같습니다.
   단점 : 추가하는 기능을 계층 구조로 설계를 해야하기 때문에 복잡한 느낌이 있습니다.

4. 숙련주차 과제에서 Mongoose를 Sequelize로 교체 했을 때와 비교하여 이번 과제에서 Sequelize를 Prisma로 교체하는 작업은 더 쉬웠나요? 더 어려웠나요? 왜그런지 3-Layered Architecture를 기준으로 설명해 주세요

   Mongoose에서 Sequelize로 변경하는 것보다 쉽다는 느꼈습니다. 그 이유는 3 계층 구조를 사용할 때 데이터 계층에서 Prisma를 이용해서 쉽게 데이터를 불러올 수 있었으며, 또한 DB를 관리하는 부분에서 Prisma가 편하다고 생각했습니다. 또한 service 부분에서 기능을 추가하거나 변경하는데 용이하다는 생각이 들었습니다.

5. 테스트코드 작성의 장점과 단점을 아는대로 적어주세요.

   작업을 하면서 바로바로 테스트가 가능하다는 것이 장점이며, 테스트를 수동적으로 하지 않고 자동적으로 테스트가 가능하다는 것이 장점인 것 같습니다.
   단점은 테스트 코드 작성도 개발 시간에 추가되기 때문에 시간이 오래걸린다는 단점이 있는 것 같습니다.

6. 테스트의 종류 3가지와 각각이 무엇인지 간단히 설명해 주세요.

   단위 테스트 : 하나의 모듈을 기준으로 독립적으로 진행하는 테스트입니다.
   통합 테스트 : 일반적으로 여러 개의 모듈들로 구성이 되어 있으며, 두개 이상의 모듈이 연결된 상태에서 테스트 하는 것을 말합니다.
   E2E 테스트 : 사용자가 사용하는 환경과 거의 동일 하게 테스틑 하는 것을 말합니다.

# 실행

배포 주소 : 3.39.189.53:3001

1. 회원가입

주소 : /api/users

데이터 : email, nickname, password, confirmpassword

2. 로그인

주소 : /api/users/auth

데이터 : email, password

결과 : Beare {token}값

3. 게시글 조회

주소(GET) : /api/posts

4. 상세내용 조회

주소(GET) : /api/posts/:postId

5. 게시글 수정

주소(PUT) : /api/posts/:postId

데이터 : title, content

6. 게시글 삭제

주소(DELETE) : /api/posts/:postId
