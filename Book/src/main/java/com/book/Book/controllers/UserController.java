package com.book.Book.controllers;


import com.book.Book.Dto.Request.CreateLoginDto;
import com.book.Book.Dto.Request.CreateUserdto;
import com.book.Book.Dto.Response.CreateLoginResponseDto;
import com.book.Book.Role;
import com.book.Book.entities.User;
import com.book.Book.services.user_service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/web/api/User")

public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/v1/createUser")
    public ResponseEntity<String> createUser(@RequestBody CreateUserdto data) {
        String message = userService.createUser(data.userName(), data.email(), data.password(), Role.USER);
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllUsers")
    ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.status(200).body(userService.getAllUsers());
    }

    @GetMapping("/v1/getUserById")
    ResponseEntity<User> getUserById(@RequestParam("user_Id") UUID user_Id) {
        return ResponseEntity.status(200).body(userService.getUserById(user_Id));
    }


    @PostMapping("/v1/signup")
    public ResponseEntity<String> signup(@RequestBody CreateUserdto data) {
        String message = userService.createUser(data.userName(), data.email(), data.password(), Role.USER);
        return ResponseEntity.status(201).body(message);
    }

    @PostMapping("/v1/admin/signup")
    public ResponseEntity<String> adminsignup(@RequestBody CreateUserdto data) {
        return ResponseEntity.status(201).body(userService.adminSignup(data));
    }

    @PostMapping("/v1/login")
    public ResponseEntity<CreateLoginResponseDto> login(@RequestBody CreateLoginDto dto){
        return ResponseEntity.ok(userService.login(dto));
    }


    //admin gets user count
    @GetMapping("/v1/usersCount")
    public ResponseEntity<Long> getUsersCount(){
        return ResponseEntity.ok(userService.getUserCount());
    }


}
