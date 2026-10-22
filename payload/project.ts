import { IProject } from '../components/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AX Store 사내 AI 도구 마켓플레이스 구축·운영',
      startedAt: '2026-07',
      where: '드림시큐리티',
      descriptions: [
        {
          content:
            '컨셉 목업을 로그인·도구 업로드/다운로드·후기가 동작하는 사내 서비스로 전환 (React SPA, Spring Boot)',
        },
        { content: '모듈러 모놀리식 + 헥사고날 구조로 설계하고 모듈 경계를 테스트로 강제' },
        {
          content:
            'MCP 서버(Streamable HTTP)와 Spring Authorization Server 기반 OAuth 인가로 AI 에이전트에서 도구 검색·설치·등록',
        },
        {
          content:
            '도구 검수·운영 콘솔(Spring MVC, Thymeleaf), 도구 이슈 신고·회신, MCP 연계 사내 이벤트 운영',
        },
        { content: 'Docker Compose·GitLab CI 배포, HTTPS·CSP·HSTS 적용' },
      ],
    },
    {
      title: 'AI 시장동향 데일리 인사이트 리포트 자동화',
      startedAt: '2026-07',
      endedAt: '2026-09',
      where: '한국렌탈',
      descriptions: [
        {
          content:
            '뉴스 수집 → 출처 정규화 → 신뢰도 필터 → 교차검증 → 선별 → 렌더 파이프라인 (RSS 21종, 1회 300건 이상)',
        },
        { content: '회사 전략 컨텍스트 기반 LLM 적합성 판정과 기사별 시사점 생성' },
        { content: 'Local MCP 서버(도구 4종)로 제품화, 비개발자용 설치 패키지·OS별 가이드 배포' },
      ],
    },
    {
      title: 'AI 견적서 자동생성 MCP 인턴십 멘토',
      startedAt: '2026-07',
      endedAt: '2026-08',
      where: '한국렌탈',
      descriptions: [
        {
          content:
            '인턴 2명 대상 3주 과정 멘토링: MCP 프로토콜, DMZ → MCP → ERP 아키텍처, Spring AI 도구 개발, 배포',
        },
        {
          content:
            '인턴들이 실 API 연동 견적 도구(자산 검색, 비용 계산, 견적서 발행 등) 완성·원격 배포까지 수행',
        },
      ],
    },
    {
      title: 'ERP 자산정보 MCP 서버 구축 및 Gemini Enterprise 연동',
      startedAt: '2026-05',
      endedAt: '2026-09',
      where: '한국렌탈',
      descriptions: [
        { content: '사내 ERP 자산 정보를 AI에서 조회하는 MCP 도구 6종 개발·운영 배포' },
        {
          content:
            '인증을 Bearer → OAuth 2.0 → GWS 연동 로그인 → Claude SSO(PKCE, RFC 7591 DCR)로 3단계 고도화',
        },
        {
          content:
            '내부망 ERP → MCP → DMZ → GCP 전 경로 구성, Claude Code·Gemini Enterprise E2E 검증',
        },
      ],
    },
    {
      title: '계약서 AI 검토 서비스(Contract-Guard) 구축 및 그룹웨어 연동',
      startedAt: '2026-03',
      endedAt: '2026-08',
      where: '한국렌탈',
      descriptions: [
        {
          content:
            'v1 동기 웹 시연 + v2 REST API(접수 202, HMAC-SHA256 서명 콜백) 이원 구조, 헥사고날 설계',
        },
        {
          content:
            '지침(검토 방법론)과 지식(표준계약서 비교기준)을 나눈 RAG, 조항별 원문→수정안→이유 구조화 출력',
        },
        {
          content:
            'PDF·DOCX·HWP·HWPX·이미지 OCR 추출, 프롬프트 v2.0~v2.9 고도화(인젝션 방어, 버전 고정)',
        },
        { content: 'Terraform으로 Cloud Run·Cloud SQL·GCS 인프라 100% 코드화' },
      ],
    },
    {
      title: '사내 규정 RAG 챗봇 구축 및 사내 오픈',
      startedAt: '2026-01',
      endedAt: '2026-06',
      where: '한국렌탈',
      descriptions: [
        {
          content:
            'Google Chat 기반 챗봇. 쿼리 확장 → 다중 검색 → LLM 적합성 평가 → 권한 필터 → Gemini 답변 → 인용 표기 파이프라인 구현',
        },
        { content: 'Vertex AI Search Enterprise와 Layout Parser로 규정 문서 색인' },
        {
          content: '직책 기반 열람권한 필터(10분 주기 권한 맵 갱신), 슬래시 명령 2종(일정·할 일)',
        },
        { content: '권한 필터 적용률 100%, 검색 추가비용 0원', weight: 'MEDIUM' },
      ],
    },
    {
      title: 'AI 생태계 편입 기술 검증 — 그라운딩과 MCP를 통한 제품 연계',
      startedAt: '2025-08',
      endedAt: '2025-12',
      where: '드림시큐리티',
      descriptions: [
        {
          content:
            'CTO 테크포럼의 편입 전략(그라운딩·MCP, 컨텍스트 엔지니어링)을 자사 DID 제품으로 PoC 검증',
        },
        {
          content:
            'Spring AI MCP 서버 응용 개발, Claude Agent Skill 구성, 문서·로그·DB 스키마 컨텍스트 엔지니어링',
        },
        {
          content:
            '개발자 SDK 코드 생성, 운영자 장애 진단, 관리자 운영 보고서 자동 생성 3개 시나리오 검증',
        },
        {
          content: '코드 확보 5분 → 10초 · 장애 대응 4시간 → 10분 · 보고 준비 2시간 → 1분',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: 'Hyperledger Fabric 플랫폼 관리자 솔루션 신규 제품 개발',
      startedAt: '2022-02',
      where: '드림시큐리티',
      descriptions: [
        { content: 'Hyperledger Fabric 상용화를 위한 기술, 정책, 성능개선 검토' },
        {
          content: '사용자화 블록체인 구축, 관리 및 모니터링 기능의 RESTful API 설계 및 개발.',
        },
        { content: '스마트컨트랙트 비즈니스로직 개발(Golang, Java)' },
        { content: 'TTA 블록체인 플랫폼 시험 합의서 검토 및 대응' },
        { content: 'PL 직무 및 개발실무 담당' },
      ],
    },
    {
      title: '수자원공사 부산에코델타 스마트빌리지 Smart-Pass 서비스 구축사업',
      startedAt: '2021-05',
      endedAt: '2022-01',
      where: '드림시큐리티',
      descriptions: [
        { content: '개발팀 PL 업무 및 개발 담당' },
        {
          content: '사용자 자격증명서 데이터 정의 및 VC 서버 개발 담당.',
        },
        { content: 'Docker 컨테이너 배포를 위한 DID 플랫폼 도커라이징 및 배포 스크립트 작성' },
        {
          content:
            '블록체인(Aergo, 블로코) 업무협의 및 DID 플랫폼 연계 블록체인 인터페이스 Java library 개발',
        },
      ],
    },
    {
      title: '국민연금공단 블록체인 기반 해외 수급권 확인 시스템 구축사업',
      startedAt: '2021-05',
      endedAt: '2021-12',
      where: '드림시큐리티',
      descriptions: [
        {
          content:
            '운영계 Proxy 서버구축, 구간 암호화(SSL/TLS) 설정 및 KISA 정보보안취약점 조치 담당',
        },
        {
          content: '운영계 연계 구간별 패킷분석을 통해 백본 및 라우터 보안이슈 담당',
        },
        { content: '사용자 제출 문서 TST 발급 및 주입, PDS 연계 문서 백업 작업 담당' },
        {
          content: 'TTA 서비스 및 블록체인 플랫폼 시험 대응 담당',
        },
      ],
    },
    {
      title: '산업자원부 간접수출실적 전자발급시스템 구축사업',
      startedAt: '2020-12',
      endedAt: '2021-04',
      where: '드림시큐리티',
      descriptions: [
        {
          content: "블록체인 플랫폼 'Monachain Weaver' 구축 및 블록체인 감리 대응 담당.",
        },
        {
          content: '전자문서발급시스템에 시점확인 솔루션 적용에 대한 협업사의 실무자 교육 담당.',
        },
        {
          content: '전자증명서 위변조 검증을 위한 스마트컨트랙트 비즈니스 개발(Golang)',
        },
      ],
    },
    {
      title: 'W3C 표준 DID 플랫폼 연구과제',
      startedAt: '2020-08',
      endedAt: '2021-06',
      where: '드림시큐리티',
      descriptions: [
        {
          content: '검증 가능 자격증명서(Verifiable Credential, VC) 발급 서버 개발 담당',
        },
        {
          content: '동일 사용자 자격증명서 중복 발급 확인을 위한 DB 설계 및 개발.',
        },
        {
          content:
            '다양한 블록체인 플랫폼 (Nexledger, Hyperledger Fabric, Aergo..) 와 연계하여 자격증명서 상태정보 등록 및 검증 기능 개발.',
        },
        {
          content:
            'OCI Terraform provider 를 이용하여 코드형 인프라(Infrastructrue as Code, IaC) 관리 담당.',
        },
        {
          content:
            'Oracle Cloud 플랫폼의 Subnet, NAT/Internet Gateway, Loadbalancer 등 클라우드 네크워크 구조에 대한 기술분석 및 설계 담당',
        },
        {
          content: 'DID 플랫폼 Oracle Cloud 상품 등재를 위한 관리 담당.',
        },
      ],
    },
    {
      title: '범농협 통합전자구매시스템 구축사업',
      startedAt: '2019-12',
      endedAt: '2020-07',
      where: '드림시큐리티',
      descriptions: [
        {
          content: 'C/C++ 언어를 사용하여 인증서발급관리 Windows 클라이언트 프로그램개발 담당.',
        },
        {
          content:
            'non-ActiveX 방식의 인증서발급 프로세스를 구현하기 위해 자바스크립트를 사용하여 Windows 레지스트리에 등록된 응용프로그램 호출 및 응답 처리 로직 구현.',
        },
        {
          content:
            '사내 CA 담당 부서와 협업을 통해 사용자 인증서(공개키)를 블록체인에 등록 및 조회 기능 개발에 기여.',
        },
      ],
    },
    {
      title: '행정안전부 전자증명서발급 시스템 구축사업',
      startedAt: '2019-05',
      endedAt: '2019-11',
      where: '드림시큐리티',
      descriptions: [
        {
          content: '블록체인 플랫폼(Nexledger, 삼성SDS) 구축 및 감리 대응 담당.',
        },
        {
          content:
            '블록체인 연계 전자문서시점확인 서비스 개발 업무 중 전자증명서에 TST 토큰을 TSA 서버에서 발급받아 PDF 파일에 주입하고 토큰이 주입된 파일의 해시값을 구하여 블록체인에 검증데이터 주입 및 검증 기능 개발 담당.',
        },
      ],
    },
  ],
};

export default project;
