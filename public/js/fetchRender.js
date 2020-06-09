const addStateList = () => {
  fetch('https://api.covid19india.org/state_district_wise.json')
    .then((res) => res.json())
    .then((statesData) => {
      const states = document.querySelector('#states');

      Object.keys(statesData).forEach((name) => {
        const stateName = document.createElement('option');
        stateName.text = name;
        states.add(stateName);
      });
      states.value = 'Bihar';
      updateStateInfo();
    });
};

const updateStateInfo = () => {
  fetch('https://api.covid19india.org/state_district_wise.json')
    .then((res) => res.json())
    .then((statesData) => {
      const name = document.querySelector('#states').value;
      const districtData = statesData[name].districtData;

      const stateInfoTable = document.querySelector('#state-info');
      stateInfoTable.innerHTML = '';

      Object.keys(districtData).forEach((districtName) => {
        const districtInfoRow = stateInfoTable.insertRow();
        const nameCell = districtInfoRow.insertCell();
        const activeCaseCell = districtInfoRow.insertCell();
        const confirmedCaseCell = districtInfoRow.insertCell();
        const deceasedCaseCell = districtInfoRow.insertCell();
        const recoveredCaseCell = districtInfoRow.insertCell();

        nameCell.innerText = districtName;
        activeCaseCell.innerText = districtData[districtName].active;
        confirmedCaseCell.innerText = districtData[districtName].confirmed;
        deceasedCaseCell.innerText = districtData[districtName].deceased;
        recoveredCaseCell.innerText = districtData[districtName].recovered;
      });
    });
};
