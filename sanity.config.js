
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '@/sanity/schemas';

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const title = 'Portable Text Blocks'

const config = {
  projectId: projectId,
  dataset: dataset,
  title: title,
  apiVersion: apiVersion,
  basePath: '/studio',
  plugins: [
    structureTool(),
    visionTool()
  ],
  schema: {
    types: schemaTypes 
  },
  useCdn: false
}

export default config