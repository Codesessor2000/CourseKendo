$(document).ready(function() {
	//make the ajax get call and initialise the grid's datasource field
	getcall();
	
	//declare grid data source and defne its rest of the fields
    var gridDataSource = new kendo.data.DataSource({
	    //define the schema of the griddata
        schema: {
            model: {
                fields: {
                    id: { type: "number" },
                    title: { type: "string" },
                    description: { type: "strng" },
                    price: { type: "number" },
                    category:{type: "string" },
                }
            }
        },
        //(optional)set the rows to be in ascending order by default
        sort: {
            field: "id",
            dir: "asc"
        }
    });
	//define the kendo grid's fields
    $("#ordersGrid").kendoGrid({
        dataSource: gridDataSource,
	    
	    //declare the PUT call to update the row of the grid
	    //remember: This call will act as a POST call if there is no matching entry for the id entered
        save: function(e) {	
						    var data = e.model;
						    var postdata={};
						    postdata.id=data.id;
						    postdata.title=data.title;
						    postdata.description=data.description;
						    postdata.price=data.price;
                			postdata.category=data.category;
						    $.ajax({
						        type:"PUT",
						        contentType:'application/json',
						        url: "http://localhost:3333/courses",
						        data : JSON.stringify(postdata),
						        dataType: "json",
						        success: function(result){
										getcall();
						            },
						        error: function(){
						            console.log("Error updating the Product");
						            
						            }
						            });
						},
	    
	    //add a DELETE call to delete the specific row where the delete button is clicked
        remove: function(e) {
    						   $.ajax({
    							   type: "DELETE",
    							   url: "http://localhost:3333/courses/" + e.model.id,
    							   success: function(){},
    							   error: function() {
    								   alert("Error deleting record");
    								   location.reload(true);
    								   }
    								   });
    						   },

	    // Add a 'addcourse' button on top of the grid
        toolbar:["create"],
	    // create a popup that would appear on clicking the 'Edit' Button
        editable:"popup",
        height: 340,
	   //(optional) keep the data sortable
        sortable: true,
	    //(optional) keep the data filterable
        filterable: true,
	    
	    //Declare the column names for kendo gridand associate them with the fields in the database
        columns: [{
            field: "id",
            title: "id",
            width: 160
        }, {
            field: "title",
            title:"title",
            width: 160,
        }, {
            field: "description",
            title: "description",
            width: 200,
        }, {
            field: "price",
            title: "price",
            width: 100,
        },{ field: "category",
        	title:"Category",
			width: "120px",
	   		//create a dropdown for this data item and call the function to choose among the values the attribute can take...
			editor: customDropdownEditor,
		},{
			//add a Edit and  delete button to every row in the grid...
			title: "Actions", 
			command: ["edit","destroy"],
		},
    ]
    });
});
//function definition to create a kendo Dropdown
function customDropdownEditor(container, options) {
            $('<input name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    dataSource: ["Self-Learning","Youtube Video","Notes","Certification"],	
                });
        }
//function definition for ajax GET call
function getcall(){
	    $.ajax({
        url: 'http://localhost:3333/courses',
        dataType: "json",
        type: 'GET',
        contentType: "application/json",
        success: function (result) {
			//(re)initiate the datasource of the kendo grid
			$("#ordersGrid").data("kendoGrid").dataSource.data(result);
        },
        error: function (error) {
            console.log(error);
        }
    });
}
