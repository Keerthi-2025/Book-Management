


package com.book.Book.Dto.Request;

import com.book.Book.Genre;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class CreateBookDto {

     public String title;

     String author;

     Genre genre;

     MultipartFile image;
}
