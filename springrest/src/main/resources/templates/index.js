function getCourses() {
    alert("in the get function");
}
function addCourse() {
    var course_name = document.getElementById('courseID').value;
    var course_id = document.getElementById('coursename').value;
    var course_description = document.getElementById('courseDescription').value;
    var course_price = document.getElementById('coursePrice').value;
    console.log(course_id);
    console.log(course_name);
    console.log(course_description);
    console.log(course_price);
    let dataObject = {
        id: course_id,
        course: course_name,
        description: course_description,
        price: course_price
    };
    console.log(dataObject);
    console.log(typeof (dataObject));
    $.ajax({
        url: 'http://localhost:3333/courses',
        dataType: "json",
        type: 'POST',
        contentType: "application/json",
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        // },
        // beforeSend: function (xhr) {
        //     xhr.setRequestHeader("Authorization", "Basic " + btoa(""));
        // },
        data: JSON.stringify(dataObject),
        success: function (result) {
            console.log("ADD OPERATION SUCCESSFULL" + result);
        },
        error: function (error) {
            console.log(error);
        }
    });
}
