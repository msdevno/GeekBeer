/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    var sourceFiles = [
        '**/*.js',
        '!wwwroot/**/*.js',
        '!node_modules/**/*.js',
        '!bower_components/**/*.js'
    ];
 
    var filesToCopy = [
        '**/*.html',
        'fonts/**/*.*',
        'styles/**/*.*',
        'images/**/*.*',
        'jspm_packages/**/*.*',
        'node_modules/**/*.*',
        'bower_components/**/*.*'
    ];
    
    var outputRoot = "../wwwroot/";
 
    grunt.initConfig({
    });
 
 
    var chokidar = require('chokidar');
    var babel = require('babel');
    var babelOptions = {
        sourceRoot: './',
        sourceMaps: 'inline',
        optional: [
            "es7.decorators"
        ]
    };
 
    grunt.registerTask("watch", "", function () {
        var done = this.async();
        grunt.log.writeln("Starting watch...");
        var watcher = chokidar.watch('.', {
            persistent: true,
            ignored: 'wwwroot/**/*',
            ignoreInitial: true
        });
        grunt.log.writeln("Watching");
 
        function handleSourceFile(path) {
            grunt.log.writeln("Handling : " + path);
            var fileContent = grunt.file.read(path);
            try {
                babelOptions.sourceFileName = path;
                var transformed = babel.transform(fileContent, babelOptions);
                grunt.file.write(outputRoot + path, transformed.code);
                grunt.log.writeln("Handled : " + path);
            } catch (ex) {
                grunt.log.writeln("Error : " + ex);
            }
        }
 
        function handleCopyingFile(path) {
            grunt.log.writeln("Copy : " + path);
            grunt.file.copy(path, outputRoot + path);
            grunt.log.writeln("Copied : " + path);
        }
 
        function newOrChanged(path) {
            if (grunt.file.isMatch(sourceFiles, path)) handleSourceFile(path);
            if (grunt.file.isMatch(filesToCopy, path)) handleCopyingFile(path);
        }
 
        function deleted(path) {
            grunt.log.writeln("Delete : " + path);
            grunt.file.delete(outputRoot + path);
            grunt.log.writeln("Deleted : " + path);
        }
 
        watcher
            .on("add", newOrChanged)
            .on("change", newOrChanged)
            .on("unlink", deleted);
    });
 
    grunt.registerTask('monitor', ['watch']);
};