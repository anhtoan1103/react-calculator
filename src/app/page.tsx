import Image from "next/image";


function MyButton() {
  return (
    <button>This is my button</button>
  );
}
export default function Home() {
  return (
    <div className="container">
      <div className="calculator">
        <MyButton />
        <div>hehe</div>
      </div>
    </div>

  );
}
