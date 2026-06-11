package com.book.Book.controllers;

import com.book.Book.Dto.Request.CreateBookDto;
import com.book.Book.entities.Book;
import com.book.Book.services.book_service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/web/api/Book")

public class BookController {

    private  final BookService bookService;

    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    //ADMIN
    @PostMapping("/v1/addBook")
    public ResponseEntity<String>addBook(@RequestBody CreateBookDto dto){
        return ResponseEntity.status(201).body(bookService.addBook(dto));
    }
}
