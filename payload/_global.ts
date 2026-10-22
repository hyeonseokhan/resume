import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../components/common/IGlobal';

const title = 'Hyeonseok Han - Online Resume';
const description = 'AI를 업무와 제품에 연결하는 AX 연구원 한현석의 온라인 이력서';

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
          alt: 'AX Engineer',
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
