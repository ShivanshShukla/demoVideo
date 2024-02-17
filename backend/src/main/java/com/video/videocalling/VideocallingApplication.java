package com.video.videocalling;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.video.videocalling.Users.User;
import com.video.videocalling.Users.UserService;

@SpringBootApplication
public class VideocallingApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideocallingApplication.class, args);
	}
	@Bean
	public CommandLineRunner commandLineRunner(UserService service){
		return args ->{
			service.register(User.builder().username("shivansh").email("shiv@gmail.com").password("aaa").build());
			service.register(User.builder().username("shukla").email("shukla@gmail.com").password("aaa").build());
			service.register(User.builder().username("hello").email("hell@gmail.com").password("aaa").build());
			service.register(User.builder().username("world").email("world@gmail.com").password("aaa").build());
		};
	}
}
