import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
export default function Modal(modal: ModalProps) {
  const [name, setName] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className=" text-slate-600 w-screen h-screen absolute flex left-5 top-5"
      ref={constraintsRef}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        className="w-[40vw] h-[30vh] bg-slate-300 absolute rounded-2xl z-10 flex flex-col items-center"
      >
        <button
          className="w-4 h-4 bg-red-400 rounded-full absolute left-1 top-1"
          onClick={() => modal.deleteFn()}
        />
        <span className="text-slate-700">Config</span>
        <span className="block mt-5">
          NAME :{" "}
          <input
            type="text"
            className="border-b-2 bg-slate-200 outline-none"
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span className="block mt-5">
          MESSAGE :{" "}
          <input
            type="text"
            className="border-b-2 bg-slate-200 outline-none"
            onChange={(e) => setMsg(e.target.value)}
          />
        </span>
        <div className="mt-5">
          <Link href={{ pathname: `/birthday/${name}`, query: { msg: msg } }}>
            GO
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
interface ModalProps {
  deleteFn: () => void;
}
