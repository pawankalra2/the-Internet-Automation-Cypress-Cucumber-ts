Feature: Automate Form Authentication for the website
    Description: The purpose of this feature is to test the Login Functionality of the-internet website.
    Background: User Navigates to Login Page
        Given User open the-internet website
        When User clicks on "Form Authentication"
        Then User should see "Login Page"

    @FormAuthentication @PositiveScenario
    Scenario: Login into application with valid credentials
        When User enters valid username and password
        And User clicks on Login Button
        Then User should see message "You logged into a secure area!"
        Then User should click on Logout button

    @FormAuthentication @NegativeScenario
    Scenario Outline: Login into application with invalid credentials
        When User enters invalid username and password ex : "<Username>" and "<Password>"
        And User clicks on Login Button
        Then User should see message "<message>"
        Examples:
            | Username    | Password    | message                   |
            | username123 | password123 | Your username is invalid! |
            | tomsmith    | test123     | Your password is invalid! |