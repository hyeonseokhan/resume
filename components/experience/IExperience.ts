import { ICommon } from '../common/ICommon';

export declare namespace IExperience {
  export interface Payload extends ICommon.SectionEnableFlag {
    list: Item[];
    disableTotalPeriod?: boolean;
  }

  export interface Item {
    title: string;
    /** `positions` 를 쓰면 생략한다. */
    position?: string;
    startedAt: string;
    endedAt?: string;
    /** `positions` 를 쓰면 생략한다. */
    descriptions?: string[];
    skillKeywords?: string[];
    /**
     * ### 한 회사 안에서 맡은 직책이 여럿일 때 (겸임 등)
     *
     * @description 값이 있으면 `position`·`descriptions`·`skillKeywords` 대신 직책별로 나눠 그린다.
     * 회사 단위 기간은 `startedAt`·`endedAt` 이 그대로 맡는다.
     */
    positions?: Position[];
  }

  export interface Position {
    position: string;
    /** 회사 단위 기간과 다를 때만 적는다. */
    startedAt?: string;
    endedAt?: string;
    /** 겸임 배지를 붙인다. */
    concurrent?: boolean;
    descriptions: string[];
    skillKeywords?: string[];
  }
}
