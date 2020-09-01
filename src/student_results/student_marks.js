const generateStudents = (n) => {
  const randomMark = () => Math.floor(Math.random() * 100);
  const students = [];
  for (let i = 0; i < n; i++) {
    const student = {
      name: `student_${i}`,
      english: randomMark(),
      hindi: randomMark(),
      math: randomMark(),
      science: randomMark(),
    };

    students.push(student);
  }
  return students;
};

// this will generate an array of 100 student objects
const students = generateStudents(100);
console.log(students);
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
for (let j = 0; j < students.length; j++) {
  console.log(`${students[j].name} Hindi marks ${students[j].hindi}`);
}
for (let j = 0; j < students.length; j++) {
  const b = students[j].hindi + students[j].math + students[j].science + students[j].english;
  console.log(`${students[j].name} Your total marks is ${b}`);
}

for (let j = 0; j < students.length; j++) {
  const b = students[j].hindi + students[j].math + students[j].science + students[j].english;
  console.log(`${students[j].name} Your average marks is ${b / 4}`);
}

for (let j = 0; j < students.length; j++) {
  const b = students[j].hindi + students[j].math + students[j].science + students[j].english;
  console.log(`${students[j].name} Your got ${(b / 400) * 100}%`);
}
