import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1589739702296 implements MigrationInterface {
    name = 'initial1589739702296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teacher" ("createdAt" date NOT NULL, "updatedAt" date NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, "url" character varying(510) NOT NULL, CONSTRAINT "UQ_55be152c2c710d5939dae9a86aa" UNIQUE ("name"), CONSTRAINT "UQ_373a189836e30c0e0bd2280c3df" UNIQUE ("slug"), CONSTRAINT "UQ_ed0371638f966f61a3d4ca2f561" UNIQUE ("url"), CONSTRAINT "PK_2f807294148612a9751dacf1026" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "platform" ("createdAt" date NOT NULL, "updatedAt" date NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, "url" character varying(255) NOT NULL, CONSTRAINT "UQ_b9b57ec16b9c2ac927aa62b8b3f" UNIQUE ("name"), CONSTRAINT "UQ_7d357ea8eb38ebf510b5e208032" UNIQUE ("slug"), CONSTRAINT "UQ_fd53379a6c8ebf64f7b1e891e6f" UNIQUE ("url"), CONSTRAINT "PK_c33d6abeebd214bd2850bfd6b8e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "institution" ("createdAt" date NOT NULL, "updatedAt" date NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, "url" character varying(255) NOT NULL, CONSTRAINT "UQ_d218ad3566afa9e396f184fd7d5" UNIQUE ("name"), CONSTRAINT "UQ_eef02e265f84ceb9d48b88015f9" UNIQUE ("slug"), CONSTRAINT "UQ_1a1aabb749dc2845c5592711151" UNIQUE ("url"), CONSTRAINT "PK_f60ee4ff0719b7df54830b39087" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "course" ("createdAt" date NOT NULL, "updatedAt" date NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, "price" numeric NOT NULL, "url" character varying(510) NOT NULL, "platformId" uuid, "institutionId" uuid, CONSTRAINT "UQ_30d559218724a6d6e0cc4f26b0e" UNIQUE ("name"), CONSTRAINT "UQ_a101f48e5045bcf501540a4a5b8" UNIQUE ("slug"), CONSTRAINT "UQ_2f1aaee9767a3769e00b6000d96" UNIQUE ("url"), CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category" ("createdAt" date NOT NULL, "updatedAt" date NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "UQ_cb73208f151aa71cdd78f662d70" UNIQUE ("slug"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "course_teachers_teacher" ("courseId" uuid NOT NULL, "teacherId" uuid NOT NULL, CONSTRAINT "PK_a0248843469719db310da79697e" PRIMARY KEY ("courseId", "teacherId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_505162e2e59267d612fa3f04e2" ON "course_teachers_teacher" ("courseId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_af0bcbf4cc97177e27aeec5929" ON "course_teachers_teacher" ("teacherId") `, undefined);
        await queryRunner.query(`CREATE TABLE "course_categories_category" ("courseId" uuid NOT NULL, "categoryId" uuid NOT NULL, CONSTRAINT "PK_36021e840d8d2354bdfe896cd49" PRIMARY KEY ("courseId", "categoryId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9d1ae579281b1ab3aa589f0f4c" ON "course_categories_category" ("courseId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_e27ba73792caadf70547cf772a" ON "course_categories_category" ("categoryId") `, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_c02dba014350a5220c977471eaa" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_8fa9f33441d0e7cb28c5d934bc4" FOREIGN KEY ("institutionId") REFERENCES "institution"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "course_teachers_teacher" ADD CONSTRAINT "FK_505162e2e59267d612fa3f04e21" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "course_teachers_teacher" ADD CONSTRAINT "FK_af0bcbf4cc97177e27aeec59294" FOREIGN KEY ("teacherId") REFERENCES "teacher"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "course_categories_category" ADD CONSTRAINT "FK_9d1ae579281b1ab3aa589f0f4ca" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "course_categories_category" ADD CONSTRAINT "FK_e27ba73792caadf70547cf772a1" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course_categories_category" DROP CONSTRAINT "FK_e27ba73792caadf70547cf772a1"`, undefined);
        await queryRunner.query(`ALTER TABLE "course_categories_category" DROP CONSTRAINT "FK_9d1ae579281b1ab3aa589f0f4ca"`, undefined);
        await queryRunner.query(`ALTER TABLE "course_teachers_teacher" DROP CONSTRAINT "FK_af0bcbf4cc97177e27aeec59294"`, undefined);
        await queryRunner.query(`ALTER TABLE "course_teachers_teacher" DROP CONSTRAINT "FK_505162e2e59267d612fa3f04e21"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_8fa9f33441d0e7cb28c5d934bc4"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_c02dba014350a5220c977471eaa"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_e27ba73792caadf70547cf772a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9d1ae579281b1ab3aa589f0f4c"`, undefined);
        await queryRunner.query(`DROP TABLE "course_categories_category"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_af0bcbf4cc97177e27aeec5929"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_505162e2e59267d612fa3f04e2"`, undefined);
        await queryRunner.query(`DROP TABLE "course_teachers_teacher"`, undefined);
        await queryRunner.query(`DROP TABLE "category"`, undefined);
        await queryRunner.query(`DROP TABLE "course"`, undefined);
        await queryRunner.query(`DROP TABLE "institution"`, undefined);
        await queryRunner.query(`DROP TABLE "platform"`, undefined);
        await queryRunner.query(`DROP TABLE "teacher"`, undefined);
    }

}
