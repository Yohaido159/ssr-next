import Link from "next/link";
import Image from "../components/Image/Image";

const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <button>Home</button>
    </Link>
    <Image />
    <Link href="/robot">
      <button>Robot</button>
    </Link>
  </div>
);

export default About;
