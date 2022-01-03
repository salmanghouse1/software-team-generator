function headHTML() {


    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style> * {
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    
    
    /* heading and title */
    
    header {
        width:100%;
        background-color:orangered;
        color:white;
    }
    
    header h1 {
        font-size:36px;
        text-align:center;
        font-family:Arial, Helvetica, sans-serif;
    }
    
    
    /* container of all the cards */
    
    section {
        padding: 4em;
        display: flex;
        justify-content: center;
        align-items:center;
        gap:1em;
        flex-wrap:wrap;
    }
    
    
    /* card individual styles */
    
    .card {
        width:200px;
        float:left;
        border:2px solid black;
    }
    
    .card h2 {
        width: 100%;
        background-color:lightseagreen;
        text-align:center;
    } </style>
    <title>Document</title>
</head>
<body>
<header><h1>Team List</h1></header>
`
}

module.exports = headHTML;