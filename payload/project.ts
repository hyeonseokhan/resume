import { IProject } from '../components/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
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
