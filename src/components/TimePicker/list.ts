const timeList: string[] = [];

for (let i = 0; i < 24; i += 1) {
  for (let j = 0; j < 60; j += 30) {
    const hour = i.toString().padStart(2, '0');
    const minute = j.toString().padStart(2, '0');
    const time = `${hour}:${minute}`;
    timeList.push(time);
  }
}

export default timeList;
