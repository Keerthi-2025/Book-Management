package com.book.Book.mappers;


import com.book.Book.BookStatus;
import com.book.Book.Dto.Request.CreateBookDto;
import com.book.Book.entities.Book;
import org.springframework.stereotype.Component;

@Component

public class BookMapper {
    public Book toBook(CreateBookDto dto){
        return Book.builder()
                .title(dto.title())
                .author(dto.author())
                .genre(dto.genre())
                .imageUrl(dto.imageUrl())
                .status(BookStatus.AVAILABLE)
                .build();
    }
}
