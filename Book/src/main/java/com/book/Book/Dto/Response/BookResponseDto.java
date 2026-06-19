package com.book.Book.Dto.Response;

import com.book.Book.BookStatus;
import com.book.Book.Genre;
import com.book.Book.services.book_service.BookService;

import java.util.UUID;

public record BookResponseDto(UUID book_Id, String title, String author, Genre genre, BookStatus status, String imageUrl) {
}
