using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
  private static List<Order> orders = new List<Order>()
    {

            new Order()
            {
                Date = DateTime.Today.AddDays(-2),
                firmName = "FirmaA",
                ProductName = "Ürün 1",
                Amount = 2,
                Price = 10M
            },
             new Order()
     
    };


  private static readonly string[] Summaries = new[]
  {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

  private readonly ILogger<WeatherForecastController> _logger;

  public WeatherForecastController(ILogger<WeatherForecastController> logger)
  {
    _logger = logger;
  }

  [HttpGet(Name = "GetWeatherForecast")]
  public IEnumerable<WeatherForecast> Get()
  {
    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
      Date = DateTime.Now.AddDays(index),
      TemperatureC = Random.Shared.Next(-20, 55),
      Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    })
    .ToArray();
  }

  [HttpPost]
  public IActionResult Save(Order order)
  {
    try {
        orders.Add(order);
    return Ok();
    } catch(Exception ex){
       return BadRequest(ex.Message);
    }

  }

  [HttpGet("xxx")]
  public object GetString()
  {
    return new { name = "order" };
  }

  [HttpGet("getlist")]
  public object GeGetList()
  {
    return Ok(orders);
  }
}
