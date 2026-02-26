import { useEffect, useState } from 'react';

/**
 * useParallax 훅
 * - 마우스 이동에 따라 1~3px 미세한 패럴랙스 이동값 반환
 *
 * @param {number} intensity - 이동 강도 배수 [Optional, 기본값: 0.008]
 * @returns {{ x, y }} - 픽셀 단위 이동값
 *
 * Example usage:
 * const { x, y } = useParallax();
 * <Box sx={{ transform: `translate(${x}px, ${y}px)` }} />
 */
function useParallax(intensity = 0.008) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) * intensity;
      const dy = (e.clientY - cy) * intensity;
      setPos({ x: Math.max(-3, Math.min(3, dx)), y: Math.max(-3, Math.min(3, dy)) });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return pos;
}

export default useParallax;
