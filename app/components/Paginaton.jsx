"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Pagination({ page, perPage, count, children }) {
    const pathname = usePathname();

    const pages = count ? Math.ceil(count/perPage) : 0;

    return (
        <>
            <div className={"w-full p-[10px] flex flex-row justify-end [border-bottom:_1px_solid_white]"}>
                {
                    count ?
                        <span>Showing results {page*perPage + 1} - {page === pages - 1 ? count : (page + 1)*perPage} out of {count}</span>
                    :
                        <span>No results.</span>
                }
            </div>
            {
                children
            }
            <div className={"w-full p-[10px] flex flex-row justify-center gap-[10px] [border-top:_1px_solid_white]"}>
                {
                    page === 0 ? 
                        <span>First</span>
                    :
                        <Link href={``}>First</Link>
                }
                {
                    page === 0 ? 
                        <span>Prev</span>
                    :
                        <Link href={""}>Prev</Link>
                }
                <span>{page + 1} / {pages}</span>
                {
                    page === pages - 1 ? 
                        <span>Next</span>
                    :
                        <Link href={""}>Next</Link>
                }
                {
                    page === pages - 1 ?
                        <span>Last</span>
                    :
                        <Link href={""}>Last</Link>
                }
            </div>
        </>
    )
}