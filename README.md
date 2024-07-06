# Wekid 프로젝트

[배포 링크를 여기에 삽입하세요](http://example.com)

## Member

1. 강은우
2. 김유미
3. 이소정
4. 이동규
5. 임찬호

## 프로젝트 목적

주어진 디자인 시안과 요구사항을 토대로 위키드라는 웹 서비스를 구축하고 배포까지 완료하는 것입니다.

## 프로젝트 수행절차 및 구조

- 디자인 시안과 요구사항 확인
- 버전과 스펙, 코드 컨벤션, 폴더구조 설계
- 각 페이지와 주요 기능 구현
- 디버깅, 문제해결
- 테스트
- 배포
- 유지관리

## 화면 구성

|----------|----------|
| ![스크린샷 2024-07-06 163659](https://github.com/Codeit-Sprint-6-Team4/Team4-Wekid/assets/116349476/470c12cf-09b0-4dba-8ad1-bdfa38df3e78) | ![스크린샷 2024-07-06 163712](https://github.com/Codeit-Sprint-6-Team4/Team4-Wekid/assets/116349476/47c51e4d-ed4c-4cc9-b788-e36994c15c85) |
| ![스크린샷 2024-07-06 163717](https://github.com/Codeit-Sprint-6-Team4/Team4-Wekid/assets/116349476/cd930eb5-a91e-48d9-a3d7-08563e759570)
| Cell 4 |

## 주요 기능

## 아키텍쳐

# 디렉토리 구조

```
┣ 📂dist
┃ ┣ 📂assets
┃ ┃ ┣ 📂fonts
┃ ┃ ┃ ┣ 📜NEXON Lv1 Gothic OTF.woff
┃ ┃ ┃ ┗ 📜PretendardVariable.woff2
┃ ┃ ┣ 📂icons
┃ ┃ ┃ ┣ 📜icon-alarm.svg
┃ ┃ ┃ ┣ 📜icon-align.svg
┃ ┃ ┃ ┣ 📜icon-alignment-center.svg
┃ ┃ ┃ ┣ 📜icon-alignment-left.svg
┃ ┃ ┃ ┣ 📜icon-alignment-right.svg
┃ ┃ ┃ ┣ 📜icon-arrow.svg
┃ ┃ ┃ ┣ 📜icon-bold.svg
┃ ┃ ┃ ┣ 📜icon-bullet.svg
┃ ┃ ┃ ┣ 📜icon-camera.svg
┃ ┃ ┃ ┣ 📜icon-check-green.svg
┃ ┃ ┃ ┣ 📜icon-check.svg
┃ ┃ ┃ ┣ 📜icon-close.svg
┃ ┃ ┃ ┣ 📜icon-delete.svg
┃ ┃ ┃ ┣ 📜icon-edit.svg
┃ ┃ ┃ ┣ 📜icon-error-red.svg
┃ ┃ ┃ ┣ 📜icon-error.svg
┃ ┃ ┃ ┣ 📜icon-expand.svg
┃ ┃ ┃ ┣ 📜icon-font-color.svg
┃ ┃ ┃ ┣ 📜icon-heart-fill.svg
┃ ┃ ┃ ┣ 📜icon-heart.svg
┃ ┃ ┃ ┣ 📜icon-image.svg
┃ ┃ ┃ ┣ 📜icon-info.svg
┃ ┃ ┃ ┣ 📜icon-italic.svg
┃ ┃ ┃ ┣ 📜icon-link-green.svg
┃ ┃ ┃ ┣ 📜icon-link-quill.svg
┃ ┃ ┃ ┣ 📜icon-link.svg
┃ ┃ ┃ ┣ 📜icon-lock.svg
┃ ┃ ┃ ┣ 📜icon-menu.svg
┃ ┃ ┃ ┣ 📜icon-number.svg
┃ ┃ ┃ ┣ 📜icon-profile.svg
┃ ┃ ┃ ┣ 📜icon-search.svg
┃ ┃ ┃ ┣ 📜icon-underline.svg
┃ ┃ ┃ ┣ 📜icon-vector.svg
┃ ┃ ┃ ┗ 📜icon-video.svg
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ 📜bg_list.png
┃ ┃ ┃ ┣ 📜logo.svg
┃ ┃ ┃ ┣ 📜main-hero-imgae.png
┃ ┃ ┃ ┣ 📜main-share-image01.png
┃ ┃ ┃ ┣ 📜main-share-image02.png
┃ ┃ ┃ ┣ 📜main-share-image03.png
┃ ┃ ┃ ┣ 📜main-share-image41.png
┃ ┃ ┃ ┣ 📜main-view-image01.png
┃ ┃ ┃ ┣ 📜main-view-image02.png
┃ ┃ ┃ ┣ 📜main-view-image03.png
┃ ┃ ┃ ┣ 📜main-write-image01.png
┃ ┃ ┃ ┣ 📜og_img.jpg
┃ ┃ ┃ ┣ 📜Vector.svg
┃ ┃ ┃ ┗ 📜wekiList-noData-image.png
┃ ┃ ┣ 📜bg_list-Cycguid7.png
┃ ┃ ┣ 📜favicon-2-Hoa05e.ico
┃ ┃ ┣ 📜index-Co0LtDja.css
┃ ┃ ┣ 📜index-DKPnYuni.js
┃ ┃ ┣ 📜logo-92uL-GxL.svg
┃ ┃ ┣ 📜main-hero-imgae-D2jKqZ1a.png
┃ ┃ ┣ 📜main-view-image03-BgeqokAA.png
┃ ┃ ┣ 📜main-write-image01-BHcgiAR1.png
┃ ┃ ┗ 📜wekiList-noData-image-NMpJHl_L.png
┃ ┗ 📜index.html
┣ 📂public
┃ ┗ 📂assets
┃   ┣ 📂fonts
┃   ┃ ┣ 📜NEXON Lv1 Gothic OTF.woff
┃   ┃ ┗ 📜PretendardVariable.woff2
┃   ┣ 📂icons
┃   ┃ ┣ 📜icon-alarm.svg
┃   ┃ ┣ 📜icon-align.svg
┃   ┃ ┣ 📜icon-alignment-center.svg
┃   ┃ ┣ 📜icon-alignment-left.svg
┃   ┃ ┣ 📜icon-alignment-right.svg
┃   ┃ ┣ 📜icon-arrow.svg
┃   ┃ ┣ 📜icon-bold.svg
┃   ┃ ┣ 📜icon-bullet.svg
┃   ┃ ┣ 📜icon-camera.svg
┃   ┃ ┣ 📜icon-check-green.svg
┃   ┃ ┣ 📜icon-check.svg
┃   ┃ ┣ 📜icon-close.svg
┃   ┃ ┣ 📜icon-delete.svg
┃   ┃ ┣ 📜icon-edit.svg
┃   ┃ ┣ 📜icon-error-red.svg
┃   ┃ ┣ 📜icon-error.svg
┃   ┃ ┣ 📜icon-expand.svg
┃   ┃ ┣ 📜icon-font-color.svg
┃   ┃ ┣ 📜icon-heart-fill.svg
┃   ┃ ┣ 📜icon-heart.svg
┃   ┃ ┣ 📜icon-image.svg
┃   ┃ ┣ 📜icon-info.svg
┃   ┃ ┣ 📜icon-italic.svg
┃   ┃ ┣ 📜icon-link-green.svg
┃   ┃ ┣ 📜icon-link-quill.svg
┃   ┃ ┣ 📜icon-link.svg
┃   ┃ ┣ 📜icon-lock.svg
┃   ┃ ┣ 📜icon-menu.svg
┃   ┃ ┣ 📜icon-number.svg
┃   ┃ ┣ 📜icon-profile.svg
┃   ┃ ┣ 📜icon-search.svg
┃   ┃ ┣ 📜icon-underline.svg
┃   ┃ ┣ 📜icon-vector.svg
┃   ┃ ┗ 📜icon-video.svg
┃   ┗ 📂images
┃     ┣ 📜bg_list.png
┃     ┣ 📜logo.svg
┃     ┣ 📜main-hero-imgae.png
┃     ┣ 📜main-share-image01.png
┃     ┣ 📜main-share-image02.png
┃     ┣ 📜main-share-image03.png
┃     ┣ 📜main-share-image41.png
┃     ┣ 📜main-view-image01.png
┃     ┣ 📜main-view-image02.png
┃     ┣ 📜main-view-image03.png
┃     ┣ 📜main-write-image01.png
┃     ┣ 📜og_img.jpg
┃     ┣ 📜Vector.svg
┃     ┗ 📜wekiList-noData-image.png
┣ 📂src
┃ ┣ 📂api
┃ ┃ ┣ 📜article.ts
┃ ┃ ┣ 📜auth.ts
┃ ┃ ┣ 📜axios.ts
┃ ┃ ┣ 📜comment.ts
┃ ┃ ┣ 📜image.ts
┃ ┃ ┣ 📜notification.ts
┃ ┃ ┣ 📜profile.ts
┃ ┃ ┗ 📜user.ts
┃ ┣ 📂components
┃ ┃ ┣ 📂button
┃ ┃ ┃ ┣ 📜Button.styled.ts
┃ ┃ ┃ ┗ 📜Button.tsx
┃ ┃ ┣ 📂dropdown
┃ ┃ ┃ ┣ 📜Dropdown.tsx
┃ ┃ ┃ ┗ 📜DropdownFrame.ts
┃ ┃ ┣ 📂frame
┃ ┃ ┃ ┗ 📜dummy.txt
┃ ┃ ┣ 📂input
┃ ┃ ┃ ┣ 📜EmailPassword.tsx
┃ ┃ ┃ ┣ 📜emailPasswordFrame.ts
┃ ┃ ┃ ┣ 📜input.ts
┃ ┃ ┃ ┣ 📜InputProfile.tsx
┃ ┃ ┃ ┗ 📜inputProfileFrame.ts
┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┣ 📂Header
┃ ┃ ┃ ┃ ┣ 📂Hamburger
┃ ┃ ┃ ┃ ┃ ┣ 📜HamburgerContainer.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜HamburgerUI.styles.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜HamburgerUI.tsx
┃ ┃ ┃ ┃ ┣ 📂HeaderDropdown
┃ ┃ ┃ ┃ ┃ ┣ 📜HeaderDropdown.styles.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜HeaderDropdownUI.tsx
┃ ┃ ┃ ┃ ┣ 📂Nav
┃ ┃ ┃ ┃ ┃ ┣ 📜NavUI.styled.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜NavUI.tsx
┃ ┃ ┃ ┃ ┣ 📂NotificationsDropdown
┃ ┃ ┃ ┃ ┃ ┣ 📜NotificationsDropdownContainer.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜NotificationsDropdownUI.styled.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜NotificationsDropdownUI.tsx
┃ ┃ ┃ ┃ ┣ 📂ProfileDropdown
┃ ┃ ┃ ┃ ┃ ┣ 📜ProfileDropdownContainer.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜ProfileDropdownUI.styled.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜ProfileDropdownUI.tsx
┃ ┃ ┃ ┃ ┣ 📜Header.tsx
┃ ┃ ┃ ┃ ┣ 📜HeaderContainer.tsx
┃ ┃ ┃ ┃ ┗ 📜HeaderUI.styled.ts
┃ ┃ ┃ ┣ 📜Footer.tsx
┃ ┃ ┃ ┗ 📜Grid.tsx
┃ ┃ ┣ 📂menu
┃ ┃ ┃ ┗ 📜dummy.txt
┃ ┃ ┣ 📂modal
┃ ┃ ┃ ┣ 📜imageUploadModal.styled.ts
┃ ┃ ┃ ┣ 📜ImageUploadModalFrame.tsx
┃ ┃ ┃ ┣ 📜LoginPromptModalFrame.tsx
┃ ┃ ┃ ┣ 📜modal.styled.ts
┃ ┃ ┃ ┣ 📜Modal.tsx
┃ ┃ ┃ ┣ 📜noticeModal.styled.ts
┃ ┃ ┃ ┣ 📜NoticeModalFrame.tsx
┃ ┃ ┃ ┣ 📜questionModal.styled.ts
┃ ┃ ┃ ┗ 📜QuestionModalFrame.tsx
┃ ┃ ┣ 📂pagination
┃ ┃ ┃ ┣ 📜Pagination.tsx
┃ ┃ ┃ ┗ 📜paginationButton.ts
┃ ┃ ┣ 📂searchInput
┃ ┃ ┃ ┣ 📜SeacrhBar.tsx
┃ ┃ ┃ ┗ 📜searchInput.ts
┃ ┃ ┣ 📂snackbar
┃ ┃ ┃ ┣ 📜Sanckbar.styled.ts
┃ ┃ ┃ ┗ 📜Snackbar.tsx
┃ ┃ ┣ 📂texts
┃ ┃ ┃ ┣ 📜Heading.tsx
┃ ┃ ┃ ┗ 📜Paragraph.tsx
┃ ┃ ┗ 📂userlink
┃ ┃   ┣ 📜UserLink.styled.ts
┃ ┃   ┗ 📜UserLink.tsx
┃ ┣ 📂context
┃ ┃ ┣ 📜authContext.ts
┃ ┃ ┣ 📜AuthProvider.tsx
┃ ┃ ┗ 📜myWekiDataContext.ts
┃ ┣ 📂hooks
┃ ┃ ┣ 📜useGetUserData.tsx
┃ ┃ ┣ 📜useHeaderDropdown.tsx
┃ ┃ ┣ 📜useMywekiAPi.tsx
┃ ┃ ┗ 📜useNavigationBlocker.tsx
┃ ┣ 📂pages
┃ ┃ ┣ 📂AccountSetting
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📜AccountSettingUI.styled.ts
┃ ┃ ┃ ┃ ┣ 📜PasswordChangeContainer.tsx
┃ ┃ ┃ ┃ ┣ 📜PasswordChangeUI.tsx
┃ ┃ ┃ ┃ ┣ 📜SecurityQuestionContainer.tsx
┃ ┃ ┃ ┃ ┗ 📜SecurityQuestionUI.tsx
┃ ┃ ┃ ┗ 📜AccountSetting.tsx
┃ ┃ ┣ 📂Board
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📂CommentSection
┃ ┃ ┃ ┃ ┃ ┣ 📂CommentInput
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CommentInputContainer.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CommentInputUI.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CommentInputUIStyled.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📂CommentItem
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CommentItemContainer.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CommentItemUI.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CommentItemUIStyled.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CommentSectionContainer.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜CommentSectionUI.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜CommentSectionUIStyled.tsx
┃ ┃ ┃ ┃ ┣ 📂Post
┃ ┃ ┃ ┃ ┃ ┣ 📜PostContainer.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜PostUI.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜PostUIStyled.tsx
┃ ┃ ┃ ┃ ┗ 📜dummy.txt
┃ ┃ ┃ ┗ 📜Board.tsx
┃ ┃ ┣ 📂Boards
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📜ArticleRow.styled.ts
┃ ┃ ┃ ┃ ┣ 📜ArticleRow.tsx
┃ ┃ ┃ ┃ ┣ 📜BestArticleCard.styled.ts
┃ ┃ ┃ ┃ ┣ 📜BestArticleCard.tsx
┃ ┃ ┃ ┃ ┣ 📜Boards.styled.ts
┃ ┃ ┃ ┃ ┣ 📜BoardsContainer.tsx
┃ ┃ ┃ ┃ ┣ 📜BoardsUI.tsx
┃ ┃ ┃ ┃ ┣ 📜SortDropdown.styled.ts
┃ ┃ ┃ ┃ ┗ 📜SortDropdown.tsx
┃ ┃ ┃ ┗ 📜Boards.tsx
┃ ┃ ┣ 📂Home
┃ ┃ ┃ ┗ 📜Home.tsx
┃ ┃ ┣ 📂MyWeki
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📂customQuali
┃ ┃ ┃ ┃ ┃ ┣ 📜CustomToolBar.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜quali.styled.icon.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜quill-custom.css
┃ ┃ ┃ ┃ ┣ 📜EditorUI.tsx
┃ ┃ ┃ ┃ ┣ 📜markUp.styled.ts
┃ ┃ ┃ ┃ ┣ 📜MyWekiContainer.tsx
┃ ┃ ┃ ┃ ┣ 📜MyWekiUI.tsx
┃ ┃ ┃ ┃ ┣ 📜profile.styled.ts
┃ ┃ ┃ ┃ ┣ 📜ProfileUI.tsx
┃ ┃ ┃ ┃ ┗ 📜wekiPage.styled.ts
┃ ┃ ┃ ┗ 📜MyWeki.tsx
┃ ┃ ┣ 📂SignIn
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📜SignInContainer.tsx
┃ ┃ ┃ ┃ ┣ 📜SignInUI.styled.ts
┃ ┃ ┃ ┃ ┗ 📜SignInUI.tsx
┃ ┃ ┃ ┗ 📜SignIn.tsx
┃ ┃ ┣ 📂SignUp
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📜SignUpContainer.tsx
┃ ┃ ┃ ┃ ┣ 📜signUpForm.ts
┃ ┃ ┃ ┃ ┗ 📜SignUpUI.tsx
┃ ┃ ┃ ┗ 📜SignUp.tsx
┃ ┃ ┣ 📂UpLoadBoard
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┣ 📂customQuill
┃ ┃ ┃ ┃ ┃ ┣ 📜quill-custom.css
┃ ┃ ┃ ┃ ┃ ┣ 📜upLoadBoardCustomQuali.styled.icon.ts
┃ ┃ ┃ ┃ ┃ ┗ 📜upLoadBoardCustomToolBar.tsx
┃ ┃ ┃ ┃ ┣ 📜UpLoadBoard.styled.ts
┃ ┃ ┃ ┃ ┣ 📜UpLoadBoardContainer.tsx
┃ ┃ ┃ ┃ ┣ 📜UpLoadBoardEditor.styled.ts
┃ ┃ ┃ ┃ ┣ 📜UpLoadBoardEditorUI.tsx
┃ ┃ ┃ ┃ ┗ 📜UpLoadBoardUI.tsx
┃ ┃ ┃ ┗ 📜UpLoadBoard.tsx
┃ ┃ ┣ 📂Weki
┃ ┃ ┃ ┣ 📂components
┃ ┃ ┃ ┃ ┗ 📜dummy.txt
┃ ┃ ┃ ┗ 📜Wiki.tsx
┃ ┃ ┗ 📂WekiList
┃ ┃   ┣ 📂components
┃ ┃   ┃ ┣ 📜UserCard.styled.ts
┃ ┃   ┃ ┣ 📜UserCardFrame.tsx
┃ ┃   ┃ ┣ 📜WekiList.styled.ts
┃ ┃   ┃ ┣ 📜WekiListContainer.tsx
┃ ┃   ┃ ┣ 📜WekiListUI.tsx
┃ ┃   ┃ ┣ 📜WekiSeacrhBar.tsx
┃ ┃   ┃ ┗ 📜WekiSearchBar.styled.ts
┃ ┃   ┗ 📜WikiList.tsx
┃ ┣ 📂styles
┃ ┃ ┣ 📜global-styles.ts
┃ ┃ ┗ 📜theme.ts
┃ ┣ 📂types
┃ ┃ ┗ 📜dummy.txt
┃ ┣ 📂utils
┃ ┃ ┣ 📜authUtils.ts
┃ ┃ ┣ 📜autoResizeTextarea.ts
┃ ┃ ┣ 📜formatDateString.ts
┃ ┃ ┣ 📜isSameProfile.ts
┃ ┃ ┗ 📜media.ts
┃ ┣ 📜App.tsx
┃ ┣ 📜main.tsx
┃ ┗ 📜vite-env.d.ts
┣ 📜.env
┣ 📜.eslintrc.cjs
┣ 📜.gitignore
┣ 📜.prettierrc
┣ 📜favicon.ico
┣ 📜index.html
┣ 📜package.json
┣ 📜README.md
┣ 📜tsconfig.json
┣ 📜tsconfig.node.json
┗ 📜vite.config.ts

```

## 사용언어

React JS, TypeScript, Styled-components, Axios

## 문제 해결

- 생각나는데로
- 반응형
- 토큰 오류
- 전체적인 layout 문제
- 유저 데이터 타입 오류
- 리스트 검색 문제
- input auto 메세지

## 느낀 점
