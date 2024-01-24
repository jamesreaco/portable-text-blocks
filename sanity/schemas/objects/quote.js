import ColorInput from '@/sanity/components/input/color-input'
import QuotePreview from '@/sanity/components/preview/quote-preview'
import { ImagesIcon } from '@sanity/icons'

export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Enter a hex value, e.g. #000000',
      validation: (Rule) => Rule.required(),
      components: {
        input: ColorInput
      }
    },
    {
      name: "theme",
      title: "Theme",
      type: "string",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    select: { 
      quote: 'quote',
      author: 'author',
      theme: 'theme',
      backgroundColor: 'backgroundColor',
    },
  },
  components: {
    preview: QuotePreview,
  }, 
}