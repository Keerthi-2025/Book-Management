package com.book.Book.controllers;


import com.book.Book.Dto.CreateUserdto;
import com.book.Book.entities.User;
import com.book.Book.services.user_service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/web/api/User")

public class UserController {
    private final UserService userService;

    public  UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/v1/createUser")
    public ResponseEntity<String> createUser(@RequestBody CreateUserdto data){
        String message = userService.createUser(data.userName(), data.email(), data.password(), data.role());
        return ResponseEntity.status(201).body(message);
    }

    @GetMapping("/v1/getAllUsers")
    ResponseEntity<List<User>> getAllUsers(){
        return  ResponseEntity.status(200).body(userService.getAllUsers());
    }

    @GetMapping("/v1/user_Id")
    ResponseEntity<User>getUserId(@RequestParam("user_Id") Integer user_Id){
        return  ResponseEntity.status(200).body(userService.getUserById(user_Id));
    }

}
