package com.book.Book.mappers;


import com.book.Book.BookStatus;
import com.book.Book.Dto.Request.CreateBookDto;
import com.book.Book.Dto.Response.BookResponseDto;
import com.book.Book.entities.Book;
import org.springframework.stereotype.Component;

@Component
public class BookMapper {

    public Book toBook(CreateBookDto dto) {

        return Book.builder()
                .title(dto.getTitle())
                .author(dto.getAuthor())
                .genre(dto.getGenre())
                .imageUrl(dto.getImageUrl())
                .status(BookStatus.AVAILABLE)
                .build();
    }

    public BookResponseDto toResponse(Book book) {

        return new BookResponseDto(
                book.getBook_Id(),
                book.getTitle(),
                book.getAuthor(),
                book.getGenre(),
                book.getStatus(),
                book.getImageUrl()
        );
    }
}
