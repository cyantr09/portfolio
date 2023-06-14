import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center cursor-not-allowed">
      <div className="flex flex-col">
        <motion.h1
          className="font-mono text-center text-[10vw] lg:text-[5vw] self-center"
          initial={{ scaleX: 0.2 }}
          animate={{ scaleX: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 8,
          }}
        >
          Portfolio
        </motion.h1>
        <Link href={"/works"}>
          <motion.div
            className="w-[60vw] lg:w-[30vw] h-[5vh] rounded-xl bg-slate-700 dark:bg-white text-white dark:text-slate-500 flex justify-center items-center self-center cursor-zoom-in"
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
            }}
          >
            <span>Let&apos;s begin.</span>
          </motion.div>
        </Link>
      </div>
    </main>
  );
}
