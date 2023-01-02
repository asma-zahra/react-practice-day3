import React from "react";
import { createElement as ce } from "react";
import ReactDOM from "react-dom/client";
//this Heading 1 is react element
// const heading1 = ce( 
//     "h1",
//     {id: "title",
//      key: "h1"   },
//     "heading1 from parcel"
// );
//OR
const heading2 = (<h2 id="title" key ="h2">Heading React Element</h2>);
console.log(heading2);

//Functional component Title
const Title = ()=> (<h1 id="title" key ="h2">Title</h1>)

// JSX inside Functional Component HeaderComponent

const HeaderComponent = ()=>{
    return(
        <div>
        {/* added functional component inside functional component */}
            <Title/>
            {/*OR added functional component inside functional component by calling function as functional compoent is function*/}
            {Title}
            <h2>H1 Functional Component</h2>
            <h2>H2 Tag</h2>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

