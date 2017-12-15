function distancia1(vi, a, t) {
  if (vi === null || vi === undefined)
    return null;
  if (a === null || a === undefined )
    return null
  if (t === null || t === undefined)
    return null
  return vi * t + ((1 / 2) * a * t);
}
module.exports = {
  distancia1: distancia1
}