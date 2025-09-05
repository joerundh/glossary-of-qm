import categories from "@/app/data/glossary";
import Link from "next/link";

export default async function Layout({ children, params }) {
    const { ref } = await params;

    return (
        <>
            <div className={"flex flex-col gap-[5px] p-[5px]"}>
                <h4 className={"w-full font-bold text-sm"}>Categories</h4>
                <div className={"w-full flex flex-row flex-flow justify-center text-xs"}>
                {
                    categories.map((category, index) => (
                        category.ref === ref ?
                            <span className={"font-bold"} key={index}>{category.title}</span>
                        :
                            <Link href={`/${category.ref}`} className={"cursor-pointer hover:underline"} key={index}>{category.title}</Link>
                    ))
                }
                </div>
            </div>
            {
                children
            }
        </>
    )
}