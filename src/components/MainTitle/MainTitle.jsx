import './MainTitle.scss'
import React from 'react'
import Cards from '../Cards/Cards'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import main from '../../images/mainPage.svg'
import Individ from '../Individ/Individ';
import Galerry from '../Gallery/Gallery';
import History from '../History/History';
import Review from '../Review/Review';
import Example from '../Example/Example';
import CatalogMini from '../CatalogMini/CatalogMini';
import Footer from '../Footer/Footer'
const MainTitle = () => {
    return (
        <div className='container'>
        <div className='header_main_title'>
            <div className='title_main_in'>
                <Header />
                <div className='banner_text'>
                    <p className='topTitle'>ЛУЧШАЯ ЖИЗНЬ,СОЗДАННАЯ ДЛЯ ВАС!</p>
                   <Link to ='/catalog'>
                   <button className='menu'>ПЕРЕЙТИ В КАТАЛОГ</button>
                   </Link>
                </div>
                <Cards />
                <History />
        <Individ />
        <Example />
        <CatalogMini />
        <Review />
        <Galerry />
        <Footer/>
            </div>
            <img className='hero_image' src = {main} />
        </div>
        </div>

    )
}

export default MainTitle