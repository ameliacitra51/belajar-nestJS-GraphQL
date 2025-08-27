"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entities/user.entity");
const auth_module_1 = require("./auth/auth.module");
const courses_module_1 = require("./courses/courses.module");
const instructor_entity_1 = require("./users/entities/instructor.entity");
const course_entity_1 = require("./courses/entities/course.entity");
const sections_module_1 = require("./sections/sections.module");
const section_entity_1 = require("./sections/entities/section.entity");
const lessons_module_1 = require("./lessons/lessons.module");
const lesson_entity_1 = require("./lessons/entities/lesson.entity");
const enrollments_module_1 = require("./enrollments/enrollments.module");
const enrollment_entity_1 = require("./enrollments/entities/enrollment.entity");
const progress_module_1 = require("./progress/progress.module");
const reviews_module_1 = require("./reviews/reviews.module");
const progress_entity_1 = require("./progress/entities/progress.entity");
const review_entity_1 = require("./reviews/entities/review.entity");
const category_module_1 = require("./category/category.module");
const category_entity_1 = require("./category/entities/category.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
                playground: true,
                debug: process.env.NODE_ENV !== 'production',
                context: ({ req, res }) => ({ req, res }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_NAME'),
                    entities: [
                        user_entity_1.User,
                        instructor_entity_1.Instructor,
                        course_entity_1.Course,
                        section_entity_1.Section,
                        lesson_entity_1.Lesson,
                        enrollment_entity_1.Enrollment,
                        progress_entity_1.Progress,
                        review_entity_1.Review,
                        category_entity_1.Category,
                    ],
                    synchronize: configService.get('NODE_ENV') !== 'production',
                    logging: configService.get('NODE_ENV') === 'development',
                    uuidExtension: 'pgcrypto',
                    secret: configService.get('JWT_SECRET'),
                }),
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            courses_module_1.CoursesModule,
            sections_module_1.SectionsModule,
            lessons_module_1.LessonsModule,
            enrollments_module_1.EnrollmentsModule,
            progress_module_1.ProgressModule,
            reviews_module_1.ReviewsModule,
            category_module_1.CategoryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map