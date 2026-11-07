
# 박주연 | Personal Portfolio

Hugo와 GitHub Pages를 활용하여 제작한 개인 포트폴리오 웹사이트입니다.

컴퓨터·인공지능 분야의 학습 경험과 개발 프로젝트, 기술 역량 및 학생회 활동을 소개합니다.

## 배포 사이트

https://qkrzoo8.github.io/my-portfolio/

## 기술 스택

- Hugo Extended
- HTML / CSS / JavaScript
- YAML / TOML
- Git / GitHub
- GitHub Actions
- GitHub Pages

## 주요 기능

- 자기소개 및 프로필 이미지 표시
- 개발 프로젝트 소개 및 GitHub 저장소 연결
- 기술 역량과 언어 숙련도 표시
- 학력 및 자격증 소개
- 학생회 홍보 콘텐츠 갤러리
- Creative Works 이미지 확대 및 이전·다음 탐색
- 모바일 이미지 스와이프 탐색
- 반응형 모바일 메뉴
- 키보드 접근성 및 본문 바로가기
- GitHub 및 이메일 연락처
- 포트폴리오 주소 복사
- 브라우저 인쇄를 활용한 PDF 저장
- 사용자 정의 404 페이지 및 홈 섹션 이동
- SNS 공유용 대표 이미지

## 프로젝트 구조

- `site/hugo.toml`: 사이트 기본 설정
- `site/content/`: 자기소개 콘텐츠
- `site/data/`: 프로젝트, 기술, 학력 등 데이터
- `site/static/`: 이미지 및 아이콘
- `site/themes/template/`: HTML, CSS, JavaScript 템플릿
- `.github/workflows/hugo-pages.yml`: GitHub Actions 자동 배포 설정
- `.github/pages_build.py`: GitHub Pages 빌드 준비 스크립트

## 로컬 실행

### 사전 준비

다음 프로그램이 필요합니다.

- Git
- Hugo Extended (권장 버전: 0.167.0)

### 1. 저장소 복제

```bash
git clone https://github.com/qkrzoo8/my-portfolio.git
cd my-portfolio/site
```

### 2. Hugo 버전 확인

```bash
hugo version
```

### 3. 개발 서버 실행

```bash
hugo server
```

브라우저에서 다음 주소로 접속하면 포트폴리오를 확인할 수 있습니다.

http://localhost:1313/

### 4. 정적 사이트 빌드

```bash
hugo --minify
```

빌드가 성공하면 `site/public/` 디렉터리에 정적 사이트 파일이 생성됩니다.

## 배포 방법

이 프로젝트는 GitHub Actions를 통해 GitHub Pages에 자동으로 배포됩니다.

### 1. 변경 사항 커밋 및 업로드

프로젝트 최상위 디렉터리에서 수정된 파일을 확인합니다.

```bash
git status
git diff --check
```

수정한 파일을 스테이징하고 커밋한 후 `main` 브랜치로 업로드합니다.

```bash
git add .
git commit -m "docs: 프로젝트 문서 정리"
git push origin main
```

`git add .` 실행 전에는 빌드 결과물 등 불필요한 파일이 포함되지 않았는지 확인합니다.

### 2. GitHub Actions 자동 배포

`main` 브랜치에 변경 사항이 업로드되면 GitHub Actions가 자동으로 실행됩니다.

배포 과정은 다음과 같습니다.

1. GitHub 저장소의 최신 코드 확인
2. Hugo Extended 및 빌드 환경 준비
3. Hugo 정적 사이트 빌드
4. GitHub Pages에 결과물 배포

### 3. 배포 결과 확인

- [GitHub Actions 실행 기록](https://github.com/qkrzoo8/my-portfolio/actions)
- [배포된 포트폴리오](https://qkrzoo8.github.io/my-portfolio/)

GitHub Actions에서 `Deploy Hugo to GitHub Pages` 워크플로가 성공했는지 확인합니다.

배포 후에는 실제 사이트에 접속하여 수정 사항이 정상적으로 반영되었는지 검증합니다.

GitHub Pages의 배포 소스는 GitHub Actions로 설정되어 있습니다.

## 원본 테마 및 라이선스

- Theme: Kiyomi Portfolio
- Original: https://github.com/mathscantor/hugo-theme-kiyomi-portfolio
- License: MIT
- Original Author: Gerald Lim (mathscantor)

원본 테마를 기반으로 개인 콘텐츠와 디자인을 수정하고, 이미지 확대 및 탐색, PDF 저장, 접근성 개선 등의 기능을 추가하였습니다.

원본 테마의 저작권 및 라이선스 조건을 유지합니다.
