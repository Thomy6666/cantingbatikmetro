document.querySelectorAll(".btn-detail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let gambar = parent.querySelector(".card-img-top").src;
    let harga = parent.querySelector(".harga").innerHTML;
    let judul = parent.querySelector(".card-text").innerHTML;
    let deskripsi = parent.querySelector(".deskripsi")
      ? parent.querySelector(".deskripsi").innerHTML
      : "<i>tidak ada deskripsi</i>";

    let btnModal = document.querySelector(".btnModal");
    btnModal.click();

    document.querySelector(".modalTitle").innerHTML = judul;
    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;

    const wa = "089629150413";
    let chat = `https://api.whatsapp.com/send?phone=${wa}&text=Halo Admin cbm, saya mau pesan
        produk ini.${gambar}`;

    document.querySelector(".btnShop").href = chat;
  });
});
