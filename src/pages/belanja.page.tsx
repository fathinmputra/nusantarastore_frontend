/* eslint-disable unused-imports/no-unused-vars */
import React, { useState } from "react";

// Tipe data untuk produk
type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  category: string;
  stock: number;
};

// Komponen untuk menampilkan gambar, nama, dan harga produk
const ProductCard = ({ image, name, price }: { image: string; name: string; price: string; }) => (
  <div className="flex flex-col items-center">
    <img src={image} alt={name} className="w-64 h-64 object-cover" />
    <div className="mt-4 text-center">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-lg font-medium">{price}</p>
    </div>
  </div>
);

// Komponen untuk menampilkan detail lengkap dari produk
const ProductDetails = ({ product }: { product: Product }) => (
  <div className="flex flex-col items-center">
    <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
    <div className="mt-4 text-center">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg font-medium">{product.price}</p>
      <p className="text-base">{product.description}</p>
      <p className="text-base">{product.category}</p>
      <p className="text-base">Stok : {product.stock}</p>
    </div>
  </div>
);

// Daftar produk
const products: Product[] = [
  {
    id: 1,
    name: "Tas Anyaman",
    image: "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/istock-ilustrasi-suvenir-produk-lokal-indonesia.jpg",
    price: "Rp50.000,00",
    description: "Kerajinan Tas Anyaman adalah produk kerajinan tangan berupa tas yang dibuat dengan teknik anyaman menggunakan bahan-bahan seperti pandan, rotan, atau bambu. Tas anyaman biasanya memiliki tampilan alami dan unik, dan dapat digunakan sebagai aksesori fashion maupun barang sehari-hari.",
    category: "Aksesoris",
    stock: 10,
  },
  {
    id: 2,
    name: "Kemeja Batik",
    image: "https://www.hanleebatik.co.id/wp-content/uploads/2021/12/652A.jpg",
    price: "Rp150.000,00",
    description: "Kemeja Batik adalah jenis kemeja yang dibuat dengan menggunakan teknik batik pada bahan kain. Batik adalah seni tradisional Indonesia yang menghasilkan pola-pola unik pada kain dengan menggunakan lilin dan pewarna. Kemeja batik umumnya memiliki tampilan elegan dan cocok digunakan pada acara formal maupun informal.",
    category: "Pakaian",
    stock: 20,
  },
  {
    id: 3,
    name: "Kain Batik",
    image: "https://e-commerce.kendalbulur.com/wp-content/uploads/2019/11/gambar-kain-batik.jpg",
    price: "Rp200.000,00",
    description: "Kain Batik adalah kain yang dihasilkan dari proses batik, dimana pola-pola khas dibuat pada kain dengan menggunakan lilin dan pewarna. Kain batik merupakan kain tradisional Indonesia yang memiliki nilai seni dan budaya yang tinggi, dan sering digunakan untuk keperluan pakaian, dekorasi rumah, atau souvenir.",
    category: "Tekstil",
    stock: 30,
  },
];

// Komponen halaman detail produk
const ProductDetail = () => {
  // State untuk menyimpan produk yang sedang dipilih
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Fungsi untuk menampilkan detail produk yang dipilih
  const showProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="container mx-auto">
      <nav className='bg-white shadow-lg'>
        <div className='container mx-auto px-6 py-3 md:flex md:justify-between md:items-center'>
          <div className='flex items-center justify-between'>
            <div>
              <a
                href='/'
                className='text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700'
              >
                NUSANTARA STORE
              </a>
            </div>

            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                aria-label='toggle menu'
              >
                <svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='md:flex items-center'>
            <div className='flex flex-col md:flex-row md:mx-6'></div>
          </div>

          <div className='md:flex items-center'>
            <div className='flex flex-col md:flex-row md:mx-6'>
            <a
                href='/produkpembeli'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Kembali
              </a>
              <a
                href='/profilpembeli'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Profil Pengguna
              </a>
              <a
                href='/'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => ( // tambahkan kurung kurawal
          <div key={product.id}>
<ProductCard
  // id={product.id}
  image={product.image}
  name={product.name}
  price={product.price}
/>

<div className="flex justify-center mt-4">
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => showProductDetails(product)}
  >
    Detail Produk
  </button>
  <button
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
    // onClick={() => addToCart(product)}
  >
    Tambahkan ke Keranjang
  </button>
</div>

          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg">
          <ProductDetails product={selectedProduct} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setSelectedProduct(null)}
          >
            Tutup
          </button>
        </div>
      </div>
    )}
    </div>
    );
    };
    export default ProductDetail;



