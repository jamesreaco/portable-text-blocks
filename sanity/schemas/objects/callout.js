import CalloutPreview from '@/sanity/components/preview/callout-preview'
import { ImagesIcon } from '@sanity/icons'

export default {
  name: 'callout',
  title: 'Callout',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    {
      name: "intent",
      title: "Intent",
      type: "string",
      options: {
        list: [
          { title: "Tip", value: "tip" },
          { title: "Warning", value: "warning" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { 
      heading: 'heading',
      paragraph: 'paragraph',
      intent: 'intent'
    },
  },
  components: {
    preview: CalloutPreview,
  }, 
}