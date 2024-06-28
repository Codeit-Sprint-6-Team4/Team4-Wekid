import { Quill } from 'react-quill';
import bold from '@assets/icons/icon-bold.svg';
import italics from '@assets/icons/icon-italic.svg';
import underline from '@assets/icons/icon-underline.svg';

export const CUSTUM_ICONS = Quill.import('ui/icons');
CUSTUM_ICONS['bold'] = `<img src=${bold} alt="bold"/>`;
CUSTUM_ICONS['italic'] = `<img src=${italics} alt="italic"/>`;
CUSTUM_ICONS['underline'] = `<img src=${underline} alt="bold"/>`;
CUSTUM_ICONS['size'] = `<img src=${underline} alt="bold"/>`;
CUSTUM_ICONS['header'] = `<span>제목</span>`;
export const italic = Quill.import('formats/italic');
italic.tagName = 'i'; // Quill uses <em> by default
Quill.register(italic, true);
