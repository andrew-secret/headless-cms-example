import styles from './typography.module.css';

export const Typography = ({
  variant = 'body',
  level,
  color = 'darkblue',
  alignment = 'left',
  children,
  className,
  ...props
}) => {
  const colorClasses = [
    color === 'darkblue' && 'text-cap-darkblue',
    color === 'lightblue' && 'text-cap-lightblue',
    color === 'orange' && 'text-cap-orange',
    color === 'beige' && 'text-cap-beige',
    color === 'white' && 'text-white',
    color === 'black' && 'text-black',
  ]
    .filter(Boolean)
    .join(' ');

  const heading1Classes = [
    'font-extrabold',
    'text-xl lg:text-2xl',
    'uppercase',
    'tracking-wide',
  ].join(' ');

  const heading2Classes = [
    'font-extrabold',
    'text-2xl lg:text-4xl',
    'uppercase',
    'tracking-wide',
  ].join(' ');

  const titleClasses = [
    'font-extrabold',
    'text-4xl lg:text-7xl',
    'ml-[-3px]',
    'mb-4',
    'uppercase',
    'tracking-wide',
    'leading-none',
  ].join(' ');

  const bodyClasses = ['font-medium', 'text-xl'].join(' ');
  const bodySmallClasses = ['font-medium', 'text-base', 'leading-relaxed'].join(
    ' '
  );
  const bodyTinyClasses = ['font-medium', 'text-sm'].join(' ');

  const alignmentClasses = [
    alignment === 'left' && 'text-left',
    alignment === 'right' && 'text-right',
    alignment === 'center' && 'text-center',
  ]
    .filter(Boolean)
    .join(' ');

  const classes = [
    styles.typography,
    'antialiased',
    variant === 'title' && titleClasses,
    variant === 'heading1' && heading1Classes,
    variant === 'heading2' && heading2Classes,
    variant === 'body' && bodyClasses,
    variant === 'bodySmall' && bodySmallClasses,
    variant === 'bodyTiny' && bodyTinyClasses,
    colorClasses,
    alignmentClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const levelMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    abbr: 'abbr',
  };

  const variantsMapping = {
    title: level ? levelMapping[level] : 'h1',
    heading1: level ? levelMapping[level] : 'h1',
    heading2: level ? levelMapping[level] : 'h2',
    heading3: level ? levelMapping[level] : 'h3',
    body: level ? levelMapping[level] : 'p',
    bodySmall: level ? levelMapping[level] : 'p',
    bodyTiny: level ? levelMapping[level] : 'p',
  };

  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <>
      <Component className={classes} {...props}>
        {children}
      </Component>
    </>
  );
};
