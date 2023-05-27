export default function Card(props: CardProps) {
  return (
    <div className=" w-[60vw] h-[5vh] bg-white">
      <div>{props.title}</div>
    </div>
  );
}
interface CardProps {
  title: string;
}
