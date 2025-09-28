---
title: "XTerminal Tutorial: Build Your Own Web-based Interactive Terminal Application"
description: "An introduction to xterminal.js with an example"
date: "Jan 12 2025"
draft: true
tags:
    - programming
---

[XTerminal](https://xterminal.js.org) is a simple and perfomant web-based component written in TypeScript that lets you create command-line interfaces for use in the browser. It builds on top of standard HTML, CSS, and JavaScript to provide a simple yet powerful model that helps you develop command-line interfaces in the browser.

In this blog post, we'll build a simple github user search project that fetches and displays a user's profile image, bio, and repos count using vanilla JavaScript.

Let's get started!

## Project Setup

The first thing we need to do is setup a simple project structure with three essential files: `index.html`, `style.css` and `main.js`.

> **Note**:
> You can use [LiveCode](https://henryhale.github.io), an clean frontend code playground to get started quickly.

The `index.html` file contains the following contents;

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>GitHub User Search</title>
		<link
			rel="stylesheet"
			href="https://unpkg.com/xterminal/dist/xterminal.css"
		/>
		<script src="https://unpkg.com/xterminal/dist/xterminal.umd.js"></script>
		<link rel="stylesheet" href="./styles.css" />
	</head>
	<body>
		<div id="app"></div>
		<script src="./main.js"></script>
	</body>
</html>
```

In the above code, we

- set the title of our project to `GitHub User Search`
- install [XTerminal](https://xterminal.js.org) using a CDN:
    ```html
    <link
    	rel="stylesheet"
    	href="https://unpkg.com/xterminal/dist/xterminal.css"
    />
    <script src="https://unpkg.com/xterminal/dist/xterminal.umd.js"></script>
    ```
- link our `style.css` and `main.js` files

Notice the `<div id="app"></div>` in the body, that's where our application will be rendered.

Update our stylesheet `style.css` with

```css
* {
	box-sizing: border-box;
}

html,
body {
	padding: 0;
	margin: 0;
	overflow: hidden; /* prevent page from scrolling */
}

#app {
	height: 100vh; /* occupy the entire page */
}
```

In the above styles, we reset the page body styles and adjust the `#app` element to fill up the entire page with `height: 100vh`

Now it's time to get write our application inside `main.js` file.

## Initialization

To create a terminal interface, we need to create an instance of the XTerminal class provided by the libray.

```js
// main.js

const term = new XTerminal()
```

There will be nothing rendered on your page not until the `term` instance is mounted to our div element using the `term.mount()` method.

```js
//main.js

const term = new XTerminal()
term.mount("#app")
```

The `#app` string corresponds to the CSS selector of the target element the instance will be rendered. In this case, `<div id="app"></div>` is the target element.

## User Input

In this section, we are going to capture user input, the GitHub username, and print it back to the terminal.

Before we prompt the user, we need a prompt string that appears whenever we need user input. Add this code to our `main.js`

```js
const promptStyle = "[search] $ "

function ask() {
	term.write(promptStyle)
}
```

The above code defines the prompt style and a function that prints it to the terminal using `term.write(...)`.

To write or output string data onto the terminal, we use `term.write(...)` method. Use `term.writeln(...)` to output data followed by a newline.

The terminal handles interactions mainly via events.
To capture user input, we are going to register an event listener on the `data` event using `term.on()` method. The `data` event is triggered whenever a user types some text and presses the `Enter` key. Add this code to our `main.js`

```js
term.on("data", (input) => {
	// do something with 'input'
})
```

:warning: _work in progress_

<!--
Think of it as a modern interface alternative to projects like [jsshell.com](https://jsshell.com) by [Chad B.](https://github.com/chadrbanks), [shell.js](https://davidecaruso.github.io/shell.js/) by [Davide C.](https://github.com/davidecaruso), [jquery terminal](https://terminal.jcubic.pl/) by [Jakub T.](https://github.com/jcubic) and many others. -->
