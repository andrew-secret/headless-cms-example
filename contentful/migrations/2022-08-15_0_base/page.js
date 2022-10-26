const page = (migration) => {
    const page = migration
      .createContentType('page')
      .name('Page')
      .description('Single page in the context of a site')
      .displayField('slug')

    page
        .createField('slug')
        .name('Slug')
        .type('Symbol')
        .required(true)
        .validations([{ unique: true }])
  
    page
      .createField('title')
      .name('Title')
      .type('Symbol')
      .required(true)
      .validations([{ unique: true }])
  
    page
      .createField('content')
      .name('Content')
      .type('Array')
      .items({
        type: 'Link',
        linkType: 'Entry',
        validations: [
          {
            linkContentType: ['block'],
          },
        ],
      })
  }
  
  module.exports.page = page