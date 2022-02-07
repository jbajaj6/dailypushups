const daysEl0 = document.getElementById('days0');
const daysEl1 = document.getElementById('days1');
const daysEl2 = document.getElementById('days2');
const daysEl3 = document.getElementById('days3');
const daysEl4 = document.getElementById('days4');
const daysEl5 = document.getElementById('days5');
const daysEl6 = document.getElementById('days6');
const daysEl7 = document.getElementById('days7');
const daysEl8 = document.getElementById('days8');
const daysEl9 = document.getElementById('days9');

const totalP = document.getElementById('pushups');

const start = "31 Dec 2021";

const startDate = new Date(start);
const currentDate = new Date();

const totalSeconds = (currentDate - startDate) / 1000;

const days = Math.floor(totalSeconds / 3600 / 24);

daysEl0.innerHTML = days;
daysEl1.innerHTML = days;
daysEl2.innerHTML = days;
daysEl3.innerHTML = days;
daysEl4.innerHTML = days;
daysEl5.innerHTML = days;
daysEl6.innerHTML = days;
daysEl7.innerHTML = days;
daysEl8.innerHTML = days;
daysEl9.innerHTML = days;
