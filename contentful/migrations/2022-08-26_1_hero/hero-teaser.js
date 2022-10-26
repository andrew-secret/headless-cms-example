const heroTeaser = (migration) => {
    const heroTeaser = migration
      .createContentType('heroTeaser')
      .name('HeroTeaser')
      .description('Hero Teaser')
      .displayField('headline')
  
    heroTeaser
      .createField('headline')
      .name('Headline')
      .type('Symbol')
      .required(true)
  
    heroTeaser
      .createField('subheadline')
      .name('Subheadline')
      .type('Symbol')

    heroTeaser
      .createField('cta')
      .name('CTA')
      .type('Link')
      .linkType('Entry')
      .validations([
        {
          linkContentType: ['page', 'link'],
        },
      ])

    heroTeaser
      .createField('image')
      .name('Image')
      .type('Link')
      .linkType('Entry')
      .validations([
        {
          linkContentType: ['image'],
        },
      ])
  
  }
  
  module.exports.heroTeaser = heroTeaser