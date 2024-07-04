import { Quill } from 'react-quill';
import alignCenter from '@assets/icons/icon-alignment-center.svg';
import alignLeft from '@assets/icons/icon-alignment-left.svg';
import alignRight from '@assets/icons/icon-alignment-right.svg';
import bold from '@assets/icons/icon-bold.svg';
import bullet from '@assets/icons/icon-bullet.svg';
import fontColor from '@assets/icons/icon-font-color.svg';
import image from '@assets/icons/icon-image.svg';
import italics from '@assets/icons/icon-italic.svg';
import iconLink from '@assets/icons/icon-link-quill.svg';
import numbering from '@assets/icons/icon-number.svg';
import underline from '@assets/icons/icon-underline.svg';

export const CUSTUM_ICONS = Quill.import('ui/icons');

CUSTUM_ICONS['bold'] = `<img src=${bold} alt="bold"/>`;
CUSTUM_ICONS['italic'] = `<img src=${italics} alt="italic"/>`;
CUSTUM_ICONS['underline'] = `<img src=${underline} alt="underline"/>`;

CUSTUM_ICONS['align'][''] = `<img src=${alignLeft} alt="left"/>`;
CUSTUM_ICONS['align']['center'] = `<img src=${alignCenter} alt="center"/>`;
CUSTUM_ICONS['align']['right'] = `<img src=${alignRight} alt="right"/>`;

CUSTUM_ICONS['list']['bullet'] = `<img src=${bullet} alt="bullet"/>`;
CUSTUM_ICONS['list']['ordered'] = `<img src=${numbering} alt="numbering"/>`;

CUSTUM_ICONS['color'] = `<img src=${fontColor} alt="color"/>`;
CUSTUM_ICONS['image'] = `<img src=${image} alt="image"/>`;
CUSTUM_ICONS['link'] = `<img src=${iconLink} alt="link"/>`;
