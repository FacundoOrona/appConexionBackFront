package com.AplicacionConexionFront.backendConexion.entidadesDTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UsuarioRequestDTO {

    @NotBlank(message = "El nombre de usuario no puede estar vacío")
    @Size(max = 10, message = "El nombre de usuario no puede tener más de 10 caracteres")
    @Pattern(regexp = "^[A-Za-z]+$", message = "El nombre de usuario no puede contener números ni caracteres especiales")
    private String username;

    @NotBlank(message = "La contraseña no puede estar vacía")
    private String password;
}
