import { useEffect, useRef, useState } from 'react';

export function CountUp({ count, suffix = '' }) {
  const ref = useRef(null);
  const [value, setValue] = useState(`${count}${suffix}`);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const dur = 1600;
            const start = performance.now();

            function tick(now) {
              const p = Math.min((now - start) / dur, 1);
              const ease = 1 - Math.pow(1 - p, 3);
              const val =
                count < 10 ? (count * ease).toFixed(0) : Math.round(count * ease);
              setValue(val + suffix);
              if (p < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, suffix]);

  return (
    <div className="stat-num" ref={ref}>
      {value}
    </div>
  );
}
