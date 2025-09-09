import Pagination from "@/app/components/Paginaton";
import index from "@/app/data/entries";
import Link from "next/link";

export default async function Page({ searchParams }) {
    const { page, limit } = await searchParams;

    const listIndex = page ? page - 1 : 0;
    const perPage = limit ? limit : 5;

    
    const count = index.entries.length;
    const pages = Math.ceil(count/perPage);

    const entries = index.entries.sort((objA, objB) => objA.title.localeCompare(objB.title)).slice(listIndex*perPage, (listIndex + 1)*perPage);

    return (
        <>
            <h3 className={"w-full text-lg font-bold"}>All entries</h3>
            <p className={"w-full"}>Browse through all entries in alphabetical order:</p>
            {
                page > pages ?
                    <p className={"w-full"}>Page not found.</p>
                :
                    <Pagination page={listIndex} perPage={perPage} count={count}>
                        <ul className={"w-full p-0 m-0"}>
                        {
                            entries.length ?
                                entries.map((entry, index) => (       
                                    <li className={"w-[95%] m-[5px] ml-[5%] p-0 list-disc"} key={index}>
                                        <Link href={`/entry/${entry.ref}`} className={"font-bold hover:underline"}>{entry.title}</Link>
                                    </li>
                                ))
                            : (
                                <p className={"w-full p-[5px]"}>No entries found.</p>
                            )
                        }
                        </ul>
                    </Pagination>
            }
        </>
    )
}