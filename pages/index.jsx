import Link from "next/link";

const Index = () => (
  <div>
    <h1>SSR Magic</h1>
    <Link href="/about">
      <button>about</button>
    </Link>
  </div>
);

export default Index;
