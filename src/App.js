import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from "react"
import {Form, Card, Button, Alert } from "react-bootstrap"


export default function App(){ 
  var shortenstring = useRef("")
  var [answer, setAnswer] = useState("")
    var pass = "" ;  
  
    let temp =""; 

var alpha = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

function convertBase(str, fromBase, toBase) {
  const DIGITS = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  const add = (num1, num2, base) => {
          let z = [];
          const n = Math.max(num1.length, num2.length);
          let carry = 0;
          let i = 0;
          while (i < n || carry) {
              const xi = i < num1.length ? num1[i] : 0;
              const yi = i < num2.length ? num2[i] : 0;
              const zi = carry + xi + yi;
              z.push(zi % base);
              carry = Math.floor(zi / base);
              i++;
          }
          return z;
  }
  
  const multiplyByNumber = (num1, num2, base) => {
          if (num1 < 0) return null;
          if (num1 == 0) return [];
  
          let result = [];
          let power = num2;
          while (true) {
              num1 & 1 && (result = add(result, power, base));
              num1 = num1 >> 1;
              if (num1 === 0) break;
              power = add(power, power, base);
          }
          return result;
  }
  
  
  const parseToDigitsArray = (str, base) => {
      const digits = str.split('');
      let arr = [];
      for (let i = digits.length - 1; i >= 0; i--) {
          const n = DIGITS.indexOf(digits[i])
          if (n == -1) return null;
          arr.push(n);
      }
      return arr;
  }
  
  const digits = parseToDigitsArray(str, fromBase);
  if (digits === null) return null;
  
  let outArray = [];
  let power = [1];
  for (let i = 0; i < digits.length; i++) {
      digits[i] && (outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase));
      power = multiplyByNumber(fromBase, power, toBase);
  }
  
  let out = '';
  for (let i = outArray.length - 1; i >= 0; i--)
      out += DIGITS[outArray[i]];
  
  return out;
  }
  return (
    <>
    {/* <Form >
    <Form.Group id="stringche">
              <Form.Label>Password</Form.Label>
              <Form.Control  ref={shortenstring} required />
            </Form.Group>
            <Button variant="secondary" onClick={shorten}>
          Shorten
        </Button>

        <Button variant="secondary" onClick={expand}>
        Expand 
 </Button>
 <Form.Label  disabled={answer === ""}>{answer}</Form.Label>
 
</Form> */}

<Card>
        <Card.Body>
          <h2 className="text-center mb-4">Welcome</h2>
          
          <Form >
          <Form.Group id="stringhere">
              <Form.Label  className="w-100">Enter Your String here    </Form.Label>
              <Form.Control type="text" ref={shortenstring} required />
            </Form.Group>
            <br/>
            <br/>
            <Button className="w-100" onClick={shorten} >
             Shorten 
            </Button>
            <br/>
            <br/>
            <Button className="w-100" onClick={expand} >
            Expand
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <br/>
            <br/>
      <div className="w-100 text-center mt-2">
      <Form.Label  disabled={answer === ""}>Answer : {answer}</Form.Label>
      </div>

</> 
  )

  
function shorten()
{
      
    for(var i = 0;i< shortenstring.current.value.length;i++)
    {
        for(var j = 0;j<alpha.length;j++)
        {
          if(shortenstring.current.value.charAt(i)==alpha[j])
          {
           pass = pass +  (shortenstring.current.value.charCodeAt(i)-97).toString(); 
          }
        }
    }
   var temp1 = convertBase(shortenstring.current.value,26,62);
   setAnswer(temp1);

    console.log(pass);
    console.log(answer);
   


  

  }

  function expand()
{
       
   setAnswer(convertBase(shortenstring.current.value,62,26));
   console.log(answer);

  }
 
}
