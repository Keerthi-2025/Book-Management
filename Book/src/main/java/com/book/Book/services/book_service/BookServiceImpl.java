package com.book.Book.services.book_service;


import com.book.Book.BookStatus;
import com.book.Book.Dto.Request.CreateBookDto;
import com.book.Book.Dto.Response.BookResponseDto;
import com.book.Book.Genre;
import com.book.Book.entities.Book;
import com.book.Book.exceptions.ApiRequestException;
import com.book.Book.mappers.BookMapper;
import com.book.Book.repositories.BookRepository;
import com.book.Book.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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


//    public String addBook(CreateBookDto dto) {
//        Book book = bookMapper.toBook(dto);
//        bookRepository.save(book);
//        return "Book added successfully";
//    }

    @Override
    public String addBook(CreateBookDto dto) {

        try {

            String uploadDir = "uploads/";

            File dir = new File(uploadDir);

            if (!dir.exists()) {
                dir.mkdirs();
            }

            String fileName =
                    UUID.randomUUID() +
                            "_" +
                            dto.getImage().getOriginalFilename();

            Path path =
                    Paths.get(uploadDir, fileName);

            Files.copy(
                    dto.getImage().getInputStream(),
                    path
            );

            Book book = Book.builder()
                    .title(dto.getTitle())
                    .author(dto.getAuthor())
                    .genre(dto.getGenre())
                    .status(BookStatus.AVAILABLE)
                    .imageUrl("/uploads/" + fileName)
                    .build();

            bookRepository.save(book);

            return "Book added successfully";

        } catch (Exception e) {

            throw new RuntimeException(e);
        }
    }

    @Override
    public String updateBook(UUID book_Id, CreateBookDto dto) {
        Book book = bookRepository.findById(book_Id).orElseThrow(()-> new ApiRequestException("Book not found"));

        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setGenre(dto.getGenre());
//        book.setImageUrl(dto.imageUrl());
        bookRepository.save(book);

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
        return bookRepository.findAll();
    }

    @Override
    public Book getBookByTitle(String title) {
        return bookRepository.findByTitle(title).orElseThrow(()-> new ApiRequestException("Book not found"));
    }

    @Override
    public List<Book> searchBooks(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }

    @Override
    public Long getBookCount() {
        return bookRepository.count();
    }

    @Override
    public List<BookResponseDto> getAllAvailableBooks() {
        return bookRepository.findByStatus(BookStatus.AVAILABLE).stream().map(bookMapper::toResponse).toList();
    }

    @Override
    public List<BookResponseDto> getBooksByGenre(Genre genre) {
        return bookRepository.findByGenre(genre).stream().map(bookMapper::toResponse).toList();
    }
}
