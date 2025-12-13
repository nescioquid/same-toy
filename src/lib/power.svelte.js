export let power = $state({
  onOff: false,
})

export function togglePower() {
  // if (power.onOff) return
  power.onOff = !power.onOff
  // console.log(`power state is: ${power.onOff}`);
}
