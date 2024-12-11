import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Quiz: Block = {
  slug: 'quiz',
  fields: [
    {
      name: 'question',
      label: 'Question',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
      admin: {
        description: 'The question that the user will be asked'
      }
    },
    {
      name: 'options',
      type: 'array',
      fields: [
        {
          name: 'option',
          label: 'Option',
          type: 'richText',
          required: true,
          editor: lexicalEditor(),
          admin: {
            description: 'A possible answer to the question'
          }
        },
        {
          name: 'explanation',
          type: 'richText',
          required: true,
          editor: lexicalEditor(),
          admin: {
            description: 'Explanation for the answer'
          }
        },
        {
          name: 'isCorrect',
          label: 'Correct',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Is this the correct answer?'
          }
        },
      ],
      maxRows: 4
    }
  ]
}