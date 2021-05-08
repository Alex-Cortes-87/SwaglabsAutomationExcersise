Feature: Swaglabs Product order

    As a customer
    I can navigate trough the page to purchase different products

    Scenario Outline: Order Highest and Lowest products price

        Given I fill the swaglabs page with "<user_name>" and "<user_password>" credentials
        And I login the page
        And I add lowest and highest price products to the shopping cart
        And I complete the checkout process with "<client_first_name>", "<client_last_name>" and "<client_zip_code>" information
        When I finish the checkout process
        Then I see the "<dispatched_order_message>" in the confirmation page

        Examples:
            | user_name     | user_password | client_first_name | client_last_name | client_zip_code | dispatched_order_message |
            | standard_user | secret_sauce  | Arthur            | Test             | 123456          | THANK YOU FOR YOUR ORDER |
