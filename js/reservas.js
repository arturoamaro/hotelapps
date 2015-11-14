var almacen = {
    db:null,
    th:null,
    np:null,
    nh:null,
    nd:null,
    guardaReserva: function(th, np, nh, nd){
        almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 20000);
        almacen.th =th;
        almacen.np =np;
        almacen.nh =nh;
        almacen.nd =nd;
        almacen.db.transaction(almacen.tablaReserva, almacen.error, almacen.exito);
    },
    error: function(e){
        alert("Error, codigo: "+e.code);
    },
    exito: function(){
        alert("Reserva guardada en dispositivo, en espera de sincronizacion");
    },
    tablaReserva: function(tx){
        tx.executeSql("create table if not exists reservas(th, np, nh, nd) "); 
        tx.executeSql("INSERT INTO reservas(th, np, nh, nd)  VALUES('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"') ");

    },
    tablaHistorial: function(tx){
        tx.executeSql("create table if not exists historial(th, np, nh, nd) "); 
        tx.executeSql("INSERT INTO historial(th, np, nh, nd)  VALUES('"+almacen.th+"','"+almacen.np+"','"+almacen.nh+"','"+almacen.nd+"') ");

    },
    guardaHistorial: function(th, np, nh, nd){
        //almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 20000);
        almacen.th =th;
        almacen.np =np;
        almacen.nh =nh;
        almacen.nd =nd;
        almacen.db.transaction(almacen.tablaHistorial, almacen.error, null);
    },
    syncData: function(){
        alert("syncData");
        almacen.db = window.openDatabase("hotelApp", "1.0", "Hotel App", 20000);
        almacen.db.transaction(almacen.leerReservas, almacen.error, almacen.reservaLeida);
    },
    leerReservas: function(tx){
        tx.executeSql("select * from reservas ", [], function(tx2, response){
            for(i=0; i<response.rows.length; i++){     server.envRes(response.rows.item(i).th,response.rows.item(i).np,response.rows.item(i).nh,response.rows.item(i).nd);
               almacen.guardaHistorial(response.rows.item(i).th,response.rows.item(i).np,response.rows.item(i).nh,response.rows.item(i).nd);
            }
            tx2.executeSql("DELETE FROM reservas");
        },almacen.error);
    }, 
    reservaLeida: function(){
        alert("Reservas Sincronizadas");
    }
}