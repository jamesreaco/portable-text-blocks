import { LinkIcon } from '@sanity/icons'

export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  icon: LinkIcon,
  fields: [
    {
      name: 'href',
      type: 'string',
      title: 'URL'
    },
    {
      title: 'Open in new tab',
      name: 'openNewTab',
      type: 'boolean'
    }
  ]
}