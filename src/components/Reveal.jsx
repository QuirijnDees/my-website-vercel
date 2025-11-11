import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Reveal({ children, threshold = 0.1, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  if (typeof children === "object" && children !== null) {
    return (
      <motion.div
        ref={ref}
        style={{ display: "contents" }} 
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    );
  }

  return children;
}
