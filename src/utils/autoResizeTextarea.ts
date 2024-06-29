/**
 * @description ex: autoResizeTextarea(textarea) dom에서 사용해야함
 * @param {HTMLTextAreaElement} textarea 
 */

export const autoResizeTextarea = (textarea: HTMLTextAreaElement) => {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
};