package com.book.Book.Dto.Response;

import com.book.Book.Role;

public record CreateLoginResponseDto(String message, String userName, String email, String password, Role role) {
}
