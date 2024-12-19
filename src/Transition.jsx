import { motion } from "framer-motion";
function Transition(OgComponent) {
    return () => (
        <>
            <OgComponent />
                <motion.div
                    className="slide-in slides"
                    initial={{ scale: 0 }}
                    animate={{ scale: 0 }}
                    exit={{ scale: 3 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.4, 0.1, 0.3] }}
                />

                <motion.div
                    className="slide-out slides"
                    initial={{ scale: 3 }}
                    animate={{ scale: 0 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [ 0.3, 0.4, 0.1, 0.3] }}
                />
        </>
    );
}

export default Transition;
