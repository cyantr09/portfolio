import { motion } from "framer-motion";

export default function Card(props: CardProps) {
  return (
    <motion.div
      className=" w-[80vw] lg:w-[40vw] h-[30vh] dark:text-slate-700 text-white rounded-lg m-3"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      style={{ background: props.color }}
    >
      <span>{props.title}</span>
    </motion.div>
  );
}
interface CardProps {
  title: string;
  color: string;
}
