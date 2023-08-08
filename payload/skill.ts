import { ISkill } from '../component/skill/ISkill';

const pl: ISkill.Skill = {
  category: 'Programming Languages',
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
    {
      title: 'SQL',
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

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'Gradle',
      level: 3,
    },
    {
      title: 'Git',
      level: 2,
    },
    {
      title: 'Terraform',
      level: 2,
    },
    {
      title: 'Prometheus',
      level: 1,
    },
  ],
};

const env: ISkill.Skill = {
  category: 'Platform',
  items: [
    {
      title: 'Linux',
      level: 3,
    },
    {
      title: 'OCI',
      level: 3,
    },
    {
      title: 'Off-premise',
      level: 3,
    },
    {
      title: 'On-premise',
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

const cert: ISkill.Skill = {
  category: 'Certification',
  items: [
    {
      title: '정보처리산업기사',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, blockchain, devops, env, knowledge, cert],
  tooltip: ['[3] 다양한 업무에서 사용\n', '[2] 업무에 적용한 경험\n', '[1] 관심을 가지고 있다\n'],
};

export default skill;
