import { useEffect, useState } from 'react'
import './App.css'
import { ImCart } from "react-icons/im";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import Alldata from "./data"

function App() {
  const [input, setinput] = useState(false)

  const [increase,setincrease]=useState(0)

  const[rightmenu,setrightmenu]=useState(false)

  const[fillter,setfillter]=useState("")

  const[store,setstore]=useState([])

  
  



  // ---------------------------for inputbox
  function inputsearch(){
    setinput(!input)
  }

  // ---------------------------for count increase
  // function Inc(data_fila_irrunthu_varuthu){
  //    setincrease(increase+1)
  //   // console.log(data_fila_irrunthu_varuthu)
  //   setstore([...store, data_fila_irrunthu_varuthu])
  //   // console.log(store)
  //   // console.log(store.send)
  // }
  console.log(store)

  function Inc(data_fila_irrunthu_varuthu) {
  
   
    
  // Check if the item is already in the cart
  let foundItem =null; 
for (let i = 0; i < store.length; i++) {
  if (store[i].send === data_fila_irrunthu_varuthu.send) {
    foundItem = store[i];
    break; // Exit the loop once the item is found
  }
}
console.log( foundItem)
  if (foundItem) {

    foundItem.quantity = foundItem.quantity+1;

    const total = foundItem.quantity * foundItem.money;

  } 
  else {
    // If the item  not in  cart, add  with a quantity of 1
    setstore([...store, { ...data_fila_irrunthu_varuthu, quantity: 1 }]); // Add the new item with quantity 1
  }

  setincrease(increase + 1); 
}

// console.log(total)
// console.log(store);  



  // ---------------------------------menubar
  function menu(){
    setrightmenu(!rightmenu)
  }

  // -------------------------------Search Fillter
  function Search(inside){
    setfillter(inside.target.value)
  }


  // -----------------------------------------totalPrice

    let totalPrice = 0;
    for (let i = 0; i < store.length; i++) {
      totalPrice += store[i].money * store[i].quantity;
    }
  //  console.log(totalPrice)

  
  // -----------------------------array of  object
  let total=[
    {Name:"Sony Alpha ZV-E10",price:1000,img:"https://m.media-amazon.com/images/I/71Bb8vffPtL._SX679_.jpg"},
    { Name:"ProFocus Camera ",price:10000,img:"https://m.media-amazon.com/images/I/31xxk1ui5UL._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Fujifilm X-H2S ",price:2000,img:"https://m.media-amazon.com/images/I/41aElEKSrpL._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Fujifilm X-S20 ",price:3000,img:"https://m.media-amazon.com/images/I/31acltPzosL._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Sony Alpha Ilce-7C",price:4000,img:"https://m.media-amazon.com/images/I/31RceTDrD2L._SY300_SX300_QL70_FMwebp_.jpg"},
    { Name:"Tamron 28–300mm F/4-7.1",price:4000,img:"https://m.media-amazon.com/images/I/31FrHH9t73L._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"ZEISS Batis 1.8/85 mm ",price:5000,img:"https://m.media-amazon.com/images/I/41TwnKxWF5L._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Fujifilm Fujinon XF ",  price:6000,img:"https://m.media-amazon.com/images/I/31C4hz75WmL._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Fujifilm X100VI",       price:7000,img:"https://m.media-amazon.com/images/I/31n-tCRy5jL._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Tokina ATX-m 11-18mm ", price:8000,img:"https://m.media-amazon.com/images/I/41rE1Q145UL._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Fujifilm Fujinon XF",   price:9000,img:"https://m.media-amazon.com/images/I/413Fewj3UlL._SX300_SY300_QL70_FMwebp_.jpg"},
    { Name:"Sony Alpha ILCE 6100L", price:2000,img:"https://m.media-amazon.com/images/I/41yLzmYC7eL._SY300_SX300_QL70_FMwebp_.jpg"},
  ]

  // console.log(fillter);
// console.log(get);

// -----------------------------this my filter

  // let a=total.filter((fill)=>{
  //   if(fillter === fill.Name){
  //     console.log("hi");
  //     return true
  //   }
  //   else{
  //     console.log("bye");
  //     return false
  //   }
  // })

  // Function to generate and download PDF
  function downloadPDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Pet Shop - Booking Details", 10, 10);
    doc.setFontSize(12);

    let yPos = 20;
    store.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - $${item.rate} x ${item.quantity} = $${item.rate * item.quantity}`, 10, yPos);
      yPos += 10;
    });

    doc.setFontSize(14);
    doc.text(`Total Price: $${store.reduce((total, item) => total + item.rate * item.quantity, 0)}`, 10, yPos + 10);

    doc.save('PetShop_Booking_Details.pdf');
  }

  // ---------------------------------this Filter a data in input

  let filteredData = total.filter((item) =>( 
    item.Name.toLowerCase().includes(fillter.toLowerCase())));
  
  return (
    <div className='overall'>

    <Navbar expand="lg" className=" Navbar" >
          <Container fluid>
            <h4 className=''Brand href="#">camara</h4>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
    
     
                {input == true ?<input className='inp' type="search" onChange={Search}/>:null}
               
              
               
    
                <Button className='navbut' onClick={inputsearch}  variant="outline-success">Search</Button>
              </Form>
             <span onClick={menu}> <ImCart className='icon' /> {increase <=0 ?null:<button className='but'>{increase}</button>}</span>

            </Navbar.Collapse>
          </Container>
        </Navbar>

{/* ---------------------------------------------------------------------------------------------------- */}

<div className='contant' >

{/* ----------------------------------------------------------------------side menu */}
<div className={rightmenu == true ?'rightside':'rightside1'} >

<h1>Bill Details</h1>

  {/* ---------------------this table head show for only one time ------------ */}
<table>
  <tr>
    <th className='name'>Name</th>
    <th>price</th>
    <th>quantity</th>
    <th>total</th>
  </tr>
  </table>


{store && store.map((item) => (
  <div>
<table>

  <tr>
    <td className='name'>{item.send}</td>
    <td>${item.money}</td>
    <td>{item.quantity}</td>
    <td>{item.money * item.quantity}</td>
  </tr>
</table>


  </div>
))}
  {/* ---------------------it is show for only one time ------------ */}
 <h1> Total Price: ${totalPrice}   </h1>
 <button onClick={() => downloadPDF('store')}>Download PDF</button>
 </div>


{/* ----------------------------------------------- this for multiple card*/}
{/* {total.map((args)=>(
  <Alldata send={args.Name} money={args.price} count={Inc}/>
))
} */}


{/* ---------------------------this for multiple card and for search input*/}

{filteredData.map((args)=>(
  <Alldata send={args.Name} money={args.price} pic={args.img} count={Inc}  />
))
}




</div>

</div>
  )
}

export default App




























































    // Update the store with the new quantity and total price
    // setstore([...store]); 