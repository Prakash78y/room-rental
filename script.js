let cards=document.getElementsByClassName("card");
let sales=document.getElementById("sales");
let about=document.getElementById("about");
let home=document.getElementById("home");
let news=document.getElementById("news");
let footer=document.getElementById("footer");
let properties=document.getElementById("properties");

  function mybox(){
    properties.firstElementChild.display="flex";
    sales.style.display="none";
    about.style.display="none";
    home.style.display="none";
    news.style.display="none";
    footer.style.display="none";
    // console.log(alert("asdfj"));


  }


  

  cards.addEventListner("click",mybox);


