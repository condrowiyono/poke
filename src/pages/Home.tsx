import Link from "../router/components/Link";
import useNavigate from "../router/hooks/useNavigate";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Selamat Datang</h1>
      <h2>Daftar Isi</h2>
      <ul>
        <li>
          <a href="#introduction">Pengenalan Dasar</a>
        </li>
        <li>
          <a href="#concept">Konsep Dasar</a>
        </li>
      </ul>
      <h2 id="introduction">Pengenalan Pokemon</h2>
      <div>
        Pokémon (ポケモン, Pokemon, pengucapan: /ˈpoʊkeɪmɒn/[2][3]) adalah salah
        satu waralaba media yang dimiliki oleh perusahaan permainan video
        Nintendo dan diciptakan oleh Satoshi Tajiri pada 1995. Pada mulanya,
        Pokémon adalah seri permainan video yang identik dengan konsol Game Boy.
        Pokémon merupakan permainan video tersukses kedua di dunia setelah
        serial Mario yang juga diciptakan oleh Nintendo.[4] Sementara bila
        dibandingkan dengan yang lain, Pokémon merupakan serial waralaba
        terlaris ketiga di dunia setelah James Bond (karya Ian Fleming) dan
        Transformers (karya Hasbro), yang masih terus berjalan dan diperbaharui
        sesuai perjalanan zaman. Waralaba Pokémon sendiri muncul dalam beragam
        bentuk, yaitu permainan video, anime, manga, trading cards, buku,
        mainan, dan masih banyak lagi. Waralaba media ini merayakan ulang
        tahunnya yang ke sepuluh pada tanggal 27 Februari 2006. Dan pada 23
        April 2008, omzet penjualan permainan video Pokémon telah mencapai 180
        juta kopi,[5] melebihi penjualan permainan video Transformers. Nama
        Pokémon merupakan nama romanisasi dari nama Jepang "Pocket Monsters"
        (ポケットモンスター, Poketto Monsutā).[6] Kata "Pokémon", selain merujuk
        ke waralaba Pokémon itu sendiri, juga merujuk pada 809 spesies fiksi
        yang muncul dalam semua seri Pokémon. Seperti kata deer dan sheep,
        penyebutan kata tunggal dan jamak Pokémon dalam bahasa Inggris tidak ada
        bedanya. Kata Pokémon dalam bahasa Inggris bisa merujuk pada satu
        Pokémon saja atau lebih dari satu.
      </div>
      <h2 id="concept">Konsep Dasar</h2>
      <div>
        Konsep asli dari Pokémon, seperti yang muncul dalam permainan video dan
        semua fiksional Pokémon secara umum, adalah mengadopsi hobi mengoleksi
        serangga, di mana hal itu pernah dilakukan oleh Satoshi Tajiri sewaktu
        ia masih kanak-kanak.[10] Dalam permainan video, pemain disebut sebagai
        Pokémon Trainer (id: pelatih Pokémon). Ada tiga tujuan umum yang harus
        dilakukan oleh setiap pelatih Pokémon untuk melengkapkan isi dari
        Pokédex. Pertama, Anda harus menangkap semua spesies Pokémon yang ada di
        sebuah region tempat Anda berada. Kedua, Anda dituntut untuk
        mengembangkan spesies Pokémon yang Anda punya agar menjadi kuat dan
        kemudian bisa menang melawan penantang yang lain, dan tujuan tambahannya
        adalah mengalahkan Team Rocket. Ketiga atau terakhir, bila Pokémon yang
        Anda didik tersebut cukup kuat dari segi fisik dan teknik, Anda punya
        kesempatan besar untuk melawan pelatih terkuat, yang kemudian disebut
        Pokémon Master. Semua hal tersebut ada dalam seluruh seri waralaba
        Pokémon, termasuk dalam permainan video, anime, manga, dan trading card.
        Ash Ketchum sebagai tokoh utama dalam serial TV Pokémon. Dalam mayoritas
        seri Pokémon, seorang pelatih yang dapat menghadang kekuatan Pokémon
        liar dapat menangkapnya untuk kemudian dijadikan peliharaannya sendiri
        dengan melemparkan sebuah benda yang bisa menciutkan massa jenis Pokémon
        tersebut, yang kemudian dinamakan Poké Ball. Dengan tertangkapnya
        Pokémon liar tersebut, maka sang pelatih secara resmi memiliki Pokémon
        liar tersebut. Pokémon yang dimiliki oleh orang lain tidak bisa direbut
        secara paksa dengan Poké Ball kecuali ada hal-hal lain yang menjadi
        persetujuan antara dua pelatih yang bertarung tersebut misalnya saling
        bertukar (trade), atau dengan membelinya. Pokémon yang kita miliki untuk
        selanjutnya bisa kita pertarungkan dengan Pokémon liar atau dengan
        sesama pelatih lain. Bagi Pokémon yang menang dalam pertarungan
        tersebut, sudah tentu kekuatannya akan bertambah dan meningkat. Mereka
        mendapat poin pengalaman, dan berkesempatan untuk naik ke level yang
        lebih tinggi jika waktunya sudah tiba. Ketika mereka naik level-nya,
        secara otomatis statistiknya akan meningkat, seperti attack, defense,
        speed, dan masih banyak lagi. Dari waktu ke waktu, sesuai level, Pokémon
        kemudian mengenal beberapa taktik serangan baru, yang bisa digunakan
        dalam pertarungan. Dalam beberapa kesempatan, ada sebagian besar jenis
        Pokémon yang bila mencapai level tertentu atau dengan memenuhi syarat
        yang lain seperti menggunakan batu evolusi dan item-item tertentu
        (seperti rare candy), akan bermetamorfosis menjadi spesies baru, yang
        kemudian dikenal dengan nama evolusi. Dalam serial permainan video, kita
        harus berperan sebagai pelatih yang membangun dan membesarkan sebuah tim
        Pokémon untuk mengalahkan beragam tipe Pokémon yang dimiliki oleh
        pelatih rival atau saingan kita, selain tentunya juga untuk mengalahkan
        bermacam Pokémon liar dan pelatih-pelatih lainnya. Layout game Pokémon
        kebanyakan adalah linear, dan mengelilingi sebuah region fiksi di dunia
        Pokémon (sebab planet Bumi versi dunia Pokémon berbeda dengan Bumi versi
        fiksi yang dipakai dalam beberapa serial seperti Transformers atau James
        Bond, yang menggambarkan dunia dalam keadaan sebenarnya seperti yang
        kita tinggali saat ini). Di setiap game Pokémon, sudah berisi delapan
        master spesialis Pokémon yang kemudian disebut sebagai Gym Leaders (id:
        pemimpin jim). Kita sebagai pelatih wajib mengalahkan satu persatu
        pemimpin gym tersebut jika ingin mendapatkan lencana/pin yang kemudian
        bisa kita pakai sebagai tanda masuk ke kejuaraan nasional Pokémon League
        (Liga Pokémon). Di mana di sana kita akan menantang empat sesepuh
        Pokémon yang kemudian disebut The Elite Four. Dan jika kita berhasil
        menang melawan Elite Four, kita akan dibawa untuk menantang Juara
        Regional, dan jika kita berhasil menang melawan Juara Regional, maka
        kita akan disahkan sebagai Juara Nasional dan berhak menyandang nama
        Pokémon Master(bisa juga Internasional dengan nama Pokémon Super
        Master").
      </div>
      <hr />
      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default Home;
