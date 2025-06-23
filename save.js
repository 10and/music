function getValueInText(){
     let inputData = document.getElementById("data1").value;
     alert(inputData + "똥덩어리");

}

function enter(){
    if(window.event.keyCode == 13){
        alert("품바")
    }
}

 function serch() {
  let temp = document.getElementsByTagName("template")[0];
  let clone = temp.content.cloneNode(true);
  document.body.appendChild(clone);
}