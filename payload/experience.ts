import { IExperience } from '../components/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '드림시큐리티',
      startedAt: '2025-01',
      positions: [
        {
          position: '중앙연구소 AI보안기술연구실 AI기술팀 2파트 파트장',
          descriptions: [
            'AI 생태계 편입 전략(2025.08 CTO 테크포럼)의 핵심 기술인 그라운딩·MCP·컨텍스트 엔지니어링 PoC 및 검증',
            'Spring AI 기반 MCP 서버로 자사 DID 제품을 AI 에이전트에 연계하는 PoC 3건 수행·결과 발표(2025.12)',
            '계열사 한국렌탈 IT본부 AX TF 지원 (2026.01 ~ 2026.09)',
          ],
          skillKeywords: [
            'MCP',
            'RAG',
            'Context Engineering',
            'Spring AI',
            'Java',
            'Springboot',
            'GCP',
          ],
        },
        {
          position: 'IT이노베이션실 AI혁신 TF 팀원',
          startedAt: '2026-07',
          concurrent: true,
          descriptions: [
            '회장 지시 과제로 사내 AI 도구 마켓플레이스 AX Store 기획·구축·운영',
            'AI 에이전트에서 사내 도구를 검색·설치·등록하는 MCP 서버와 OAuth 기반 연결 인가 구현',
          ],
          skillKeywords: [
            'MCP',
            'OAuth 2.0',
            'Spring Authorization Server',
            'React',
            'Docker',
            'GitLab CI',
          ],
        },
      ],
    },
    {
      title: '드림시큐리티',
      position: '미래기술연구소 Hyperledger Fabric 관리자 솔루션 개발 파트장',
      startedAt: '2024-07',
      endedAt: '2024-12',
      descriptions: [
        '블록체인 관리자 솔루션 안정화 버전 개발',
        '이더리움 블록체인 연계를 위한 연구과제 참여',
      ],
      skillKeywords: [
        'Java',
        'Springboot',
        'RESTful API',
        'Blockchain',
        'Golang',
        'Docker',
        'Cloud',
      ],
    },
    {
      title: '드림시큐리티',
      position: '미래기술연구소 Hyperledger Fabric 관리자 솔루션 개발 팀원',
      startedAt: '2022-02',
      endedAt: '2023-12',
      descriptions: [
        'Hyperledger Fabric 기반의 블록체인 자동 구축 솔루션 개발',
        '블록체인 구성 노드의 컨테이너 리소스 사용량 수집 기능 개발',
        'DID 솔루션 연계를 위한 스마트컨트랙트 개발',
        '블록체인 플랫폼에서 관리되는 사용자 인증서 관리기능 개발',
      ],
      skillKeywords: [
        'Java',
        'Springboot',
        'RESTful API',
        'Blockchain',
        'Golang',
        'Docker',
        'Cloud',
      ],
    },
    {
      title: '드림시큐리티',
      position: '미래기술연구소 DID 솔루션 벡엔드 개발 팀원',
      startedAt: '2018-11',
      endedAt: '2022-01',
      descriptions: [
        '스프링 프레임워크 기반의 RESTful API 서버 백엔드 개발',
        'Nexledger Samsung SDS, Monachain LG CNS, Aergo Blocko, ChainZ SK C&C 등 다양한 블록체인 응용개발사업 참여',
        'W3C 표준 DID(Decentralized Identity) 플랫폼 개발 및 구축사업 참여',
        'VC(Verifiiable Credentials) 서버 백엔드 개발',
        'PKI 기반의 보안 인증솔루션 개발 및 구축사업 참여',
        'Oracle Cloud 인프라 관리 및 Terraform(IaC)을 이용한 DID 솔루션 마켓플레이스 등재 및 관리',
        'DID, Blockchain 플랫폼 사업의 개발팀 PL 업무담당',
      ],
      skillKeywords: [
        'Java',
        'Springboot',
        'RESTful API',
        'Blockchain',
        'DID',
        'PKI',
        'JavaScript',
        'Docker',
        'Cloud',
      ],
    },
  ],
};

export default experience;
