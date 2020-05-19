import {MigrationInterface, QueryRunner} from "typeorm";

export class nullabeDate1589747852905 implements MigrationInterface {
    name = 'nullabeDate1589747852905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" ALTER COLUMN "image" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "platform" ALTER COLUMN "image" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "institution" ALTER COLUMN "image" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "image" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "image" DROP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "image" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "course" ALTER COLUMN "image" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "institution" ALTER COLUMN "image" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "platform" ALTER COLUMN "image" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "teacher" ALTER COLUMN "image" SET NOT NULL`, undefined);
    }

}
