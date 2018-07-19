import Data from './data.json'
import {id} from './math.js'

export default function printMe() {
  console.log('I get called from print.js!', id(1));
  console.log(Data);
}
