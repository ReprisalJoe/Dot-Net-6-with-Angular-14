namespace Dot_Net_Core_6_With_Angular_14
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllersWithViews();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (!app.Environment.IsDevelopment())
            {                
                app.UseHsts();
            }
            else
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();



            app.MapControllers();

            app.MapFallbackToFile("index.html");

            app.MapControllers();
            app.Run();
        }
    }
}