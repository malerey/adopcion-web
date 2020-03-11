const gatos = [
  {
    name: 'Rodolfo',
    shortDesc:
      'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
    colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
    sexo: 'm',
  },

  {
    name: 'Muzzarella',
    shortDesc:
      'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
    colores: ['gris'],
    sexo: 'f',
  },

  {
    name: 'Artilugia',
    shortDesc:
      'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
    colores: ['negro', 'blanco'],
    sexo: 'f',
  },

  {
    name: 'Wosito',
    shortDesc:
      'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
    colores: ['rayado'],
    sexo: 'm',
  },

  {
    name: 'Calamardo',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },
];


const cont = document.querySelector('.adopt');

agregarGato = gato => {
  const contenido = `
  <div class="card">
  <div class="card_img">
    <img src="${gato.img}" />
  </div>
  <div class="card_info">
    <h3>${gato.name}</h3>
    <p>
      ${gato.shortDesc}
    </p>
    <button>Ver mas</button>
  </div>
</div>`;

  cont.innerHTML = cont.innerHTML + contenido;
};

for (let i = 0; i < gatos.length; i++) {
  agregarGato(gatos[i]);
}

const modal = document.getElementById('modal');
const cards = document.getElementsByClassName('card');
const botonCerrarModal = document.getElementById('cerrarModal');

cards[0].onclick = () => {
  modal.classList.remove('nomostrar');
};

botonCerrarModal.onclick = () => {
  modal.classList.add('nomostrar');
};

const form = document.forms[0];

form.onsubmit = e => {
  e.preventDefault();

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  let colores = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      colores.push(checkboxes[i].value);
    }
  }

  const radios = document.querySelectorAll("input[type='radio']");
  let sexo = '';
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      sexo = radios[i].value;
    }
  }

  cont.innerHTML = '';
  for (let i = 0; i < gatos.length; i++) {
    let match = ''
    for (let j = 0; j < gatos[i].colores.length; j++) {
      for (let k = 0; k < colores.length; k++) {
        if (
          gatos[i].colores[j] === colores[k] &&
          (gatos[i].sexo === sexo || sexo === 'i')
        ) {
          match = gatos[i] 
        }
      }
    }
    match && agregarGato(match);
  }
};
