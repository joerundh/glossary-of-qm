import Link from "next/link";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export default function PageLayout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href={"/"} className={"cursor-pointer hover:underline"} title={"Home"}>Home</Link>
                    <Link href={"/categories"} className={"cursor-pointer hover:underline"} title={"Categories"}>Categories</Link>
                    <Link href={"/all"} className={"cursor-pointer hover:underline"} title={"All entries"}>All entries</Link>
                    <Link href={"/about"} className={"cursor-pointer hover:underline"} title={"About"}>About</Link>
                </nav>
                <div>
                    <h1 className={`w-[90%] mx-auto mt-[40px] italic text-xl ${quicksand.variable}`} style={{ textShadow: "var(--outline)" }}>Glossary of quantum mechanics</h1>
                    <h2 className={"w-[80%] mx-auto mb-[20px] italic"} style={{ textShadow: "var(--outline)" }}>- Of all the things one could construct, we're doing this here.</h2>
                </div>
            </header>
            <main className={"w-full flex flex-col gap-[10px] p-[10px] items-stretch"}>
                {
                    children
                }
            </main>
            <footer>
                <p>2025 No rights reserved</p>
            </footer>
        </>
    )
}