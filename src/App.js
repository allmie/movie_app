import React from 'react';

function Food({ fav, picture }){
    console.log(fav);
    // Food componet의 property(props) 확인    (props가 아닌 임의의 변수면 가능)
    // { fav } = props.fav
    return (
        <div>
            <h1>I like {fav}</h1>
            <img src={picture} alt={fav} />
        </div>
    );
}

const foodILike = [
    {
        name: "kimchi",
        image: "url"
    },
    {
        name: "kimbab",
        image: "url"
    },
    {
        name: "meat",
        image: "url"
    }
];

function App() {
    return (
        <div>
            <h3>hi</h3>
            { foodILike.map(dish => 
                <Food fav={dish.name} picture={dish.image} />
                )}
                {/* <Food --/> 위 라인을 함수로 정의해서 사용 가능 */}
            {/* <Food fav="chicken"/> */}
            {/* Food component에 chicken(속성=props)을 전달
            <Food fav="tomato"/>
            <Food fav="kimchi"/>
            <Food fav="bob"/>
            component 재 사용 */}
        </div>
    );
}

export default App;
