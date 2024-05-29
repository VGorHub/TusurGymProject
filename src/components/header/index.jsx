import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <div id ="logo">
            <Link to="/" title="На главную страницу">
                <img src="/img/logo.svg" title="TUSUR GYM" alt="TUSUR GYM"/>
                <br />
                <span>TUSUR GYM</span>
            </Link>
            </div>
            <div id="home" className="btn-container">
                <Link to="/" title="Домой">
                    <div className="btn">
                        <img src="/img/Home.svg" title="Домой" alt="Домой"/>
                    </div>
                </Link>
            </div>
            <div id="gyms" className="btn-container">
                <a href="https://sportgyms.ru/tomsk/gym/" title="Залы">
                    <div className="btn">
                        <img src="/img/Gym.svg" title="Залы" alt="Залы"/>
                    </div>
                </a>
            </div>
            <div id="nutrition" className="btn-container">
                <a href="https://www.studentsport.ru/tribune/dieta-dlya-sportsmenov-8114/" title="Питание">
                    <div className="btn">
                        <img src="/img/Food.svg" title="Питание" alt="Питание"/>
                    </div>
                </a>
            </div>
        </header>
    )
}