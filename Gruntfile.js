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