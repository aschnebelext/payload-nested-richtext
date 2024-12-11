import type { CollectionConfig } from 'payload'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Quiz } from '@/blocks/Quiz'

export const Lesson: CollectionConfig = {
  slug: 'lessons',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              Quiz
            ],
          })
        ]
      }),
    }
  ],
}
