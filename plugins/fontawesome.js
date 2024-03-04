import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faSplat } from './public/customIcon'



// this is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

library.add (fab)
library.add (far)
library.add (fas)
library.add(faSplat)

export default defineNuxtPlugin (nuxtApp => {
  nuxtApp.vueApp.component ('FontAwesomeIcon', FontAwesomeIcon, {})
})