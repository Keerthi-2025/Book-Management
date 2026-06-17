package com.book.Book.controllers;

import com.book.Book.Dto.Request.CreateBookDto;
import com.book.Book.entities.Book;
import com.book.Book.services.book_service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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

    @DeleteMapping("/v1/deleteBook")
    public  ResponseEntity<String> deleteBook(@RequestParam UUID book_Id){
        return ResponseEntity.ok(bookService.deleteBook(book_Id));
    }

    @GetMapping("/v1/getAllBooks")
    public ResponseEntity<List<Book>> getAllBooks(){
        return  ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/v1/getBookByTitle")
    public ResponseEntity<Book> getBookByTitle(@RequestParam String title){
        return ResponseEntity.ok(bookService.getBookByTitle(title));
    }

    @GetMapping("/v1/searchBooks")
    public  ResponseEntity<List<Book>>searchBooks(@RequestParam String title){
        return  ResponseEntity.ok(bookService.searchBooks(title));
    }

    @GetMapping("/v1/bookCount")
    public ResponseEntity<Long>  getBookCount(){
        return ResponseEntity.ok(bookService.getBookCount());
    }
}
