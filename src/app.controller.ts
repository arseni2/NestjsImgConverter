import {Controller, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {AppService} from './app.service';
import {ImagesBodyDto} from "./ImagesBodyDto";
import {AnyFilesInterceptor} from "@nestjs/platform-express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post("api/v1/images")
  @UseInterceptors(AnyFilesInterceptor())
  getImages(@UploadedFiles() imagesDto: ImagesBodyDto) {
    return this.appService.convertImages(imagesDto);
  }
}
