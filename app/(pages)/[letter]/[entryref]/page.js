import categories from "@/app/data/glossary";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    const { ref, entryref } = await params;

    const category = categories.find(cat => cat.ref === ref);
    if (!category) {
        return (
            <>
                <h3>Unknown category</h3>
                <p>Try looking in a different one.</p>
            </>
        )
    }

    // Check if entry reference refers to an entry in the category
    if (!category.entries.find(cat => cat.ref === entryref)) {
        return (
            <>
                <h3>Unknown reference</h3>
                <p>Try looking for an entry with a valid reference.</p>
            </>
        )
    }

    // Fetch data
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/entries/${entryref}.json`);
    if (!res.ok) {
        return (
            <>
                <h3>An error occurred</h3>
                <p>Try again later.</p>
            </>
        )
    }
    const entry = await res.json();

    // Parse content of the entry
    const content = entry.content;
    return (
        <>
            <h3>{content.title}</h3>
        </>
    )
}