import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IProject {
  export interface Payload extends ICommon.SectionEnableFlag {
    list: Item[];
  }

  export interface Item {
    title: string;
    where: string;
    startedAt: string;
    endedAt?: string;
    descriptions: IRow.Description[];
  }
}
