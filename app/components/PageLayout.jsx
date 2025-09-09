import Link from "next/link";

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