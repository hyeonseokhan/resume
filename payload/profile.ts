import { faEnvelope, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: 'Hyeonseok Han',
    small: '',
  },
  contact: [
    {
      title: 'toycode727@gmail.com',
      link: 'mailto:toycode727@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/hyeonseokhan',
      icon: faGithub,
    },
    // {
    //   title: 'LinkedIn',
    //   link: 'https://www.linkedin.com/in/wonjoon/',
    //   icon: faLinkedin,
    // },
    {
      title: 'Blog',
      // link: 'https://hyeonseokhan.github.io',
      link: 'https://hyeonseokhan.github.io/',
      icon: faBlog,
    },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: 'Open to new opportunities and challenges 🧑🏻‍💻',
    icon: faBell,
  },
};

export default profile;
