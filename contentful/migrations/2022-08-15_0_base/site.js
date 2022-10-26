const site = (migration) => {
    const site = migration
      .createContentType('site')
      .name('Site')
      .description('Entrypoint for a single site')
      .displayField('title')
  
    site
      .createField('title')
      .name('Title')
      .type('Symbol')
      .required(true)
      .validations([{ unique: true }])
  
    site
      .createField('logo')
      .name('Logo')
      .type('Link')
      .linkType('Entry')
      .validations([
        {
          linkContentType: ['image'],
        },
      ])
  
    site
      .createField('navigation')
      .name('Navigation')
      .type('Link')
      .linkType('Entry')
      .validations([
        {
          linkContentType: ['navigation'],
        },
      ])

    site
      .createField('pages')
      .name('Pages')
      .type('Array')
      .items({
        type: 'Link',
        linkType: 'Entry',
        validations: [
          {
            linkContentType: ['page'],
          },
        ],
      })
  }
  
  module.exports.site = site