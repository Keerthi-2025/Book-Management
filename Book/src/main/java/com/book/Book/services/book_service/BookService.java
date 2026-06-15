package com.book.Book.services.book_service;

import com.book.Book.Dto.Request.CreateBookDto;
import com.book.Book.entities.Book;

import java.util.List;
import java.util.UUID;

public interface BookService {

     String addBook(CreateBookDto dto);

     String updateBook(UUID book_Id, CreateBookDto dto);

     String deleteBook(UUID book_Id);

     List<Book> getAllBooks();

     Book getBookByTitle(String title);

     List<Book>searchBooks(String title);

     Long getBookCount();
}
