# nickmassarelli.com

Built with [Eleventy](https://www.11ty.dev/)

## Requirements

- [Node.js](https://nodejs.org/en/)

## Getting Started

Install [Node.js](https://nodejs.org/en/) on your machine. Click the green button to the left that says _Recommended for most users_. Once this is installed, clone this repository and open it up on VS Code. Now click View > Terminal and run the following command to install project dependencies.

```
npm install
```

This might take a minute. Once it's finished, you can run the following command to start the development server at https://localhost:8080:

```
npm run dev
```

> 💡 I'd recommend installing the [Classic Cache Killer](https://chrome.google.com/webstore/detail/classic-cache-killer/kkmknnnjliniefekpicbaaobdnjjikfp?hl=en) chrome extension and turning it on during development to avoid seeing stale versions of the site.

## Updating the slider

To update the slider, go to [src/\_data/slider.js](src/_data/slider.js) and modify the list of assets for the slider. Make sure to test your changes on the development server.
