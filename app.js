class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
};

class UI {
    addProduct(product) {

        if (product.name === "" || product.price === "" || product.year === "") {
            this.showMessage("Fill every text-field", "warning")
        } else {
            
            const productList = document.getElementById('product-list');
            const div = document.createElement('div');
            div.innerHTML = `
                <div class='card text-center mb-4'>
                    <div class= 'card-body'>
                        <strong>Name</strong>:${product.name}
                        <strong>Price</strong>:${product.name}
                        <strong>Year</strong>:${product.name} 
                        <a href='#' class='btn btn-danger' name='delete'>Delete</a>
                    </div>
                </div>
                `;
            productList.appendChild(div);
            this.showMessage('Product Added', 'success')
            this.resetForm();
        }
    }
    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted','danger');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const app = document.querySelector('#app');

        container.insertBefore(div, app);

        setTimeout(function () {
            div.remove();
        }, 3000)
    }
    resetForm() {
        const productForm = document.getElementById('product-form');
        productForm.reset();
    }
}

//DOM EVENTS

document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const year = document.getElementById('year').value

        const product = new Product(name, price, year);
        const ui = new UI();

        ui.addProduct(product)

        e.preventDefault();
    })

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
    })