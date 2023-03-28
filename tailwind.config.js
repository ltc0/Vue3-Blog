const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
     extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'bounce-slow2': 'bounce 3s linear infinite  fill: var(--grey-1-a7)',
        'bounce-slow3': 'bounce 4s linear infinite',
        'bounce-slow4': 'bounce 5s linear infinite',
       },
     },
   },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
    require("daisyui"),
  ],
}
