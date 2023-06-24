import { motion } from "framer-motion";

import Card from "./components/WorkCard";
export default function Works() {
  return (
    <main className="h-screen flex justify-center font-mono">
      <div className="mt-[9vh] w-[90vw] h-[90vh] overflow-auto">
        <h1 className="text-6xl text-center">My Works</h1>
        <motion.div
          className=" flex justify-center items-center flex-col lg:flex-row"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              staggerChildren: 1,
            },
          }}
        >
          <Card title="..." color="#A8C7D4" />
          <Card title="..." color="#E8CF8A" />
          <Card title="..." color="#5F6487" />
        </motion.div>
      </div>
    </main>
  );
}
