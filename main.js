Array_friend=[];
function submit()
{
    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    var n3=document.getElementById("name3").value;
    var n4=document.getElementById("name4").value;
    var n5=document.getElementById("name5").value;
    Array_friend.push(n1);
    Array_friend.push(n2);
    Array_friend.push(n3);
    Array_friend.push(n4);
    Array_friend.push(n5);
    console.log(Array_friend)
    document.getElementById("display_name").innerHTML = Array_friend; 
    document.getElementById("submit_button").style.display = "none";
     document.getElementById("sort_button").style.display = "inline-block"; } 
     function sort() 
     
{ 
    Array_friend.sort(); 
    console.log(Array_friend); 
    document.getElementById("display_name").innerHTML = Array_friend;
    }