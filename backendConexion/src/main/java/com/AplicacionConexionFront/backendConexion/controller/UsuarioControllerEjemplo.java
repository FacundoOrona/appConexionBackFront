package com.AplicacionConexionFront.backendConexion.controller;

import com.AplicacionConexionFront.backendConexion.entidadesDTO.UsuarioDTO;
import com.AplicacionConexionFront.backendConexion.entidadesDTO.UsuarioRequestDTO;
import com.AplicacionConexionFront.backendConexion.mappers.UsuarioMapper;
import com.AplicacionConexionFront.backendConexion.model.Usuario;
import com.AplicacionConexionFront.backendConexion.repository.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("")
public class UsuarioControllerEjemplo {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioMapper usuarioMapper;

    // Crear usuario (POST)
    //Recibe un usuarioRequestDTO, lo valida.
    @PostMapping
    public ResponseEntity<String> crearUsuario(@Valid @RequestBody UsuarioRequestDTO usuarioRequestDTO) {
        //Guarda en un objeto usuario la conversion de usuarioRequestDTO a Usuario que se hace en el mapper
        Usuario usuario = usuarioMapper.toUsuario(usuarioRequestDTO);
        //Guarda el usuario
        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Usuario creado exitosamente");
    }

    // Obtener todos los usuarios (GET)
    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> obtenerUsuarios() {
        //Hace una lista de usuarios llamando directamente a la BD
        List<Usuario> usuarios = usuarioRepository.findAll();
        //Convierte la lista de usuarios en de usuariosdto para poder mostrar en el frontend
        List<UsuarioDTO> usuariosDTO = usuarioMapper.toUsuarioDTOList(usuarios);
        return ResponseEntity.ok(usuariosDTO);
    }

    /*Spring validará automáticamente el UsuarioRequestDTO gracias a @Valid. 
    Si algo no cumple (como username con más de 10 caracteres o con números), lanza un error 400.
    Estas mismas se pueden manejar con @ControllerAdvice */
}
