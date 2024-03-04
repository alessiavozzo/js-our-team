const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const rowElement = document.querySelector(".row");




for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    //console.log(teamMember);
    //console.log(teamMember.name);
    //console.log(teamMember.role);
    //console.log(teamMember.image);

    let markup = `<div class="col">
    <div class="card">
        <img src="./assets/img/${teamMember.image}" alt="" class="card-img-top">
    </div>
    <div class="card-body">
        <h3>${teamMember.name}</h3>
        <p>${teamMember.role}</p>
    </div>
    </div>`;

    rowElement.innerHTML += markup;
}

