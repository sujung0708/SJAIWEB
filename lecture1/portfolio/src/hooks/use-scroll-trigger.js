import { useEffect, useRef, useState } from 'react';

/**
 * useScrollTrigger 훅
 * - 요소가 뷰포트에 진입하면 visible 상태를 true로 변경
 *
 * @param {object} options - IntersectionObserver 옵션 [Optional]
 * @returns {{ ref, isVisible }} - ref를 대상 요소에 연결, isVisible로 상태 확인
 *
 * Example usage:
 * const { ref, isVisible } = useScrollTrigger();
 * <div ref={ref} className={isVisible ? 'fade-up visible' : 'fade-up'} />
 */
function useScrollTrigger(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default useScrollTrigger;
