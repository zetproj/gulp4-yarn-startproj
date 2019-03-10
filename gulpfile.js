/* ------- CONNECTS --------------------------------------------------------------- */

const { src, dest, watch, series, parallel } = require ('gulp'),        // Gulp
			sass                       = require ('gulp-sass'),               // Sass language
			autoprefixer               = require ('gulp-autoprefixer'),       // Add vendor prefixes to css rules
			cleancss                   = require ('gulp-clean-css'),          // Minify css
			concat                     = require ('gulp-concat'),             // Concatenated all '.js' files in one
			uglify                     = require ('gulp-uglifyjs'),           // Minify js
			rename                     = require ('gulp-rename'),             // Rename files
			imagemin                   = require ('gulp-imagemin'),           // Minify PNG, JPEG, GIF and SVG images
			pngquant                   = require ('imagemin-pngquant'),       // Png compression
			mainYarnFiles              = require ('main-yarn-files'),         // Searching and using main bower files
			browserSync                = require ('browser-sync'),            // Live reload
			zip                        = require ('gulp-zip'),                // Create archive with build derictory
			del                        = require ('del'),                     // Delete build derictory
			cache                      = require ('gulp-cache'),              // Cache
			sourcemaps                 = require ('gulp-sourcemaps');         // Sourcemaps

/* ------- PATHS ------------------------------------------------------------------ */

const path = {
				syntax:                  'sass',                                // Choose your syntax sass/scss
				source:                  'src',                                 // Developer directory
				build:                   'dist'                                 // Final build directory
			}

/* ------- HTML ------------------------------------------------------------------- */

function code () {
	return src (path.source + '/*.html')
		// Add your .pipe code here
		.pipe (browserSync.stream ())
}

exports.html = code

/* ------- STYLES ----------------------------------------------------------------- */

function styles () {
	return src (path.source + '/' + path.syntax + '/**/*.' + path.syntax)
		.pipe (sass ({ outputStyle: 'expanded' }))
		.pipe (autoprefixer (['last 15 versions']))
		.pipe (rename ({ prefix: '', suffix: '.min' }))
		.pipe (dest (path.source + '/css'))
		.pipe (browserSync.stream ())
}

exports.css = styles

/* ------- SCRIPTS ---------------------------------------------------------------- */

function scripts () {
	return src (path.source + '/js/**/*.js')
		.pipe (concat ('scripts.js'))
		.pipe (uglify ())
		.pipe (rename ({prefix: '', suffix: '.min'}))
		.pipe (dest (path.source + '/js'))
		.pipe (browserSync.stream ())
}

exports.js = scripts

/* ------- IMAGES ----------------------------------------------------------------- */

function images () {
	return src (path.source + '/img/**/*')
		.pipe (cache (imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe (dest (path.build + '/img'))
		.pipe (browserSync.stream ())
}

exports.img = images

/* ------- YARN FILES ------------------------------------------------------------- */

function mainYarnCss () {
	return src (mainYarnFiles ('**/*.css', {
		paths: {
			modulesFolder: 'node_modules/',
			jsonFile: 'package.json'
		}
	}))
		.pipe (dest (path.source + '/css'))
}

function mainYarnJs () {
	return src (mainYarnFiles ('**/*.js', {
		paths: {
			modulesFolder: 'node_modules/',
			jsonFile: 'package.json'
		}
	}))
		.pipe (dest (path.source + '/js'))
}

exports.yarnCss = mainYarnCss
exports.yarnJs = mainYarnJs

/* ------- CLEAR CACHE ------------------------------------------------------------ */

function cacheClear () {
	return cache.clearAll()
}

exports.cache = cacheClear

/* ------- BROWSER SYNC ----------------------------------------------------------- */

function browser () {
	browserSync.init({
		server: {
			baseDir: path.source
		},
		notify: false,
		// open: false,
		// online: false, // Work offline without internet connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
}

/* ------- WATCH ------------------------------------------------------------------ */

function watchFiles () {
	watch (path.source + '/*.html', code)
	watch (path.source + '/' + path.syntax + '/**/*.' + path.syntax, styles)
	watch (path.source + '/js/common.js', scripts)
}

exports.watch = watchFiles

/* ------- ARCHIVE ---------------------------------------------------------------- */

function archive () {
	return src (path.build + '/**/*')
		.pipe (zip (path.build + '.zip'))
		.pipe (dest ('./'))
}

exports.zip = archive

/* ------- DEL -------------------------------------------------------------------- */

function deleteBuild () {
	return del([path.build, './' + path.build + '.zip'])
}

exports.del = deleteBuild

/* ------- BUILD -------------------------------------------------------------------- */

async function buildFinal () {
	const buildCss = src (['!' + path.source + '/css/**/*.min.css', path.source + '/css/**/*.css'])
		.pipe (sourcemaps.init())
		.pipe (cleancss ({ level: { 2: { specialComments: 0 } } }))
		.pipe (sourcemaps.write())
		.pipe (dest (path.build + '/css'))
	const buildFonts = src (path.source + '/fonts/**/*')
		.pipe (dest (path.build + '/fonts'))
	const buildJs = src (path.source + '/js/scripts.min.js')
		.pipe (dest (path.build + '/js'))
	const buildHtml = src (path.source + '/*.html')
		.pipe (dest (path.build))
}

/* ------- EXPORTS ---------------------------------------------------------------- */

exports.default = series(
	parallel(code, styles, scripts),
	parallel(watchFiles, browser)
)

exports.build = series(
	parallel(code, styles, scripts),
	buildFinal,
	images,
	archive
)