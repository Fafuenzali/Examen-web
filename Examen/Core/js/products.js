class Products{
    constructor(){
        this.apiUrl='https://fakestoreapi.com/'
    }

    getNewProducts(limit){
        $.ajax({
            type: 'GET',
            url: this.apiURL + "products?limit=" + limit + "&sort=desc",
            success: function (data){
                console-log(data);
                $(data).each (function(index, product){
                    $('products').append(
                        '<div class="col-md-3><div class="product"><a href="/product.html?productid=' + 
                        product.id +
                        '<div class="image"><img src="' + 
                        product.image + 
                        '" class="img-fluid=></div><div class="info"><div class="tittle">' + 
                        product.title +  '<br>$' +
                        product.price +
                        '</div></div></a></div></div>'
                    );

                });
            },
        });

    };

    getSingleProduct(id){
        $.ajax({
            type: 'GET',
            url: this.apiURL + "products/" + id,
            success: function (data){
                $('.breadcrumb').html(
                    '<a href="/">Home</a><span class="sep" >> </span><a href="/category.html?category=' + data.category + '">' +
                    toTitleCase(data.category) +'</a><span class="sep">></span>' + data.title 
                );
                $('.product_image').html('<img scr="' + data.image  + '"class="img-fluid">');
                $('.product_title').html(data.title);
                $('.product_price').html('$' + data.price.toFixed(2));
                $('.product_description').html('<p>' + data.description + '</p>');
            }
        })
    }
}

