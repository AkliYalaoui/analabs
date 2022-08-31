---
thumbnail : '/static/react-algeria-map/1.jpeg'
title : 'How to use the map of algeria in reactJs ?'
author : 'Akli YALAOUI - Web developer & data scientist'
keywords : ['reactJs','React components','Interactive map']
description : 'In this blog, we are gonna present a react component built in our labs. This component displays an interactive map of Algeria including all 58 wilayas.'
date : '2022-08-29'
---
Recently, we were building a dashboard for one of our clients, and we wanted to display an interactive map of algeria, in way that when we hover on each wilaya we can see the number of users registred in his mobile application. This way the admin will have an idea of which regions to target with ads ...\
We couldn't find any solution for our problem, so we had to create it from scratch. So now we have decided to make it open source and make it as a react component.\
[Check a demo of the component On stackblitz](https://stackblitz.com/edit/react-ts-8vv5gq?file=App.tsx)
## Installation

This component is available via npm, simply run the following command : 

```bash
npm install --save react-algeria-map
```
## Usage

The component is very easy to use, first import it then call it as a regular react component : 

```jsx
import { Map } from 'react-algeria-map';

<Map
    height="400px"
    width="400px"
    data={data}
    onWilayaClick={(wilaya, value) => console.log(wilaya, value)}
/>
```

## Customization

The data prop is just an object where each key is the name of the wilaya and its value is what's displayed when the wilaya being hovered or clicked. So keys are fixed and you are free to set the values for whatever you want.

```jsx
const data = {
  Adrar: 0,
  Alger: 15,
  Annaba: 22,
  'Aïn Defla': 43,
  'Aïn Témouchent': 45,
  Batna: 4,
  Biskra: 6,
  Blida: 8,
  'Bordj Badji Mokhtar': 49,
  'Bordj Bou Arreridj': 33,
  Bouira: 9,
  Boumerdès: 34,
  Béchar: 7,
  Béjaïa: 5,
  'Béni Abbès': 51,
  Chlef: 1,
  Constantine: 24,
  Djanet: 55,
  Djelfa: 16,
  'El Bayadh': 31,
  'El Meghaier': 56,
  'El Menia': 57,
  'El Oued': 38,
  'El Tarf': 35,
  Ghardaïa: 46,
  Guelma: 23,
  Illizi: 32,
  'In Guezzam': 53,
  'In Salah': 52,
  Jijel: 17,
  Khenchela: 39,
  Laghouat: 2,
  "M'Sila": 27,
  Mascara: 28,
  Mila: 42,
  Mostaganem: 26,
  Médéa: 25,
  Naâma: 44,
  Oran: 30,
  Ouargla: 29,
  'Ouled Djellal': 50,
  'Oum El Bouaghi': 3,
  Relizane: 47,
  Saïda: 19,
  'Sidi Bel Abbès': 21,
  Skikda: 20,
  'Souk Ahras': 40,
  Sétif: 18,
  Tamanrasset: 10,
  Tiaret: 13,
  Timimoun: 48,
  Tindouf: 36,
  Tipaza: 41,
  Tissemsilt: 37,
  'Tizi Ouzou': 14,
  Tlemcen: 12,
  Touggourt: 54,
  Tébessa: 11,
};

```