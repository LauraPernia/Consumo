$('#id_form').submit(function(event) {
        event.preventDefault();	  
        var ip = "192.168.137.240";
        var puerto = "8000";		
        var monto = $.trim($('#monto').val());
		var moneda = $.trim($('#moneda').val());		
		var URL_SET_SALE = "http://" + ip + ":" + puerto + "/sale?monto=";		
        var montoTran = monto;
        var cod_moneda = moneda;
        var terminal_id = terminal;	
		var urlSale = URL_SET_SALE + montoTran + "&cod_moneda=" + cod_moneda;		
        $.ajax({
			url : urlSale,
            type: "GET",         
            dataType : "json",
			timeout:  30000,
            success:function(dataresponse, statustext, response) {				
				$.ajax({
					url : "",
					type : "",
					dataType : "json"
					timeout : 30000
					success:function(dataresponse, statustext, responde) {
                      alert("mensaje: " + dataresponse.mensaje);
                      var codigo = document.getElementById('codigoR');
				      var descripcion = document.getElementById('descripcionR');
				      var comercio = document.getElementById('comercio');
				      var terminal = document.getElementById('terminal');
				      var tarjeta = document.getElementById('tarjeta');
				      var auth = document.getElementById('auth');
				      var fecha = document.getElementById('fecha');
				      var hora = document.getElementById('hora');
				      var referencia = document.getElementById('referencia');
				      var estado = document.getElementById('estado');
				      var mensaje = document.getElementById('mensaje');
				      codigo.value = dataresponse.respuestaTransacción;
				      descripcion.value = dataresponse.mensaje;
				      comercio.value = dataresponse.merchID;
				      terminal.value = dataresponse.terminalID;
				      tarjeta.value = dataresponse.pan;
                      auth.value = dataresponse.autorizacion;
				      fecha.value = dataresponse.fecha;
				      hora.value = dataresponse.hora;
				      referencia.value = dataresponse.referencia;
				      estado.value = dataresponse.estado;
					}
				});
                					
			},
            error: function(request, errorcode, errortext) {
			   alert(request + ' ' + errorcode + ' ' + errortext);
			   alert(Object.keys(request));
			   console.log(request);
			   console.log(errorcode);
			   console.log(errortext);
			}
        });		        
});	      