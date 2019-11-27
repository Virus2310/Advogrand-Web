const gulp        = require('gulp');
const browserSync = require('browser-sync'); // ПІдключаємо плагін, require вказує що треба провірити папку
                                             //node_modules і знайти там папку з плагіном
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');



// Static server
gulp.task('server', async function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});


gulp.task('styles', function(){
    return gulp.src("src/sass/**/*.scss") // путь к файлам-исходникам,  /sass/**/*.scss означает выбрать все файлы с расширением .scss из всех подпапок папки /sass
         .pipe(sass({
                    outputStyle: 'compressed'
                }).on('error', sass.logError))
         .pipe(rename({
            prefix: "",
            suffix: ".min",
         }))
         .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
         }))
         .pipe(cleanCSS({compatibility: 'ie8'}))
         .pipe(gulp.dest("src/css")) // путь к папке, куда помещаем конечные файлы
         .pipe(browserSync.stream());
});

gulp.task('watch', function(){
   gulp.watch('src/sass/**/*.scss', gulp.parallel('styles'));  // Наблюдение за SASS файлами
   gulp.watch('src/*.html').on('change', browserSync.reload);  // .on(‘change’, browserSync.reload) означает что, если есть ошибки, вывести их в консоль.
});

gulp.task('default', gulp.parallel('watch','server', 'styles'));

// Gulp — это инструмент автоматизации frontend разработки. Он поможет вам автоматизировать рутинные задачи и ускорит вашу работу
