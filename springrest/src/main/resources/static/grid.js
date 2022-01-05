$(document).ready(function() {
	getcall();
    var gridDataSource = new kendo.data.DataSource({
        //data: response,
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
        
        sort: {
            field: "id",
            dir: "asc"
        }
    });
    $("#ordersGrid").kendoGrid({
        dataSource: gridDataSource,
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

        toolbar:["create"],
        editable:"popup",
        height: 340,
        sortable: true,
        filterable: true,
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
			editor: customDropdownEditor,
		},{
			title: "Actions", 
			command: ["edit","destroy"],
		},
    ]
    });
});
function customDropdownEditor(container, options) {
            $('<input name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    dataSource: ["Self-Learning","Youtube Video","Notes","Certification"],	
                });
        }
function getcall(){
	    $.ajax({
        url: 'http://localhost:3333/courses',
        dataType: "json",
        type: 'GET',
        contentType: "application/json",
        success: function (result) {
			$("#ordersGrid").data("kendoGrid").dataSource.data(result);
        },
        error: function (error) {
            console.log(error);
        }
    });
}