module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        banner:'/*<%= grunt.template.today("yyyy-mm-dd") %>-<%= pkg.author%>*/',
        // tasks
        ejs: {
        'script/view.jst.js': 'view/**/*.ejs'
        },
        
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            wzs: {
                files: {
                    'dest/wenzisha.0.3.js': ['script/view.jst.js', 'script/zepto.js', 'script/slider.js', 'script/flipsnap.js', 'init.0.3.js']
                }
            }
        }
    });
  
  
grunt.registerMultiTask('ejs', 'Compile EJS templates into JST.', function() {

    var options = {
        client: true,
        open: "<%",
        close: "%>"
    };

    grunt.verbose.writeflags(options, 'Options');

    var srcFiles;
    var taskOutput;

    this.files.forEach(function(file) {
        srcFiles = grunt.file.expand(file.src);
    
        taskOutput = [];

        srcFiles.forEach(function(srcFile) {
            taskOutput.push(compileEjs(srcFile, options));
        });

        if (taskOutput.length > 0) {
            grunt.file.write(file.dest, taskOutput.join('\n'));
            grunt.log.writeln('File ' + file.dest.cyan + ' created.');
        }
    });
});

function compileEjs (srcFile, options) {
    options = grunt.util._.extend({filename: srcFile}, options);
    var srcCode = grunt.file.read(srcFile);
    var jstName = srcFile.replace(/\.jst|\.ejs/ig, '');
    
    var prefix = "window.JST = window.JST || {};" +
        "window.JST[\""+jstName+"\"] = ";
    
    try {
        var fn = require('ejs').compile(srcCode, options);
        return prefix + fn.toString().replace(/anonymous/, '') + ';';
    } catch (e) {
        grunt.log.error(e);
        grunt.fail.warn('EJS failed to compile.');
    }
};

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['ejs', 'uglify:wzs']);

};