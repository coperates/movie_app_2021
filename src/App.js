import PropTypes from "prop-types";

const FoodILike = [
  {
    id: 1,
    name:"kimchi",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._qLDMLMwi2F0m7bLAbWxTwHaHa%26pid%3DApi&f=1",
    rating: 5
  },
  {
    id: 2,
    name:"samgyeopsal",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SX-30prul0o5i3E99W8QcwHaE8%26pid%3DApi&f=1",
    rating: 4.7
  }
];

//props를 받아서 출력 porps.fname = {fname}는 같은 뜻임
function Food({fname, picture, rating}){
  return(
    <div>
    <h1>I like {fname}</h1>
    <h2>{rating}/5.0</h2>
    <img src={picture} alt={fname} />
    </div>
  );
}

//dish는 FoodILike의 오브젝트임
function App() {
  return (
    <div>
      {FoodILike.map(dish => (
        <Food key={dish.id} fname={dish.name} picture={dish.image} rating={dish.rating}/>
        ))}
    </div>
  );
}

//props을 받는 함수.propTypes 는 prop의 type오류를 방지해준다.
// isRequired는 list에서 해당 Prop의 type과 선언되었는지 까지 확인하다.
Food.propTypes={
  fname: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;

