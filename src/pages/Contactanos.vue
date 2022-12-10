<template>
    <section>
        <div class="inputs"> <!--como contenedor principal-->

            <h1>Registrate para contratar nuestro servicio</h1>

            <form action="" class="form_login"> <!--etiqueta fom contiene controles interactivos que permiten aun usuario-->
                <div class="container-input"><!--eviar informacion aun servidor web-->
                <input type="text" class="field" required> <!--boton-->
                <label for="" class="label">Nombre</label> <!--utilizamos label para mostar el nombre de los campos en el formulario-->
             </div>

            <div class="container-input">
                <input type="text" class="field" required>
                <label for="" class="label">Correo</label>
            </div>

            <div class="password">
                <div class="container-input">
                <input type="password" class="field" required>
                <label for="" class="label">Contraseña</label>
            </div>

            <div class="container-input">
                <input type="password" class="field" required>
                <label for="" class="label">Repetir Contraseña</label>
            </div>

            </div>

            <button class="button">Iniciar</button>

            </form>

            </div>

           <div class="text404">
               <h1>SERVINFO-Servicios Informaticos</h1>
                 <img src="../assets/rubia.webp" alt="logo" width="600px">
                 <h2>SOLUCIONES TECNOLOGICAS PARA TU EMPRESA</h2>
         </div>
        
        </section>
    
</template>
<style>
.btn{
    background-color: rgb(0, 0, 0);
}
h2{
    background-color: white;
}
section {
    width: 100%;
    display: flex;  
}
.inputs {
    margin-left: 5%;
    margin-top: 3%;
    text-align: center;
    border: 2px solid #000000;
    width: 45%;
}

.inputs h2 {
    
    color: rgb(3, 3, 3);
}
.inputs h2 {
    color: rgb(23, 27, 248);
}
.inputs .f {
    text-align: center;
    background: linear-gradient( rgb(0, 0, 0), rgb(0, 0, 0));
}
.form_login {
    max-width: 400px;
    margin: auto;
    margin-top: 20px;
    font-size: 16px;
    font-family: sans-serif;
    background-color:rgb(255, 255, 255);
}
.title {
    text-align: center;
    font-family: sans-serif;
}
:root {
    --color-blue: rgb(23, 27, 248);
    --color-gray: rgb(23, 27, 248);
}
.container-input {
    padding-top: 20px;
    position: relative;
    margin-bottom: 5px;
    background-color: white;
}
.field {
    border: none;
    outline: none;
    box-shadow: 0 1px var(--color-gray);
    padding: 8px 3px;
    background-color: transparent;
    transition: all .3s;
    display: block;
    width: 100%;
    background-color: white;
}
:not(.style-2)>.field:focus {
    box-shadow: 0 2px var(--color-blue);
}
.style-2>.border-bottom:before,
.style-2>.border-bottom:after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background-color: var(--color-blue);
    position: absolute;
    bottom: -2px;
    transition: width .3s;
}
.style-2>.border-bottom:before {
    right: 50%;
}

.style-2>.border-bottom:after {
    left: 50%;
}

.style-2>.field:focus~.border-bottom:before,
.style-2>.field:focus~.border-bottom:after {
    width: 50%;
}

.label {
    position: absolute;
    left: 0;
    top: 15px;
    color: var(--color-black);
    padding: 5px 5px;
    z-index: 2;
    transition: all .3s;
    color: #5a595d;
    background-color: white;
    
}

.field:focus~.label,
.field:valid~.label {
    top: 0;
    font-size: .8rem;
}

.field:focus~.label {
    color: var(--color-blue);
}

.password {
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: rgb(251, 251, 251);
}

.text {
    text-align:left;
    width: 50%;
    color: #000000;
}

h1 {
    font-size: 50px;
}

.this-page {
    font-size: 30px;
}

.button {
    background: linear-gradient( rgb(23, 27, 248), rgb(23, 27, 248));
    border-radius: 20px;
    color: rgb(2, 2, 2);
    padding: 50px 100px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 20px;

}

h2 {
    color: rgb(3, 3, 3);
}
h1 {
    font-size: 50px;
}

.this-page {
    font-size: 30px;
}

.you-can {
    font-size: 20px;
    color: rgb(2, 2, 2);;
}.text404 {
    text-align: center;
    width: 50%;
    color:rgb(2, 2, 2);
}

</style>