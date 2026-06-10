package com.book.Book.services.user_service;


import com.book.Book.Role;
import com.book.Book.entities.User;
import com.book.Book.exceptions.ApiRequestException;
import com.book.Book.mappers.UserMapper;
import com.book.Book.repositories.UserRepository;
import com.book.Book.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private  final UserMapper userMapper;
    private  final UUIDUtil uuidUtil;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, UUIDUtil uuidUtil){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.uuidUtil = uuidUtil;
    }


    @Override
    public String signupUser(Integer user_Id, String userName, String email, String password) {
        return "";
    }


    @Override
    public String createUser( String userName, String email, String password, Role role) {
        User user = userMapper.touser( userName, email, password ,role);
//        user.setRole(Role.USER);
        userRepository.save(user);
        return "User created successfully";
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Integer user_Id) {
        return userRepository.findById(String.valueOf(user_Id)).orElseThrow(()-> new ApiRequestException("User ID not found"));
    }
}
