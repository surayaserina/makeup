function buttonClicked(){
  var brand = document.getElementById('search-input').value
  var producttype= document.getElementById("category-input").value
  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&&product_type=${producttype}`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      
      for(var i =0; i<data.length ; i++){
        if(data[i].product_type == producttype){
          console.log(data[i].brand)
          
          if(data[i].brand != null && data[i].name !=null && data[i].description != null && data[i].price != null & data[i].product_type != null){
            if(data[i].price <= 14 ){
              var makeuplist = document.createElement("p")
              var makeupdata = data[i]
              makeuplist.innerHTML = `Brand:${makeupdata.brand}<br><br>  Name:${makeupdata.name}<br><br> Price:${makeupdata.price}<br><br>  Product:${makeupdata.product_type}<br><br>  Description:${makeupdata.description}<br><br>`
              document.getElementById("display").appendChild(makeuplist);}
          }

        }

        else if(data.length===0){
          console.log("Array is empty!")
          alert("No result found")
        }
          

        
        
      else{

      }
      }
    })
  }
function changepage1(){
  window.location.href = "makeup.html"
}





 