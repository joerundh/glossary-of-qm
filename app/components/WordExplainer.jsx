import Word from "./Word";
import irishWordlist from "../data/irish/wordlist";

/*
Import a wordlist from a file, in which all words that appear in a text
are interpreted and classified in detail, and create a Word component
for each
*/

export default function WordExplainer({ words }) {
    return (
        <div className={"rounded-md [border:_1px_solid_black] p-[10px] relative"}>
            {
                words.map((word, index) => {
                    const obj = irishWordlist.find((element) => element.word === word);
                    return <Word word={word} explanation={obj} />
                })
            }
        </div>
    )
}