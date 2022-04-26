const { css, cache } = require('@emotion/css')

const className = css({
  label: 'root',
  color: 'red',
})

console.log(className)

console.log(cache)
