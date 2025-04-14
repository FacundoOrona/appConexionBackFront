package com.AplicacionConexionFront.backendConexion.controller;

import com.AplicacionConexionFront.backendConexion.model.Usuario;
import com.AplicacionConexionFront.backendConexion.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController // Indica que esta clase responde con datos JSON (no vistas HTML).
@RequestMapping("/api/usuarios") // Todo lo que empiece con /api/usuarios se maneja acá.
@CrossOrigin(origins = "http://localhost:5173") // Permite que tu frontend (en el puerto 5173) se conecte con este
                                                // backend (en 8080).
public class UsuarioController {

    // Instancio el repositorio de Usuario
    @Autowired
    private UsuarioRepository usuarioRepository;

    // REGISTRO DE USUARIO
    @PostMapping // Escucha un POST a /api/usuarios.
    public Usuario crearUsuario(@RequestBody Usuario usuario) { // @RequestBody: Recibe un objeto JSON desde el frontend
                                                                // y lo convierte a Usuario
        return usuarioRepository.save(usuario); // Guarda ese usuario en la base de datos. Devuelve el usuario guardado
                                                // (útil para confirmar que se guardó bien).
    }

    @PostMapping("/login")
    public Usuario loginUsuario(@RequestBody Usuario usuario) {
        Usuario encontrado = usuarioRepository.findByUsernameAndPassword(
                usuario.getUsername(), usuario.getPassword());

        if (encontrado != null) {
            return encontrado;
        } else {
            throw new RuntimeException("Usuario o contraseña incorrectos");
        }
    }

    // LISTAR TODOS LOS USUARIOS
    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

}
