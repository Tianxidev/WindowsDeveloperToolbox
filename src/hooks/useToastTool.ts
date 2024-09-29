export const useToastTool = (time: number = 1000) => {
  function showToast(
    type: "info" | "success" | "error" | "warning" | "loading",
    ...msg: any[]
  ) {
    window.$message?.[type](msg.join(" "), {
      duration: time,
    });
  }

  function info(...msg: any[]) {
    showToast("info", ...msg);
  }

  function success(...msg: any[]) {
    showToast("success", ...msg);
  }

  function error(...msg: any[]) {
    showToast("error", ...msg);
  }

  function warning(...msg: any[]) {
    showToast("warning", ...msg);
  }

  function loading(...msg: any[]) {
    showToast("loading", ...msg);
  }

  function message() {
    return window.$message;
  }

  return { info, success, error, warning, loading, message };
};
