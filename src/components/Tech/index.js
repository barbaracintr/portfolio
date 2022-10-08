import { NameTech, ImgTech } from "./styles.js"

export const Tech = ({ tech }) => {
    return (
        <>
            <NameTech>{tech.name}</NameTech>
            <ImgTech src={tech.img} />
        </>
    )
}