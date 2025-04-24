package com.AplicacionConexionFront.backendConexion.mappers;

import com.AplicacionConexionFront.backendConexion.model.Usuario;
import com.AplicacionConexionFront.backendConexion.entidadesDTO.UsuarioRequestDTO;
import com.AplicacionConexionFront.backendConexion.entidadesDTO.UsuarioDTO;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

    // De DTO de entrada (registro) a entidad
    Usuario toUsuario(UsuarioRequestDTO dto);

    // De entidad a DTO de salida (respuesta)
    UsuarioDTO toUsuarioDTO(Usuario usuario);

    // Para listas
    List<UsuarioDTO> toUsuarioDTOList(List<Usuario> usuarios);
}
