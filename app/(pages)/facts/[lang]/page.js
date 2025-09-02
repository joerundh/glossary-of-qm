import sections from "@/app/data/sections"

export default async function Layout({ children, params }) {
    const { page, limit } = await params;

    const index = page ? page - 1 : 0;
    const perPage = limit ? limit : 5;
    const count = sections.length;

    return (
        <>
            <div>
                <h4 className={"w-full font-bold"}>Sections</h4>
                <div className={"w-full flex flex-row justify-between"}>

                </div>
            </div>
            <div>

            </div>
        </>
    )
}