import { IIntroduce } from '../components/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    '공개 키 기반 구조(Public Key Infrastructure, PKI) 보안 인증솔루션 기술력을 바탕으로 탈중앙화 신원 증명(Decentralized Identity, DID)과 블록체인을 활용한 응용개발의 경험이 있습니다.',
    '주로 스프링 프레임워크를 이용한 RESTful API 백엔드 개발을 담당하였으나 업무의 영역을 가리지 않고 프로젝트 진행에 있어 발생하는 문제를 고민하고 해결하는 것을 좋아합니다.',
    '최근에는 허가형 블록체인 플랫폼인 Hyperledger Fabric의 성능 개선 및 실사용 측면에 관심이 있습니다.',
    'I am an experienced application developer using decentralized identity (DID) and blockchain based on the technology of the Public Key Infrastructure (PKI) security authentication solution.',
    'I was mainly in charge of RESTful API backend development using the Java spring framework. Furthermore, I like to focus on the process of considering and solving problems that occurs during any of project progresses.',
    'In addition, I recently got interested in the performance improvement and practical use of Hyperledger Fabric a permission blockchain platform.',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
