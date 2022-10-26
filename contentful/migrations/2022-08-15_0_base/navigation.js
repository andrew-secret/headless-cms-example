const navigation = (migration) => {
    const navigation = migration
      .createContentType('navigation')
      .name('Navigation')
      .description('Detached navigation in the context of a site')
      .displayField('title')
  
    navigation
      .createField('title')
      .name('Title')
      .type('Symbol')
      .required(true)
  
    navigation
      .createField('elements')
      .name('Elements')
      .type('Array')
      .items({
        type: 'Link',
        linkType: 'Entry',
        validations: [
          {
            linkContentType: ['page', 'link'],
          },
        ],
      })
  }
  
  module.exports.navigation = navigation