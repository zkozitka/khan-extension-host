// === File 2: background.js ===

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  const url = new URL(details.url);

  const isLogin = url.pathname === "/login";
  const isTeacher = url.pathname.startsWith("/teacher/") || url.pathname === "/teacher";

  if (isLogin || isTeacher) {
    chrome.tabs.update(details.tabId, {
      url: "https://www.khanacademy.org/"
    });
  }
}, {
  url: [
    {hostEquals: "www.khanacademy.org"}
  ]
});