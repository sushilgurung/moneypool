# 📘 Database Naming Conventions

This guide outlines the recommended naming conventions for database objects in the **Money POOL API**, using **PostgreSQL**.


## General Principles
* **Lowercase:** All database object names should be in lowercase.
* **Snake Case:** Words within a name should be separated by underscores (`_`).
* **Descriptive and Concise:** Names should clearly indicate the object's purpose without being excessively long.
* **Avoid Reserved Keywords:** Do not use PostgreSQL or SQL reserved words.
* **Consistency:** Maintain consistency with these conventions throughout the database.


### Tables
* Use plural nouns generally (e.g., `customers`, `products`, `order_items`).
* Singular nouns may be used for lookup or configuration tables (e.g., `countries`, `product_categories`).
* Consider prefixes or suffixes for logical grouping (e.g., `log_events`, `config_settings`).

### Columns

* Use singular nouns (e.g., `customer_id`, `product_name`, `order_date`).
* Be specific and avoid generic names.
* Use consistent suffixes for common data types or roles (like., `_id`, `_at`, `_ts`, `_code`) (eg. `user_id`, `created_at`, `event_ts`, `country_code`  ).
* Boolean columns often use `is_` or `has_` prefixes (e.g., `is_active`, `has_discount`).

### Indexes

* Include the table name (or a short abbreviation).
* Indicate the columns involved.
* Specify the index type if not B-tree (e.g., `customers_email_idx`, `orders_customer_id_order_date_idx`, `products_name_gin`).
* Common prefixes: `idx_`, `ix_`, `uidx_` (for unique indexes).

### Primary Keys

* Often named `id`.

### Foreign Keys

* Conventionally named `fk_<referencing_table>_<referenced_table>_<referenced_column(s)>` or `<referencing_column>_fkey`.
* Use the `_id` suffix for foreign key columns (e.g., `customer_id` referencing `customers`).


# PostgreSQL Field Naming Suffix Conventions
 This project follows specific naming conventions for its PostgreSQL database to ensure consistency, readability, and maintainability.

| Suffix   | Data Type / Role                   | Example(s)                                 | Explanation |
|----------|------------------------------------|---------------------------------------------|-------------|
| `_id`    | Primary or Foreign Key Identifier  | `user_id`, `product_id`, `order_id`, `category_id` | Used to represent the primary key of a table or a reference to a record in another table. |
| `_at`    | Timestamp with Time Zone           | `created_at`, `updated_at`, `logged_in_at`  | Represents a precise moment in time including time zone information. Commonly used for audit fields. |
| `_ts`    | Timestamp without Time Zone        | `event_ts`, `report_ts`, `process_ts`       | Timestamp field where timezone context is managed at application level. Be consistent across the project. |
| `_code`  | Unique Code or Abbreviation        | `country_code`, `status_code`, `currency_code` | Denotes a short or standardized code for an entity, category, or enum-like value. |
| `_name`  | Descriptive Name                   | `product_name`, `category_name`, `user_name` | Stores the human-readable name or label for an entity. |
| `_email` | Email Address                      | `user_email`, `contact_email`, `customer_email` | Clearly identifies fields that store email addresses. |
| `_type`  | Type or Category                   | `product_type`, `user_type`, `event_type`   | Indicates a classification or grouping for records. Often paired with enums or lookup tables. |
| `_status`| Current Status                     | `order_status`, `user_status`, `payment_status` | Used to track the current state of a record, usually an enum or constrained string. |
| `_count` | Numerical Count                    | `order_count`, `view_count`, `download_count` | Represents an aggregated or calculated count related to a record. |
| `_flag`  | Boolean Flag                       | `is_deleted_flag`, `is_processed_flag`      | Often used to indicate boolean status. Alternatives like `is_active`, `has_errors` are more expressive. |
| `_ref`   | Reference to Another Entity        | `assigned_user_ref`, `parent_category_ref`  | Alternative to `_id`, used when multiple foreign keys in the same table would otherwise be confusing. |
| `_value` | Generic or Specific Value          | `config_value`, `setting_value`             | Represents a value whose meaning is contextual. Use with caution; specificity is preferred when possible. |

