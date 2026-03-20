import Image from "next/image";
import Login from "./login/page";
import SignUp from "./signup/page";
import Navbar from "./navbar/page";
export default function Home() {
  return (
    <>
    <Navbar/>
    <SignUp/>
    </>
  );
}
