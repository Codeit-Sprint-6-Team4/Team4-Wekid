/**
 * @description ex: autoResizeTextarea(textarea) dom에서 사용해야함
 * @param {HTMLAreaElement} textarea 
 */

export const autoResizeTextarea = (textarea: HTMLAreaElement) => {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
};
