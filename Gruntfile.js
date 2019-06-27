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
			dist: {
				options: {
					sourcemap: 'none',
				},
				files: [{
					expand: true,
					cwd: "sass/css",
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
			scss_base: {
				files: ['sass/**/*.scss'],
				tasks: ['sass'],
				options: {

					spawn:false,
					event:['all']
				},
			},
			templates: {
				files: ['components/**/*.html'],
				tasks: ['htmlbuild'],
				options: {

					spawn:false,
					event:['all']
				},
			},
		},
		htmlbuild: {
			fulldemo: {
				src: 'demos/demo-templates/*.html',
				dest: 'demos/builds/',
				options: {
					beautify: true,
					relative: true,
					basePath: false,
					sections: {
						head: {
							default:'demos/demo-parts/head-default.html',
						},
						layout: {
							wsu_global_header: 'components/headers/wsu-global-header/wsu-global-header.html',
						},
						navigation: {
							wsu_vertical_navigation: 'components/navigation/wsu-vertical-navigation/wsu-vertical-navigation.html',
						},
						footer: {
							default:'demos/demo-parts/footer-default.html',
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