package com.AplicacionConexionFront.backendConexion.entidadesDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDTO {
    private Long id;
    private String username;
}

/*En general, no es buena práctica exponer contraseñas en un DTO, 
especialmente si vas a enviar estos datos al frontend. Si necesitás 
un DTO para registro o autenticación, te puedo hacer otro que incluya 
la contraseña, pero solo para esos fines. */
