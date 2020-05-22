const main = function () {
  fetch('https://api.covid19india.org/v2/state_district_wise.json')
    .then((res) => res.json())
    .then((data) => {
      const covid_19 = document.querySelector('#covid-19');

      for (let i = 0; i < data.length; i++) {
        const state = document.createElement('div');
        const state_name = document.createElement('h2');
        state_name.innerText = data[i].state;
        state.appendChild(state_name);

        for (let j = i; j < data[i].districtData.length; j++) {
          const district = document.createElement('div');

          const district_name = document.createElement('h4');
          district_name.innerText = data[i].districtData[j].district;
          district.appendChild(district_name);

          const active_cases = document.createElement('p');
          active_cases.innerText = data[i].districtData[j].active;
          district.appendChild(active_cases);

          state.appendChild(district);
        }

        covid_19.appendChild(state);
      }
    });
};

main();
