import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const width = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      id="scroll-progress"
      style={{ width: `${width}%` }}
    />
  );
}
