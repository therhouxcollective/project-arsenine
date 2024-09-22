import { Injectable } from '@nestjs/common';
import * as fusion from '@fusionauth/typescript-client';
// Y1rsQOKxO1VeEUL0rYZ1dOHnZy23u3tFxfIVASoVY0NmXvtx6oDXc8A-
@Injectable()
export class FusionAuthService {
  constructor() {
    const client = new fusion.FusionAuthClient(
      'Y1rsQOKxO1VeEUL0rYZ1dOHnZy23u3tFxfIVASoVY0NmXvtx6oDXc8A-',
      'http://localhost:9011',
    );
  }
}
