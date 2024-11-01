import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'tulsi-backend',
  projectId: '3zeldxq2',
  dataset: 'production',
  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],
  schema: {
    types: schemaTypes,
  },
})

