var usuario = [
    {
        nome : "Diego",
        habilidades : ["JavaScript", "ReactJS", "Redux"]
    },
    {
        nome : "Gabriel",
        habilidades : ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

for(let valor of usuario){
    // console.log(`O ${valor.nome} possui as habilidades: ${valor.habilidades.join(',')}`)
    console.log('O '+ valor.nome + ' possui as habilidades: ' + valor.habilidades.join(","));

}
