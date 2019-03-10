# Project Builder Based on Gulp 4 & Yarn

![gulp4-yarn-startproj](https://raw.githubusercontent.com/zetproj/gulp4-yarn-startproj/master/git-repo-preview.jpg)

[![GitHub release](https://img.shields.io/github/release/zetproj/gulp4-yarn-startproj.svg?style=flat-square&colorB=E86446&logo=git&logoColor=white&label=)](https://github.com/zetproj/gulp4-yarn-startproj/releases)
[![Gulp repo version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fzetproj%2Fgulp4-yarn-startproj%2Fmaster%2Fpackage.json&query=$.devDependencies.gulp&style=flat-square&colorA=B75051&colorB=DE5355&label=Gulp)](https://gulpjs.com)
[![Yarn repo version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fzetproj%2Fgulp4-yarn-startproj%2Fmaster%2Fpackage.json&query=$.engines.yarn&style=flat-square&colorA=4C8AA7&colorB=6EB2D1&label=Yarn)](https://yarnpkg.com)
[![GitHub repo license](https://img.shields.io/github/license/zetproj/gulp4-yarn-startproj.svg?style=flat-square&colorB=65AF62&label=)](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/LICENSE)
![GitHub repo size in bytes](https://img.shields.io/github/repo-size/zetproj/gulp4-yarn-startproj.svg?style=flat-square&colorA=617D89&colorB=72A7BE&label=Repo%20Size)
![GitHub stars](https://img.shields.io/github/stars/zetproj/gulp4-yarn-startproj.svg?style=flat-square&colorA=C7B23F&colorB=EBCC26&logo=github&label=Stars)

Hello there! This template was created for people who don't want to spend time writing their template every time or for those who don't know how it works or is just beginning to learn the project builder. In this template, all that is needed for web development. Here you find [Gulp](https://gulpjs.com) version **`4`** with [Yarn](https://yarnpkg.com/en/) package manager.

>**Note!** If you find any errors in the text, please write me.

## Table of Contents

* [Getting Started](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#getting-started)
  * [Installing](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#installing)
  * [Quick Start](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#quick-start)
  * [Dependencies & devDependencies](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#dependencies--devdependencies)
* [All Commands Used](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#all-commands-used)
* [Project Structure](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#project-structure)
  * [CSS Directory](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#css-directory)
  * [Fonts Directory](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#fonts-directory)
  * [IMG Directory](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#img-directory)
  * [JS Directory](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#js-directory)
  * [SASS Directory](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#sass-directory)
  * [SCSS Directory](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#scss-directory)
  * [Full Structure](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#full-structure)
* [License](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/README.md#license)

## Getting Started

### Installing

>**Note!** Regularly check `Yarn` and `Git` for new versions.

To work with this repository you need to go through only **`5`** steps:
1. Make sure [Yarn](https://yarnpkg.com/en/) is installed. Open your terminal and run this commands to check `yarn version`. If you see the [Yarn](https://yarnpkg.com/en/) version number, then he's installed. Maybe you use a Mac OS? Then you can install [Yarn](https://yarnpkg.com/en/) through the [Homebrew package manager](https://brew.sh):
```
$ brew install yarn
```
2. Install the latest version of [Git](https://git-scm.com). If you previously installed [Git](https://git-scm.com), update it.
3. Go to the project folder and save the zip archive of repository there or use the command for clone:
```
$ git clone https://github.com/zetproj/gulp4-yarn-startproj.git
```
4. Install all yarn's packages and their dependencies from `package.json`, for this you can use two commands:
```
$ yarn install
```
5. And finally, you can work with repository :3 

### Quick Start

1. For the starting, you can make some settings in `gulpfile.js`. You can edit paths and style syntax `.sass` or `.scss`.
```
syntax:                  'sass'
source:                  'src'
build:                   'dist'
```

2. The first commands should be `yarnCss` and `yarnJs`, they command for transport main [Yarn](https://yarnpkg.com/en/) files to the css and js directory. These commands need to be used always after installing new packages.

3. Next, use the `gulp` command for the starting developing or `gulp build` for the final build.

### Dependencies & devDependencies

If you want to use Bootstrap or other frameworks and packages, you can always install them.

| Dependencies      | devDependencies    |                 |                 |                 |                |
| :---------------- | :----------------- | :-------------- | :-------------- |:--------------- | :------------- |
| [`jquery`](https://yarnpkg.com/en/package/jquery) | [`gulp-autoprefixer`](https://yarnpkg.com/en/package/gulp-autoprefixer) | [`gulp-zip`](https://yarnpkg.com/en/package/gulp-zip) | [`gulp-rename`](https://yarnpkg.com/en/package/gulp-rename) | [`gulp-imagemin`](https://yarnpkg.com/en/package/gulp-imagemin) | [`gulp-sass`](https://yarnpkg.com/en/package/gulp-sass)
| [`fontawesome`](https://yarnpkg.com/en/package/font-awesome) | [`imagemin-pngquant`](https://yarnpkg.com/en/package/imagemin-pngquant) | [`main-yarn-files`](https://yarnpkg.com/en/package/main-yarn-files) | [`gulp-concat`](https://yarnpkg.com/en/package/gulp-concat) | [`gulp-uglify`](https://yarnpkg.com/en/package/gulp-uglify) | [`del`](https://yarnpkg.com/en/package/del)
| [`animate.css`](https://yarnpkg.com/ru/package/animate.css) | [`gulp-sourcemaps`](https://yarnpkg.com/en/package/gulp-sourcemaps) | [`gulp-clean-css`](https://yarnpkg.com/en/package/gulp-clean-css) | [`gulp-cache`](https://yarnpkg.com/en/package/gulp-cache) | [`browser-sync`](https://yarnpkg.com/en/package/browser-sync) | [`gulp`](https://yarnpkg.com/en/package/gulp)

## All Commands Used

| Commands               | Description                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------- |
| `gulp`                 | Runs all dev tasks (`code`, `styles`, `scripts`, `watchFiles`, `browser`)            |
| `code`                 | If you use `pug`, `rigger` or another html preprocessor then edit `gulpfile.js` on 34 line, add your `.pipe` code and use this command, else never mind on this :3                                    |
| `styles`               | Compiles all `.sass` or `scss` files to `.css` file                                  |
| `scripts`              | Compiles all `.js` files to `scripts.min.js` file                                    |
| `images`               | Runs images minification task                                                        |
| `build`                | Runs all build tasks (`code`, `styles`, `scripts`, `buildFinal`, `images`, `archive`)|
| `yarnCss`              | Runs searching and moving the main `.css` or `.min.css` files to the `css` directory |
| `yarnJs`               | Runs searching and moving the main `.js` or `.min.js` files to the `js` directory    |
| `cache`                | Runs cache deletion                                                                  |
| `browser`              | Runs `browser-sync` task                                                             |
| `watchFiles`           | Watching `.html`, `.sass` and `.js` files                                            |
| `zip`                  | Making zip archive `build.zip` with final project build                              |
| `delete`               | Delete build directory `dist` and zip archive `dist.zip`                             |

## Project Structure

### CSS Directory

Here are compiled `.css` files and library styles. All files in this directory do not edit. Files in this directory appear only after the commands `gulp`, `styles` and `yarnCss`.

>**Note!** `.gitkeep` is the system file for saving a directory empty.

```
css                                     ─ directory for compiled css styles
└── .gitkeep                            ─ system file to save directory empty (don't touching)
```

### Fonts Directory

If you don't use [Google Fonts](https://fonts.google.com) put your fonts in this directory. Create a new directory for each font family and font weight.

>**Note!** If you don't know how to get other font extensions use [Online Font Converter](https://onlinefontconverter.com).

```
fonts
├── roboto-bold                         ─ custom directory for the font with one weight
│   ├── roboto-bold.eot                 ─┐
│   ├── roboto-bold.ttf                  ├─ font files with different extensions
│   ├── roboto-bold.woff                 │
│   └── roboto-bold.woff2               ─┘
└── roboto-regular                      ─ custom directory for the font with one weight
    ├── roboto-regular.eot              ─┐
    ├── roboto-regular.ttf               ├─ font files with different extensions
    ├── roboto-regular.woff              │
    └── roboto-regular.woff2            ─┘
```

### IMG Directory

All usable images (`.jpg`, `.png` and `.svg`) will be saved in `img` directory

```
img                                     ─ directory for images
└── favicon                             ─ directory for favicon icon
    └── favicon.ico                     ─ base favicon icon
```

### JS Directory

All usable software scripts are stored in a `js` directory, for example, jquery, vue, fontawesome & etc. All user scripts write in the `common.js` file. Files in this directory appear only after the commands `gulp`, `scripts` and `yarnJs`.

```
js                                      ─ directory for scripts
└── common.js                           ─ base file for custom scripts
```

### SASS Directory

If you use `sass` syntax then use this derectory. This is the main directory for the custom styles. For connecting a new fonts use `_fonts.sass`.

>**Note!** Choose usable syntax u can in the `gulpfile.js`.

```
sass                                    ─ directory for sass styles
├── _mixins                             ─ directory for mixins
│   └── _font-face.sass                 ─ file with font mixin
├── _fonts.sass                         ─ file for fonts connection
├── _media.sass                         ─ file for media queries
├── _reset.sass                         ─ file with base styles
├── _vars.sass                          ─ file for variable styles
└── main.sass                           ─ file for base custom styles
```

### SCSS Directory

If you use `scss` syntax then use this derectory. This is the main directory for the custom styles. For connecting a new fonts use `_fonts.scss`.

>**Note!** Choose usable syntax u can in the `gulpfile.js`.

```
scss                                    ─ directory for scss styles
├── _mixins                             ─ directory for mixins
│   └── _font-face.scss                 ─ file with font mixin
├── _fonts.scss                         ─ file for fonts connection
├── _media.scss                         ─ file for media queries
├── _reset.scss                         ─ file with base styles
├── _vars.scss                          ─ file for variable styles
└── main.scss                           ─ file for base custom styles
```

### Full Structure

```
gulp4-yarn-startproj
├── node_modules                        ─ directory with yarn modules
├── src                                 ─ developer directory
│   ├── css                             ─ directory for compiled css styles
│   │   └── .gitkeep                    ─ system file to save directory empty (don't touching)
│   ├── fonts                           ─ directory for fonts
│   │   ├── roboto-bold                 ─ custom directory for the font with one weight
│   │   │   ├── roboto-bold.eot         ─┐
│   │   │   ├── roboto-bold.ttf          ├─ font files with different extensions
│   │   │   ├── roboto-bold.woff         │
│   │   │   └── roboto-bold.woff2       ─┘
│   │   └── roboto-regular              ─ custom directory for the font with one weight
│   │       ├── roboto-regular.eot      ─┐
│   │       ├── roboto-regular.ttf       ├─ font files with different extensions
│   │       ├── roboto-regular.woff      │
│   │       └── roboto-regular.woff2    ─┘
│   ├── img                             ─ directory for images
│   │   └── favicon                     ─ directory for favicon icon
│   │       └── favicon.ico             ─ base favicon icon
│   ├── js                              ─ directory for scripts
│   │   └── common.js                   ─ base file for custom scripts
│   ├── sass                            ─ directory for sass styles
│   │   ├── _mixins                     ─ directory for mixins
│   │   │   └── _font-face.sass         ─ file with font mixin
│   │   ├── _fonts.sass                 ─ file for fonts connection
│   │   ├── _media.sass                 ─ file for media queries
│   │   ├── _reset.sass                 ─ file with base styles
│   │   ├── _vars.sass                  ─ file for variable styles
│   │   └── main.sass                   ─ file for base custom styles
│   ├── scss                            ─ directory for scss styles
│   │   ├── _mixins                     ─ directory for mixins
│   │   │   └── _font-face.scss         ─ file with font mixin
│   │   ├── _fonts.scss                 ─ file for fonts connection
│   │   ├── _media.scss                 ─ file for media queries
│   │   ├── _reset.scss                 ─ file with base styles
│   │   ├── _vars.scss                  ─ file for variable styles
│   │   └── main.scss                   ─ file for base custom styles
│   └── index.html                      ─ base html file
├── .gitignore                          ─ list of ignoring files (don't touching)
├── git-repo-preview.jpg                ─ image for readme file (don't touching)
├── gulpfile.js                         ─ system file with gulp's tasks (don't touching)
├── LICENSE                             ─ license (don't touching)
├── package.json                        ─ system file with gulp's devdependencies (don't touching)
├── README.md                           ─ readme.md (don't touching)
└── yarn.lock                           ─ system file (don't touching)
```

## License

[MIT License](https://github.com/zetproj/gulp4-yarn-startproj/blob/master/LICENSE)

Copyright © 2019 [Alexander D. Zaycev](https://github.com/zetproj)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.