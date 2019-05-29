function tampilkanSlider(){
	$('#slider').append(`
	<div class="container">    
	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
	<ol class="carousel-indicators">
	<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	</ol>
	<div class="carousel-inner">
	<div class="carousel-item active">
	<img src="img/menu/meat-lover.jpg" height="400px" class="d-block w-100" alt="...">
	</div>
	<div class="carousel-item">
	<img src="img/menu/american-favourite.jpg" height="400px" class="d-block w-100" alt="...">
	</div>
	<div class="carousel-item">
	<img src="img/menu/beef-lasagna.jpg" height="400px" class="d-block w-100" alt="...">
	</div>
	</div>
	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
	<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	<span class="carousel-control-next-icon" aria-hidden="true"></span>
	<span class="sr-only">Next</span>
	</a>
	</div>
	</div> 
	`)	
}

function tampilkanSemuaMenu(){
	$.getJSON('data/pizza.json', function(data){
		let menu = data.menu;
		
		$.each(menu, function(i, data){ 
			$('#daftar-menu').append(`
			<div class="col-md-4">
			<div class="card mb-3">
			<img src="img/menu/`+ data.gambar +`" class="card-img-top">
			<div class="card-body">
			<h5 class="card-title">`+ data.nama +`</h5>
			<p class="card-text">`+ data.deskripsi	 +`</p>
			<h5 class="card-title">`+ data.harga +`</h5>
			<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modal-pesan">Pesan Sekarang</a>
			</div>
			</div>
			</div> 
			`) 
		})
	})
}

tampilkanSlider();
tampilkanSemuaMenu();

$('.nav-link').on('click', function	(){
	$('#slider').hide();
	$('.nav-link').removeClass('active');
	
	$(this).addClass('active');
	
	let kategori = $(this).html(); 
	$('h1').html(kategori)	
	
	if (kategori == 'All Menu') {
		$('#slider').show();
		tampilkanSemuaMenu();
		return; 
	}
	
	
	$.getJSON('data/pizza.json', function(data){
		
		let menu = data.menu;
		let content = '';
		
		$.each(menu, function(i, data){
			if(data.kategori == kategori.toLowerCase()){
				content	+= `<div class="col-md-4">
				<div class="card mb-3">
				<img src="img/menu/`+ data.gambar +`" class="card-img-top">
				<div class="card-body">
				<h5 class="card-title">`+ data.nama +`</h5>
				<p class="card-text">`+ data.deskripsi	 +`</p>
				<h5 class="card-title">`+ data.harga +`</h5>
				<a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modal-pesan">Pesan Sekarang</a>
				</div>
				</div>
				</div>`
			}
		})
		
		if (kategori == 'Contact'){
			$('#daftar-menu').html(`
			<div class="container" style="padding-top: 5px">
    <center><a class="navbar-brand" href="#"><img src="img/logo-pizza2.png" width="500px"></a></center>
    <div class="row" style="padding-top: 10px">
      <div class="card col-6">
        <div class="card-body">               
          <h5 class="card-title" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">Contact :</h5>
          <table>
            <tr>
              <td><img src="img/logo_fb.png" width="70px" alt="foto" class="sosmed left"></td>
              <td style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"> Dayop Pizza</td>
            </tr>
            <tr>
              <td><img src="img/logo_ig.png" width="70px" alt="foto" class="sosmed left"></td>
              <td style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"> dayop.pizza</td>
            </tr>
            <tr>
              <td><img src="img/logo_telp.png" width="70px" alt="foto" class="sosmed left"></td>
              <td style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"> 081234567890</td>
            </tr>
            <tr>
              <td><img src="img/logo_email.png" width="70px" alt="foto" class="sosmed left"></td>
              <td style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"> pizza.dayop@gmail.com</td>
            </tr>
          </table> 
        </div>
      </div>
      <div class="card col-6">
        <div class="card-body">
          <h5 class="card-title" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">Kritik dan Saran</h5>
          <form method="POST" action="https://formspree.io/yopiehidayat12@gmail.com">
            <input class="form-control" type="email" name="email" placeholder="Your email">
            <br>
            <textarea class="form-control" name="message" placeholder="Test Message"></textarea>
            <br>
            <button class="btn btn-primary" type="submit">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  </div>
			`)
		}else{
			$('#daftar-menu').html(content)
		}
	})
})