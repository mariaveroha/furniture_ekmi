import './History.scss'
import React from 'react'
const History = () => {
    return (
        <div >
            <div className='main_block_history'>
                <div className='block_history'>
                    <p className='title_history'>История Ekmi</p>
                    <p className='history_text'> Уже более полувека марка Ekmi вписывает свои главы в историю итальянского дизайна. Ее произведения, созданные самыми известными дизайнерами, быстро становятся классикой, которая, как известно, живет вне времени.</p>
                    <div className='about_numbers'>
                        <div className='number_item'>
                            <p className='figure'>15</p>
                            <p>Салонов мебели</p>
                        </div>
                        <div className='number_item'>
                            <p className='figure'>27</p>
                            <p>Каталогов</p>
                        </div>
                    </div>
                </div>
                <div className='image_stack'>
                    <div className='image_stack_left'>
                        <img className='stack_left' src='https://idei.club/uploads/posts/2021-03/1616133175_37-p-dizain-interera-v-stile-minimalizm-38.jpg' />
                    </div>
                    <div className='image_stack_middle'>
                        <img className='stack_middle' src='https://st.hzcdn.com/simgs/be41411c000934d0_14-6446/_.jpg' />
                    </div>
                    <div className='image_stack_back'>
                        <div className='back'></div>
                    </div>
                    <div className='image_stack_right'>
                        <img className='stack_right' src='https://s0.rbk.ru/v6_top_pics/media/img/0/93/755929983285930.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History