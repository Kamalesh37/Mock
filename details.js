var exp=document.getElementsByName("Exp");
var amount=parseInt(document.getElementsByName("amt"));
var date=document.getElementsByName("date")
var category=document.getElementsByClassName("category");
var submit=document.getElementsByName("btn");
function expense(amount,category,date){
    let a=amount;
    let cat=category;
    let d=date;

    if(cat==1){
        a=a;
        d=d;
    }
    if(cat==2){
        a=a;
        d=d;
    }
    if(cat==3){
        a=a;
        d=d;
    }
    if(cat==4){
        a=a;
        d=d;
    }
    if(cat==5){
        a=a;
        d=d;
    }
    else{
        
    }

}
function display(){
    var details=document.getElementById("display").innerHTML(expense());
    window.alert(details);
    
}
