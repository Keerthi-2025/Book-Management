package com.book.Book.Dto.Request;

import com.book.Book.Genre;

public record CreateBookDto(String title, String author, Genre genre, String imageUrl) {
}
