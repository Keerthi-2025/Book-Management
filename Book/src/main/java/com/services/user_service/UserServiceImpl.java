package com.services.user_service;


import com.entities.User;
import com.exceptions.ApiRequestException;
import com.mappers.UserMapper;
import com.repositories.UserRepository;
import com.utils.UUIDUtil;
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
    public String createUser(Integer user_Id, String userName, String email, String password) {
        User user = userMapper.touser(user_Id, userName, email, password);
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
