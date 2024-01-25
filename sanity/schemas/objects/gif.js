import GifPreview from '@/sanity/components/preview/gif-preview'
import { MdOutlineGif } from "react-icons/md";

export default {
  name: 'gif',
  title: 'GIF',
  type: 'object',
  icon: MdOutlineGif,
  fields: [
    {
      name: 'gif',
      title: 'GIF',
      type: 'image',
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          }
        ]
    }
  ],
  preview: {
    select: { 
      gif: 'gif',
    },
  },
  components: {
    preview: GifPreview,
  }, 
}