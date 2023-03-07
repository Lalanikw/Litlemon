import chef from "./images/chef.png"

function About () {
    return (
        <div className="About">
            <div className="AA">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>Lorem ipsum, or lipsum as it is sometimes known,
                    is dummy text used in laying out print, graphic
                    or web designs. The passage is attributed to an
                    unknown typesetter in the 15th century who is
                    thought to have scrambled parts of Cicero's De
                    Finibus Bonorum et Malorum for use in a type specimen
                    book. <br></br>
                    <br></br>It usually begins with: “Lorem ipsum dolor sit 
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.”The purpose
                    of lorem ipsum is to create a natural looking block of 
                    text (sentence, paragraph, page, etc.) that doesn't
                    distract from the layout. </p>
            </div>
            <div className="Ab">
                <img src={chef} alt=""></img>
            </div>
        </div>
    )
}
export default About;