package com.AplicacionConexionFront.backendConexion.repository;

import com.AplicacionConexionFront.backendConexion.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

//JpaRepository<Usuario, Long>: Especifica que trabaja con la entidad Usuario y que su ID es tipo Long.
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByUsername(String username);

    Usuario findByUsername(String username);

}

/*Te da métodos ya hechos como:
save(usuario): guarda o actualiza.
findAll(): obtiene todos los registros.
findById(id), deleteById(id) y muchos más.
existsByUsername: JPA lo interpreta como un "SELECT EXISTS..." y te devuelve true o false.*/
