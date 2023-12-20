import { Injectable } from '@nestjs/common';
import {ImagesBodyDto} from "./ImagesBodyDto";
import sharp from "sharp";

@Injectable()
export class AppService {
  async convertImages(images: ImagesBodyDto) {
    let arrayImages: string[] = []
    for(let i = 0; i < images.length; i++) {
      let imgBuffer = await sharp(images[i].buffer)
          .webp()
          .toBuffer()
      const b64 = Buffer.from(imgBuffer).toString('base64');
      const mimeType = 'image/webp'
      arrayImages.push(`data:${mimeType};base64,${b64}`)
    }

    return arrayImages
  }
}
