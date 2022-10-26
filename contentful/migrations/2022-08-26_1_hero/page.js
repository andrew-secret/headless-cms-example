const page = (migration) => {
    const page = migration.editContentType('page')
    page
      .editField('content')
      .name('Content')
      .type('Array')
      .items({
        type: 'Link',
        linkType: 'Entry',
        validations: [
          {
            linkContentType: ['block', 'heroTeaser'],
          },
        ],
      })
  }
  
module.exports.page = page