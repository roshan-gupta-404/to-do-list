import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';

function App() {
  const [item, updateItem] = useState();
  const [itemList, updateItemList] = useState([]);
  // listening to onChange of input.
  const listenInput = function (e) {
    // Updating item
    updateItem(e.target.value); // `item` is updated
  }
  const addItem = function (e) {
    // updating list
    updateItemList([...itemList, item]); // `itemList` is updated
    updateItem(''); // updating item to make input field empty
  }
  return (
    <><div className='main-div'>
      <div className='center-div'>
        <h1>To Do</h1>
        <input
          onChange={listenInput} type='text' name='item'
          placeholder='Add item' value={item} />
        <button onClick={addItem}>+</button>
        <ol>{itemList.map((value, index) => {
          return (<ListItem key={index} id={index}
            itemName={value}/>);
        })} </ol> </div> </div> </>);
}
export default App;

// function App() {
//   const [item, updateItem] = useState();
//   const [itemList, updateItemList] = useState([]);
//   // listening to onChange of input.
//   const listenInput = function (e) {
//     // Updating item
//     updateItem(e.target.value); // `item` is updated
//   }
//   const addItem = function (e) {
//     // updating list
//     updateItemList([...itemList, item]); // `itemList` is updated
//     updateItem(''); // updating item to make input field empty
//   }
//   const deletItem = function (id) {
//     // deletes the item
//     updateItemList((old) => {
//       return (old.filter((element, index) => {
//         return (id !== index);
//       }));
//     })
//     console.log(id)
//   }
//   return (
//     <><div className='main-div'>
//       <div className='center-div'>
//         <h1>To Do</h1>
//         <input
//           onChange={listenInput} type='text' name='item'
//           placeholder='Add item' value={item} />
//         <button onClick={addItem}>+</button>
//         <ol>{itemList.map((value, index) => {
//           return (<ListItem key={index} id={index}
//             itemName={value} func={deletItem} />);
//         })} </ol> </div> </div> </>);
// }

// Learned that when usestate is called whole component re-render.
// about filter function.

// function App() {
//   console.log("init")
//   const itemList = [];
//   var i = 'mango';
//   const [item, updateItm] = useState();

//   // listening to onChange of input.
//   const listenInput = function (e) {
//     // insert item to li
//     let itmValue = e.target.value;
//     console.log(itmValue)
//     console.log("i:"+i)
//     updateItm(itmValue);
//     i = itmValue;
//     console.log('i set')
//   }
//   const addItem = function(){
//     itemList.push(i);
//     console.log(itemList);
//   }
//   return (
//     <>
//       <div className='main-div'>
//         <div className='center-div'>
//           <h1>To Do</h1>
//           <input onChange={listenInput} type='text' name='item' placeholder='Add item' /><button onClick={addItem}>+</button>
//           <ol>
//             <li>{item}</li>
//           </ol>
//         </div>
//       </div>
//    </>
//   );
// }