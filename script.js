$(document).ready(function () {
    var taskCounter = 0;
    if(taskCounter === 0){
      
        $(".content").html("<h2 id=no_task_msg > No task for today!</h2>");
        $(".content").addClass("no-task-message");
    }else{
        $("#no_task_msg").remove();
        $(".content").removeClass("no-task-message");
    }
    

    function hasTask(){
        if(taskCounter < 1){
      
            $(".content").html("<h2 id=no_task_msg >No task for today!</h2>");
            $(".content").addClass("no-task-message")
            
        }else if(taskCounter >= 1)
        {
            $("#no_task_msg").remove();
            $(".content").removeClass("no-task-message");
        }
    };

    

   

    // VARIABLES FOR ID NAMES OF THE TASK THAT WILL BE AUTOMATICALLY ADDED IN THE CONTENT DIV
    var divID = "divTask";
    var inputId = "item";
    // counter for the tasks, so the id can be unique
    var valId = 0;


    // THIS CODE HANDLES THE BUTTON PROP: DISABLED
    // input - used to check if the user input on that input element or textbox
    $(".task_input").on("input", function(){
        $("#add_task_btn").prop("disabled", false);

        if($(".task_input").val() == ""){
            $("#add_task_btn").prop("disabled", true);
        }

    });

    // THIS CODE HANDLES THE ADD TASK FUNCTIONALITY
    $("#add_task_btn").on("click", function () {
        var user_new_task = $(".task_input").val();
        taskCounter += 1;
        // validation if the value of the input is not empty
        if (user_new_task != "") {
            valId += 1;

            // this code appends inside the content div
            $(".content").append('<div class="task_div" id="'+divID+String(valId)+'"><input type="checkbox" id="'+inputId+String(valId)+'"><label for="'+inputId+String(valId)+'">' + user_new_task + "</label></div><br>");
            console.log(taskCounter);
         
            hasTask();

        };
 
        //  after the click function, this code runs next
        $(".task_input").val("");
        $("#add_task_btn").prop("disabled", true);
    });

    // THIS CODE HANDLES THE CHECKBOX
    $(".content").on("change", 'input[type="checkbox"]', function () {
        if ($(this).is(":checked")) {
            taskCounter -= 1;
            console.log("I am checked");
            console.log(taskCounter);
            hasTask();
            // $(this).closest('.task_div').css("background-color", "blue");
            $(this).closest('.task_div').css("opacity", "0.5");
            $(this).closest('.task_div').fadeOut(1000, function(){
                $(this).remove();
                
            });
            
           
            

        }else{
            $(this).closest('.task_div').css("opacity", "1");
        }
    });



});

