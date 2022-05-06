import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-bagitem]',
  templateUrl: './bagitem.component.html',
  styleUrls: ['./bagitem.component.scss']
})
export class BagitemComponent implements OnInit {

 number = ""
  item = [
    {
      "id": "1",
      "artucl": "100111",
      "name": "Креатин Creatine Powder Optimum Nutrition",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2fd_kbiREX2A7KDr5Hc_-Ut65hZoRnH0fg&usqp=CAU",
      "weight": "150 грам",
      "price": "350",
      "availability": "В наявності",
      "producent": "USA",
      "coments": ["найкращи товар в світі", "sfsdfsdfsd","найкращи товар в галактиці","найкращи товар в україіні"],
    },
    {
      "id": "2",
      "artucl": "100112",
      "name": "Креатин BioTech 100% Creatine Monohydrate",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjVQqvotQAypPBRBWksbl84dahVZ4_ujl3A&usqp=CAU",
      "weight": "300 грам",
      "price": "550",
      "availability": "true",
      "producent": "USA",
      "info": "Creatine Powder фірми Optimum Nutrition містить 100% чистий моногідрат креатину і має неперевершену якість і результативність. Кожна порція Creatine Powder включає 5,000 мг (5г.) чистого, фірмового Creapure ® креатину моногідрату. Запатентований метод виробництва, який застосовується для виробництва цього креатину, дозволяє виготовляти порошок креатину, який не має смаку і запаху, легко розчинний у воді або соку, не осідає на дні після розчинення."
    },
    {
      "id": "3",
      "artucl": "100113",
      "name": "Креатин BioTech 100% Creatine Monohydrate",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQva4brIy_3D08c26_ZtDXhekL5ylRQKMwTApK7oSgROxKl9oH6PsB-I4RfHMaigAsNm_w&usqp=CAU",
      "weight": "300 грам",
      "price": "600",
      "availability": "true",
      "producent": "Poland",
      "info": "BioTech 100% Creatine Monohydrate - №1 в силових видах спорту!"
    },
    {
      "id": "33",
      "artucl": "100113",
      "name": "Креатин BioTech 100% Creatine Monohydrate",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp07KbiiClHznvmqVSnGpZkZTF83j2fONOWw&usqp=CAU",
      "weight": "300 грам",
      "price": "600",
      "availability": "true",
      "producent": "Poland",
      "info": "BioTech 100% Creatine Monohydrate - №1 в силових видах спорту!"
    },
    {
      "id": "5",
      "artucl": "100113",
      "name": "Креатин BioTech 100% Creatine Monohydrate",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQva4brIy_3D08c26_ZtDXhekL5ylRQKMwTApK7oSgROxKl9oH6PsB-I4RfHMaigAsNm_w&usqp=CAU",
      "weight": "300 грам",
      "price": "600",
      "availability": "true",
      "producent": "Poland",
      "info": "BioTech 100% Creatine Monohydrate - №1 в силових видах спорту!"
    },
    {
      "id": "6",
      "artucl": "100113",
      "name": "Креатин BioTech 100% Creatine Monohydrate",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp07KbiiClHznvmqVSnGpZkZTF83j2fONOWw&usqp=CAU",
      "weight": "300 грам",
      "price": "600",
      "availability": "true",
      "producent": "Poland",
      "info": "BioTech 100% Creatine Monohydrate - №1 в силових видах спорту!"
    },
    {
      "id": "7",
      "artucl": "100111",
      "name": "Креатин BioTech 100% Creatine Monohydrate",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjVQqvotQAypPBRBWksbl84dahVZ4_ujl3A&usqp=CAU",
      "weight": "600 грам",
      "price": "719",
      "availability": "true",
      "producent": "Poland",
      "info": " BioTech 100% Creatine Monohydrate - №1 в силових видах спорту!"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
