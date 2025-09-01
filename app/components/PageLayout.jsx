import Link from "next/link";

export default function PageLayout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href={"/"} className={"cursor-pointer hover:underline"}>Home</Link>
                    <Link href={"/about"} className={"cursor-pointer hover:underline"}>About</Link>
                    <Link href={"/courses"} className={"cursor-pointer hover:underline"}>Courses</Link>
                    <Link href={"/facts"} className={"cursor-pointer hover:underline"}>Facts</Link>
                </nav>
            </header>
            <main>
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