package com.AplicacionConexionFront.backendConexion.repository;

import com.AplicacionConexionFront.backendConexion.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByUsername(String username);
}
