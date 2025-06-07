import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import questionMark from '../assets/question-mark-svgrepo-com.svg';

function TemplateCard() {

    return(
        <div className="max-w-xs rounded overflow-hidden shadow-lg rounded-lg border">
            <img className="aspect-square w-full h-full mx-auto" src={questionMark} alt="Question mark" />
            <div className="px-6 py-4 border-t">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    )
}

export default TemplateCard