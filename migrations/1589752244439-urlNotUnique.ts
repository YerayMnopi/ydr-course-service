import {MigrationInterface, QueryRunner} from "typeorm";

export class urlNotUnique1589752244439 implements MigrationInterface {
    name = 'urlNotUnique1589752244439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" DROP CONSTRAINT "UQ_ed0371638f966f61a3d4ca2f561"`, undefined);
        await queryRunner.query(`ALTER TABLE "platform" ALTER COLUMN "url" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "platform" DROP CONSTRAINT "UQ_fd53379a6c8ebf64f7b1e891e6f"`, undefined);
        await queryRunner.query(`ALTER TABLE "institution" ALTER COLUMN "url" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "institution" DROP CONSTRAINT "UQ_1a1aabb749dc2845c5592711151"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "institution" ADD CONSTRAINT "UQ_1a1aabb749dc2845c5592711151" UNIQUE ("url")`, undefined);
        await queryRunner.query(`ALTER TABLE "institution" ALTER COLUMN "url" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "platform" ADD CONSTRAINT "UQ_fd53379a6c8ebf64f7b1e891e6f" UNIQUE ("url")`, undefined);
        await queryRunner.query(`ALTER TABLE "platform" ALTER COLUMN "url" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" ADD CONSTRAINT "UQ_ed0371638f966f61a3d4ca2f561" UNIQUE ("url")`, undefined);
    }

}
