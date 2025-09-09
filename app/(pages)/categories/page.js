import index from "@/app/data/entries";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <h3 className={"w-full text-lg font-bold"}>Categories</h3>
            <p className={"w-full"}>Pick a category below to select entries:</p>
            {
                index.categories.length ? 
                    <ul className={"w-full m-0 p-0"}>
                        {
                            index.categories.map((obj, index) => (
                                <li className={"w-full m-[5px] p-0"} key={index}><Link href={`/categories/${obj.ref}`} className={"font-bold hover:underline"}>{obj.title}</Link></li>
                            ))
                        }
                    </ul>
                :
                    <p className={"w-full"}>No categories found.</p>
            }
        </>
    )
}