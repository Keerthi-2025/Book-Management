package com.book.Book.services.user_service;


import com.book.Book.Dto.Request.CreateUserdto;
import com.book.Book.Dto.Request.SignupDto;
import com.book.Book.Role;
import com.book.Book.entities.User;
import com.book.Book.exceptions.ApiRequestException;
import com.book.Book.mappers.UserMapper;
import com.book.Book.repositories.UserRepository;
import com.book.Book.utils.UUIDUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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
    public String signup(SignupDto dto) {

        //check if email exists
        if(userRepository.findByEmail(dto.email()).isPresent()){
            throw  new RuntimeException("Email already exists");
        }

        User user = userMapper.touser(dto.userName(),dto.email(),dto.password(), Role.USER);
        userRepository.save(user);
        return "User registered successfully";
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
    public User getUserById( UUID user_Id) {
        return userRepository.findById((user_Id)).orElseThrow(()-> new ApiRequestException("User ID not found"));
    }

    @Override
    public String adminSignup(CreateUserdto dto) {
        if(userRepository.findByEmail(dto.email()).isPresent()){
            throw  new RuntimeException("Email already exists");
        }

        User admin = userMapper.touser(dto.userName(), dto.email(), dto.password(), Role.ADMIN);
        userRepository.save(admin);
        return "Admin registered successfully";
    }


}
