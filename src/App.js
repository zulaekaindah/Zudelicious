import axios from 'axios';
import React, {useEffect,useState} from 'react';
import './App.css';
import ContentLoader from "react-content-loader";

function App (){
  const [articles, setArticles] = useState ([])

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=> setArticles(res.data))
    .catch((err)=> console.log(err))
  },[])


  const Loading = () => {
    return (
      <>
        <ContentLoader 
          speed={2}
          width={400}
          height={460}
          viewBox="0 0 400 460"
          backgroundColor="#c1bebe"
          foregroundColor="#ecebeb"
          
        >
          <rect x="10" y="377" rx="2" ry="2" width="97" height="15" /> 
          <rect x="9" y="347" rx="2" ry="2" width="140" height="16" /> 
          <rect x="-4" y="-38" rx="2" ry="2" width="306" height="368" /> 
          <rect x="148" y="413" rx="21" ry="21" width="87" height="31" />
        </ContentLoader>
      </>
      
    )
  }
  return (
      <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container">
      <a class="navbar-brand" href="#">Zudeliciouzz</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link" href="index.html">H o m e</a>
          <a class="nav-item nav-link" href="home.js">F o o d</a>
          <a class="nav-item nav-link" href="drink.html">D r i n k</a>
        </div>
      </div>
      </div>
    </nav>
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Bingung Pesan Makanan? Zudeliciouzz Solusinya</h1>
      </div>
    </div>

    <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 info-panel ">
        <div class="row">
          <div class="col-sm">
             <img src="img/employee.png" alt="Employee" class="float-left"/>
             <h4>Contact</h4>
             <p>Instagram : @Zudeliciouzz</p>
          </div>
          <div class="col-sm">
            <img src="img/food1.jpg" alt="Food" class="float-left"/>
            <h4>Obat lapar</h4>
            <p>Food & Drink</p>
          </div>
          <div class="col-sm">
            <img src="img/lokasi.png" alt="Location" class="float-left"/>
            <h4>Location</h4>
            <p>Jl.ky.Tamsunu Rt.01/01 Rowoalaku Kajen kab.Pekalongan</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <div class="container">
        <h3>Main Course</h3>
        {articles == ''?  ( <Loading />): articles.map((item)=> {
          return[
            <div class="row mb-4">
          <div class="col-md">
            <div class="card">
              <img class="card-img-top" src="img/soto-ayam.jpg" alt="card image cap"/>
              <div class="card-body">
                <p class="card-text">Soto Ayam Lamongan</p>
                <p>Rp.10.000-,</p>
                <a href="soto.html" class="btn btn-primary tombol">PESAN</a> <br></br>
                {item.name} <br></br>
                {item.email} <br></br>
                {item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode} <br></br>
                {item.phone} <br></br>
                {item.website} <br></br>
                {item.company.name}

              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img class="card-img-top" src="img/bksolava.jpg" alt="card image cap"/>
              <div class="card-body">
                <p class="card-text">Bakso Lava</p>
                <p>Rp.25.000-,</p>
                <a href="lava.html" class="btn btn-primary tombol">PESAN</a>
                <br></br>
                {item.name} <br></br>
                {item.email} <br></br>
                {item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode} <br></br>
                {item.phone} <br></br>
                {item.website} <br></br>
                {item.company.name}
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img class="card-img-top" src="img/bakmie.jpg" alt="card image cap"/>
              <div class="card-body">
                <p class="card-text">Bakmi legendaris</p>
                <p>Rp.10.000-,</p>
                <a href="bakmi.html" class="btn btn-primary tombol">PESAN</a>
                <br></br>
                {item.name} <br></br>
                {item.email} <br></br>
                {item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode} <br></br>
                {item.phone} <br></br>
                {item.website} <br></br>
                {item.company.name}
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card">
              <img class="card-img-top" src="img/pizza.jpg" alt="card image cap"/>
              <div class="card-body">
                <p class="card-text">Pizza Deliciouss</p>
                <p>Rp.20.000-,</p>
                <a href="pizza.html" class="btn btn-primary tombol">PESAN</a>
                <br></br>
                {item.name} <br></br>
                {item.email} <br></br>
                {item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode} <br></br>
                {item.phone} <br></br>
                {item.website} <br></br>
                {item.company.name}
              </div>
            </div>
          </div>
        </div>
        
            

          ]
        })}
        

        
      <section class="testimonial">
          <div class="row justify-content-center">
            <div class="col-lg-8">
             <h5>-Terimakasih- <br></br>
              "Telah Menjadikan Zudeliciouzz 
              sebagai obat lapar anda"</h5>
             </div>
          </div>
        </section>
    </div>
    </div>
    );
  }


export default App;
