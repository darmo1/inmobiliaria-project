import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
// import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  title: "studio - inmobiliaria",
  projectId: "68f3de3x",
  dataset: "production",
  plugins: [deskTool(), 
  visionTool()],
  schema: {
    types: schemas,
  },
});