function footToMeter(foot) {
    let meter = 0.305 * (+(foot.value));
    document.getElementById('result').innerHTML = meter;
}

function meterToFoot(meter) {
    let foot = 3.279 * (+(meter.value));
    document.getElementById('result').innerHTML = foot; 
}