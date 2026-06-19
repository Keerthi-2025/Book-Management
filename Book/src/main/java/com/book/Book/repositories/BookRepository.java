package com.book.Book.repositories;


import com.book.Book.BookStatus;
import com.book.Book.Genre;
import com.book.Book.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository

public interface BookRepository extends JpaRepository<Book, UUID> {

    Optional<Book> findByTitle(String title);

    List<Book> findByTitleContainingIgnoreCase(String title);

    List<Book> findByGenre(Genre genre);

    List<Book> findByStatus(BookStatus status);

}
