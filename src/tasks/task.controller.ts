import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  HttpStatus,
  HttpCode,
  HttpException
} from '@nestjs/common';
import { Response } from 'express';
import { TaskService } from './task.service';

@Controller("tasks")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get("end")
  getAll(): string[] {
    return ['task 1', 'task 2'];
  }

  @Get('search')
  searchTask(@Query("name") name: string) : string{
    return "this is what your are looking for " + name;
  }

  // curl -I -X GET -H "Content-Type: application/json" http://localhost:3000/tasks/1
  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getById(@Param("id") id: string): string {
    return `task ${id}`;
  }

  @Get('/exception/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  getByIdNotContent(@Param("id") id: string): string {
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  }


  @Get('/:id/:name')
  getByIdAndName(@Param("id") id: number, @Param("name") name: string): string {
    return `task ${id} ,  name ${name}`;
  }

  // curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"test\"}" http://localhost:3000/tasks/save
  @HttpCode(HttpStatus.CREATED)
  @Post("/save")
  saveTask(@Res() res: Response, @Body() body: any) : any{
    return res.status(HttpStatus.CREATED).json(body);
  }

  //curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"test\"}" http://localhost:3000/tasks
  @Post()
  saveTaskOnly(@Body() body: any) : any{
    return {
      message: "ok",
      body: body
    };
  }

  //curl -X PUT -H "Content-Type: application/json" -d "{\"name\":\"test\"}" http://localhost:3000/tasks/1
  @Put(":id")
  updateTask(@Body() payload: any, @Param("id") id:string) : any{
    return {
     id,
     payload
    };
  }

  //curl -X DELETE http://localhost:3000/tasks/1
  @Delete(":id")
  deleteTask(@Param("id") id:string) : any{
    return {
     id
    };
  }
}
