import useScrollReveal from '../hooks/useScrollReveal';

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, isVisible] = useScrollReveal();

  const directionClass = direction === 'left' ? 'from-left' : direction === 'right' ? 'from-right' : '';

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
