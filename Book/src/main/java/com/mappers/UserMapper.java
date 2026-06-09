package com.mappers;

import com.entities.User;
import org.springframework.stereotype.Component;

@Component

public class UserMapper {
    public User touser(Integer user_Id, String userName, String email, String password){
        return User.builder()
                .user_Id(user_Id)
                .userName(userName)
                .email(email)
                .password(password)
                .build();
    }
}
