package com.book.Book.entities;


import com.book.Book.BookStatus;
import com.book.Book.Genre;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Table(name = "books")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity

public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID book_Id;

    @Column
    private  String title;

    @Column
    private  String author;

    @Enumerated(EnumType.STRING)
    private Genre genre;

    @Enumerated(EnumType.STRING)
    private BookStatus status;

    @Column
    private  String imageUrl;
}
