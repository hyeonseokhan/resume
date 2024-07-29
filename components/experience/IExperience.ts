import { ICommon } from '../common/ICommon';

export declare namespace IExperience {
  export interface Payload extends ICommon.SectionEnableFlag {
    list: Item[];
    disableTotalPeriod?: boolean;
  }

  export interface Item {
    title: string;
    position: string;
    startedAt: string;
    endedAt?: string;
    descriptions: string[];
    skillKeywords?: string[];
  }
}
