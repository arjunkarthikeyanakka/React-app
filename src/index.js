import { queryByAttribute } from '@testing-library/react';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'

//importing everything from index css file to our js file.
import './index.css';

/*
function display(dialogues){
  let ret = " ";
  for(let i in dialogues){
    ret += dialogues[i];
    ret+="\n";
  }
  ret += "\n";
  return ret;
}
*/

// JSX Rules:
//   Return single Element
//   div / section / article or Fragment
//   use camelCase for html attribute
//   className instead of class
//   close every element
//   formatting

//this function is a component.
/*

//Notes : It is important to use paranthesis after return , because it 
          reduces the risk of getting an error.
          ALWAYS USE return();

function Gladiator(){
  let d = ["Roma Victor!","Strength and Honor","A man once told me death smiles at us , we can only smile back at it.","My name is Maximus Decimus Meridius , commander of Army of the north , General of the Felix Legions , loyal servant to the true emperor Marcus Aurelius , Father to a murdered son , Husband to a murdered wife and I will have my revenge in this life or the next."];
  return(
    <div>
      <h1>Heading - 1</h1>
      <h2>Heading - 2</h2>
      <p>This is a paragraph...</p>
    </div>
  );
}
*/

/*
Another function which is used as a component but with various element in its body 
wrapped in a single div.
*/

// function HelloPage(){
//   return (
//     <section>
//       <div>
//         <h1>
//           This is a heading for the <a href='#'>list</a> ... 
//         </h1>
//         <ul>
//           <li>
//             Potatoes
//           </li>
          
//           <li>
//             Tomatoes
//           </li>
          
//           <li>
//             Toes
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h1>This is another part of the section</h1>
//       </div>
//       <div>
//         <p>All the parts are enclosed inside a single entity called section so that it can be returned as a single element.</p>
//       </div>
//     </section>
//   );
// }

/*
This is another way to enclose all elements into one section so that 
everything can be returned as a single entity 
The symbol is <>  </>



function LeviAckermann(){
  //in this function we are also rendering data from the component outside the 
  // function 'TellName' , to use it we just mention in it "tag" way <...></...> .
  return(
    <>
      <div className="levi">
        <h1>
          This is a heading...
        </h1>
        <TellName></TellName>
        <h1>
            This is a heading for the <a href='#'>list</a> ... 
          </h1>
          <ul>
            <li>
              Potatoes
            </li>
            
            <li>
              Tomatoes
            </li>
            
            <li>
              Toes
            </li>
          </ul>
      </div>
    </>
  );
}
*/

//in the following function we have rendered two components 
// wrapped as a single entity and then returned it to render it 
// onto the screen.
function Gladiator(){
  //this is how you nest components.
  return (
    <>
      <section className='gladiator'>

        <Quote></Quote>
        
        <Quote></Quote>
        
        <Quote></Quote>
        
        <Quote></Quote>
        
        <Quote></Quote>

        
        <Quote></Quote>
        
        <Quote></Quote>
        
        <Quote></Quote>
        
        <Quote></Quote>
        
        <Quote></Quote>

      </section>
    </>
  );
}

const Quote = () =>{
  return (
    <article className='quote'>
      <Poster></Poster>
      <Transcript></Transcript>
    </article>
  );
}

//these blocks of code are re-usable af!. 
//This is the benefit of using react 


const Title = () =>{
  return <h1>The following are quotes from the cult-classic movie Gladiator.</h1>;
}
 
const Poster = () =>{
  return <img src="data:image/jpeg;base64,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"/>
}

function Transcript(){
  return(
    <>
      <h1>Trancript:</h1>
      <Dialogue></Dialogue>
    </>
  );
}

function Dialogue(){
  return (
    <>
      <Commodus></Commodus>
      <Maximus></Maximus>
    </>
  );
}

const Commodus = () => {
  return <i>How dare you show your back to me?, <bold> Slave! You will remove your helmet and tell me your name </bold>...</i>;
}
const Maximus = () => {
  return <p> <i>My name is <bold>Maximus Decimus Meridius </bold>, commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next.</i></p>;
}

//other way to create a component with same content presented...

//  const Gladiator = () =>{
//    return React.createElement(
//     "div",
//     {},
//     React.createElement("h1",{},"Heading - 1"),
//     React.createElement("h2",{},"Heading - 2"),
//     React.createElement("p",{},"Tis but a paragraph.")
//   );
//  }

// to render a function or a component to react it should be written like this :
// <Gladiator /> or <Gladiator></Gladiator>
ReactDOM.render(<Gladiator></Gladiator>,document.getElementById('root'));
//ReactDOM.render(<HelloPage></HelloPage>,document.getElementById('root'));
//ReactDOM.render(<LeviAckermann></LeviAckermann>,document.getElementById('root'));