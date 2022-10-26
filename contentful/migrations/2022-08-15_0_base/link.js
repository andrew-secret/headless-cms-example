const link = (migration) => {
    const link = migration
      .createContentType('link')
      .name('Link')
      .description('External link')
      .displayField('title')
  
    link
      .createField('title')
      .name('Title')
      .type('Symbol')
      .required(true)
  
    link
      .createField('url')
      .name('URL')
      .type('Symbol')
      .required(true)
      .validations([
        {
          regexp: {
            pattern: '^(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
            flags: null,
          },
          message: 'Please enter a valid URL',
        },
      ])
  }
  
  module.exports.link = link