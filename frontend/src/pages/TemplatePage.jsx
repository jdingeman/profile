import Header from "../partials/Header";
import TemplateCard from "../partials/TemplateCard";

function TemplatePage() {

    return(
        <div>
            <Header/>
            <div className="cards-container">
                <TemplateCard/>
            </div>
        </div>
    )
}

export default TemplatePage