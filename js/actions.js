var fn = {
	init: function(){
		if(!fn.islogged())
			window.location.href = "#reg";
		
		//Funcionalidades de Registro
		$('#regSend').click(fn.getRegister);
		$('#takePhoto').click(mediaCapture.takePhoto);
	},
	ready:function(){
		document.addEventListener("deviceready", fn.init, false);
	},
	islogged: function(){
		return ls.estaRegistrado();
	},
	getRegister: function(){
		var nom = $('#regName').val();
		var tel = $('#regTel').val();
		var mail = $('#regMail').val();
		var foto = $('#regPhoto').attr('rel');
		if(nom != '' && tel != '' && mail != '' && foto != undefined && foto != ''){
			server.regSend(nom, tel, mail, foto);
		}else{
			navigator.notification.alert('Todos los campos son requeridos', null, "Error de Registro", "Aceptar");
		}
	}
};

$(fn.ready);