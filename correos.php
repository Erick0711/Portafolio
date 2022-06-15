<?php
    $destinatario = 'maicolarteaga0711@gmail.com';
    // ESTO ES PARA EL CORREO AL QUE SE ENVIARA EL MENSAJE

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $asunto = $_POST['mensaje'];

    // $header = "ENVIADO DESDE EL PORTAFOLIO DE MAICOL ERICK";

    $mensajeCompleto = $asunto ."\nAtentamente:". $nombre. " " . $apellido. $correo;
    
    mail($destinatario, "Contacto",$mensajeCompleto);

    header("Location:index.html");
    // echo "<script>alert('Correo Enviado')</script>";
    // echo "<script>setTimeout(\"location.href='index.html'\", 1000)</script>";
?>