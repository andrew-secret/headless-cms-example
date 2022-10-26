const image = (migration) => {
    const image = migration
      .createContentType('image')
      .name('Image')
      .description('Image wrapper to add meta description to media asset')
      .displayField('title')
  
    image
      .createField('title')
      .name('Title')
      .type('Symbol')
      .required(true)
  
    image
      .createField('altText')
      .name('Alt Text')
      .type('Symbol')
      .required(true)
  
    image
      .createField('image')
      .name('image')
      .type('Link')
      .linkType('Asset')
      .required(true)
      .validations([
        {
          linkMimetypeGroup: ['image'],
        },
      ])
  }
  
  module.exports.image = image