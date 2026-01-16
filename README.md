# IPL-social

- Name : Cyril Belkhiria

- Email : cyril.belkhiria@student.vinci.be

https://github.com/cyril-belkhiria-vinci/IPL-social.git

This project is a TypeScript application that includes a function to validate email addresses.  
It follows **Test Driven Development (TDD)** principles, and is integrated with a **GitHub Actions** CI pipeline.  
All tests are automatically run on each push to ensure code quality and correctness.

The email validation function checks that :
- The email contains at least one `@`.
- The domain contains at least one dot (`.`) that is not the last character.
- The email does not contain spaces.
- There is text before and after the `@`.

To run the unit tests, use the following command :

npm test