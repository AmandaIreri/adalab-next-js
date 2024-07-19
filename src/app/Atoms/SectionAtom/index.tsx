
interface SectionProps{
    heading: string;
    content: React.ReactNode
}
const SectionAtom = ({heading, content}: SectionProps) => {
    return(
        <div>
            <h1 className="text-center">{heading}</h1>
            {content}
        </div>
    )
}
export default SectionAtom;