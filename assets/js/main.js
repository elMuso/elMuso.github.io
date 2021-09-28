const themeToggle = document.querySelector(".theme-toggle");
const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
const chosenThemeIsDark = (chosenTheme!=null && chosenTheme == "dark") ||
 (chosenTheme==null&&window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
const chosenThemeIsLight = (chosenTheme!=null && chosenTheme == "light") || 
(chosenTheme==null&&window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);

// Detect the color scheme the operating system prefers.
function detectOSColorTheme() {
  if (chosenThemeIsDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (chosenThemeIsLight) {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Switch the theme.
function switchTheme(e) {
  console.log("JABHSAHJASBHSA")
  if (chosenThemeIsDark) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  detectOSColorTheme();
  window.location.reload();
}
if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());

  detectOSColorTheme();
} else {
  localStorage.removeItem("theme");
}
