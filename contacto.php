<?php
    include "./correos.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="icon" href="./icon/portfolio.png">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/container.css">
    <link rel="stylesheet" href="./css/contacto.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Barlow+Condensed:wght@300&family=Poppins:ital,wght@1,300&family=Roboto+Serif:opsz,wght@8..144,500&family=Roboto:ital@1&family=Ubuntu+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
</head>
<body class="hidden">
        
    <div class="contenedor-carga" id="contenedor-carga">
        <div class="carga" id="carga">

        </div>
    </div>

    
        <!-- <div class="constructor">
            <img src="./img/trabajo-en-progreso.png" alt="Constructor">
            <a href="./index.html">Regresar</a>
    </div> -->

    <div class="container">

        <form action="./correos.php" method="POST" class="contacto">
            <h1>CONTACTANOS</h1>
            <div class="inputBox">
            <input type="text" name="nombre" id="" required="required">
            <span>Nombre</span>
            </div>

            <div class="inputBox">
            <input type="text" name="apellido" id="" required="required">
            <span>Apellido</span>

            <div class="inputBox">
            <input type="email" name="correo" id="" required="required">
            <span>Correo</span>

            <div class="inputBox">
            <textarea name="mensaje" id="" cols="30" rows="10" required="required"></textarea>
            <span>Asunto</span>

            <input type="submit" value="Enviar" class="enviar">
        </form>

    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="./js/header.js"></script>
<script src="./js/cohete.js"></script>
<script src="./js/carga.js"></script>
</body>
</html>