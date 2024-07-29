import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IOpenSource {
  export interface Payload extends ICommon.SectionEnableFlag {
    list: Item[];
  }

  interface Item {
    title: string;
    descriptions: IRow.Description[];
  }
}
