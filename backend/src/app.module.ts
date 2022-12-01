import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FakoModule } from './fako/fako.module';
import { FokotanyModule } from './fokotany/fokotany.module';
import { PlaceModule } from './place/place.module';
import { TypeModule } from './type/type.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AuthModule } from './auth/auth.module';
import { ContenuModule } from './contenu/contenu.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/entities/*.js'],
      synchronize: true,
      autoLoadEntities: true
    }),
    FakoModule,
    FokotanyModule,
    PlaceModule,
    TypeModule,
    UtilisateurModule,
    AuthModule,
    ContenuModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads')
    }),
    AdminModule,
  ]
})
export class AppModule {}
