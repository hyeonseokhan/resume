import { IOpenSource } from '../components/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Online Resume',
      descriptions: [
        {
          content: 'Personal online resume open source project.',
          href: 'https://github.com/hyeonseokhan/resume',
        },
        {
          content: 'Github Stars ',
          postImage: 'https://img.shields.io/github/stars/hyeonseokhan/resume.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
