const block = (migration) => {
    const block = migration
      .createContentType('block')
      .name('Block')
      .description('Single content block')
      .displayField('headline')
  
    block
      .createField('headline')
      .name('Headline')
      .type('Symbol')
      .required(true)
  
    block
      .createField('subheadline')
      .name('Subheadline')
      .type('Symbol')
  
    block
      .createField('content')
      .name('Content')
      .type('RichText')
      .validations([
        {
          enabledMarks: ['bold', 'italic'],
          message: 'Only bold and italic marks are allowed',
        },
        {
          enabledNodeTypes: ['heading-2', 'heading-3', 'heading-4', 'embedded-entry-block', 'embedded-entry-inline'],
          message: 'Only heading 2, heading 3, heading 4, embedded entry block, embedded entry inline nodes are allowed',
        },
        {
          nodes: {
            'embedded-entry-inline': [
              {
                linkContentType: ['link'],
                message: 'Only image content type is allowed',
              },
            ],
          },
        },
      ])
  }
  
  module.exports.block = block