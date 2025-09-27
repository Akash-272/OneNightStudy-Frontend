using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OneNightStudyAPI.Models;
using System.Text.Json;

namespace OneNightStudyAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<BlogPost> BlogPosts { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var stringListConverter = new ValueConverter<List<string>, string>(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
                v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions?)null)
            );

            modelBuilder.Entity<BlogPost>()
                .Property(p => p.UsefulLinks)
                .HasConversion(stringListConverter);

            modelBuilder.Entity<BlogPost>()
                .Property(p => p.Tags)
                .HasConversion(stringListConverter);
        }
    }
}
