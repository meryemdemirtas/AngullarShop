public class Order
{
  public DateTime Date { get; set; } = DateTime.Now;
  public string firmName { get; set; } ="";
  public string ProductName { get; set; } = "";
  public int Amount { get; set; }
  public decimal Price { get; set; }
}