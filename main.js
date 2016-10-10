var SIZE = 10;
var FULL_PRE = 20;

var board;


function generate_table_html(width, height){
    var table = "";
    for(var i = 0; i < height; i++){
        table += "<tr>";
        for(var j = 0; j < width; j++){
            //var cell_td_tag = "<td id=\"cell_row_col\" onclick=\"handle_click(row, col)\"</td>/n".replace(/row/g, i).replace(/col/g, j);
            //table += cell_td_tag;
            table += "<td id=\"cell_row_col\" onclick=\"handle_click(row, col)\"></td>".replace(/row/g, i).replace(/col/g, j);
        }
        table += "</tr>";
    }
    return table;
}

function init_board(width, height){
    board = [];
    for(var i = 0;i < height; i++){
        var row = [];
        board.push(row);
        for(var j = 0; j < width; j++){
            if(Math.random() <= FULL_PRE/100){
                fill(i, j);
            }else{
                empty(i, j);
                //board[i][j] = false;
                //$("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).html(empty);
            }
        }
    }
}

function fill(i, j){
    board[i][j] = true;
    $("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).removeClass();
    //$("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).html("full");
    $("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).addClass("full");
}

function empty(i, j){
    board[i][j] = false;
    $("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).removeClass();
    //$("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).html("empty");
    $("#cell_row_col".replace(/row/g, i).replace(/col/g, j)).addClass("empty");
}

function handle_click(i, j){
    /*
    if(board[i][j]){
        empty(i, j);
    }else{
        fill(i, j);
    }
    */
    ///*
    if(!board[i][j]){
        move_in_dir(i-1, j+1, 1);
        move_in_dir(i-1, j, 0);
        move_in_dir(i, j+1, 2);
        move_in_dir(i+1, j+1, 3);
        move_in_dir(i+1, j, 4);
        move_in_dir(i+1, j-1, 5);
        move_in_dir(i, j-1, 6);
        move_in_dir(i-1, j-1, 7);
    }
    //*/
}

function move_in_dir(i, j, dir){
    switch(dir){
        case 0:
            if(board[i][j]){
                if(i == 0){
                    return;
                }else{
                    if(board[i-1][j]){
                        move_in_dir(i-1, j, dir);
                    }else{
                        empty(i, j);
                        fill(i-1, j);
                    }
                }
            }
            break;

        case 1:
            if(board[i][j]){
                if(i == 0 || j == width - 1){
                    return;
                }else{
                    if(board[i-1][j+1]){
                        move_in_dir(i-1, j+1, dir);
                    }else{
                        empty(i, j);
                        fill(i-1, j+1);
                    }
                }
            }
            break;

        case 2:
            if(j == width - 1){
                return;
            }else{
                if(board[i][j+1]){
                            move_in_dir(i, j+1, dir);
                        }else{
                            empty(i, j);
                            fill(i, j+1);
                        }
            }
            break;
        case 3:
            if(i == height - 1 || j == width - 1){
                return;
            }else{
                if(board[i+1][j+1]){
                            move_in_dir(i+1, j+1, dir);
                        }else{
                            empty(i, j);
                            fill(i+1, j+1);
                        }
            }
            break;
        case 4:
            if(i == height - 1){
                return;
            }else{
                if(board[i+1][j]){
                            move_in_dir(i+1, j, dir);
                        }else{
                            empty(i, j);
                            fill(i+1, j);
                        }
            }
            break;
        case 5:
            if(i == height - 1 || j == 0){
                return;
            }else{
                if(board[i+1][j-1]){
                            move_in_dir(i+1, j-1, dir);
                        }else{
                            empty(i, j);
                            fill(i+1, j-1);
                        }
            }
            break;
        case 6:
            if(j == 0){
                return;
            }else{
                if(board[i][j-1]){
                            move_in_dir(i, j-1, dir);
                        }else{
                            empty(i, j);
                            fill(i, j-1);
                        }
            }
            break;
        case 7:
            if(i == 0 || j == 0){
                return;
            }else{
                if(board[i-1][j-1]){
                            move_in_dir(i-1, j-1, dir);
                        }else{
                            empty(i, j);
                            fill(i-1, j-1);
                        }
            }
    }
}

$(document).ready(function(){
    var tableContents = generate_table_html(SIZE, SIZE);
    $("#gameTable").html(tableContents);
    init_board(SIZE, SIZE);
})