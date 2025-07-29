//your JS code here. If required.
// Utility to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

// Utility to set a cookie
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Apply saved preferences on page load
window.addEventListener("DOMContentLoaded", () => {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
    document.getElementById("fontsize").value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    document.getElementById("fontcolor").value = fontColor;
  }

  // Handle form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const size = document.getElementById("fontsize").value;
    const color = document.getElementById("fontcolor").value;

    setCookie("fontsize", size);
    setCookie("fontcolor", color);

    document.documentElement.style.setProperty("--fontsize", `${size}px`);
    document.documentElement.style.setProperty("--fontcolor", color);
  });
});
