import index from '@/app/data/entries';
import fs from 'fs';
import path from 'path';
import parseParagraph from "@/app/tools/parseParagraph";
import { Fragment } from "react";
import Link from 'next/link';

export default async function Page({ params }) {
    const { ref } = await params;

    const indexEntry = index.entries.find(obj => obj.ref === ref);
    if (!indexEntry) {
        return (
            <>
                <h3 className={"w-full text-lg font-bold"}>Bad reference</h3>
                <p className={"w-full"}>The content was not found.</p>
            </>
        )
    }

    const filePath = path.join(process.cwd(), `app/data/entries/${indexEntry.filename}`);
    const file = fs.readFileSync(filePath, "utf8");
    
    const entry = JSON.parse(file);

    const categories = index.categories.filter(obj => indexEntry.categories.includes(obj.ref));

    // Parse content of the entry
    return (
        <>
            <h3 className={"w-full text-lg font-bold"}>{entry.title}</h3>
            {
                entry.contents.map((obj, index) => (
                    <Fragment key={index}>
                        {
                            parseParagraph(obj)
                        }
                    </Fragment>
                ))
            }
            <h4 className={"w-full font-bold"}>Categories:</h4>
            {
                categories.length ?
                    <ul className={"w-full p-0 m-0"}>
                        {
                            categories.map((obj, index) => (
                                <li className={"w-full"} key={index}>
                                    <Link href={`/categories/${obj.ref}`} className={"hover:underline"}>{obj.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                :
                    <p className={"w-full"}>This entry is not put into any categories.</p>
            }
        </>
    )
}