import { IIntroduce } from '../components/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  contents: [
    'PKI 보안 인증 솔루션과 블록체인·DID 응용개발로 쌓은 백엔드 역량을 바탕으로, 지금은 AI를 실제 업무와 제품에 연결하는 AX(AI Transformation) 연구원으로 일하고 있습니다.',
    '그라운딩, MCP, 컨텍스트 엔지니어링으로 사내 시스템과 데이터를 AI 에이전트에 안전하게 연결하는 일을 주로 맡고 있습니다. 규정 RAG 챗봇, 계약서 AI 검토, ERP 연계 MCP 서버, 사내 AI 도구 마켓플레이스를 PoC부터 운영 배포까지 직접 만들었습니다.',
    '최근에는 AI 에이전트가 사내 시스템을 도구로 직접 다루는 환경에서의 인증·권한 체계와, AI 결과물을 재현하고 검증할 수 있게 만드는 품질 관리 방식에 관심이 있습니다.',
    'Building on backend experience in PKI security authentication, blockchain and decentralized identity (DID), I now work as an AX (AI Transformation) researcher who connects AI to real business processes and products.',
    'My focus is connecting internal systems and data to AI agents safely through grounding, MCP and context engineering. I have taken a policy RAG chatbot, an AI contract review service, an ERP-linked MCP server and an internal AI tool marketplace from PoC to production.',
    'Lately I am interested in authentication and authorization for agents that operate internal systems as tools, and in quality practices that make AI output reproducible and verifiable.',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
