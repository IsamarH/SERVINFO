<template>
<div class="divMainNav">
    <div class="divLogo">
        <img class="logo" src="../assets/servinfo-removebg-preview.png" alt="">

    </div>
    <div class="div">
        <h1 class="txtServinfo">SERVINFO</h1>
      
    </div>

    <div class="lia" >
        <ul>
                <router-link to="/" class="m">Inicio</router-link>
                <router-link to="/services" class="m" >Servicios</router-link>
                <router-link to="/mas" class="m">Sobre nosotros</router-link>
                <router-link to="/contactanos" class="m">Contáctanos</router-link>
                

               
        </ul>
    </div>
</div>

</template>
 
<style>
.logo{
    background-color: rgb(23, 27, 248);
    width: 100px;
    height:100px;

}
.divMainNav{
    display: flex;
    height: 100PX;
    background-color:rgb(23, 27, 248);
}
.divLogo{
    width: 20%;
    padding-left: 30px;
    background-color: rgb(23, 27, 248)
}
.div{
  width:40% ;
  padding-top: 20px;
  text-align: left;
  overflow: hidden;
  background-color: rgb(23, 27, 248)
}
.lia{
    width: 80%;
    height:80%; 
    background-color: rgb(23, 27, 248);
    color: rgb(253, 253, 253);
}
.lia ul{ 
    background-color:rgb(23, 27, 248);

}
.m{
  margin-right: 5%; /*centrado del menu*/
  margin-top: 10px;
    padding: 25px 25px; 
    display: inline-block;
    text-decoration: none;
    background-color: rgb(23, 27, 248);
    color: rgb(255, 255, 255);
    font-weight: 800;

-moz-border-radius-topleft: 15px;
-moz-border-radius-topright:14px;
-moz-border-radius-bottomleft:14px;
-moz-border-radius-bottomright:14px;
-webkit-border-top-left-radius:15px;
-webkit-border-top-right-radius:14px;
-webkit-border-bottom-left-radius:14px;
-webkit-border-bottom-right-radius:14px;
border-top-left-radius:15px;
border-top-right-radius:14px;
border-bottom-left-radius:14px;
border-bottom-right-radius:14px;
border: 0;
background-color: rgb(23, 27, 248);

}
.m:hover {

    color: black;

}

.txtServinfo{
    background-color: rgb(23, 27, 248);
    color: rgb(255, 255, 255);

}



</style>