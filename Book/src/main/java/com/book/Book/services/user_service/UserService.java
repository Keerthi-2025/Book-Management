package com.book.Book.services.user_service;

import com.book.Book.Role;
import com.book.Book.entities.User;

import java.util.List;
import java.util.UUID;

public interface UserService {

    String signupUser(Integer user_Id, String userName, String email, String password );

    String createUser( String userName, String email, String password, Role role);

    List<User> getAllUsers();

    User getUserById( UUID user_Id);
}
