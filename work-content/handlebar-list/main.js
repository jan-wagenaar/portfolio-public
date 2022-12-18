//Template

const source = document.getElementById('productTemp').innerHTML;
const template = Handlebars.compile(source);

const displayProducts = document.getElementById('products');

let counter = 2;
const form = document.getElementById("add-form");
const collapsible = document.getElementById('collapsible-toggle');
const closeWrapper = document.getElementById('reset');

//Initial data
const context = {
  products: [
    {
    id: 0,
    name: 'Apple iPad (10.2-inch)',
    description: 'The seventh-generation Apple iPad has all of the tablet features that most consumers will ever need. It\'s sleek, powerful, and (crucially) reasonably priced. The device is available in silver, gold, or space gray, with 32 GB or 128 GB of built-in storage.',
    price: '€279.00'
    },
    {
    id: 1,
    name: 'Jabra Elite 75t',
    description: 'The Jabra Elite 75t deliver everything you’d expect from an excellent pair of completely wireless earbuds. They\'re sleek, durable, comfy, entertaining, reliable during phone calls, and reasonably priced. They are also water-resistant and packed with smart features, which you can access via a mobile app.',
    price: '€179.99'
    }
  ]
};

const compiledHtml = template(context);

displayProducts.innerHTML = compiledHtml;

const handleFormSubmit = event => {
    event.preventDefault();

    pushProduct();
    renderPage();
  };

const closeForm = event => {
event.preventDefault();
collapsible.checked = false;

document.getElementById('pname').value = "";
document.getElementById('description').value ="";
document.getElementById('price').value = "";


};



//Add product


function pushProduct() {
  const name = document.getElementById('pname').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;

    context.products.push({
        id: counter++,
        name: name,
        description: description,
        price: `€${price}`
    }); 

    document.getElementById('pname').value = "";
    document.getElementById('description').value ="";
    document.getElementById('price').value = "";
}

const saveProduct = () => {
    pushProduct();
    renderPage();
}

const renderPage = () => {
    const newCompiledHtml = template(context);

    const displayProducts = document.getElementById('products');
    displayProducts.innerHTML = newCompiledHtml;
}

const removeCard = element => {
    const id = parseFloat(element.dataset.id);
    const index = context.products.map(x = (e) => e.id).indexOf(id);
    context.products.splice(index, 1);
    renderPage();
}

form.addEventListener('submit', handleFormSubmit);
closeWrapper.addEventListener('click', closeForm);