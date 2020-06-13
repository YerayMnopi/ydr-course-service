import {MigrationInterface, QueryRunner} from "typeorm";

export class undoUniqueUrl1590344660451 implements MigrationInterface {
    name = 'undoUniqueUrl1590344660451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "UQ_2f1aaee9767a3769e00b6000d96"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "UQ_2f1aaee9767a3769e00b6000d96" UNIQUE ("url")`, undefined);
    }

}
