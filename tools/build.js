var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var path = require('path');
var glob = require('glob');
var mkdirp = require('mkdirp');

var srcDir = path.join('.', 'src');
var buildDir = path.join('.', 'build');
var buildVersion = '0.1.0';

function compileJS() {
	mkdirp(buildDir);

	browserify({
		extensions: ['.es6'],
		entries: path.join(srcDir, 'app.es6'),
		debug: true
	})
		.transform(babelify.configure({
			ignore: /(bower_components)|(node_modules)/
		}))
		.bundle()
		.on('error', function (err) {
			console.log('Error: ' + err.message);
		})
		.pipe(fs.createWriteStream(path.join(buildDir, 'app.js')));

}

function compileHTML() {
	glob('**/*.tpl.html', {cwd: srcDir}, function (er, files) {
		files.forEach(function(fileName) {
			var destFilePath = path.join(buildDir, fileName.replace('.tpl.html', '.html'));
			var templateContent = fs.readFileSync(path.join(srcDir, fileName), 'utf8');
			var compiled = templateContent.replace('{{version}}', buildVersion);
			mkdirp.sync(path.dirname(destFilePath));
			fs.writeFileSync(destFilePath, compiled);
		})
	})
}


compileHTML();
compileJS();
