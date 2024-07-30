import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import { IProfile } from '../components/profile/IProfile';

import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: 'Hyeonseok Han',
    small: '한현석',
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
      link: 'https://github.com/hyeonseokhan',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/toycode',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: 'Open to new opportunities and challenges 🧑🏻‍💻',
    icon: faBell,
  },
};

export default profile;
