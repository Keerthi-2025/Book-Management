//package com.book.Book.Dto.Request;
//
//import com.book.Book.Genre;
//
//public record CreateBookDto(String title, String author, Genre genre, Multi imageUrl) {
//}


package com.book.Book.Dto.Request;

import com.book.Book.Genre;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CreateBookDto {

    private String title;

    private String author;

    private Genre genre;

    private MultipartFile image;
}