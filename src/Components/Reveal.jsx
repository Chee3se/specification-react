import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation} from "framer-motion";

export default function Reveal({ children, className, type = "left" }) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        } else {
            mainControls.start("hidden");
            slideControls.start("hidden");
        }
    }, [isInView, mainControls, slideControls]);

    const animations = {
        left: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
        right: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
        pop: { hidden: { opacity: 0, scale: 0, x: 0, y: -150 }, visible: { opacity: 1, scale: 1, y: 0 } },
    };

    return (
        <div ref={ref} className="overflow-hidden relative w-fit">
            <motion.div
                className={className}
                variants={animations[type]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {children}
            </motion.div>
        </div>
    );
}