import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center cursor-not-allowed">
      <div className="flex flex-col">
        <h1 className="font-mono text-center text-[10vw] lg:text-[5vw] self-center">
          Portfolio
        </h1>
        <Link href={"/works"}>
          <div className="w-[60vw] lg:w-[30vw] h-[5vh] rounded-xl bg-slate-700 dark:bg-white text-white dark:text-slate-500 flex justify-center items-center self-center cursor-zoom-in">
            <span>Let&apos;s begin.</span>
          </div>
        </Link>
      </div>
    </main>
  );
}
