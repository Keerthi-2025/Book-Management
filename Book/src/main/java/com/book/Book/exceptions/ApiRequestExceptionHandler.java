package com.book.Book.exceptions;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApiRequestExceptionHandler {

    @ExceptionHandler(ApiRequestException.class)
    public ResponseEntity<ApiRequestExceptionModel> handleApiRequestException(
            ApiRequestException ex) {

        ApiRequestExceptionModel error = new ApiRequestExceptionModel(
                ex.getMessage(),
                HttpStatus.BAD_REQUEST.value(),
                LocalDateTime.now());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}