import {MigrationInterface, QueryRunner} from "typeorm";

export class studentsAndType1590341578817 implements MigrationInterface {
    name = 'studentsAndType1590341578817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "type" ("createdAt" date NOT NULL, "updatedAt" date NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "slug" character varying(255) NOT NULL, "image" character varying(255), "url" character varying(255), CONSTRAINT "UQ_e23bfe7255ada131861292923fe" UNIQUE ("name"), CONSTRAINT "UQ_1082c8e1f78a42f763326a0d105" UNIQUE ("slug"), CONSTRAINT "PK_40410d6bf0bedb43f9cadae6fef" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD "students" bigint DEFAULT 0`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD "typeId" uuid`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_860adb709ddcd7089a642dd0ae6" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_860adb709ddcd7089a642dd0ae6"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "typeId"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "students"`, undefined);
        await queryRunner.query(`DROP TABLE "type"`, undefined);
    }

}
