import { IExperience } from '../components/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '드림시큐리티',
      position: '미래기술연구소 Hyperledger Fabric 관리자 솔루션 개발 파트장',
      startedAt: '2023-01',
      descriptions: [
        '허가형 블록체인 Hyperledger Fabric 관리자 솔루션 설계 및 백엔드 개발',
        '블록체인 스마트컨트랙트 개발',
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
      endedAt: '2022-12',
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
