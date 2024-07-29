import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { ICommon } from '../common/ICommon';

export declare namespace IProfile {
  export interface Payload extends ICommon.SectionEnableFlag {
    image: string;
    name: {
      title: string;
      small?: string;
    };
    contact: Contact[];
    notice: {
      title: string;
      icon?: IconDefinition;
    };
  }

  interface Contact {
    icon: IconDefinition;
    title?: string;
    link?: string;
    badge?: true;
  }
}
