import Card from "./Card";
import salad from "./images/salad.jpg";
import Bruchetta from "./images/Bruchetta.png"
import lemon_dessert from "./images/lemon_dessert.jpg"

const foodLists = [
    {   title: "Greek Salad $12.99",
        description: "Lorem ipsum, or lipsum as it is, Lorem ipsum, or lipsum as it is, Lorem ipsum, or lipsum as it is",
        getImageSrc:salad,
    },
    {
        title: "Lemon Cake $5.99",
        description: "Lorem ipsum, or lipsum as it i, Lorem ipsum, or lipsum as it iss, or lipsum as it is",
        getImageSrc:lemon_dessert,
    },
    {
        title: "Bruchetta $6.99",
        description: "Lorem ipsum, or lipsum as it is, Lorem ipsum, or lipsum as it is, Lorem ipsum, or lipsum as it is",
        getImageSrc:Bruchetta,
    }
]

function Menu () {
    return (
        <div className="S"
            gridGap={0}>
                {foodLists.map((project)=>(
                    <Card
                    key={project.title}
                    title={project.title}
                    imageSrc={project.getImageSrc}
                    description={project.description}/>
                ))}
        </div>
    );
}
export default Menu;