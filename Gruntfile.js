module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        compass: {
            options: {
                sassDir: 'src/assets/sass',
                imagesDir: 'src/img',
                cssDir: 'web/assets/css',
                force: true
            },
            dist: {
                options: {
                    environment: 'production',
                    noLineComments: true
                }
            },
            dev: {
                options: {
                    noLineComments: true
                }
            },
            watch: {
                options: {
                    noLineComments: true,
                    watch: true
                }
            }
        },
        assemble: {
          options: {
              layoutdir: 'src/templates/layouts',
              layout: ['default.hbs'],
              partials: ['src/templates/partials/{,*/}*.*', 'src/sprites/svg/*'],
              helpers: ['partial'],
              flatten: true
          },
          en: {
              options: {
                  data: ['src/templates/data/en/*.yml',]
              },
              src: ['src/templates/pages/en/*.hbs'],
              dest: './web'
          },
      },
      watch: {
          options: {
          },
          dev: {
              files: ['src/assets/sass/**/*.scss', 'src/templates/**/*.hbs'],
              tasks: ['compass:dev', 'assemble:site']
          },
          handlebars: {
              files: ['src/templates/*/*.hbs', 'src/templates/layouts/*.hbs' ],
              tasks: ['assemble:en']
          }
      },
      svg_sprite: {
        generate: {
            cwd: 'web/assets/vendor/material-design-icons',
            src: [
                '../../../../web/assets/images/ic_menu_24px.svg',
                '../../../../web/assets/images/ic_minton_24px.svg',
                '../../../../web/assets/images/ic_charts_24px.svg',
                '../../../../web/assets/images/ic_paw_24px.svg',
                '../../../../web/assets/images/ic_facebook_24px.svg',
                '../../../../web/assets/images/ic_twitter_24px.svg',
                '../../../../web/assets/images/ic_youtube_24px.svg',
                '../../../../web/assets/images/ic_linkedin_24px.svg',
                '../../../../web/assets/images/ic_pabandymui_24px.svg',
                '../../../../web/assets/images/ic_twitterr_24px.svg',
                '../../../../web/assets/images/ic_linkedinn_24px.svg',
                '../../../../web/assets/images/ic_heart_24px.svg',
                '../../../../web/assets/images/ic_dots_24px.svg',
                '../../../../web/assets/images/ic_mail_24px.svg',
                '../../../../web/assets/images/ic_exit_24px.svg',
            ],
            dest: 'src/sprites',
            options: {
                shape: {
                    id: {
                        generator: function(filename) {
                            var id = filename.match(/ic_(\w+)_\d+/);
                            return id[1];
                        }
                    },
                },
                mode: {
                    symbol: {
                        dest: ''
                    }
                }
            }
        }
    },
    });

    [
      'grunt-contrib-compass',
      'grunt-contrib-watch',
      'grunt-assemble',
      'grunt-svg-sprite',
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('assemble:site', [
    'compass:dist',
    'assemble:en',
]);

    // Default task(s).
    grunt.registerTask('default', [
        'compass:dist',
        'assemble:en',
    ]);

  };
