import React from "react";
import './Footer.scss'

import mastercard from '../../images/mastercard.svg'
import mir from '../../images/mir.svg'
import tinkoff from '../../images/tinkoff.svg'
import visa from '../../images/visa.svg'

const Footer = () => {
    return (
                <div className="footer">
                    <div className="columns">
                        <div className="plan_furniture">
                            <p className="plan_furniture_title">Планирование мебели</p>
                            <p className="constructor">Конструктор шкафов</p>
                            <p className="constructor">Конфигуратор кроватей</p>
                            <p className="constructor">Планировщик кухонь</p>
                        </div>
                        <div className="inspiration">
                            <p className="inspiration_title">Вдохновение</p>
                            <p className="constructor">Готовые дизайн-проекты</p>
                            <p className="constructor">Стили интерьеров</p>
                            <p className="constructor">Идеи для вдохновения</p>
                        </div>
                        <div className="aboutus">
                            <p className="aboutus_title">О нас</p>
                            <p className="constructor">Работа и карьера в Ekmi</p>
                            <p className="constructor">Адреса магазинов</p>
                            <p className="constructor">Контакты</p>
                        </div>
                    </div>

                    <div className="pay">
                        <img className="bank" src={mastercard} />
                        <img className="bank" src={mir} />
                        <img className="bank" src={visa} />
                        <img className="bank" src={tinkoff} />
                    </div>
                </div>
    )
}
export default Footer