import { Get, Controller } from "@nestjs/common";

@Controller("health")
export class AppController {
  @Get("health-check")
  async healthcheck() {
    return "Service Up";
  }
}
