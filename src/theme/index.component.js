const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme}) {
    addComponents({
        '.tag': {
            borderRadius: theme('borderRadius.lg'),
            //.tag-text
            "&-text__local, &-text__development"
            //.tag-text
            '&-text':{
                color: theme('colors.white'),
                fontFamily: theme('fontFamily.ubuntu'),

                //.tag-text__local
                '&__local':{
                    backgroundColor: theme('colors.blue'),
                },

                '&__development':{
                    backgroundColor: theme('colors.green'),
                },

                '&__staging': {
                    backgroundColor: theme('colors.yellow'),
                    color: theme('colors.primary'),
                },

                '&__production': {
                    backgroundColor: theme('colors.red'),
                },
            },
        },
    })
})