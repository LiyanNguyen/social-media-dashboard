let themeSwitcherButton = document.querySelector(".toggle-btn");
let darkCircle = document.querySelector(".dark-circle");
let documentRoot = document.querySelector(":root");
let isDarkMode = true;

themeSwitcherButton.onclick = () => {
	if (isDarkMode) {
		// Switch to Light Mode
		darkCircle.classList.remove("goLeft");
		darkCircle.classList.add("goRight");

		documentRoot.style.setProperty("--background", "hsl(0, 0%, 100%)");
    documentRoot.style.setProperty("--topPattern", "hsl(225, 100%, 98%)");
    documentRoot.style.setProperty("--cardBackground", "hsl(227, 47%, 96%)");
    documentRoot.style.setProperty("--normalText", "hsl(228, 12%, 44%)");
		documentRoot.style.setProperty("--emphasizeText", "hsl(230, 17%, 14%)");
		themeSwitcherButton.style.setProperty("background-image", "none");
		themeSwitcherButton.style.setProperty("background-color", "lightgray");
	}
	
	else {
		// Switch to Dark Mode
		darkCircle.classList.remove("goRight");
		darkCircle.classList.add("goLeft");
		
		documentRoot.style.setProperty("--background", "hsl(230, 17%, 14%)");
		documentRoot.style.setProperty("--topPattern", "hsl(232, 19%, 15%)");
		documentRoot.style.setProperty("--cardBackground", "hsl(228, 28%, 20%)");
		documentRoot.style.setProperty("--normalText", "hsl(228, 34%, 66%)");
		documentRoot.style.setProperty("--emphasizeText", "hsl(0, 0%, 100%)");
		themeSwitcherButton.style.setProperty("background-image", "var(--toggle)");
	}

	isDarkMode = !isDarkMode;
};