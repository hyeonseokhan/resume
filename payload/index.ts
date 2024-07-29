import { IProfile } from '../components/profile/IProfile';
import { IIntroduce } from '../components/introduce/IIntroduce';
import { IGlobal } from '../components/common/IGlobal';
import { ISkill } from '../components/skill/ISkill';
import { IExperience } from '../components/experience/IExperience';
import { IProject } from '../components/project/IProject';
import { IOpenSource } from '../components/openSource/IOpenSource';
import { IArticle } from '../components/article/IArticle';
import { IEducation } from '../components/education/IEducation';
import { IFooter } from '../components/footer/IFooter';

import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import project from './project';
import openSource from './openSource';
import article from './article';
import education from './education';
import footer from './footer';
import { _global } from './_global';

const ContentsPayload: ContentsPayload = {
  profile,
  introduce,
  skill,
  experience,
  project,
  openSource,
  article,
  education,
  footer,
  _global,
};

interface ContentsPayload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  openSource: IOpenSource.Payload;
  article: IArticle.Payload;
  education: IEducation.Payload;
  footer: IFooter.Payload;
  _global: IGlobal.Payload;
}

export default ContentsPayload;
