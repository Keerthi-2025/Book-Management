package com.book.Book.Dto.Response;

import com.book.Book.BookStatus;
import com.book.Book.Genre;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

public record BookResponseDto(UUID book_Id, String title, String author, Genre genre, BookStatus status, MultipartFile imageUrl) {
}
