import UnitCard from "./components/UnitCard";

function App() {
  
  
  return (
    <>
      <main className="container">
        <section className="conversion">
          <h1>Metric/Imperial Unit Conversion</h1>
          <input type="text" />
          <button>Convert</button>
        </section>
        <section className="units">
          <UnitCard
            title={"Length (Meter/Feet)"}
            equilance={"20 meters = 65.616 feet | 20 feet = 6.096 meters"}
            value={"length"}
          />
          <UnitCard
            title={"Volume (Liters/Gallons)"}
            equilance={"20 liters = 5.284 gallons | 20 gallons = 75.708 liters"}
            value="volume"
          />
          <UnitCard
            title={"Mass (Kilograms/Pounds)"}
            equilance={"20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos"}
            value="mass"
          />
        </section>
      </main>
    </>
  );
}

export default App;
