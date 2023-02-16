import Link from "next/link";
import styled from "styled-components";

const MainFrame = styled.div`
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  position: fixed;
  width: 100vw;
  line-height: 10vh;
  text-align: center;
  font-size: 4vw;
  border-radius: 1vw 1vw 3vw 3vw;
  height: 10vh;
  background-color: #ffdca9;
`;

export default function Header() {
  return (
    <MainFrame>
      <Link href="/">Cyantr09</Link>
    </MainFrame>
  );
}
