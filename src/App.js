import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }){
    // Food componet의 property(props) 확인    (props가 아닌 임의의 변수면 가능)
    // { name } = props.name
    return (
        <div>
            <span>
                <h1>I like {name}</h1>
                {rating} / 5.0
            </span>
            <img src={picture} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
}

const foodILike = [
    {
        id: 1,
        name: "kimchi",
        image: "https://images.unsplash.com/photo-1561505184-ba7ef239577b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
        rating: 5
    },
    {
        id: 2,
        name: "kimbab",
        image: "https://images.unsplash.com/photo-1532347231146-80afc9e3df2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80",
        rating: 4
    },
    {
        id: 3,
        name: "meat",
        image: "https://images.unsplash.com/photo-1547050605-2f268cd5daf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        rating: 3.5
    }
];

function App() {
    return (
        <div>
            <h3>hi</h3>
            { foodILike.map(dish => 
                <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating}/>
                )}
                {/* <Food --/> 위 라인을 함수로 정의해서 사용 가능 */}
            {/* <Food name="chicken"/> */}
            {/* Food component에 chicken(속성=props)을 전달
            <Food name="tomato"/>
            <Food name="kimchi"/>
            <Food name="bob"/>
            component 재 사용 */}
        </div>
    );
}

export default App;
