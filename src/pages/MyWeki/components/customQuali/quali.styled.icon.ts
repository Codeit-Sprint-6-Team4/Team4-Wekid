import { Quill } from 'react-quill';
import align from '@assets/icons/icon-align.svg';
import bold from '@assets/icons/icon-bold.svg';
import bullet from '@assets/icons/icon-bullet.svg';
import image from '@assets/icons/icon-image.svg';
import italics from '@assets/icons/icon-italic.svg';
import link from '@assets/icons/icon-link.svg';
import justify from '@assets/icons/icon-menu.svg';
import ordered from '@assets/icons/icon-number.svg';
import underline from '@assets/icons/icon-underline.svg';
import video from '@assets/icons/icon-video.svg';

export const CUSTUM_ICONS = Quill.import('ui/icons');

CUSTUM_ICONS['bold'] = `<img src=${bold} alt="bold"/>`;
CUSTUM_ICONS['italic'] = `<img src=${italics} alt="italic"/>`;
CUSTUM_ICONS['underline'] = `<img src=${underline} alt="underline"/>`;
CUSTUM_ICONS['list']['bullet'] = `<img src=${bullet} alt="bullet"/>`;
CUSTUM_ICONS['list']['ordered'] = `<img src=${ordered} alt="ordered"/>`;
CUSTUM_ICONS['image'] = `<img src=${image} alt="image"/>`;
CUSTUM_ICONS['video'] = `<img src=${video} alt="video"/>`;
CUSTUM_ICONS['link'] = `<img src=${link} alt="link"/>`;
CUSTUM_ICONS['align'][''] = `<img src=${align} alt="align"/>`;
CUSTUM_ICONS['align']['justify'] = `<img src=${justify} alt="justify"/>`;

CUSTUM_ICONS['header'] = `<span>제목</span>`;
