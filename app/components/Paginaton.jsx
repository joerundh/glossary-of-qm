"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Pagination({ page, perPage, count, children }) {
    const pathname = usePathname();

    const pages = count ? Math.ceil(count/perPage) : 0;

    const limitParam = new URLSearchParams();
    if (perPage !== 5) {
        limitParam.append("limit", perPage)
    }

    const firstParams = new URLSearchParams([ [ "page", 1], ...limitParam ]);
    const prevParams = new URLSearchParams([ [ "page", page ], ...limitParam ]);
    const nextParams = new URLSearchParams([ [ "page", page + 2], ...limitParam ]);
    const lastParams = new URLSearchParams([ [ "page", pages ], ...limitParam ]);

    return (
        <>
            <div className={"w-full flex flex-row justify-center [border-bottom:_1px_solid_white] p-[5px]"}>
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
                        <span className={"text-gray-500"}>First</span>
                    :
                        <Link href={`${pathname}?${firstParams.toString()}`} className={"hover:underline"}>First</Link>
                }
                {
                    page === 0 ? 
                        <span className={"text-gray-500"}>Prev</span>
                    :
                        <Link href={`${pathname}?${prevParams.toString()}`} className={"hover:underline"}>Prev</Link>
                }
                <span>{page + 1} / {pages}</span>
                {
                    page === pages - 1 ? 
                        <span className={"text-gray-500"}>Next</span>
                    :
                        <Link href={`${pathname}?${nextParams.toString()}`} className={"hover:underline"}>Next</Link>
                }
                {
                    page === pages - 1 ?
                        <span className={"text-gray-500"}>Last</span>
                    :
                        <Link href={`${pathname}?${lastParams.toString()}`} className={"hover:underline"}>Last</Link>
                }
            </div>
        </>
    )
}