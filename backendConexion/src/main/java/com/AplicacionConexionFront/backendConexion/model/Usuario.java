package com.AplicacionConexionFront.backendConexion.model;

import jakarta.persistence.*;
import lombok.*;

@Entity // Marca esta clase como una entidad JPA (una tabla en la base de datos).
@Data // De Lombok. Crea automaticamente los getters, setters, toString, equals y hashCode
@NoArgsConstructor //Lombok. Genera constructor sin parametros 
@AllArgsConstructor  //Genera el constructor cin todos los parametros
public class Usuario {

    @Id //Hace que el ID se genere automáticamente (autoincremental en MySQL).
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Hace que el ID se genere automaticamente, autoincremental en MySQL
    private Long id;
    
    private String username;
    private String password;
}
