import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsObject, IsOptional, IsString } from 'class-validator';
import { TransformToBoolean } from '../../shared/transformers/to-boolean';

export class CredentialsDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  apiKey?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  user?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  secretKey?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  domain?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  password?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  host?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  port?: string;

  @ApiPropertyOptional()
  @TransformToBoolean()
  @IsBoolean()
  @IsOptional()
  secure?: boolean;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  region?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  accountSid?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  messageProfileId?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  token?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  from?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  senderName?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  projectName?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  applicationId?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  clientId?: string;

  @ApiPropertyOptional()
  @TransformToBoolean()
  @IsBoolean()
  @IsOptional()
  requireTls?: boolean;

  @ApiPropertyOptional()
  @TransformToBoolean()
  @IsBoolean()
  @IsOptional()
  ignoreTls?: boolean;

  @ApiPropertyOptional()
  @IsObject()
  @IsOptional()
  tlsOptions?: Record<string, unknown>;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  baseUrl?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  webhookUrl?: string;
}
