using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MedifMed.Migrations
{
    /// <inheritdoc />
    public partial class ProductSmallestUnit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SmallestUnit",
                table: "Products",
                type: "longtext",
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SmallestUnit",
                table: "Products");
        }
    }
}
