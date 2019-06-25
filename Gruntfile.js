// Load Grunt
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			components: {
				options: {
					sourcemap: 'none',
				},
				files: [{
					expand: true,
					cwd: "components",
					src: ["**/*.scss"],
					dest: "components",
					ext: ".css",
				}]
			},
			prod: {
				options: {
					sourcemap: 'none',
				},
				files: [{
					expand: true,
					cwd: "css",
					src: ["**/*.scss"],
					dest: "css",
					ext: ".css",
				}]
			},
		},
		watch: {
			scss: {
				files: ['components/**/*.scss'],
				tasks: ['sass'],
				options: {

					spawn:false,
					event:['all']
				},
			},
		},
		htmlbuild: {
			fulldemo: {
				/*cwd: 'demo-builds',*/
				src: 'demo-builds/*.html',
				dest: 'demos/',
				options: {
					beautify: true,
					relative: true,
					basePath: false,
					sections: {
						head: {
							default:'demo-parts/head-default.html',
						},
						layout: {
							wsu_global_header: 'components/headers/wsu-global-header/wsu-global-header.html',
						}
					},
					data: {
						// Data to pass to templates
						version: "0.0.1",
						title: "test",
					},
				}
			}
		}
		
	})

	// Load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-postcss')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-jshint')
	grunt.loadNpmTasks('grunt-html-build');

	// Register Grunt tasks
	grunt.registerTask('default', ['watch']);
};