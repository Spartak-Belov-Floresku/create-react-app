import { arr_foods } from './foods'
import HeplerClass from './helper';


const fruit1 = HeplerClass.choice(arr_foods);
console.log(`I'd like one ${fruit1}, please`);
const fruit2 = HeplerClass.remove(arr_foods, fruit1);
console.log(`Here you go: ${fruit2}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${Object.keys(arr_foods).length} left.`)

