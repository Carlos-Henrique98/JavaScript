//Os triangulos podem ser classificados em 3 tipos quanto ao 
//tamanho de seus lados: Equilatero: Os tres lados são iguais.
//Isosceles: Dois lados iguais. Escaleno: Todos os lados são
//diferentes.

function ClassificarTriangulo(lado1,lado2,lado3){
    if(lado1 == lado2 == lado3){
        return 'Equilatero'
    }
    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return 'Isósceles'
    }
    else{
        return 'Escaleno'
    }
}

console.log('Triangulo: ' + ClassificarTriangulo(4,2,2))
console.log('Triangulo: ' + ClassificarTriangulo(1,1,1))
console.log('Triângulo: ' + ClassificarTriangulo(1,2,3))

