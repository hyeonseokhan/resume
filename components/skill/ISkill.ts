import { ICommon } from '../common/ICommon';

export declare namespace ISkill {
  export interface Payload extends ICommon.SectionEnableFlag {
    skills: Skill[];
    disableLevel?: boolean;
  }

  export interface Skill {
    category: string;
    items: Item[];
  }

  interface Item {
    title: string;
    level?: 1 | 2 | 3;
  }
}
