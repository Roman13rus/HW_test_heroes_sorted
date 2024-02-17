export default function healthLevelSorted(data) {
  data.sort((x, y) => y.health - x.health);
  return data;
}
