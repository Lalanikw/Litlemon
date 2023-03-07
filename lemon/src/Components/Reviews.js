import Card from "./Card";
import G1 from "./images/G1.jpg";
import G2 from "./images/G2.JPG"
import G3 from "./images/G3.JPG"
import G4 from "./images/G4.JPG"

const foodLists = [
    {   title: "Ivon from NewYork City",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        getImageSrc:G1,
    },
    {
        title: "Monica from Bogata Columbia",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        getImageSrc:G2,
    },
    {
        title: "Andrew from Portland OR",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        getImageSrc:G3,
    },
    {
        title: "Paul from Amsterdam",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs",
        getImageSrc:G4,
    }
]

function Review () {
    return (
        <div className="T"
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
export default Review;