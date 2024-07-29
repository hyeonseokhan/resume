import { ICommon } from '../common/ICommon';

export declare namespace IIntroduce {
  export interface Payload extends ICommon.SectionEnableFlag {
    contents: string[];
    sign: string;
    latestUpdated: string;
  }
}
