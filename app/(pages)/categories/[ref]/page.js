import Pagination from "@/app/components/Paginaton";
import index from "@/app/data/entries";
import Link from "next/link";

export default async function Page({ params, searchParams }) {
    const { ref } = await params;
    const { page, limit } = await searchParams;

    const listPage = page ? page - 1 : 0;
    const perPage = limit ? limit : 5;

    const category = index.categories.find(obj => obj.ref === ref);

    if (!category) {
        return (
            <>
                <h3 className={"w-full text-lg font-bold"}>Not found</h3>
                <p className={"w-full"}>No category was found with the reference "{ref}".</p>
                <p className={"w-full"}>
                    <Link href={"/categories"} className={"font-bold hover:underline"}>Go to category list</Link>
                </p>
            </>
        )
    }

    const entries = index.entries.filter(obj => obj.categories.includes(ref)).sort((objA, objB) => objA.title.localeCompare(objB.title));
    const count = entries.length;

    const pages = Math.ceil(count/perPage);

    if (!entries.length) {
        return (
            <>
                <h3 className={"w-full text-lg font-bold"}>No entries found</h3>
                <p className={"w-full"}>There are no entries in the category "{}".</p>
            </>
        )
    }

    return (
        <>
            <h3 className={"w-full text-lg font-bold"}>Entries in the category <i>{category.title}</i></h3>
            <p className={"w-full"}>
                <Link href={"/categories"} className={"underline"}>Go back to categories</Link>
            </p>
            <Pagination count={entries.length} page={listPage} perPage={perPage}>
                {
                    page > pages ?
                        <p className={"w-full"}>Page not found.</p>
                    :
                        <ul className={"w-full m-0 p-0"}>
                            {
                                entries.slice(listPage*perPage, (listPage + 1)*perPage).map((obj, index) => (
                                    <li className={"w-[95%] m-[5px] ml-[5%] p-0 list-disc"} key={index}><Link href={`/entry/${obj.ref}`} className={"font-bold"}>{obj.title}</Link></li>
                                ))
                            }
                        </ul>
                }
            </Pagination>
        </>
    )
}