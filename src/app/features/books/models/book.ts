export interface Book {
  "id": string,
  "name": string,
  "author": string,
  "seria": string,
  "publisher": string,
  "bought": boolean,
  "hadRead": boolean
}

export enum Seria {
  Kanon = 'Неканонічний канон',
  VivatClassic = 'Vivat Класика',
  DiscWorld = 'Дискосвіт',
  Dune = 'Дюна',
  GiftClassic = 'Подарункова класика',
  Tolkien = 'Середзем\'я'
}
