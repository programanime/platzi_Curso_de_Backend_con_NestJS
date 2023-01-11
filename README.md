# NestJS
NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). NestJS provides a level of abstraction above the popular Express.js framework, but also exposes the underlying capabilities of Express.js. It also provides a powerful CLI (Command Line Interface) to help developers create, build, and manage their applications.

# NestJS features
NestJS is a modern, progressive Node.js web framework built with TypeScript. It is used to create efficient, scalable, and enterprise-grade server-side applications.

1. Modular Structure: NestJS provides a modular structure that allows developers to easily organize their code into separate modules. This makes it easier to maintain and scale applications.

2. Dependency Injection: NestJS provides a powerful dependency injection system that makes it easy to inject services into components. This makes it easier to test and maintain code.

3. TypeScript Support: NestJS is written in TypeScript, which provides strong typing and object-oriented programming features. This makes it easier to write robust and maintainable code.

4. GraphQL Support: NestJS provides built-in support for GraphQL, making it easy to create GraphQL APIs.

5. WebSockets Support: NestJS provides built-in support for WebSockets, making it easy to create real-time applications.

6. Microservices Support: NestJS provides built-in support for microservices, making it easy to create distributed applications.

7. Logging Support: NestJS provides built-in support for logging, making it easy to debug and monitor applications.

# nestjs what is rimraf

Rimraf is a command line tool for deleting files and directories. It is a cross-platform tool that works on Windows, Mac, and Linux. It is a powerful tool that can delete entire directory trees and can even delete files that are read-only.


# nestjs folder structure

NestJS follows a modular folder structure. The main folders are:

- src: This is the main folder for all of your application code.
- dist: This folder contains the compiled output of your application.
- test: This folder contains all of your application's tests.
- config: This folder contains configuration files for your application.
- public: This folder contains static assets such as images, stylesheets, and JavaScript files.
- node_modules: This folder contains all of the dependencies for your application.


# which is the default accessor in typescript?
The default accessor in TypeScript is public.

```typescript
class Person{
    constructor(private name:string, private lastname:string){

    }
}
```

# Nestjs controller
NestJS controllers are responsible for handling incoming requests and returning responses to the client. They are classes that are decorated with the @Controller() decorator. The controller class contains one or more handler methods, which are responsible for handling the incoming requests. The handler methods are decorated with the @Get(), @Post(), @Put(), @Delete(), or other HTTP method decorators. The controller class also contains methods for injecting services and other NestJS components.

# nestjs param annotation
NestJS provides a variety of annotations that can be used to define parameters for routes and controllers. These annotations include:

@Param() - Used to define a parameter for a route or controller.

@Query() - Used to define a query parameter for a route or controller.

@Body() - Used to define a body parameter for a route or controller.

@Header() - Used to define a header parameter for a route or controller.

@Session() - Used to define a session parameter for a route or controller.

@Cookie() - Used to define a cookie parameter for a route or controller.

@Req() - Used to define a request parameter for a route or controller.

@Res() - Used to define a response parameter for a route or controller.

# NestJS exceptions
NestJS exceptions are errors that occur during the execution of a NestJS application. These exceptions can be caused by a variety of factors, including programming errors, system errors, and user input errors. Common NestJS exceptions include:

- UnhandledPromiseRejectionWarning
- TypeError
- SyntaxError
- ReferenceError
- RangeError
- AssertionError
- NotFoundException
- BadRequestException
- UnauthorizedException
- ForbiddenException
- InternalServerErrorException
- ValidationPipeError

# NestJS error first
NestJS is an open-source web framework for Node.js that follows the principles of error-first development. This means that when an error occurs, it is the first thing that is addressed and handled. This helps to ensure that errors are caught and handled quickly, and that the application is stable and reliable. NestJS also provides a range of tools and features to help developers create robust and secure applications.

# API sanitize
SANITIZE is a process of cleaning up data by removing or modifying certain parts of it that may contain malicious code or be otherwise harmful. This is done to ensure that the data is safe to use and does not contain any malicious code that could be used to compromise the security of a system. It is often used in web development to protect against cross-site scripting (XSS) attacks.

# NestJS pipe
NestJS pipes are a type of middleware that can be used to transform data before it is passed to the route handler. Pipes are used to validate, sanitize, transform, and format data. They can be used to ensure that data is in the correct format before it is used in the application. Pipes can also be used to filter out unwanted data or to add additional data to the request. NestJS pipes are a powerful tool for ensuring that data is in the correct format before it is used in the application.

# DTO design pattern
The Data Transfer Object (DTO) design pattern is a software design pattern used to transfer data between different components of a system. It is a simple object that holds data and provides getter and setter methods to access the data. The DTO pattern is used to reduce the number of calls between components, improve performance, and reduce the complexity of the system. It is also used to reduce the amount of data that needs to be transferred between components. The DTO pattern is often used in distributed systems, where data needs to be transferred between components that are running on different machines.
