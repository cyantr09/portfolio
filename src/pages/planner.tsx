import { useEffect, useState, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import TodoList from "../components/ToDo";

export default function Planner() {
  const [scope, animate] = useAnimate();
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const blurRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isFocused) {
      animate(scope.current, { y: -300 });
    } else {
      animate(scope.current, { y: 0 });
    }
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
    blurRef.current?.blur();
  };
  const addTodo = (text: string) => {
    setTodos([...todos, text]);
  };
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <form
        className="w-screen h-[10vh] flex justify-center z-10"
        ref={scope}
        onSubmit={handleSubmit}
      >
        <motion.input
          type="text"
          placeholder="Write your plans..."
          value={text}
          className="w-[50vw] h-[10vh] text-center rounded-2xl bg-slate-700 placeholder:text-white text-white border-2 outline-none"
          initial={false}
          onFocus={() => {
            setIsFocused(true);
          }}
          onChange={(e) => setText(e.target.value)}
          ref={blurRef}
        />
        <motion.button
          className="w-[10vh] h-[10vh] bg-slate-500 text-slate-100 rounded-2xl
        "
          onClick={() => {
            setIsFocused(false);
          }}
          type="submit"
        >
          ADD
        </motion.button>
      </form>
      <TodoList {...todos} />
    </main>
  );
}
