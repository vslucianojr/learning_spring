package com.example.backend;

import javax.sql.Datasource;

import org.springframework.context.annotation,Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

@Configuration
public class JdbcTicketsRepository {
    @Bean
    public JdbcTemplate jdbcTempate(DataSource dataSource){
        return new JdbcTemplate(dataSource);
    }

    @Bean 
    DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
                .generateUniqueName(true)
                .setType(EmbeddedDatabaseType.)
    }
}