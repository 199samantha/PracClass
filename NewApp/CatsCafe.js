import { Text, View } from 'react-native';

function Cat({name}) { 
  const[hungry,setHungry] = useState("I am hungry, please feed me.");
  const[hasBeenFed, setHasBeenFed]= useState(false);
  return (
    <View>
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

/* Cafe is the parent component we will call in App.js
   Cat is considered a child component */
export default function Cafe() {  
  return (
    <View>   
      <Cat />
      <Cat />     
    </View>
  );
}
