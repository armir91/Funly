using Funly.Domain;
using Microsoft.EntityFrameworkCore;

namespace Funly.Infrastructure;

public class AppDbContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Activity> Activities { get; set; }
}