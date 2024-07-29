import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../components/common/IGlobal';

const title = 'Hyeonseok Han - Online Resume';
const description = 'This web page is online resume';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'Blockchain Engineer',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '현석',
        lastName: '한',
        username: 'Hyeonseok Han',
        gender: 'male',
      },
    },
  },
};
