import React from 'react'
import FormLR from '../components/Form/FormLR';

function Login() {
  return (
    <div>
      {/* login */}
      <FormLR
        Img="./img/float.svg"
        Title="Toko Ku"
        textButton="Masuk"
        link="#daftar"
        nameLink="Daftar"
        desc="Belum Punya akun?"
      />
    </div>
  );
}

export default Login
