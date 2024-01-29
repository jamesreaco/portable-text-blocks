import { FolderIcon } from '@sanity/icons'
import link from '../objects/link'

export default {
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: FolderIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { 
          type: 'block',
          marks: {
            annotations: [
              link
            ]
          },
        }, 
        { type: 'imageGallery' },
        { type: 'quote' },
        { type: 'quiz' },
        { type: 'gif' },
        { type: 'callout' },
      ]
    },
  ]
}