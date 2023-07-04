import { motion } from "framer-motion";

import Card from "../components/WorkCard";
export default function Works() {
  return (
    <main className="h-screen flex flex-col items-center font-mono">
      <h1 className="mt-[9vh] text-6xl text-center">My Works</h1>
      <div className="w-full h-[90vh] overflow-auto">
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
          <Card
            title="Planner"
            color="#A8C7D4"
            detail="NextJS로 만들어보는 간단한 TODO앱"
            link="/planner"
          />
          <Card
            title="happyBirthday"
            color="#E8CF8A"
            detail="친구를 위한 생일축하 사이트"
            link="/birthday"
          />
          <Card
            title="GradeCalculator"
            color="#5F6487"
            detail="기말을 말아먹은 후 만든 성적 계산앱"
            link="/gradecalc"
          />
        </motion.div>
      </div>
    </main>
  );
}
