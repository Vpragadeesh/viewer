// Utility to get query params
function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}

// Read values from URL
const customerId = getParam("cid");
const name = getParam("name");

// Personalize UI
if (name) {
  document.getElementById("headline").innerText = `Hey ${name} 👋`;
  document.getElementById("subtext").innerText =
    "Thanks for checking out this personalized page.";
}

// Log visit (ONLY ONCE PER SESSION)
if (customerId && name) {
  fetch("http://localhost:3000/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customerId,
      name,
      page: window.location.pathname,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    }),
  });
}
