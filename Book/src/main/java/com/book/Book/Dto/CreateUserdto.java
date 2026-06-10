package com.book.Book.Dto;

import com.book.Book.Role;

import java.util.UUID;

public record CreateUserdto(String userName, String password, String email, Role role) {
}
