package com.globe.gvendor.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id; //primary key from @Id
    private String firstName;
    private String lastName;
    private String department;
    @NaturalId(mutable = true) //will make email a unique key which could not be modified so it was set to true to make it editable
    private String email;
    private String password;
}
