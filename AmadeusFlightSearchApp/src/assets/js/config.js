"use strict";

var base = {
    defaultFontFamily: "Overpass, sans-serif",
    primaryColor: "#1b68ff",
    secondaryColor: "#4f4f4f",
    successColor: "#3ad29f",
    warningColor: "#ffc107",
    infoColor: "#17a2b8",
    dangerColor: "#dc3545",
    darkColor: "#343a40",
    lightColor: "#f2f3f6"
};

var extend = {
    primaryColorLight: tinycolor(base.primaryColor).lighten(10).toString(),
    primaryColorLighter: tinycolor(base.primaryColor).lighten(30).toString(),
    primaryColorDark: tinycolor(base.primaryColor).darken(10).toString(),
    primaryColorDarker: tinycolor(base.primaryColor).darken(30).toString()
};

var chartColors = [base.primaryColor, base.successColor, "#6f42c1", extend.primaryColorLighter];

var colors = {
    bodyColor: "#adb5bd",
    headingColor: "#e9ecef",
    borderColor: "#212529",
    backgroundColor: "#495057",
    mutedColor: "#adb5bd",
    chartTheme: "dark"
};

var darkColor = {
    bodyColor: "#adb5bd",
    headingColor: "#e9ecef",
    borderColor: "#212529",
    backgroundColor: "#495057",
    mutedColor: "#adb5bd",
    chartTheme: "dark"
};

var curentTheme = localStorage.getItem("mode");
var dark = document.querySelector("#darkTheme");
var light = document.querySelector("#lightTheme");
var switcher = document.querySelector("#modeSwitcher");

function modeSwitch() {
    var storedMode = localStorage.getItem("mode");
    if (storedMode) {
        if (storedMode === "dark") {
            dark.disabled = false;
            light.disabled = true;
            localStorage.setItem("mode", "light");
            colors = colors; // Change back to the default light theme colors
        } else {
            dark.disabled = true;
            light.disabled = false;
            localStorage.setItem("mode", "dark");
            colors = darkColor; // Set colors to dark theme colors
        }
    } else {
        dark.disabled = true;
        light.disabled = false;
        localStorage.setItem("mode", "dark");
        colors = darkColor; // Set colors to dark theme colors
    }
}

console.log(curentTheme);

if (curentTheme) {
    if (curentTheme === "dark") {
        dark.disabled = true;
        light.disabled = false;
        colors = darkColor;
    } else if (curentTheme === "light") {
        dark.disabled = false;
        light.disabled = true;
    }
    switcher.dataset.mode = curentTheme;
} else if ($("body").hasClass("dark")) {
    colors = darkColor;
    localStorage.setItem("mode", "dark");
} else {
    localStorage.setItem("mode", "light");
}
