import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Code Nation Creamery</h1>
      <div className="menu">
        <h2>Menu Choices:</h2>
       < IceCream flavor = "chocolate"/>
              < IceCream flavor = "strawberry"/>
       < IceCream flavor = "mango"/>

      </div>
    </div>
    
  );
}
function IceCream (props){
  return (<div>
    <ul>
      <li>{props.flavor}</li>
      
      </ul>
  </div>);
}