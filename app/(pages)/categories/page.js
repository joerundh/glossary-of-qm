import categories from "@/app/data/glossary"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <h3 className={"w-full text-md font-bold"}>Categories</h3>
            <p className={"w-full text-sm"}>Click a link below to browse through the entries in a section of your choice:</p>
            {
                categories.length ?
                    <div className={"p-10px flex flex-row flex-wrap justify-between"}>
                    {
                        categories.map((category, index) => (
                            <Link href={`/${category.ref}`} className={"hover:underline"} key={index}>{category.title}</Link>
                        ))
                    }
                    </div>
                :
                    <p>No categories found.</p>
        }
        </>
    )
}