import Item from './item';
import Card from './cards';

const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação com React</h1>
    <ul>
       
       <Item> item 1 </Item>
       <Item> item 2 </Item>
       <Item> item 3 </Item>
      
      
    </ul>
    <Card/>
    </>
  )
}

export default App;

