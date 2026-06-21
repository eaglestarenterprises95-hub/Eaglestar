export function Reveal({ children, direction = 'up', delay, className = '', as: Tag = 'div', ...props }) {
  const delayAttr = delay ? { 'data-delay': String(delay) } : {};

  return (
    <Tag
      className={className}
      data-reveal={direction}
      {...delayAttr}
      {...props}
    >
      {children}
    </Tag>
  );
}
