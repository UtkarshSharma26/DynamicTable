function edit_row()
{
 document.getElementById("edit_button").style.display="none";
 document.getElementById("save_button").style.display="block";
	
 var spaceName=document.getElementById("spaceName_row");
 var no_of_questions=document.getElementById("no_of_questions_row");
 var time=document.getElementById("time_row");
	
 var spaceName_data=spaceName.innerHTML;
 var no_of_questions_data=no_of_questions.innerHTML;
 var time_data=time.innerHTML;
	
 spaceName.innerHTML="<input type='text' id='spaceName_text' value='"+spaceName_data+"'>";
 no_of_questions.innerHTML="<input type='text' id='no_of_questions_text' value='"+no_of_questions_data+"'>";
 time.innerHTML="<input type='text' id='time_text' value='"+time_data+"'>";
}

function save_row()
{
 var SpaceName_val=document.getElementById("spaceName_text").value;
 var no_of_questions_val=document.getElementById("no_of_questions_text").value;
 var time_val=document.getElementById("time_text").value;

 document.getElementById("spaceName_row").innerHTML=spaceName_val;
 document.getElementById("no_of_questions_row").innerHTML=no_of_questions_val;
 document.getElementById("time_row").innerHTML=time_val;

 document.getElementById("edit_button").style.display="block";
 document.getElementById("save_button").style.display="none";
}

function delete_row()
{
 document.getElementById("row").outerHTML="";
}

function add_row()
{
 var new_spaceName=document.getElementById("new_spaceName").value;
 var new_no_of_questions=document.getElementById("new_no_of_questions").value;
 var new_time=document.getElementById("new_time").value;
	
 var table=document.getElementById("space_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='spaceName_row"+table_len+"'>"+new_spaceName+"</td><td id='no_of_questions_row"+table_len+"'>"+new_no_of_questions+"</td><td id='time_row"+table_len+"'>"+new_time+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_spaceName").value="";
 document.getElementById("new_no_of_questions").value="";
 document.getElementById("new_time").value="";
}