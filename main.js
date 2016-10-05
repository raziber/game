var SIZE = 10;
var FULL_PRE = 80;

var board;


function generate_table_html(width, height){
    var table = "";
    for(var i = 0; i < height; i++){
        table += "<tr>/n";
        for(var j = 0; j < width; j++){
            var cell_td_tag = "<td id=\"cell_row_col\" onclick=\"handle_click(row, col)\"</td>/n".replace(/row/g, i).replace(/col/g, j);
            table += cell_td_tag;
        }
        table += "</tr>/n";
    }
    return table;
}

function init_board(width, height){
    board = [];
    for(var i = 0;i < height; i++){
        var row = []
        for(var j = 0; j < width; j++){
            if(Math.random() < FULL_PRE/100)
                row.push(true);
            else
                push(false);
        }
        board.push(row);
    }
}

function fill(i, j){
    $("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).addClass("full");
}
/*
function handle_click(i, j){
    move_in_dir(i, j-1, )
}

function move_in_dir(i, j, dir){

}
*/




$(document).ready(function(){
    var tableContents = generate_table_html(SIZE, SIZE);
    $("#gameTable").html(tableContents);
})