import { defineConfig, presetTypography, presetUno } from "unocss"

export default defineConfig({
    presets:[
        presetTypography(),
        presetUno()
    ],
    content:{
        pipeline:{
            include:[/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md']
        }
    }
})