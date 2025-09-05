import Pagination from "@/app/components/Paginaton";
import categories from "@/app/data/glossary";
import Link from "next/link";

export default async function Page({ params, searchParams }) {
    const { ref } = await params;

    const { page, limit } = await searchParams;

    const index = page ? page - 1 : 0;
    const perPage = limit ? limit : 5;

    // Fetch the category
    const category = categories.find(cat => cat.ref === ref);
    const count = category.entries.length || 0;

    return (
        <>
            <h3 className={"center font-bold text-lg"}>Entries under category "{category.title}"</h3>
            <Pagination page={page ? page - 1 : 0} perPage={limit ? limit : 5} count={category.entries.length}>
                {
                    category.entries.length ?
                        category.entries.slice(index*perPage, (index + 1)*perPage).map(entry => {
                            <>
                                <div className={"flex flex-col gap-[10px] [border:_1px_solid_#606060] "}>
                                    <Link href={`/${ref}/${entry.ref}`}><h4 className={"font-bold"}>{entry.title}</h4></Link>
                                    <p>{entry.description}</p>
                                </div>
                            </>
                        })
                    :
                        <p>No entries exist in this category.</p>
                }
            </Pagination>
        </>
    )
}