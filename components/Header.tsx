import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4">
      <nav>
        <Link href="/">
          <h1 className="font-bold text-lg">Rick and Morty App</h1>
        </Link>
      </nav>   
    </header>
  )
}
