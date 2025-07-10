# Gym Project Database

## Overview

This repository contains the database schema and sample data for the Gym Project, including user management, attendance tracking, and monthly attendance rankings.

## Tables

- `users`: Stores user information (username, email, password, gender, height, weight, phone number).
- `attendance`: Logs daily presence/absence of users.
- `rankings`: Stores monthly rankings of users based on attendance count.

## Functions

- `insert_monthly_rankings()`: Calculates and inserts monthly attendance rankings into the `rankings` table.

## How to Use

1. Create the tables by running the SQL scripts in the `schema` directory.
2. Insert sample data using the scripts in the `data` directory.
3. To update monthly rankings, execute the `insert_monthly_rankings()` function manually or schedule it via a cron job.

## Files

- `schema/users.sql`
- `schema/attendance.sql`
- `schema/rankings.sql`
- `functions/insert_monthly_rankings.sql`
- `data/insert_users.sql`
- `data/insert_attendance.sql`
- `data/insert_rankings.sql`

## Notes

- The `gender` field is stored as a boolean (`true` = male, `false` = female).
- Monthly rankings are stored permanently to maintain history.
