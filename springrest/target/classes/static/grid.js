$(document).ready(function(){
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
        						    //console.log(data);
        						    var postdata={};
        						    postdata.id=data.id;
        						    postdata.title=data.title;
        						    postdata.description=data.description;
        						    postdata.price=data.price;
                        
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
        						            //location.reload(true);
        						            }
        						            });
        						},
        remove: function(e) {
        						   //console.log("Removing", e.model);
        						   $.ajax({
        							   type: "DELETE",
        							   url: "http://localhost:3333/courses/" + e.model.id,
        							   success: function(){
        								   /*var grid = $("#ordersGrid").data("kendoGrid");
											grid.dataSource.read();
											grid.refresh();*/
        								   },
        							   error: function() {
        								   alert("Error deleting record");
        								   location.reload(true);
        								   }
        								   });
        						   },
        toolbar:["create"],
        editable:"popup",
        height: 340,
        //width:1200,
        //pageable: true,
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
        },{
			title: "Actions", 
			command: ["edit","destroy"],
		}
    ]
    });
});

function getcall(){
	    $.ajax({
        url: 'http://localhost:3333/courses',
        dataType: "json",
        type: 'GET',
        contentType: "application/json",
        //data: JSON.stringify(dataObject),
        success: function (result) {
			
			$("#ordersGrid").data("kendoGrid").dataSource.data(result);
        },
        error: function (error) {
            console.log(error);
        }
    });
}