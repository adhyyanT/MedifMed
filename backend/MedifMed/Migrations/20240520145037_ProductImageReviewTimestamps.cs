using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedifMed.Migrations
{
    /// <inheritdoc />
    public partial class ProductImageReviewTimestamps : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "ProductReviews",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedOn",
                table: "ProductReviews",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "ProductImages",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedOn",
                table: "ProductImages",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "ProductReviews");

            migrationBuilder.DropColumn(
                name: "UpdatedOn",
                table: "ProductReviews");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "ProductImages");

            migrationBuilder.DropColumn(
                name: "UpdatedOn",
                table: "ProductImages");
        }
    }
}
