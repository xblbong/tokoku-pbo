import React from 'react'
import FormLR from '../components/Form/FormLR';
import Footer from '../components/layouts/Footer/Footer';
import Header from '../components/layouts/Header/Header';

function Login() {
  return (
    <div>
      <Header />
      {/* login */}
      <FormLR
        Img="./img/float.svg"
        Title="Toko Ku"
        textButton="Masuk"
        link="#daftar"
        nameLink="Daftar"
        desc="Belum Punya akun?"
      />
      <Footer />
    </div>
  );
}

export default Login
