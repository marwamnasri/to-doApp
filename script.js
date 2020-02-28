function newelement(){
    let ul=document.getElementById('myul')
    let li= document.createElement('li')
    let input=document.getElementById('input').value

    let newtext50= document.createTextNode(input)

    if(input == ''){
        alert("you must write something!");}
    else{


        li.appendChild(newtext50)


        var deletebtn = document.createElement("span");
        var btn = document.createElement("BUTTON");
        deletebtn.innerText="Delete"
        li.appendChild(btn)
        btn.appendChild(deletebtn)
        



        var complete = document.createElement("span");
        var btn2= document.createElement("BUTTON");
        complete.innerText="Complete"
        li.appendChild(btn2)
        btn2.appendChild(complete)
       
       
       
        ul.appendChild(li)

      


        var myNodelist = document.getElementsByTagName("LI");
        btn.className = "close";
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
        
        
        var myNodelist = document.getElementsByTagName("LI");
        
        btn2.className = "supp";
      
        var supp = document.getElementsByClassName("supp");
        
        
        for (let i = 0; i < supp.length; i++) {
          supp[i].onclick = function() {
            var div = this.parentElement;
            div.style.textDecoration = "line-through";
          }
        }
          }

            
          
      
      
        
        
      
      
      }






    


      
  
    
    





