package com.book.Book.services.user_service;

import com.book.Book.Dto.CreateUserdto;
import com.book.Book.Dto.SignupDto;
import com.book.Book.Role;
import com.book.Book.entities.User;

import java.util.List;
import java.util.UUID;

public interface UserService {

    String signup(SignupDto dto);

    String createUser(String userName, String email, String password, Role role);

    List<User> getAllUsers();

    User getUserById( UUID user_Id);

    String adminSignup(CreateUserdto dto);

}
