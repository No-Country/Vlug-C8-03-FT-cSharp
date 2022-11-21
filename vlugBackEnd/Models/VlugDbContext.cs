using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace vlugBackEnd.Models;

public partial class VlugDbContext : DbContext
{
    public VlugDbContext()
    {
    }

    public VlugDbContext(DbContextOptions<VlugDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AirPortCityCountryCode> AirPortCityCountryCodes { get; set; }

    public virtual DbSet<AirsCompany> AirsCompanies { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Flight> Flights { get; set; }

    public virtual DbSet<FlightsTicket> FlightsTickets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UsersProfile> UsersProfiles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=bdevelopment.net;Database=VlugDB;User=vluguser;Password=dd87c26e-d154-4c8c-b91a-74e25a388122;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AirPortCityCountryCode>(entity =>
        {
            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.City)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.Country)
                .IsRequired()
                .HasMaxLength(50);
        });

        modelBuilder.Entity<AirsCompany>(entity =>
        {
            entity.HasKey(e => e.IdAirCompany);

            entity.Property(e => e.LogoUrl).IsRequired();
            entity.Property(e => e.NameComp)
                .IsRequired()
                .HasMaxLength(50);
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.IdBooking);

            entity.Property(e => e.DateBooking).HasColumnType("date");
            entity.Property(e => e.MountReward).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Status)
                .IsRequired()
                .HasMaxLength(20);

            entity.HasOne(d => d.IdFlightTicketNavigation).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.IdFlightTicket)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Bookings_FlightsTickets");

            entity.HasOne(d => d.IdUserNavigation).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.IdUser)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Bookings_Users");
        });

        modelBuilder.Entity<Contact>(entity =>
        {
            entity.HasKey(e => e.IdContact);

            entity.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.FullName)
                .IsRequired()
                .HasMaxLength(50);

            entity.HasOne(d => d.IdUserNavigation).WithMany(p => p.Contacts)
                .HasForeignKey(d => d.IdUser)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Contacts_Users");
        });

        modelBuilder.Entity<Flight>(entity =>
        {
            entity.HasKey(e => e.IdFlight);

            entity.Property(e => e.Code)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.Shipflight)
                .IsRequired()
                .HasMaxLength(20);

            entity.HasOne(d => d.IdAirCompanyNavigation).WithMany(p => p.Flights)
                .HasForeignKey(d => d.IdAirCompany)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Flights_AirsCompanies");
        });

        modelBuilder.Entity<FlightsTicket>(entity =>
        {
            entity.HasKey(e => e.IdFlightTicket);

            entity.Property(e => e.Arrival)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.BoardingTime).HasPrecision(0);
            entity.Property(e => e.Class)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.DateFligh).HasColumnType("date");
            entity.Property(e => e.Departure)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.Gate)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.Mount).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PassengerName)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.Seat)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.Status)
                .IsRequired()
                .HasMaxLength(20);
            entity.Property(e => e.TicketCode)
                .IsRequired()
                .HasMaxLength(50);

            entity.HasOne(d => d.IdFlightNavigation).WithMany(p => p.FlightsTickets)
                .HasForeignKey(d => d.IdFlight)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_FlightsTickets_Flights");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.IdUser);

            entity.Property(e => e.Email)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.FullName)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.ImgUrl).IsRequired();
            entity.Property(e => e.Password).IsRequired();
            entity.Property(e => e.Salt).IsRequired();
            entity.Property(e => e.Status)
                .IsRequired()
                .HasMaxLength(20);

            entity.HasOne(d => d.IdProfileNavigation).WithMany(p => p.Users)
                .HasForeignKey(d => d.IdProfile)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Users_Profiles");
        });

        modelBuilder.Entity<UsersProfile>(entity =>
        {
            entity.HasKey(e => e.IdUseProfile).HasName("PK_Profiles");

            entity.Property(e => e.NameRole)
                .IsRequired()
                .HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
