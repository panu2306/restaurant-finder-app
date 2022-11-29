package com.project.restaurantfinder.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class WorkingHours {
    @Id
    @GeneratedValue
    private Long working_hours_id;

    private String weekday_hours;

    public Long getWorking_hours_id() {
        return working_hours_id;
    }

    public void setWorking_hours_id(Long working_hours_id) {
        this.working_hours_id = working_hours_id;
    }

    public String getWeekday_hours() {
        return weekday_hours;
    }

    public void setWeekday_hours(String weekday_hours) {
        this.weekday_hours = weekday_hours;
    }

    public String getClosed_days() {
        return closed_days;
    }

    public void setClosed_days(String closed_days) {
        this.closed_days = closed_days;
    }

    private String closed_days;
}
