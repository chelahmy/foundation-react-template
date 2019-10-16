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

let copy_src = () => {
	return gulp.src([
			'src/*.html'
		])
		.pipe(gulp.dest('./dist'))
}

let serve = () => {
	browserSync.init({
		server: './dist'
	})

	gulp.watch('src/scss/*.scss', sass)
	gulp.watch(['src/js/*.js', 'src/js/*.jsx'], react)
	gulp.watch('src/*.html', copy_src).on('change', browserSync.reload)
}

gulp.task('copy-js-libs', () => {
	return gulp.src([
			'./node_modules/jquery/dist/jquery.min.js',
			'./node_modules/what-input/dist/what-input.min.js',
			'./node_modules/foundation-sites/dist/js/foundation.min.js',
			'./node_modules/react/umd/react.development.js',
			'./node_modules/react/umd/react.production.min.js',
			'./node_modules/react-dom/umd/react-dom.development.js',
			'./node_modules/react-dom/umd/react-dom.production.min.js'	
		])
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('copy-src', copy_src)
gulp.task('sass', sass)
gulp.task('react', react)
gulp.task('serve', gulp.series('copy-src', 'sass', 'react', serve))
gulp.task('default', gulp.series('copy-js-libs', 'copy-src', 'sass', 'react', serve))

