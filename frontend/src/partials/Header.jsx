import questionMark from '../assets/question-mark-svgrepo-com.svg';

function Header(){
    
    return(
    <div className="header">

        <a href="/"><img className="company-logo" src={questionMark}/></a>
        <div className="header-nav">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>
        </div>
    </div>
    );
}

export default Header