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
                '../../../../web/assets/images/ic_cropfree_24px.svg',
                '../../../../web/assets/images/ic_morehoriz_24px.svg',
                '../../../../web/assets/images/ic_addalert_24px.svg',
                '../../../../web/assets/images/ic_accountcircle_24px.svg',
                '../../../../web/assets/images/ic_minton_24px.svg',
                '../../../../web/assets/images/ic_dashboard_24px.svg',
                '../../../../web/assets/images/ic_UIKit_24px.svg',
                '../../../../web/assets/images/ic_typography_24px.svg',
                '../../../../web/assets/images/ic_search_24px.svg',
                '../../../../web/assets/images/ic_multilevel_24px.svg',
                '../../../../web/assets/images/ic_maps_24px.svg',
                '../../../../web/assets/images/ic_mail_24px.svg',
                '../../../../web/assets/images/ic_extras_24px.svg',
                '../../../../web/assets/images/ic_charts_24px.svg',
                '../../../../web/assets/images/ic_visibility_24px.svg',
                '../../../../web/assets/images/ic_border_24px.svg',
                '../../../../web/assets/images/ic_track_24px.svg',
                '../../../../web/assets/images/ic_timeline_24px.svg',
                '../../../../web/assets/images/ic_pirmas_24px.svg',
                '../../../../web/assets/images/ic_antras_24px.svg',
                '../../../../web/assets/images/ic_trecias_24px.svg',
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
