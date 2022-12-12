import React, { useState } from "react";
import './Example.scss'
import mario from "../../images/mario.svg"
import sofa from "../../images/732.svg"
import OneDish from "../OneDish/OneDish";
const Example = () => {
    const [example, setExample] = useState([
        { id: 1, image:  sofa , name: 'Диван Laura', p: '  ------------  ', price: '220000 ₽' },
        { id: 2, image:  sofa , name: 'Диван Laura', p: '  ------------  ', price: '220000 ₽' },
        { id: 3, image:  sofa , name: 'Диван Laura', p: '  ------------  ', price: '220000 ₽' }
    ])
    return (
        <div>
            <p className="title_example">Наши образцы</p>
            <div className="example_table">
            <div>
                <img  className="mario" src={mario} />
            </div>
            <div>
                {example.map((example, key) => 
                <OneDish example= {example} key = {example.id}/>)}
            </div>
            </div>
        </div>
    )
}
export default Example