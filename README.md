# Git 설정하기

1. 깃 초기화
```
git init
```

2. 깃 remote 연결하기
```
git remote add origin {깃허브 레포지토리 주소}
```

3. 깃 최신 정보 불러오기
```
git pull origin {브랜치 이름}
```

4. 깃 새 브랜치 생성하기
```
git branch -M {브랜치 이름}
```

5. 깃 브랜치 이동하기
```
git checkout {브랜치 이름}
```

5. 깃에 파일 전체 추가하기
```
git add . 
```

6. 깃에 특정 파일 추가하기
```
git add {파일이름}
```

7. 깃 커밋하기
```
git commit -m "커밋 메시지"
```

8. 깃 원격 저장소에 푸시하기
```
git push origin {브랜치 이름}
```

# 📎 GitHub 사용법 및 규칙
   > [깃허브 사용법 및 규칙](https://www.notion.so/makeus-challenge/Git-Hub-b54463cb25e2430bb5ec190d70490665?pvs=4)

1. 자신의 브랜치에 프로젝트 업로드하기
2. Main 브랜치로 PR(Pull Request) 올리기 (참고: [좋은 PR 작성하기](https://medium.com/hayanmind-tech-blog-kr/%EC%A2%8B%EC%9D%80-pr%EC%97%90-%EB%8C%80%ED%95%9C-%EB%8B%A8%EC%83%81-6586c3f757ac))

- **Assignees(PR 담당자): 본인**

- **Labels: mission 🚀**

<br>

# ✔ Commit Message Convention
| 커밋명   | 내용                                        |
| -------- | ------------------------------------------- |
| FEAT     | 파일, 폴더, 새로운 기능 추가                |
| FIX      | 버그 수정                                   |
| DOCS     | README 등의 문서 수정                         |
| STYLE    | 코드 형식, 정렬, 주석 등의 변경             |
| REFACTOR | 코드 리팩토링                               |
| TEST     | 테스트 코드 추가 및 수정                            |
| CHORE    | 환경설정, 빌드 업무, 패키지 매니저 설정등.. |
| HOTFIX   | 치명적이거나 급한 버그 수정                 |
| REMOVE   | 사용하지 않는 변수, 파일 etc 삭제           |

- 예시: "[Feat] 로그인 API 연동"



# React Vite 설정하기

1. 프로젝트 생성하기
```
npm create vite@latest 폴더이름
```

2. 리액트, 자바스크립트 선택

3. 폴더로 이동
```
cd 폴더이름
```

4. npm 설치
```
npm install
```

5. 리액트 실행
```
npm run dev
```
