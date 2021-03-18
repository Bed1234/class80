var name_student_array=[];
function submit(){
var display_student_array=[];
for (var j=1; j<=4; j++)
{
    var name_student = document.getElementById("name_of_the_student_"+j).value;
    name_student_array.push(name_student);
}

var length =name_student_array.length;

for (var k=0; k<length; k++)
  {
      display_student_array.push("<h4>Name -"+ name_student_array[k]+"</h4>");

  }  

  document.getElementById("display_name_with_commas").innerHTML=display_student_array;

  var remove_comma=display_student_array.join(" ");
   document.getElementById("display_name_without_commas").innerHTML=remove_comma;

   document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}


function sorting(){
     

     name_student_array.sort();
       
       var display_student_array_sorting=[];
       var length1= name_student_array.length;
         

  for (var t=0; t<length1; t++)
  {
      display_student_array_sorting.push("<h4>Name -"+ name_student_array[t]+"</h4>");

  
  }  

  var remove_comma1= display_student_array_sorting.join(" ");
   document.getElementById("display_name_without_commas").innerHTML=remove_comma1;
}

    

