import {MigrationInterface, QueryRunner} from "typeorm";

export class nullableFields1589747058761 implements MigrationInterface {
    name = 'nullableFields1589747058761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "UQ_ed0371638f966f61a3d4ca2f561"`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" DROP COLUMN "url"`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" ADD "url" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "UQ_ed0371638f966f61a3d4ca2f561" UNIQUE ("url")`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "price" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "UQ_2f1aaee9767a3769e00b6000d96"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "url"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD "url" character varying(255) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "UQ_2f1aaee9767a3769e00b6000d96" UNIQUE ("url")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "UQ_2f1aaee9767a3769e00b6000d96"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "url"`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD "url" character varying(510) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "UQ_2f1aaee9767a3769e00b6000d96" UNIQUE ("url")`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "price" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "UQ_ed0371638f966f61a3d4ca2f561"`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" DROP COLUMN "url"`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" ADD "url" character varying(510) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "UQ_ed0371638f966f61a3d4ca2f561" UNIQUE ("url")`, undefined);
    }

}
