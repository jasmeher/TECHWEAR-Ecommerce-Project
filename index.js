var darkMode = true;
var root = document.querySelector(":root");

function toggleTheme() {
  //Dark Mode
  if (darkMode != true) {
    root.style.setProperty("--background-secondary", "#24282f");
    root.style.setProperty("--background", "#17181d");
    root.style.setProperty("--text-color", "#dfe1e6");
    document.querySelector(".dark-mode-icon").style.display = "block";
    document.querySelector(".light-mode-icon").style.display = "none";
    darkMode = true;
    return;
  }

  //Light Mode
  if (darkMode == true) {
    root.style.setProperty("--background-secondary", " #dfe1e6");
    root.style.setProperty("--background", "#fff");
    root.style.setProperty("--text-color", "#17181d");
    document.querySelector(".dark-mode-icon").style.display = "none";
    document.querySelector(".light-mode-icon").style.display = "block";
    darkMode = false;
    return;
  }
}
