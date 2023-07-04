import { useRouter } from "next/router";

export default function HappyBirthDay() {
  const router = useRouter();
  const { name, msg } = router.query;
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">🎉{`${name} ${msg}`}🎉</h1>
      <a className="text-cyan-500 mt-5" href="https://toss.me/cyantree/1000000">
        돈은 여기로 보내줘
      </a>
    </main>
  );
}
