package com.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "books")
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer book_Id;

    @Column
    private  String title;

    @Column
    private  String author;

    @Column
    private String genre;

    @Column
    private String status;

    @Column
    private  String imageUrl;

}
