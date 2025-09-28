# Unethings Web Flasher

브라우저에서 ESP32 기기를 펌웨어 플래싱할 수 있는 도구입니다.
Konnected 설치기와 유사하게 제작되었습니다.

## 🌍 배포 주소
- 홈페이지: https://www.unethings.com/
- 플래셔: https://install.unethings.io/

## 🚀 사용 방법
1. 보드 연결 (Chrome/Edge + HTTPS 필수)
2. 원하는 장치 버튼 클릭 → 설치 시작
3. 또는 수동 .bin 업로드로 플래싱

## 📂 구조
- `web/index.html` → 메인 페이지
- `web/style.css` → 스타일
- `web/app.js` → 로직
- `web/firmware/*.json` → 매니페스트
- `web/firmware/*.bin` → 펌웨어 파일 (실제 파일로 교체 필요)
