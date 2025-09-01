export default function ModalBox({ children }) {
    return (
        <div className={`absolute p-[3px] bg-black [border:_1px_solid_white] cursor-pointer hover:[border-bottom:_1px_dashed_white] max-w-[150px] flex flex-row gap-[5px]`}>
            {
                children
            }
        </div>
    )
}