#!/usr/bin/env python
#-*- coding: UTF-8 -*-

from werkzeug.utils import escape
from werkzeug.wrappers import Request, Response

@Request.application
def Cart(request):
  showdata = ['<title>Baby Suit Products</title>']

  showdata.append('''
    <html>
    <script>
            function BabySuit1() 
          {

               var que1 = document.getElementById('que1').value;
               document.getElementById('span1').innerHTML = + que1 +"  *345  =" +que1*345 + "<input type='button' id='remove1' value='Remove' onclick='remove1()'><br><br>";
            
            }

            function remove1()
            {
                var que1 = document.getElementById('que1').value;
                document.getElementById('span1').innerHTML = '';
               document.getElementById('que1').value='';

            }


            function BabySuit2()
            {
                var que2 = document.getElementById('que2').value;
                document.getElementById('p2').innerHTML = + que2 +" *200  =" +que2*200 + "<input type='button' id='remove2' value='Remove' onclick='remove2()'><br><br>";
            }
            function remove2()
            {
                var que2 = document.getElementById('que2').value;
                document.getElementById('p2').innerHTML="";
                document.getElementById('que2').value='';
            }


            function BabySuit3()
            {
                 var que3 = document.getElementById('que3').value;
                 document.getElementById('p3').innerHTML = + que3 +" *225  =" +que3*225 + "<input type='button' id='remove3' value='Remove' onclick='remove3()'><br><br>";
            }
            function remove3()
            {
                var que3 = document.getElementById('que3').value;
                document.getElementById('p3').innerHTML = "";
                document.getElementById('que3').value='';
            }
            function BabySuit4()
            {
                var que4 = document.getElementById('que4').value;
                document.getElementById('p4').innerHTML = + que4 +" *200  =" +que4*200 + "<input type='button' id='remove4' value='Remove' onclick='remove4()'><br><br>";
            
            }
            function remove4()
            {
                var que4 = document.getElementById('que4').value;
                document.getElementById('p4').innerHTML = "";
                document.getElementById('que4').value='';
            }
            
    </script>
    <body style="background-color:grey;">
   
  


  <h1> Baby Suit Products</h1>
         <h2>
            Product Details
            <i align="right"><input type="text" id="searchdata" size="30" placeholder="Serach Product"/></i>
         </h2>      
          <table>
            <tr>
               <td>
                    <h4>Hand Worked Baby Suit</h4>
                    <lable id="l1">price.Rs.345</lalbe>
                    <input type="text" name="que1" id="que1" placeholder="Quantity">
                    <input type="button" value="Add To Cart" id="btnSubmit" onclick="BabySuit1()">
                    <span id="span1"></span>
                </td>
              </tr>
              <tr><br><br>


               <td>
                  
                     <h4>Black And White baby suit</h4>
                     <lable id="l1">price.Rs.200</lalbe>
                     <input type="text" name="que2" id="que2" placeholder="Quantity">
                     <input type="button" value="Add To Cart" id="btnSubmit" onclick="BabySuit2()">
                     <span id="p2"></span>
      
                </td>
              </tr>
              <tr>
               <td>
                  
                    <h4>Pink Baby Suit</h4>
                    <lable id="l1">price.Rs.225</lalbe>
                    <input type="text" name="que3" id="que3" placeholder="Quantity">
                    <input type="button" value="Add To Cart" id="btnSubmit" onclick="BabySuit3()">
                    <span id="p3"></span>
          
      
               </td>
              </tr>
              <tr>
               <td>
                    <h4>Green Baby Suit</h4>
                    <lable id="l1">price.Rs.200</lalbe>
                    <input type="text" name="que4" id="que4" placeholder="Quantity">
                    <input type="button" value="Add To Cart" id="btnSubmit" onclick="BabySuit4()">
                    <span id="p4"></apan>
      
               </td>
            </tr>
         </table>
        </body>
      </html>


''')


  return Response(''.join(showdata), mimetype='text/html')
if __name__ == '__main__':
  from werkzeug.serving import run_simple
  run_simple('localhost',4000, Cart)