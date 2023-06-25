import { motion } from "framer-motion";
import { useRef } from "react";
export default function Modal(modal: ModalProps) {
  const constraintsRef = useRef(null);
  return (
    <motion.div className="w-screen h-screen absolute" ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        className="w-[40vw] h-[30vh] bg-white absolute rounded-2xl z-10 flex flex-col items-center"
      >
        <button
          className="w-4 h-4 bg-red-400 rounded-full absolute left-1 top-1"
          onClick={() => modal.deleteFn()}
        />
        <span className="text-slate-700">Config</span>
      </motion.div>
    </motion.div>
  );
}
interface ModalProps {
  deleteFn: () => void;
}
