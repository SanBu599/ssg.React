// import react from 'react';
// import Msgcomp from './MsgComp';

// function App() {
  
//   // 상수
//   const name = "홍길동";
  
//   // name = "성춘향";

//   // document.getElementsByTagName('h3')[0].innerText = name;

//   // 변수
//   let add = "부산시";

//   var email = "abc@naver.com";

//   // element
//   const element = <h2>{ email }</h2>;


//   return (
//     <div>
//       {/* <h1> 주석문 </h1> */}
//       <h3>안녕하세요{ name }{ add }{ email }</h3>
      
//       { element }

//       {/* <h1 style="backgroundcolo:black";"color:white"></h1> */}
//       <h1 style={{ backgroundColor:"#0000ff", color:"#ff0000" }}>제목</h1>

//     </div>
//   );
// }

// export default App;

// export default function App(){

//   //console.log("App() 실행");
//   //alert('App()실행');
//   const user = {
//     firstname : "길동",
//     lastname : "홍"

//   }

//   const func = () =>{   // component  <= 출력문
//     return(
//       <h3>{ user.firstname }</h3>
//     )
//   }

//   function funcOne(){   //  processor <= 연산처리
//     return user.firstname + ' ' + user.lastname;
//   }

//   function funcTwo(user){   //  processor <= 연산처리
//     return user.firstname + ' ' + user.lastname;
//   }

// function Greeting(user){
//   if(user){
//     return <h1>하이 {funcTwo(user)}</h1>;
//   }

//   return <h1>하이 아무게씨</h1>;
// }

//   const flg =true;

//   return(
//     <div>
//       { func()} { funcOne() }
//       <div>{ Greeting(user) }</div>
//       <div>{ Greeting() }</div>

//       { flg && <p>그것은 사실입니다</p> }
//       { !flg && <p>그것은 거짓입니다</p> }
//     </div>
    
//   );
// }


// const App = () =>{

//   const username ="김정은";

//   const Message = (props) =>{

//     return <h1>안녕 { props.name }</h1>
//   }

//   const MessageOne = (props) => {
//     return <h1>안녕 { props.children }</h1>
//   }

//   return(
//     <div>
//       <Message name="춘향" />

//       <MessageOne children = "향단"/>    {/* 자식 element */}

//       <h1 children="방자"/>

//       <Msgcomp name="일지매"/>
//       <Msgcomp name={username}/>
//     </div>
//   );
// }
// export default App;

// function App(){

//   // const
//   /*
//   const func = function(x,y){
//     return x * y;
//   }
//   func = function(x,y){
//     return x / y;
//   }
//   */

//   const func = (x,y)=> x*y;
  
//   return(
//     <div>
//       { func(12,2) }
//     </div>
//   )
// }
// export default App;

// map
//function App(){

  // const numbers = [1,2,3];
  /*
  for(let i= 0; i<numbers.length; i++){
    console.log(numbers[i]);
  }
  */

  // numbers.map( (n)=> {
  //   console.log(n)
  // });

  // const resnum = numbers.map( function(n){
  //   return n * 2;
  // })

  // console.log(resnum);


  // let prt = numbers.map((num)=>{
  //   return(
  //     <div>하이 { num }</div>
  //   )
  // })
//   const fruit = ['딸기','바나나','배','토마토'];

//   const menulist = fruit.map((menu,index) =>(<li key={index}>{menu}</li>));


//   return(
//     <div>
//       {/* { prt }  */}

//       <ul>
//           {menulist}
//       </ul>
//     </div>
//   )
// }
// export default App;

// function App(){

//   const members = [
//     {"num":1, "name":"홍길동","height":175.1},
//     {"num":2, "name":"고길동","height":152.4},
//     {"num":3, "name":"제갈길동","height":194.6}
//   ]
//   // const datalist = members.map((name,index)=>(<th key={index}>{name}</th>))
                             
//   const datalist = members.map(function(mem, index){
//     return(
//       <tr key={index}>
//         <th>{ mem.num }</th>
//         <td>{ mem.name }</td>
//         <td>{ mem.height }</td>
//       </tr>
//     )
//   });

//   return (
//     <div>   
//       <h1>Hello</h1>
//       <br/>
//       <br/>

//       <table border={1}>
//         <colgroup>
//           <col width={50}/><col width={100}/><col width={80}/>
//         </colgroup>
//         <tbody>
//           {datalist}
//         </tbody>
//       </table>
//     </div>
//   )
// }
// export default App;


function App(){

  // 소스 
  function World(){
    console.log("world");
  }


  return(
    <div>
      <button onClick={ ()=> {console.log("hello")} }>Hello</button>

      <button onClick={ ()=>World() } >world</button>
      
      <input onChange={ (event)=>{ console.log(event.target.value)} }></input>

        
    </div>
  )
}
export default App;


// function App(){

//   const employee=[{"seq":1,"id":"qwer","pwd":1111,"email":"qwer@naver.com","auth":3},
//                   {"seq":2,"id":"asdf","pwd":1111,"email":"asdf@naver.com","auth":1},
//                   {"seq":3,"id":"zxcv","pwd":1111,"email":"zxcv@naver.com","auth":1}
//                   ]

  
//   const employeelist = employee.map(function(kkk,index){
//     return (
//       <tr key={index}>
//         <th>{kkk.seq}</th>
//         <td>{kkk.id}</td>
//         <td>{kkk.pwd}</td>
//         <td>{kkk.email}</td>
//         <td>{kkk.auth}</td>
//       </tr>
//     )    
//   })


//   return(
//     <div>
//       <table border="1">
//         <tbody>
//           {employeelist}
//         </tbody>
//       </table>
//     </div>
//   )
// }
// export default App;