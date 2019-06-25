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
		
	})

	// Load Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-postcss')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-jshint')

	// Register Grunt tasks
	grunt.registerTask('default', ['watch']);
};