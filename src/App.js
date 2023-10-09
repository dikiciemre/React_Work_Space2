import Text from "./components/Text";
import Merhaba from './components/Merhaba';
import Hero from './components/Hero';
import Car from './components/Car';
import TabloUygulamasi from './components/TabloUygulamasi';
import React from 'react';
import { useState } from 'react';

function App() {




  //USESTATE KULLANIMI
  // [adını değiştirmek istediğin değer,  setlemek istediğin fonksiyon]
  const [name, setName] = useState("UseState Örneği")



  const ClickFunction = () => {
    console.log("İşlem Tamam!") //UseState Örneği üzerine basınca konsola İşlem Tamam! yazar
    setName("UseState değişti yeğenim") // setName fonksiyonu yanında olan değerin(name) içini değiştiren fonksiyom
  }





  // state ile zikirmatik yapımı 
  const [sayacDegeri, setSayacDegeri] = useState(0);

  const artir = () => {
    setSayacDegeri(sayacDegeri + 1);

  };

  const azalt = () => {
    setSayacDegeri(sayacDegeri - 1);


  };





  // ONCHANGE KULLANIMI
  // Metin kutusunun değerini saklamak için bir state tanımlıyoruz.
  const [metin, setMetin] = useState('');

  // Metin kutusu değeri değiştikçe çalışacak olan handleChange fonksiyonu.
  const handleChange = (e) => {
    setMetin(e.target.value);
  };





  // list kullanımı
  // cars dizisini tanımlayın
  const [cars, setCars] = useState(['Ford', 'BMW', 'Audi']);

  const click = () => {
    // Yeni bir 'cars' dizisi oluşturup, bu diziyi 'setCars' ile güncelleyin
    setCars(["Toyota", "Toyota", "Toyota"]);
  }




  // TABLO KULLANIMI ÖRNEĞİ BAŞLIĞI STATE İLE DEĞİŞTİRME
  const [uyari, setUyari] = useState(<h3 >React Tablo Örneği</h3>);

  const tikla = () => {

    setUyari("EFENDİ GİBİ ÇALIŞ !!!")

  }



  // ALERT KUTLLANIMI
  const GetAlert = () => {
    alert("Uyarı verildi !!!");
  }





  // isvisible kullanımı
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);

  }


  // onsubmit kullanımı

  const [name1, setName1] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Adını ${name1} diye girdin he ! `);
  }





  // option kullanımı

  const [myCar, setMyCar] = useState("Volvo");

  const Change = (event) => {
    setMyCar(event.target.value)
  }




  // usestate (renkler için) kullanımı

  const [color, setColor] = useState("red");





  return (

    <>
      <div className="App">
        <Text />
        <Text />
        <Text />
        <Text />

        <br></br>
        <hr></hr>
        <br></br>







        {/* PROPS KULLANIMI*/}

        <Merhaba ad="Ahmet" durum="yaşındasın" />
        <Merhaba ad="Ayşe" durum="aylıksın" />
        <Merhaba />

        <br></br>
        <hr></hr>
        <br></br>




        {/* PROPS KULLANIMI*/}
        <div>
          <Hero hero="Iron Man" />
          <Car car="Toyota" />

        </div>


        <br></br>
        <hr></hr>
        <br></br>








        {/* USESTATE KULLANIMI*/}
        <div onClick={ClickFunction}>
          {name}
        </div>

        <br></br>
        <hr></hr>
        <br></br>





        {/* USESTATE (renkler) KULLANIMI*/}

        <h1>My favorite color is {color}!</h1>
        
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>

        <button
          type="button"
          onClick={() => setColor("red")}
        >Red</button>

        <button
          type="button"
          onClick={() => setColor("pink")}
        >Pink</button>

        <button
          type="button"
          onClick={() => setColor("green")}
        >Green</button>

        <br></br>
        <hr></hr>
        <br></br>








        {/* tıkladığında uyarı veren KULLANIMI*/}

        <div>
          <h3> Alert Örneği </h3>
          <button onClick={GetAlert}>ALERT</button>
        </div>

        <br></br>
        <hr></hr>
        <br></br>







        {/* LİSTS KULLANIMI*/}

        <h1>Who lives in my garage?</h1>
        <ul onClick={click}>

          {cars.map((car) => <Car brand={car} />)}
        </ul>

        <br></br>
        <hr></hr>
        <br></br>





        {/* İSVİSİBLE KULLANIMI*/}

        <div>
          <h1>Göster/Gizle Örneği</h1>
          <button onClick={toggleVisibility}>
            {isVisible ? 'Gizle' : 'Göster'}
          </button>
          {isVisible && <p>Metin görüntüleniyor.</p>}
        </div>

        <br></br>
        <hr></hr>
        <br></br>




        {/* onSubmit  KULLANIMI*/}

        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>

        <br></br>
        <hr></hr>
        <br></br>








        {/* ONCHANGE KULLANIMI*/}
        <div>
          <h2>Metin Kutusu Örneği</h2>
          <input
            type="text"
            value={metin}
            onChange={handleChange}
          />
          <p>Girilen metin: {metin}</p>
        </div>

        <br></br>
        <hr></hr>
        <br></br>






        {/* option KULLANIMI*/}

        <form>
          <select value={myCar} onChange={Change}>
            <option value="Ford">Ford</option>
            <option value="Toyota">Toyota</option>
            <option value="Fiat">Fiat</option>
          </select>
        </form>

        <br></br>
        <hr></hr>
        <br></br>















        {/* ZİKİRMATİK KULLANIMI*/}

        <div>
          <h1>Sayaç Değeri: {sayacDegeri}</h1>
          <button onClick={artir}>Artır</button>
          <button onClick={azalt}>Azalt</button>
        </div>

        <br></br>
        <hr></hr>
        <br></br>













        {/* TABLO KULLANIMI*/}
        <div className="App">
          <h1 onClick={tikla}>{uyari}</h1>
          <TabloUygulamasi />
        </div>

        <br></br>
        <hr></hr>
        <br></br>














      </div>
    </>
  );
}


export default App;
