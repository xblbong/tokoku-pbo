import React from 'react'
import FormLR from '../components/Form/FormLR'
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
    </div>
  );
}

export default Register
