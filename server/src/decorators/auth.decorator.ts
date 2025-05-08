import { UseGuards } from '@nestjs/common';
import { WsJwtGuard } from 'src/support/guards/jwt.guard';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

export const Auth = () => UseGuards(JwtAuthGuard);

export const WsAuth = () => UseGuards(WsJwtGuard);
