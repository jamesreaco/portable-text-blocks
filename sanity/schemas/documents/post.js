import { FolderIcon } from '@sanity/icons'

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
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageGallery' },
        { type: 'quote' },
        { type: 'quiz' },
        { type: 'gif' },
      ]
    },
  ]
}