# XBase Template: Blaze

Blaze is part of the XBase Templates Collection and is implemented using the lovely **Tailwind CSS** framework to be a general purpose template. You can customize and use it in any ways you wish.

Everything is made clear and simple. So you just need to know a bit about HTML and Tailwind CSS (if necessary) to be able to customize this template.

## Installation

The template doesn't need any installation unless if you need to develop and customize it using Tailwind CSS. To do so you can use `npm` to install the packages needed for the Tailwind JIT engine to work:

- To install the development packages:  

```shell
npm install 
```

- To run the JIT Watch:  

```shell 
npm run watch 
```

- To build the production styles:  

```shell 
npm run build 
```

## Code Structure

The code is structured in a simple and easily understandable way. Read the rest if you want to know more.

### Files

Let's take a look at the files tree, first:

```shell
.
├── index.html
├── tailwind.config.js
├── package.json
├── package-lock.json
├── res
│   ├── css
│   │   ├── styles.css
│   │   └── tailwind.css
│   ├── img
│   │   ├── ...
│   ├── logos
│   │   └── ...
│   └── svg
│       └── ...
└── README.md
```

### `index.html`

The `index.html` file contains all the html you need for the template. To avoid any fuss and complication, all the HTML code you need is put in here which can be simply edited. 

If you don't know Tailwind CSS you can refer to it's documentation on [TailwindCSS.com/docs](https://tailwindcss.com/docs). There's everything you need to know about this beautiful framework out there.

### `tailwind.config.js` and customization

The `tailwind.config.js` at the root of this directory contains all Tailwind's configuration for this template. it contains the config for *colors*, *font* and *backgrounds* used in this template. You can customize them as you wish.

### `res\`

This directory contains all the resources the template needs. From CSS to images, svg files and almost everything.

### `res\css`

This directory contains two files:

- `styles.css`: keeps the compiled Tailwind CSS styles.
- `tailwind.css`: keeps Tailwind CSS custom styles that the JIT Compiler uses to generate the `styles.css` file. If you want to add your `@apply` styles you can put them here and then run `npm run build` to generate the css styles you need.

### Watch & Build

The `package.json` has two scripts defined in it:

- `watch`: which you can use to run the Just In Time compiler of Tailwind CSS to watch the `index.html` file to generate the styles you need on the go. The generated styles will be saved in `res/css/styles.css`. To run the `watch` command just run `npm run watch`.
- `build`: used to generate production styles. It takes the classes from `index.html` and `res/css/tailwind.css` and generates a minified, production ready set of styles in `res/css/styles.css`. To run the `build` command just run `npm run build`.

### Separation of Responsive Styles

In every side of the HTML code, Tailwind classes might be separated into two parts using the bar character `|`. This is done to ease up the customization of responsive styles. 

The character itself doesn't effect the styles in any way and it's for the purpose of having a clean code only.

## Contact Me

You can simply email me whenever you want using the address bellow and I'll be at your service whenever I could as much as I could 😊:  

📩 [naderian.mahdi@gmail.com](mailto:naderian.mahdi@gmail.com)

