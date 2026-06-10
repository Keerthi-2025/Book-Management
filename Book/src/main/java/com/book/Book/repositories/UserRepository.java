package com.book.Book.repositories;

import com.book.Book.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository

public interface UserRepository extends JpaRepository<User, String> {
}
