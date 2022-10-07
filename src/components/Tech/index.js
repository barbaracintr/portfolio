import "./style.css"

export const Tech = ({ tech }) => {
    return (
        <>
        <div className="container-tech">
            <span>{tech.name}</span>
            <img src={tech.img} />
        </div>
        </>
    )
}