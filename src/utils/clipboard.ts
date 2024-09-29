/**
 * 复制单行内容到粘贴板
 * content : 需要复制的内容
 */

export default class Clipboard {
  // 复制单行内容到粘贴板
  static copyToClip = (content: string) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  };
}
