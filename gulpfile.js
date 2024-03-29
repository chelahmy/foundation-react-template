const gulp          = require('gulp')
const webpack       = require('webpack-stream')
const browserSync   = require('browser-sync').create()
const $             = require('gulp-load-plugins')()
const autoprefixer  = require('autoprefixer')

const sassPaths = [
	'node_modules/foundation-sites/scss',
	'node_modules/motion-ui/src'
]

let sass = () => {
	return gulp.src('src/scss/app.scss')
		.pipe($.sass({
			includePaths: sassPaths,
			outputStyle: 'compressed' // if css compressed **file size**
		})
		.on('error', $.sass.logError))
		.pipe($.postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
}

let react = () => {
	return gulp.src('src/js/app.js')
		.pipe(webpack({
			output: {
				filename: 'bundle.js'
			},
			module: {
				rules: [{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env', '@babel/react']
					}
				}]
			},
			resolve: {
				extensions: ['.js', '.jsx']
			}
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream())
}

let copy_statics = () => {
	return gulp.src([
			'src/*.html'
		])
		.pipe(gulp.dest('./dist'))
}

let serve = () => {
	browserSync.init({
		server: './dist'
	})

	gulp.watch('src/scss/*.scss', sass).on('change', browserSync.reload)
	gulp.watch(['src/js/*.js', 'src/js/*.jsx'], react).on('change', browserSync.reload)
	gulp.watch('src/*.html', copy_statics).on('change', browserSync.reload)
}

gulp.task('copy-statics', copy_statics)
gulp.task('sass', sass)
gulp.task('react', react)
gulp.task('serve', gulp.series('copy-statics', 'sass', 'react', serve))
gulp.task('default', gulp.series('copy-statics', 'sass', 'react', serve))
