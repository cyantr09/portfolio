import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
export default function Card(props: CardProps) {
  let [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={props.link}>
      <motion.div
        className=" w-[60vw] lg:w-[30vw] h-[26vh] dark:text-slate-700 text-white rounded-lg m-3 flex"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "string" }}
        style={{ background: props.color }}
      >
        <h3 className="w-full text-center self-center text-2xl">
          {isHovered ? props.detail : props.title}
        </h3>
      </motion.div>
    </Link>
  );
}
interface CardProps {
  title: string;
  color: string;
  detail: string;
  link: string;
}
