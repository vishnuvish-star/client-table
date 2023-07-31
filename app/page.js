import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Welcome!</p>
      <h2>Please Click </h2>
      <Link href={"/client"} className="text-blue-400">
        Go to Client Page
      </Link>
      <Link href={"/table"} className="text-blue-400">
        Go to Table Page
      </Link>
    </div>
  );
}
