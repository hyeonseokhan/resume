import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import openSource from './openSource';
import project from './project';
import presentation from './presentation';
import education from './education';
import article from './article';
import etc from './etc';
import footer from './footer';

import { _global } from './_global';

import { IProfile } from '../components/profile/IProfile';
import { IIntroduce } from '../components/introduce/IIntroduce';
import { ISkill } from '../components/skill/ISkill';
import { IOpenSource } from '../components/openSource/IOpenSource';
import { IExperience } from '../components/experience/IExperience';
import { IProject } from '../components/project/IProject';
import { IPresentation } from '../components/presentation/IPresentation';
import { IEducation } from '../components/education/IEducation';
import { IEtc } from '../components/etc/IEtc';
import { IFooter } from '../components/footer/IFooter';
import { IGlobal } from '../components/common/IGlobal';
import { IArticle } from '../components/article/IArticle';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
  experience,
  project,
  presentation,
  article,
  education,
  etc,
  footer,

  _global,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export default Payload;
