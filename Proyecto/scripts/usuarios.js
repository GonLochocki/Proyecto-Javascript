let lista_usuarios = [
    {
      nombre: "Carlos",
      apellido: "Perez",
      edad: 34,
      dni: "99",
      contraseña: "1111",
      email: "carlosPerez@gmail.com",
    },
    {
      nombre: "Juan",
      apellido: "Gomez",
      edad: 43,
      dni: "88",
      contraseña: "2222",
      email: "juanGomez@gmail.com",
    },
    {
      nombre: "Pedro",
      apellido: "Gonzalez",
      edad: 58,
      dni: "77",
      contraseña: "3333",
      email: "pedroGonzalez@gmail.com",
    },
  ];

  // Consumo usuarios a través de fetch y los agrego a los usuarios que ya estan registrados
  
  fetch("usuarios.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(usuario => {
        lista_usuarios.push(usuario);        
      });
    })

    
