<script>
  let hours = "00", minutes = "00", seconds = "00";
  let decimalHours = "0", decimalMinutes = "00";

  function timeToDecimal() {
    const h = Number(hours);
    const m = Math.min(Number(minutes), 59);
    const s = Math.min(Number(seconds), 59);
    const decimal = (h + m / 60 + s / 3600).toFixed(2).replace(".", ",");
    [decimalHours, decimalMinutes] = decimal.split(",");
  }

  function decimalToTime() {
    let decimal = parseFloat(`${decimalHours}.${decimalMinutes}`);
    let h = Math.floor(decimal);
    let m = Math.min(Math.floor((decimal - h) * 60), 59);
    let s = Math.min(Math.round(((decimal - h) * 60 - m) * 60), 59);
    hours = String(h).padStart(2, '0');
    minutes = String(m).padStart(2, '0');
    seconds = String(s).padStart(2, '0');
  }
</script>

<main>
  <h1>Zeit-Umrechner</h1>
  
  <div class="input-group">
    <h2>Normale Zeit:</h2>
    <div class="inputs">
      <input id="hours" type="number" bind:value={hours} min="0" max="99" /> :
      <input id="minutes" type="number" bind:value={minutes} min="0" max="59" /> :
      <input id="seconds" type="number" bind:value={seconds} min="0" max="59" />
    </div>
    <button on:click={timeToDecimal}>Umrechnen</button>
  </div>
  <p class="result">Dezimale Zeit: <span>{decimalHours},{decimalMinutes}</span></p>
  
  <div class="input-group">
    <h2>Dezimale Zeit:</h2>
    <div class="inputs">
      <input id="decimalHours" type="number" bind:value={decimalHours} min="0" max="99" /> ,
      <input id="decimalMinutes" type="number" bind:value={decimalMinutes} min="0" max="99" />
    </div>
    <button on:click={decimalToTime}>Umrechnen</button>
  </div>
  <p class="result">Normale Zeit: <span>{hours}:{minutes}:{seconds}</span></p>
</main>

<style>
  main {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    font-size: 1.2rem;;
    text-align: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }
  h1{
    color: rgba(13, 99, 173, 0.8);
    font-weight: 500;
  }
  h2 {
    color: #467426;
    font-weight: 500;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
  }
  .inputs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  input {
    padding: 0.5rem;
    width: 3rem;
    text-align: center;
    font-size: x-large;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: rgba(255, 255, 255, 0.618);
  }
  button {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border: none;
    background-color: #0a4f99;
    color: rgba(222, 219, 1, 0.916);
    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 0.08rem;
    transition: background-color 0.2s, transform 0.2s;
    text-transform: uppercase;
    font-weight: 600;
  }
  button:hover {
    background-color: #0056b3;
    scale: 0.95;
  }
  .result {
    font-size: 1.5rem;
    font-weight: bold;
    color: #6f6d6a;
  }
  .result span {
    color: #007bffbb;
  }
</style>