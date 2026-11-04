
# 박주연 | Personal Portfolio

Hugo와 GitHub Pages를 활용하여 제작한 개인 포트폴리오 웹사이트입니다.

컴퓨터·인공지능 분야의 학습 경험과 개발 프로젝트,
기술 역량 및 활동 내용을 소개합니다.

## 배포 사이트

https://qkrzoo8.github.io/my-portfolio/

## 기술 스택

- Hugo
- HTML / CSS / JavaScript
- YAML / TOML
- Git / GitHub
- GitHub Actions
- GitHub Pages

## 주요 기능

- 자기소개 및 프로필 이미지
- 개발 프로젝트와 GitHub 저장소 연결
- 기술 역량 및 언어 숙련도 표시
- 학력 및 자격증 소개
- 학생회 홍보 콘텐츠 갤러리
- GitHub 및 이메일 연락처
- 반응형 모바일 메뉴
- 키보드 본문 바로가기
- 사용자 정의 404 오류 페이지
- 카카오톡 등 SNS 링크 공유 이미지

## 프로젝트 구조

- `site/hugo.toml`: 사이트 기본 설정
- `site/content/`: 자기소개 콘텐츠
- `site/data/`: 프로젝트, 기술, 학력 등 데이터
- `site/static/`: 이미지 및 아이콘
- `site/themes/template/`: HTML, CSS, JavaScript 테마
- `.github/workflows/`: GitHub Actions 배포 설정

## 로컬 실행

Hugo Extended 0.128.0 이상이 설치된 환경에서 실행합니다.

```bash
cd site
hugo server
```

실행 후 http://localhost:1313/ 에서 확인할 수 있습니다.

## 배포 방법

GitHub의 `main` 브랜치에 코드를 push하면
GitHub Actions가 Hugo 사이트를 빌드하고
GitHub Pages에 자동으로 배포합니다.

## 원본 테마 및 출처

- Theme: Kiyomi Portfolio
- Original: https://github.com/mathscantor/hugo-theme-kiyomi-portfolio
- Theme License: MIT

원본 테마를 기반으로 콘텐츠, 디자인 및 기능을 수정했습니다.
