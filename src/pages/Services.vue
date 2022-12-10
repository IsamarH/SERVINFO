<template>
    <h1 class="title"> Mantenimiento e Instalacion</h1>

    <div class="div-flex">
        <div class="container2_company">

            <H2>Intalacion de sistemas</H2>
            <p>Es el proceso fundamental por el cual los nuevos programas son transferidos a un computador con el fin de ser configurados, y preparados para ser desarrollados </p>
            <button class="btnServi"><router-link to ="/contactanos" class="servi" >Contratar Servicio</router-link></button>

        </div>

        <div class="container2_company">
            <H2>Mantenimiento de Hadware</H2>
            <ul>
                <li>Mantenimiento de tipo preventivo y correctivo, Para PC de escritorio (CPU) y laptops(portátil)</li>
                <li>Limpieza de impurezas</li>
                <li>Limpieza de contactos</li>
                <li>Lubricación de ventiladores</li>
                <li>Limpieza de rejillas de ventilación</li>
                <li>Cambio de almohadillas térmicas</li>
                <li>Cambio de pasta térmica</li>
                <button class="btnServi"><router-link to ="/contactanos" class="servi" >Contratar Servicio</router-link></button>

            </ul>
        </div>
        <div class="container2_company">
            <h2>Mantenimiento de software</h2>
            <ul>
                <li>Mantenimiento preventivo</li>
                <li>Mantenimiento correctivo</li>
                <li>Reduce todos los fallos en los programas y componentes</li>
                <li>Disminuye el tiempo de respuesta de cada acción en el software</li>
                <li>Corrige y hace compatibles todos los drivers</li>
                <li>Restablece el sistema operativo de manera que los daños causados por virus o Spywares desaparezcan 
                Daños causados por virus, spywares ó malwares, el mantenimiento  se encarga de ello, y restablece el sistema operativo de manera limpia</li>
                <li>Realiza tareas de Backups, de manera que se cuente con las copias de seguridad que exige la organización, como una manera de resguardar su información</li>
            </ul>
            <button class="btnServi"><router-link to ="/contactanos" class="servi" >Contratar Servicio</router-link></button>
        </div>

        <div class="container2_company">
            
            <h2>Actualizacion y Activacion de Licencias</h2>
                <p>Instalacion de programas basicos</p>
                <p>Es el proceso fundamental por el cual los nuevos programas son transferidos a un computador con el fin de ser configurados, y preparados para ser desarrollados.</p>
                <ul>
                    <li>Google Chrome</li>
                    <li>Microsoft Office</li>
                    <li>Reproductor VLC</li>
                    <li>CCLeaner</li>
                    <li>WinZip</li>
                    <li>Antivirus</li>
                    <li>Avast Free</li>
                    <li>Spotify</li>
                    <li>Adobe Photoshop</li>
                    <li>Etc...</li>
                    <button class="btnServi"><router-link to ="/contactanos" class="servi" >Contratar Servicio</router-link></button>
            </ul>
        </div>
    </div>


    <h1 class="title">Cursos libres</h1>
    <div class="div-flex">

        <div class="container2_company">
            <h2>Reparacion de PC escritorio-Portatil</h2>
            <p>En este curso de mantenimiento de computadoras o computación aprenderás  los conceptos básicos de Informática y sistematización, haciendo un reconocimiento de las partes de los PCs, Portátiles, tales como tarjetas, boards, procesadores, memorias, discos duros, periféricos, etc. Es fácil de aprender y solo se requiere tener conocimientos elementales.</p>
            <button class="btnServi"><router-link to ="/contactanos" class="servi" >Contratar Servicio</router-link></button>
        </div>
        <div class="container2_company">
            <h2>Manejo de Microsoft Oficce</h2>
            <p>El Curso de Manejo de Herramientas Microsoft Office, abarca un conjunto de programas informáticos tales como Ms Word, Ms Excel y Ms Power Point, que le permitirán automatizar y perfeccionar las actividades habituales de la oficina, obteniendo muy buenos resultados en cortos tiempos de respuesta para una mejor toma de decisiones.</p>
            <button class="btnServi"><router-link to ="/contactanos" class="servi" >Contratar Servicio</router-link></button>
        </div>
        <div id="ultimo" class="container2_company">
            <h2>Diseño</h2>
            <p>El diseño en marketing es de suma importancia por el principio de resumir grandes cantidades de mensajes a productos audiovisuales que evoquen sentimientos y sensaciones. Cuando hablamos de diseño de marca, nos referimos justamente a imaginar, planear y ejecutar algo que tenga un llamado a la función sensorial.
                aprenderas ha realizar banner y broucher y todo lo que se necesite para realizar marketing digital en un negocio, al igual que utilizar varias aplicaciones como canva entre otras. 
            </p>
            <button class="btnServi"><router-link to ="/contactanos" class="servi" >Contratar Servicio</router-link></button>

        </div>

    </div>
    

</template>

<style scoped>
.title{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
#ultimo{
    margin-bottom: 100px;
}
.btnServi{
    background-color: rgb(23, 27, 248);
    border-radius: 20px;
    height: 50px;
    width: 60%;
    margin-left: 20%;
    font-weight: 800;
    color: rgb(23, 27, 248);
   
}
.servi{
    color: beige;
   text-decoration: none;
}


.div-flex{
display: flex;
flex-wrap: wrap;
background-image: url(https://www.pngkey.com/png/detail/11-114202_jpg-library-library-blue-computer-technology-ripples-ondas.png);
background-repeat: no-repeat;
background-size: cover;
}

.container2_company {
    width:45%;
    padding-top: 20px;
    color: rgb(2, 2, 2);
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 3%;
    padding-right: 5%;
    border:1px solid black;
    margin-top: 10px;
    margin-left: 3%;
    border-radius: 10px;
    
}

.company {
    margin-top: 5px;
}

</style>