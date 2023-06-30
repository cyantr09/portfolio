import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
export default function Modal(modal: ModalProps) {
  const constraintsRef = useRef(null);
  return (
    <motion.div className="w-screen h-screen absolute" ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        className="w-[40vw] h-[30vh] bg-white absolute rounded-2xl z-10 flex flex-col"
      >
        <button
          className="w-4 h-4 bg-red-400 rounded-full absolute left-1 top-1"
          onClick={() => modal.deleteFn()}
        />
        <span className="text-slate-700 self-center">Config</span>
        <span className="text-left block ms-4 mt-5">
          NAME : <input type="text" className=" border-b-2" />
        </span>
        <Link href={`/birthday/이정배`}>GO</Link>
      </motion.div>
    </motion.div>
  );
}
interface ModalProps {
  deleteFn: () => void;
}
