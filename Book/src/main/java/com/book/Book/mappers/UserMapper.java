package com.book.Book.mappers;

import com.book.Book.Role;
import com.book.Book.entities.User;
import org.springframework.stereotype.Component;

@Component

public class UserMapper {
    public User touser( String userName, String email, String password, Role role){
        return User.builder()
                .userName(userName)
                .email(email)
                .password(password)
                .role(role)
                .build();
    }
}
