
//props를 받아서 출력 porps.fav = {fav}는 같은 뜻임
function Food({fav}){
  return(
    <h1>I like {fav}</h1>
  );
}

function App() {
  return (
    <div>
      <h1>Good morning</h1>
      <Food fav="kimchi"/>
      <Food fav="remen"/>
      <Food fav="cukumi"/>
      <Food fav="potato"/>

    </div>
  );
}

export default App;
