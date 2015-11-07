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
        almacen.db.transaction(almacen.tablaReserva2, almacen.error, almacen.exito);
        alert("Reserva guardada en BD");
    },
    error: function(e){
        alert("Error, codigo: "+e.code);
    },
    exito: function(){
        alert("Reserva guardada en dispositivo, en espera de sincronizacion");
    },
    tablaReserva: function(tx){
        tx.executeSql("create table if not exists reservas(th, np, nh, nd) ");  
    },
    tablaReserva2: function(tx){
        tx.executeSql("insert into reservas(th,np,nh,nd) values("+almacen.th+","+almacen.np+","+almacen.nh+","+almacen.nd+"); ");
    }
    
}