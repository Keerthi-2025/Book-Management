package com.services.user_service;

import com.entities.User;

import java.util.List;

public interface UserService {

    String signupUser(Integer user_Id, String userName, String email, String password );

    String createUser(Integer user_Id, String userName, String email, String password);

    List<User> getAllUsers();

    User GetUserById(Integer user_Id);
}
