import React from 'react'
import FormLR from '../components/Form/FormLR'
import Footer from '../components/layouts/Footer/Footer';
import Header from '../components/layouts/Header/Header';

function Register() {
  return (
    <div>
      <Header />
      {/* register */}
      <FormLR
        Img="./img/unboxing.svg"
        Title="Toko Ku"
        textButton="Masuk"
        link="#login"
        nameLink="Login"
        desc="Sudah punya Akun?"
      />
      <Footer />
    </div>
  );
}

export default Register
