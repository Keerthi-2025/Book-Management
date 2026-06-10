package com.book.Book.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration

//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//        http
//                .csrf(csrf -> csrf.disable())
//                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers(
//                                "/web/api/User/v1/createUser",
//                                "/api/User/v1/signup",
//                                "/api/User/v1/login"
//                        ).permitAll()
//                        .anyRequest().authenticated()
//                );
//
//        return http.build();
//    }
//}


public class SecurityConfig {

    public SecurityConfig() {
        System.out.println("SECURITY CONFIG LOADED");
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth ->
                        auth.anyRequest().permitAll());


        return http.build();
    }
}