import { ISkill } from '../components/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'Golang',
      level: 2,
    },
    {
      title: 'C/C++',
      level: 2,
    },
  ],
};

const blockchain: ISkill.Skill = {
  category: 'Blockchain',
  items: [
    {
      title: 'Hyperledger Fabric',
      level: 3,
    },
    {
      title: 'Nexledger SDS',
      level: 3,
    },
    {
      title: 'Aergo Blocko',
      level: 3,
    },
    {
      title: 'Monachain LG CNS',
      level: 2,
    },
    {
      title: 'ChainZ SK C&C',
      level: 1,
    },
  ],
};

const ai: ISkill.Skill = {
  category: 'AI Engineering',
  items: [
    { title: 'MCP' },
    { title: 'RAG' },
    { title: 'Context Engineering' },
    { title: 'Prompt Engineering' },
    { title: 'Spring AI' },
    { title: 'Vertex AI Search' },
    { title: 'Gemini' },
    { title: 'Claude Agent Skill' },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'GCP',
      level: 2,
    },
    {
      title: 'OCI',
      level: 3,
    },
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Nginx',
      level: 2,
    },
    {
      title: 'Terraform',
      level: 1,
    },
    {
      title: 'Apache',
      level: 2,
    },
  ],
};

const knowledge: ISkill.Skill = {
  category: 'Knowledge',
  items: [
    {
      title: 'Spring',
      level: 3,
    },
    {
      title: 'OAuth 2.0',
      level: 2,
    },
    {
      title: 'PKI',
      level: 3,
    },
    {
      title: 'DID',
      level: 3,
    },
    {
      title: 'TSA',
      level: 3,
    },
    {
      title: 'CA',
      level: 2,
    },
    {
      title: 'SSL/TLS',
      level: 2,
    },
    {
      title: 'IaC',
      level: 2,
    },
    {
      title: 'Hexagonal',
      level: 2,
    },
    {
      title: 'DDD',
      level: 2,
    },
    {
      title: 'TDD',
      level: 2,
    },
    {
      title: 'MSA',
      level: 1,
    },
    {
      title: 'Modular Monolithic',
      level: 1,
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'IDEA',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'VS code',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Claude Code',
    },
    {
      title: 'Git',
    },
    {
      title: 'Figma',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  disableLevel: true,
  skills: [ai, programmingLanguages, infra, knowledge, blockchain, tools],
};

export default skill;
