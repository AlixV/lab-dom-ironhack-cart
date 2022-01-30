// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

//  we started the updateSubtotal(product) function. 
//For now, the only thing this function is doing 
//is alerting Calculate Prices clicked! 
//when the Calculate Prices button is clicked.

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotalPrice = price * quantity;
  
 product.querySelector('.subtotal span').textContent = subTotalPrice;
  return subTotalPrice;
  
}

function calculateAll() {
  //  Call the function updateSubtotal 
  //with every tr.product DOM node in the table#cart
 
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

 const allProducts = document.querySelectorAll('.product');
 let total = 0;
 
      for(const product of allProducts){
        console.log('products', allProducts)
        total += updateSubtotal(product);
      } 
}
  //for(let i = 0; i < allProducts.length; i++ ){
   //updateSubtotal(allProducts[i]);
  // console.log(i);
  //}


// ITERATION 3
  
  document.querySelector('#total-value span').textContent= String(total)

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  const productRow = target.closest('tr');
  productRow.remove();
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
