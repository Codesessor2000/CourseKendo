function getCourses() {
    console.log("in get function");
    $.ajax({
        url: 'http://localhost:3333/courses',
        dataType: "json",
        type: 'GET',
        contentType: "application/json",
        //data: JSON.stringify(dataObject),
        success: function (result) {
            $.each(result,function(key,value){
			console.log(value);
			})
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function addCourse() {
    var course_name = document.getElementById('coursename').value;
    var course_id = document.getElementById('courseID').value;
    var course_description = document.getElementById('courseDescription').value;
    var course_price = document.getElementById('coursePrice').value;
    console.log(course_id);
    console.log(course_name);
    console.log(course_description);
    console.log(course_price);
    let dataObject = {
        id: parseInt(course_id),
        title: course_name,
        description: course_description,
        price: parseFloat(course_price)
    };
    console.log(dataObject);
    console.log(typeof (dataObject));
    $.ajax({
        url: 'http://localhost:3333/courses',
        dataType: "json",
        type: 'POST',
        contentType: "application/json",
        data: JSON.stringify(dataObject),
        success: function (result) {
            console.log("ADD OPERATION SUCCESSFULL" + result);
        },
        error: function (error) {
            console.log(error);
        }
    });
}
