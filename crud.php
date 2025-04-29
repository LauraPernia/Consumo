<?php
	public function registrarData($montoTransaccion,
	                              $codigoMoneda,
								  $respuestaTrasaccion,
								  $referencia,
								  $fecha,
								  $hora,
								  $autorizacion,
								  $pan,
								  $terminal,
								  $comercio,
								  $mensaje,
								  $estado){
        $bd = obtenerConexion();		
		$sentencia = $bd->prepare("insert into tb_tx_pos values (?,?,?,?,?,?,?,?,?,?,?,?)");
		return $sentencia->execute([$montoTransaccion,
                                    $codigoMoneda,
                                    $respuestaTransaccion,
                                    $referencia,
                                    $fecha,
                                    $hora,
                                    $autorizacion,
                                    $pan,
                                    $terminal,
                                    $comercio,
                                    $mensaje,
                                    $estado)];
	}
	
	public function obtener($montoTransaccion,
	                        $codigoMoneda,
							$referencia,
							$fecha,
							$hora,
							$autorizacion,
							$pan,
							$terminal,
							$comercio) {
      $bd = obtenerConexion();
      $sql = "select count(*) from tb_tx_pos 
	          where montoTransaccion = ? 
			  and codigoMoneda = ? 
			  and referencia = ? 
			  and fecha = ? 
			  and hora = ? 
			  and autorizacion = ? 
			  and pan = ? 
			  and terminal =? 
			  and comercio = ?";  
      $sentencia = $bd->prepare($sql);	  
	  $sentencia->execute([$montoTransaccion,
	                              $codigoMoneda,
								  $referencia,
								  $fecha,
								  $hora,
								  $autorizacion,
								  $pan,
								  $terminal,
								  $comercio]);
      return $sentencia->fetchObject();
   }  
?>