import Link from "next/link";
import './style.css'

export default function Task() {
  return (
    <>
      <div className="task-div bg-black mt-7">
        {/* <Link href='/'>Home</Link>/
        <Link href='#'>Tasks</Link> */}
        <h1 className=" text-2xl"> Complete HTML and CSS courses</h1>
      </div>
    </>
  );
}
