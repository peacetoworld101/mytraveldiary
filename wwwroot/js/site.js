// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

const themeStorageKey = "my-travel-diary-theme";
const themeToggle = document.getElementById("dark-mode-toggle");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    if (themeToggle) {
        const isDark = theme === "dark";
        themeToggle.setAttribute("aria-label", isDark ? "Enable light mode" : "Enable dark mode");
        themeToggle.setAttribute("title", isDark ? "Enable light mode" : "Enable dark mode");
    }
}

const savedTheme = localStorage.getItem(themeStorageKey);
applyTheme(savedTheme || (systemPrefersDark.matches ? "dark" : "light"));

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
});
