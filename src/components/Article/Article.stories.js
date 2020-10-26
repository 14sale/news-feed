import React from 'react'
import Article from './Article'

export default {
  title: 'Article',
  component: Article,
  argTypes: {
    backFromPreviewText: { control: 'text' },
    backFromPreview: { action: 'clicked' },
    title: { control: 'text' },
  },
}

const data = {
  urlToImage: 'https://www.nbcsports.com/sites/rsnunited/files/gallery/hero/newton_cam_usati.jpg',
  title: '2020 NFL Power Rankings Week 8: Patriots plummet after blowout loss to 49ers - Comcast SportsNet New England',
  publishedAt: '2020-10-26T04:22:25Z',
  published: 'October 1, 2020',
  author: 'John Doe',
  content:
      'There was no shortage of exciting games in Week 7 of the 2020 NFL season, though "exciting" probably isn\'t the word New England Patriots fans would use. The Patriots fell to 2-4 on the campaign after... [+532 chars]',
}

const Template = args => <Article {...args} />

export const primary = Template.bind({})
primary.args = {
  backFromPreviewText: 'Back to news',
  ...data,
}
