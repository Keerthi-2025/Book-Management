package com.book.Book.services.book_service;


import com.book.Book.Dto.Request.CreateBookDto;
import com.book.Book.entities.Book;
import com.book.Book.exceptions.ApiRequestException;
import com.book.Book.mappers.BookMapper;
import com.book.Book.repositories.BookRepository;
import com.book.Book.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service

public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private  final BookMapper bookMapper;
    private  final UUIDUtil uuidUtil;

    public BookServiceImpl(BookRepository bookRepository, BookMapper bookMapper, UUIDUtil uuidUtil){
        this.bookMapper = bookMapper;
        this.bookRepository = bookRepository;
        this.uuidUtil = uuidUtil;
    }

    @Override
    public String addBook(CreateBookDto dto) {
        Book book = bookMapper.toBook(dto);
        bookRepository.save(book);
        return "Book added successfully";
    }

    @Override
    public String updateBook(UUID book_Id, CreateBookDto dto) {
        Book book = bookRepository.findById(book_Id).orElseThrow(()-> new ApiRequestException("Book not found"));

        book.setTitle(dto.title());
        book.setAuthor(dto.author());
        book.setGenre(dto.genre());
        book.setImageUrl(dto.imageUrl());

        return "Book updated successfully";
    }

    @Override
    public String deleteBook(UUID book_Id) {
        Book book = bookRepository.findById(book_Id).orElseThrow(()-> new ApiRequestException("Book not found"));
        bookRepository.delete(book);
        return "Book deleted successfully";
    }

    @Override
    public List<Book> getAllBooks() {
        return List.of();
    }

    @Override
    public Book getBookByTitle(String title) {
        return null;
    }

    @Override
    public List<Book> searchBooks(String title) {
        return List.of();
    }
}
