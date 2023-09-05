import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FormLR from '../../Form/FormLR';


export default function MainLayout() {
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
